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
  /** `wip` renders "in progress" instead of the year. */
  status?: 'wip'
  stack: readonly string[]
  summary: Localized
}

/** One entry of the HISTORY section (a job / engagement). */
export type Experience = {
  /** Plain name, or localized for synthetic entries like “Early career”. */
  company: string | Localized
  url?: string
  /** Employer/agency the engagement runs through, e.g. a client served via X-Team. */
  via?: string
  role: Localized
  /** ISO month, e.g. `2024-03`. */
  start: string
  /** ISO month, or `null` while ongoing. */
  end: string | null
  summary: Localized
}

/** WoW item quality, used to encode how deep a skill goes. */
export type Quality = 'legendary' | 'epic' | 'rare' | 'uncommon' | 'common'

export type Skill = {
  name: string
  quality: Quality
}

export type SkillGroup = {
  label: Localized
  items: readonly Skill[]
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
    /** Explains the item-quality colors of the stack tags. */
    qualityLegend: string
    quality: Record<Quality, string>
  }
  options: {
    lead: string
    /** Accessible label prefix of the `$ cicatriz --flag` invocation links. */
    request: string
  }
  examples: {
    lead: string
    visit: string
    source: string
    wip: string
  }
  history: {
    lead: string
    present: string
    /** Connector before `via` companies: "Cosm · via X-Team". */
    via: string
    /** Shown when no entries exist yet. */
    empty: string
  }
  bugs: {
    lead: string
    form: {
      topic: string
      topicOther: string
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
    /** The WoW UI error line. */
    flavor: string
  }
}
