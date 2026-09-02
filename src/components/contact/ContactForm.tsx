'use client'

import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import type { Locale } from '@/lib/i18n'
import type { ContactStatusCode, UiStrings } from '@/content/types'
import type { FieldErrors } from '@/lib/contact/schema'
import { TOPIC_SELECT_ID } from './RequestLink'
import { Turnstile } from './Turnstile'
import styles from './ContactForm.module.css'

type Strings = UiStrings['bugs']['form']

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | {
      kind: 'error'
      code: ContactStatusCode
      fields?: FieldErrors
      retryAfter?: number
    }

type Props = {
  locale: Locale
  strings: Strings
  email: string
  topics: readonly { id: string; label: string }[]
}

const LIMITS = { name: 100, email: 200, messageMin: 10, messageMax: 5000 }
const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''

export function ContactForm({ locale, strings, email, topics }: Props) {
  const id = useId()
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  /** When the form became interactive; sent along so the server can spot instant (bot) submissions. */
  const startedAt = useRef<number | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  /** Bump after each attempt so Turnstile mints a fresh single-use token. */
  const [challenge, setChallenge] = useState(0)

  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (siteKey && !turnstileToken) {
      setStatus({ kind: 'error', code: 'captcha' })
      return
    }
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus({ kind: 'sending' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...data,
          locale,
          startedAt: startedAt.current ?? undefined,
          turnstileToken: turnstileToken || undefined,
        }),
      })
      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean
        error?: ContactStatusCode
        fields?: FieldErrors
        retryAfter?: number
      }
      if (res.ok && body.ok) {
        form.reset()
        setTurnstileToken(null)
        setStatus({ kind: 'sent' })
      } else {
        setChallenge((n) => n + 1)
        setTurnstileToken(null)
        setStatus({
          kind: 'error',
          code: body.error ?? 'send_failed',
          fields: body.fields,
          retryAfter: body.retryAfter,
        })
      }
    } catch {
      setChallenge((n) => n + 1)
      setTurnstileToken(null)
      setStatus({ kind: 'error', code: 'network' })
    }
  }

  if (status.kind === 'sent') {
    return (
      <div className={styles.output} role="status">
        <p className={styles.cmdLine}>
          <span className={styles.prompt} aria-hidden="true">
            ${' '}
          </span>
          <code>send --to {email}</code>
        </p>
        <p className={styles.ok}>{strings.sentTitle}</p>
        <p>{strings.sentBody}</p>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            startedAt.current = Date.now()
            setTurnstileToken(null)
            setChallenge((n) => n + 1)
            setStatus({ kind: 'idle' })
          }}
        >
          {strings.sendAnother}
        </button>
      </div>
    )
  }

  const fields = status.kind === 'error' ? (status.fields ?? {}) : {}
  const sending = status.kind === 'sending'
  const showMailto =
    status.kind === 'error' &&
    (status.code === 'unavailable' || status.code === 'send_failed')

  let statusText: string | null = null
  if (status.kind === 'error') {
    statusText =
      status.code === 'rate_limited' && status.retryAfter
        ? strings.retryIn.replace('{seconds}', String(status.retryAfter))
        : strings.status[status.code]
  }

  return (
    <form
      className={styles.form}
      method="post"
      action="/api/contact"
      onSubmit={onSubmit}
      aria-busy={sending}
    >
      <input type="hidden" name="locale" value={locale} />

      {/* Honeypot: visually removed, skipped by keyboard and assistive tech. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input
          id={`${id}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor={TOPIC_SELECT_ID} className={styles.label}>
          {strings.topic}
        </label>
        <select
          id={TOPIC_SELECT_ID}
          name="topic"
          className={styles.input}
          defaultValue="other"
        >
          {topics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.label}
            </option>
          ))}
          <option value="other">{strings.topicOther}</option>
        </select>
      </div>

      <Field
        id={`${id}-name`}
        name="name"
        label={strings.name}
        placeholder={strings.namePlaceholder}
        error={fields.name ? strings.errors[fields.name] : undefined}
        inputProps={{
          type: 'text',
          required: true,
          maxLength: LIMITS.name,
          autoComplete: 'name',
        }}
      />
      <Field
        id={`${id}-email`}
        name="email"
        label={strings.email}
        placeholder={strings.emailPlaceholder}
        error={fields.email ? strings.errors[fields.email] : undefined}
        inputProps={{
          type: 'email',
          required: true,
          maxLength: LIMITS.email,
          autoComplete: 'email',
        }}
      />
      <Field
        id={`${id}-message`}
        name="message"
        label={strings.message}
        placeholder={strings.messagePlaceholder}
        error={fields.message ? strings.errors[fields.message] : undefined}
        multiline
        inputProps={{
          required: true,
          minLength: LIMITS.messageMin,
          maxLength: LIMITS.messageMax,
          rows: 5,
        }}
      />

      {siteKey ? (
        <Turnstile
          key={challenge}
          siteKey={siteKey}
          locale={locale}
          onToken={setTurnstileToken}
        />
      ) : null}

      <div className={styles.actions}>
        <button type="submit" className={styles.button} disabled={sending}>
          {sending ? strings.sending : strings.send}
        </button>
        <p className={styles.status} role="alert" aria-live="polite">
          {statusText}
          {showMailto && (
            <>
              {' '}
              <a href={`mailto:${email}`}>{strings.mailtoFallback}</a>
            </>
          )}
        </p>
      </div>
    </form>
  )
}

type FieldProps = {
  id: string
  name: string
  label: string
  placeholder: string
  error?: string
  multiline?: boolean
  inputProps: React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
}

function Field({
  id,
  name,
  label,
  placeholder,
  error,
  multiline,
  inputProps,
}: FieldProps) {
  const errorId = `${id}-error`
  const shared = {
    id,
    name,
    placeholder,
    className: styles.input,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
  }
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {multiline ? (
        <textarea {...shared} {...inputProps} />
      ) : (
        <input {...shared} {...inputProps} />
      )}
      {error && (
        <span id={errorId} className={styles.error}>
          {error}
        </span>
      )}
    </div>
  )
}
