export const site = {
  /** The man page "command" name. */
  command: 'cicatriz',
  /** Man section: 1 = general commands. */
  manSection: 1,
  name: 'Pedro Mello',
  handle: 'cicatrizdev',
  /** GitHub avatar — stable URL that always serves the current picture. Append `?s=<px>`. */
  avatar: 'https://avatars.githubusercontent.com/u/16566846',
  url: 'https://cicatriz.dev',
  email: 'contato@cicatriz.dev',
  location: 'Brazil',
  social: {
    github: 'https://github.com/cicatrizdev',
    linkedin: 'https://www.linkedin.com/in/pedro-c-mello',
    blog: 'https://pedro-mello.netlify.com',
  },
  repo: 'https://github.com/cicatrizdev/cicatriz-dev',
  gaId: 'G-V07973F3M6',
} as const

export type Site = typeof site
