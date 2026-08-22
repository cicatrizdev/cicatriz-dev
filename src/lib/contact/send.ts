import { Resend } from 'resend'
import { site } from '@/content'
import type { ContactInput } from './schema'

export type SendResult =
  | { ok: true; delivered: boolean }
  | { ok: false; reason: 'unavailable' | 'send_failed' }

const apiKey = process.env.RESEND_API_KEY
const to = process.env.CONTACT_TO_EMAIL ?? site.email
// Resend's sandbox sender rejects a display name, so the default is the bare address.
const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

const WIDTH = 72
const INDENT = ' '.repeat(7)

/** Wrap a paragraph to `WIDTH` columns with a man-page indent; blank lines are kept. */
function manParagraph(text: string): string[] {
  return text.split(/\r?\n/).flatMap((line) => {
    if (!line.trim()) return ['']
    const out: string[] = []
    let cur = ''
    for (const word of line.split(/\s+/)) {
      if (cur && (cur + ' ' + word).length > WIDTH - INDENT.length) {
        out.push(INDENT + cur)
        cur = word
      } else cur = cur ? `${cur} ${word}` : word
    }
    if (cur) out.push(INDENT + cur)
    return out
  })
}

function manHeader(title: string, center: string) {
  const space = Math.max(2, WIDTH - title.length * 2 - center.length)
  const left = Math.floor(space / 2)
  return `${title}${' '.repeat(left)}${center}${' '.repeat(space - left)}${title}`
}

/**
 * Plain text only, formatted like a man page. Nothing from the visitor is ever
 * interpreted as HTML, and the first line of the body is the one that matters:
 * who wrote, and about what.
 */
function renderText(
  input: ContactInput,
  meta: { ip: string; userAgent: string }
) {
  const title = `${site.command.toUpperCase()}(${site.manSection})`
  const synopsis =
    input.topic === 'other' ? site.command : `${site.command} --${input.topic}`
  return [
    manHeader(title, 'Bug report'),
    '',
    'NAME',
    `${INDENT}${input.name} <${input.email}>`,
    '',
    'SYNOPSIS',
    `${INDENT}${synopsis}`,
    '',
    'DESCRIPTION',
    ...manParagraph(input.message),
    '',
    'ENVIRONMENT',
    `${INDENT}LANG=${input.locale === 'pt' ? 'pt_BR' : 'en_US'}  IP=${meta.ip}`,
    ...manParagraph(`UA=${meta.userAgent || '-'}`),
    '',
    'SEE ALSO',
    `${INDENT}reply-to: ${input.email}`,
    `${INDENT}${site.url}/${input.locale}#bugs`,
    '',
    manHeader(title, new Date().toISOString().slice(0, 10)),
  ].join('\n')
}

export async function sendContact(
  input: ContactInput,
  meta: { ip: string; userAgent: string }
): Promise<SendResult> {
  if (!apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.info(
        '[contact] RESEND_API_KEY missing — message logged, not sent:\n' +
          renderText(input, meta)
      )
      return { ok: true, delivered: false }
    }
    console.error('[contact] RESEND_API_KEY missing in production')
    return { ok: false, reason: 'unavailable' }
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: input.email,
    subject:
      input.topic === 'other'
        ? `[${site.command}.dev] ${input.name}`
        : `[${site.command}.dev] --${input.topic} · ${input.name}`,
    text: renderText(input, meta),
  })
  if (error) {
    console.error('[contact] resend error', error)
    return { ok: false, reason: 'send_failed' }
  }
  return { ok: true, delivered: true }
}
