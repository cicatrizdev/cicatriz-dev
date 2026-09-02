import { z } from 'zod'
import { locales } from '@/lib/i18n'
import { services } from '@/content/services'
import type { ContactErrorCode } from '@/content/types'

export const LIMITS = {
  name: { min: 1, max: 100 },
  email: { max: 200 },
  message: { min: 10, max: 5000 },
  /** Submissions faster than this after render are treated as bots. */
  minFillMs: 3000,
  maxBodyBytes: 16 * 1024,
} as const

/** Subject ids: `other` plus one per service flag. */
export const topicIds: [string, ...string[]] = [
  'other',
  ...services.map((s) => s.flag.replace(/^--/, '')),
]

export const contactSchema = z.object({
  name: z.string().trim().min(LIMITS.name.min).max(LIMITS.name.max),
  email: z.string().trim().max(LIMITS.email.max).pipe(z.email()),
  message: z.string().trim().min(LIMITS.message.min).max(LIMITS.message.max),
  locale: z.enum(locales).default('en'),
  topic: z.enum(topicIds).default('other'),
  /** Honeypot — must stay empty. */
  website: z.string().optional(),
  /** Epoch ms when the form was rendered; set by JS only. JSON posts that omit it are dropped as bots. */
  startedAt: z.coerce.number().optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
export type ContactField = 'name' | 'email' | 'message'
export type FieldErrors = Partial<Record<ContactField, ContactErrorCode>>

const fields: readonly ContactField[] = ['name', 'email', 'message']

/** Map zod issues to stable, localizable error codes per field. */
export function fieldErrors(
  error: z.ZodError,
  raw: Record<string, unknown>
): FieldErrors {
  const out: FieldErrors = {}
  for (const issue of error.issues) {
    const field = issue.path[0]
    if (
      typeof field !== 'string' ||
      !(fields as readonly string[]).includes(field)
    )
      continue
    const key = field as ContactField
    if (out[key]) continue
    const value =
      typeof raw[key] === 'string' ? (raw[key] as string).trim() : ''
    if (value.length === 0) {
      out[key] = 'required'
    } else if (issue.code === 'too_big') {
      out[key] = 'too_long'
    } else if (issue.code === 'too_small') {
      out[key] = 'too_short'
    } else if (key === 'email') {
      out[key] = 'invalid_email'
    } else {
      out[key] = 'required'
    }
  }
  return out
}
