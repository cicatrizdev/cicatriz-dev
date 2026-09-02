/**
 * Cloudflare Turnstile — the human check in front of /api/contact.
 *
 * Production (VERCEL_ENV=production) requires TURNSTILE_SECRET_KEY; missing
 * config answers unavailable so the form falls back to mailto instead of
 * silently accepting bots. Locally and on preview, no secret means skip.
 */

const SITEVERIFY = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export type TurnstileResult = 'ok' | 'skipped' | 'failed' | 'unavailable'

export function turnstileToken(data: Record<string, unknown>): string {
  const named = data.turnstileToken
  const injected = data['cf-turnstile-response']
  if (typeof named === 'string' && named.trim()) return named.trim()
  if (typeof injected === 'string' && injected.trim()) return injected.trim()
  return ''
}

export async function verifyTurnstile(
  token: string,
  ip: string
): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    return process.env.VERCEL_ENV === 'production' ? 'unavailable' : 'skipped'
  }
  if (!token) return 'failed'

  try {
    const body = new URLSearchParams({ secret, response: token })
    if (ip && ip !== 'unknown') body.set('remoteip', ip)
    const res = await fetch(SITEVERIFY, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body,
    })
    if (!res.ok) return 'unavailable'
    const data = (await res.json()) as { success?: boolean }
    return data.success === true ? 'ok' : 'failed'
  } catch {
    return 'unavailable'
  }
}
