import type { Locale } from '@/lib/i18n'
import type { UiStrings } from '@/content/types'
import { en } from '@/content/ui/en'
import { pt } from '@/content/ui/pt'
import { services } from '@/content/services'
import { projects } from '@/content/projects'
import { experience } from '@/content/experience'
import { skills } from '@/content/skills'
import { site } from '@/content/site'

const ui: Record<Locale, UiStrings> = { en, pt }

export function getUi(locale: Locale): UiStrings {
  return ui[locale]
}

export { site, services, projects, experience, skills }

/** `cicatriz [--build <web|mobile>] [--consult <team>] [--mentor <dev>]` */
export function synopsisUsage(): string {
  const opts = services.map((s) => `[${s.flag}${s.arg ? ` ${s.arg}` : ''}]`)
  return `${site.command} ${opts.join(' ')}`
}

export const sectionIds = {
  name: 'name',
  synopsis: 'synopsis',
  description: 'description',
  options: 'options',
  examples: 'examples',
  history: 'history',
  bugs: 'bugs',
  seeAlso: 'see-also',
} as const

export type SectionKey = keyof typeof sectionIds
