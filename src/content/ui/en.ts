import type { UiStrings } from '@/content/types'

export const en = {
  meta: {
    title: 'cicatriz(1) — Pedro Mello',
    description:
      'Manual page for Pedro "Cicatriz" Mello: software engineer in Brazil working across the stack — web, mobile and back-end, TypeScript at the core — consulting with teams, mentoring developers and building addons for WoW Classic.',
    ogAlt: 'cicatriz(1) — Pedro Mello, software engineer. A man page.',
  },
  chrome: {
    manual: 'General Commands Manual',
    skipToContent: 'Skip to content',
    themeToggle: 'Toggle color theme',
    themeLight: 'light',
    themeDark: 'dark',
    langSwitch: 'Ler em português',
    sourceLink: 'source',
    built: 'built',
    played: {
      total: 'Total time played',
      level: 'Time played this level',
      years: ['year', 'years'],
      months: ['month', 'months'],
    },
  },
  sections: {
    name: 'Name',
    synopsis: 'Synopsis',
    description: 'Description',
    options: 'Options',
    examples: 'Examples',
    history: 'History',
    standards: 'Standards',
    bugs: 'Bugs',
    seeAlso: 'See also',
  },
  name: {
    summary: 'Pedro Mello, software engineer, mentor, occasional riff lord.',
    avatarAlt: 'Portrait of Pedro Mello',
  },
  synopsis: {
    note: 'Options may be combined. Invoked with no options, it keeps reading.',
  },
  description: {
    paragraphs: [
      'Pedro Mello (a.k.a. Cicatriz) is a self-taught software engineer based in Brazil. He works across the whole stack — product front-ends, mobile apps, APIs and the tooling that holds them together — and has shipped enough of each to prefer boring solutions that reach production.',
      'His specialty is TypeScript end to end: React and Next.js on the web, React Native on mobile, Node.js behind them. Around that core he goes wherever the problem lives: Python and Rust for tooling, Swift and Kotlin when native is the right call, and the cloud and CI plumbing that puts it all online.',
      'He is always learning something new and enjoys sharing it even more. Helping developers through their first steps — and their next ones — is the part of the job he would do for free.',
      'Off the clock he is usually somewhere in Azeroth. That hobby is becoming a focus: Lua addons, WeakAuras and macros for the WoW Classic community, built with the same care as everything above.',
    ],
    skillsLead: 'Stack',
    qualityLegend: 'Colored by item quality:',
    quality: {
      legendary: 'specialty',
      epic: 'daily use',
      rare: 'comfortable',
      uncommon: 'familiar',
      common: 'seen it',
    },
  },
  options: {
    lead: 'Each option is a service. To invoke one, see BUGS — or use the prompt under it.',
    request: 'Request',
  },
  examples: {
    lead: 'Client work stays under NDA — see',
    visit: 'open',
    source: 'source',
    wip: 'in progress',
  },
  history: {
    lead: 'Most recent first.',
    present: 'present',
    via: 'via',
    empty: 'History is still being written.',
  },
  standards: {
    lead: 'cicatriz conforms to the following standards:',
    inProgress: 'in progress',
    note: 'Conformance to metalcore(7) is voluntary and ongoing.',
  },
  bugs: {
    lead: 'Report bugs, project ideas, addon requests and mentorship requests with the form below, or write to',
    form: {
      topic: 'Regarding',
      topicOther: 'something else',
      name: 'Your name',
      namePlaceholder: 'Edson Arantes',
      email: 'Your email',
      emailPlaceholder: 'edson@example.com',
      message: 'Message',
      messagePlaceholder: "Hey! Let's drink a beer 🍺",
      send: 'send',
      sending: 'sending…',
      sentTitle: '200 OK',
      sentBody:
        'Message delivered to contato@cicatriz.dev. Expect a reply within a couple of days.',
      sendAnother: 'send another',
      retryIn: 'Too many messages. Try again in {seconds}s.',
      mailtoFallback: 'Email contato@cicatriz.dev directly',
      errors: {
        required: 'required',
        invalid_email: 'not a valid email',
        too_short: 'too short',
        too_long: 'too long',
      },
      status: {
        invalid: 'Check the highlighted fields.',
        forbidden: 'Request refused.',
        too_large: 'Message too large.',
        rate_limited: 'Too many messages. Try again in a few minutes.',
        send_failed:
          'Delivery failed. Try again, or email contato@cicatriz.dev.',
        unavailable: 'The form is offline right now.',
        network:
          'Could not reach the server. Check your connection and try again.',
      },
    },
  },
  seeAlso: {
    items: [
      {
        label: 'npx cicatriz',
        href: 'https://www.npmjs.com/package/cicatriz',
        description: 'this manual, in your terminal',
      },
      {
        label: 'github(1)',
        href: 'https://github.com/cicatrizdev',
        description: 'source code and experiments',
      },
      {
        label: 'linkedin(1)',
        href: 'https://www.linkedin.com/in/pedro-c-mello',
        description: 'career history',
      },
    ],
  },
  notFound: {
    title: 'No manual entry for',
    body: 'Looks like a broken link or a mistyped path.',
    back: 'See cicatriz(1)',
    flavor: 'Invalid target.',
  },
} satisfies UiStrings
