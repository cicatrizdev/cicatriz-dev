import type { Project } from '@/content/types'
import { site } from '@/content/site'

/**
 * Selected work shown under EXAMPLES. Curated, not exhaustive: only things
 * that are live and current, or actively in progress. Client work stays
 * under NDA and is described in HISTORY instead. An empty list hides the section.
 */
export const projects: readonly Project[] = [
  {
    slug: 'cicatriz.dev',
    name: 'cicatriz.dev',
    flag: '--build',
    url: site.url,
    repo: site.repo,
    year: 2026,
    stack: ['Next.js', 'TypeScript', 'CSS Modules', 'Resend', 'Vercel'],
    summary: {
      en: 'This very page: a bilingual man page built with Next.js — typed content, generated social card, contact form over Resend, no UI kit. Read the source.',
      pt: 'Esta própria página: uma man page bilíngue feita com Next.js — conteúdo tipado, card social gerado, formulário via Resend, sem UI kit. Leia o código.',
    },
  },
  {
    slug: 'classic-addons',
    name: 'WoW Classic addons',
    flag: '--addon',
    repo: site.social.github,
    status: 'wip',
    stack: ['Lua', 'WoW API', 'WeakAuras'],
    summary: {
      en: 'The first addons, WeakAuras and macro packs for WoW Classic are in the works. They land on GitHub (and CurseForge) as they become usable.',
      pt: 'Os primeiros addons, WeakAuras e pacotes de macros para WoW Classic estão em produção. Chegam ao GitHub (e ao CurseForge) conforme ficam usáveis.',
    },
  },
]
