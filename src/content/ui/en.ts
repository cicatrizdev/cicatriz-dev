import type { UiStrings } from '@/content/types'

export const en = {
  meta: {
    title: 'cicatriz(1) — Pedro Mello',
    description:
      'Manual page for Pedro "Cicatriz" Mello: software engineer in Brazil building web and mobile products with React and React Native, consulting with teams and mentoring developers.',
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
  },
  sections: {
    name: 'Name',
    synopsis: 'Synopsis',
    description: 'Description',
    options: 'Options',
    examples: 'Examples',
    history: 'History',
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
      'Pedro Mello (a.k.a. Cicatriz) is a self-taught software engineer based in Brazil. He builds web and mobile applications that are pleasant to use and sane to maintain, and he has been doing it long enough to prefer boring solutions that ship.',
      'His stack is mostly TypeScript: React and React Native first, Node.js and Next.js around them, with Flutter and UI design within reach when a project calls for it.',
      'He is always learning something new and enjoys sharing it even more. Helping developers through their first steps — and their next ones — is the part of the job he would do for free.',
    ],
    skillsLead: 'Stack',
  },
  options: {
    lead: 'The following services are available. Each can be requested under BUGS below.',
  },
  examples: {
    lead: 'Selected work. Output may vary.',
    visit: 'open',
    source: 'source',
  },
  history: {
    lead: 'Most recent first.',
    present: 'present',
    empty: 'History is still being written.',
  },
  bugs: {
    lead: 'Report bugs, project ideas and mentorship requests with the form below, or write to',
    form: {
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
        label: 'github(1)',
        href: 'https://github.com/cicatrizdev',
        description: 'source code and experiments',
      },
      {
        label: 'linkedin(1)',
        href: 'https://www.linkedin.com/in/pedro-c-mello',
        description: 'career history',
      },
      {
        label: 'blog(7)',
        href: 'https://pedro-mello.netlify.com',
        description: 'articles, in Portuguese',
      },
    ],
  },
  notFound: {
    title: 'No manual entry for',
    body: 'Looks like a broken link or a mistyped path.',
    back: 'See cicatriz(1)',
  },
} satisfies UiStrings
