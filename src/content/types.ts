import type { Localized } from '@/lib/i18n'

/** One entry of the OPTIONS section (a service offered). */
export type Service = {
  /** CLI-style flag shown as the option name, e.g. `--build`. */
  flag: string
  /** Optional argument placeholder, e.g. `<web|mobile>`. */
  arg?: string
  title: Localized
  description: Localized
}

/** One entry of the EXAMPLES section (a selected project). */
export type Project = {
  slug: string
  name: string
  /** Which service flag this project exemplifies. */
  flag: string
  url?: string
  repo?: string
  year?: number
  stack: readonly string[]
  summary: Localized
}

/** One entry of the HISTORY section (a job / engagement). */
export type Experience = {
  company: string
  url?: string
  role: Localized
  /** ISO month, e.g. `2024-03`. */
  start: string
  /** ISO month, or `null` while ongoing. */
  end: string | null
  summary: Localized
}

export type SkillGroup = {
  label: Localized
  items: readonly string[]
}

export type ContactErrorCode =
  'required' | 'invalid_email' | 'too_short' | 'too_long'

export type ContactStatusCode =
  | 'invalid'
  | 'forbidden'
  | 'too_large'
  | 'rate_limited'
  | 'send_failed'
  | 'unavailable'
  | 'network'

/** All prose for one locale. Both locales must satisfy this shape. */
export type UiStrings = {
  meta: {
    title: string
    description: string
    ogAlt: string
  }
  chrome: {
    /** Center text of the man page header line. */
    manual: string
    skipToContent: string
    themeToggle: string
    themeLight: string
    themeDark: string
    /** Accessible label of the language switch. */
    langSwitch: string
    sourceLink: string
    /** Footer middle cell label, e.g. "built". */
    built: string
  }
  sections: {
    name: string
    synopsis: string
    description: string
    options: string
    examples: string
    history: string
    bugs: string
    seeAlso: string
  }
  name: {
    /** The one-line summary after the dash: `cicatriz — ...` */
    summary: string
    avatarAlt: string
  }
  synopsis: {
    /** Shown under the usage line, in the voice of `man`. */
    note: string
  }
  description: {
    paragraphs: readonly string[]
    skillsLead: string
  }
  options: {
    lead: string
  }
  examples: {
    lead: string
    visit: string
    source: string
  }
  history: {
    lead: string
    present: string
    /** Shown when no entries exist yet. */
    empty: string
  }
  bugs: {
    lead: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      message: string
      messagePlaceholder: string
      send: string
      sending: string
      sentTitle: string
      sentBody: string
      sendAnother: string
      retryIn: string
      mailtoFallback: string
      errors: Record<ContactErrorCode, string>
      status: Record<ContactStatusCode, string>
    }
  }
  seeAlso: {
    items: readonly { label: string; href: string; description: string }[]
  }
  notFound: {
    title: string
    body: string
    back: string
  }
}
