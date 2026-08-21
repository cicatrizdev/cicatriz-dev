import { NextResponse, type NextRequest } from 'next/server'
import { site } from '@/content'
import { isLocale, defaultLocale } from '@/lib/i18n'
import { contactSchema, fieldErrors, LIMITS } from '@/lib/contact/schema'
import { checkRateLimit, clientKey } from '@/lib/contact/rate-limit'
import { sendContact } from '@/lib/contact/send'

/**
 * Same-origin check for browsers that send an Origin header: the origin must be
 * this very deployment (production host, preview host or localhost).
 */
function originAllowed(request: NextRequest, origin: string): boolean {
  const proto =
    request.headers.get('x-forwarded-proto') ??
    new URL(request.url).protocol.replace(':', '')
  const host =
    request.headers.get('x-forwarded-host') ?? request.headers.get('host')
  const self = host ? `${proto}://${host}` : null
  const allowed = new Set(
    [
      site.url,
      self,
      process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
      process.env.VERCEL_BRANCH_URL &&
        `https://${process.env.VERCEL_BRANCH_URL}`,
      process.env.VERCEL_PROJECT_PRODUCTION_URL &&
        `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
    ].filter((o): o is string => Boolean(o))
  )
  return allowed.has(origin)
}

type Parsed = { kind: 'json' | 'form'; data: Record<string, unknown> }

async function parseBody(request: NextRequest): Promise<Parsed | null> {
  const type = request.headers.get('content-type') ?? ''
  if (type.includes('application/json')) {
    const data = await request.json().catch(() => null)
    return data && typeof data === 'object' ? { kind: 'json', data } : null
  }
  if (
    type.includes('application/x-www-form-urlencoded') ||
    type.includes('multipart/form-data')
  ) {
    const form = await request.formData().catch(() => null)
    if (!form) return null
    const data: Record<string, unknown> = {}
    for (const [k, v] of form.entries()) if (typeof v === 'string') data[k] = v
    return { kind: 'form', data }
  }
  return null
}

function json(
  body: Record<string, unknown>,
  status: number,
  headers?: HeadersInit
) {
  return NextResponse.json(body, { status, headers })
}

/** Minimal HTML for the no-JS path (a browser form post). */
function html(status: number, title: string, body: string, backHref: string) {
  const doc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title><style>body{font-family:ui-monospace,Menlo,monospace;background:#0c0f0d;color:#e6e1d6;padding:2rem;line-height:1.6}a{color:#f5a524}</style></head><body><h1>${title}</h1><p>${body}</p><p><a href="${backHref}">&larr; ${site.command}(${site.manSection})</a></p></body></html>`
  return new NextResponse(doc, {
    status,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (origin && !originAllowed(request, origin)) {
    return json({ ok: false, error: 'forbidden' }, 403)
  }

  const length = Number(request.headers.get('content-length') ?? 0)
  if (length > LIMITS.maxBodyBytes) {
    return json({ ok: false, error: 'too_large' }, 413)
  }

  const parsed = await parseBody(request)
  if (!parsed) return json({ ok: false, error: 'invalid' }, 400)
  const { kind, data } = parsed
  const locale = isLocale(data.locale) ? data.locale : defaultLocale
  const back = `/${locale}#bugs`

  // Honeypot + fill-time check: pretend success, do nothing.
  const website = typeof data.website === 'string' ? data.website.trim() : ''
  const startedAt = Number(data.startedAt)
  const tooFast =
    Number.isFinite(startedAt) &&
    startedAt > 0 &&
    Date.now() - startedAt < LIMITS.minFillMs
  if (website || tooFast) {
    return kind === 'form'
      ? NextResponse.redirect(new URL(`/${locale}/sent`, request.url), 303)
      : json({ ok: true }, 200)
  }

  const limit = checkRateLimit(clientKey(request.headers))
  if (!limit.ok) {
    const headers = { 'retry-after': String(limit.retryAfterSeconds) }
    return kind === 'form'
      ? html(
          429,
          '429 Too Many Requests',
          `Retry in ${limit.retryAfterSeconds}s.`,
          back
        )
      : json(
          {
            ok: false,
            error: 'rate_limited',
            retryAfter: limit.retryAfterSeconds,
          },
          429,
          headers
        )
  }

  const result = contactSchema.safeParse(data)
  if (!result.success) {
    const fields = fieldErrors(result.error, data)
    return kind === 'form'
      ? html(
          400,
          '400 Bad Request',
          'Check the form fields and try again.',
          back
        )
      : json({ ok: false, error: 'invalid', fields }, 400)
  }

  const sent = await sendContact(result.data, {
    ip: clientKey(request.headers),
    userAgent: request.headers.get('user-agent') ?? '',
  })

  if (!sent.ok) {
    const status = sent.reason === 'unavailable' ? 503 : 502
    return kind === 'form'
      ? html(
          status,
          `${status} ${sent.reason}`,
          `Email ${site.email} directly.`,
          back
        )
      : json({ ok: false, error: sent.reason }, status)
  }

  return kind === 'form'
    ? NextResponse.redirect(new URL(`/${locale}/sent`, request.url), 303)
    : json({ ok: true, delivered: sent.delivered }, 200)
}
