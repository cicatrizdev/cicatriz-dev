import { Resend } from 'resend'
import { site } from '@/content'
import type { ContactInput } from './schema'

export type SendResult =
  | { ok: true; delivered: boolean }
  | { ok: false; reason: 'unavailable' | 'send_failed' }

const apiKey = process.env.RESEND_API_KEY
const to = process.env.CONTACT_TO_EMAIL ?? site.email
const from =
  process.env.CONTACT_FROM_EMAIL ??
  `${site.command}.dev <onboarding@resend.dev>`

/** Plain text only: nothing from the visitor is ever interpreted as HTML. */
function renderText(
  input: ContactInput,
  meta: { ip: string; userAgent: string }
) {
  return [
    `From: ${input.name} <${input.email}>`,
    `Locale: ${input.locale}`,
    `IP: ${meta.ip}`,
    `UA: ${meta.userAgent}`,
    '',
    input.message,
    '',
    '--',
    `Sent via ${site.url}/${input.locale}#bugs`,
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
    subject: `[${site.command}.dev] ${input.name}`,
    text: renderText(input, meta),
  })
  if (error) {
    console.error('[contact] resend error', error)
    return { ok: false, reason: 'send_failed' }
  }
  return { ok: true, delivered: true }
}
