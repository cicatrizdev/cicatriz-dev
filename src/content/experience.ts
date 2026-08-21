import type { Experience } from '@/content/types'

/**
 * Professional history shown under HISTORY, most recent first (stable for ties).
 * TODO(pedro): confirm start months (years are right, months are placeholders). Nothing here has ended.
 */
export const experience: readonly Experience[] = [
  {
    company: 'Cosm',
    url: 'https://www.cosm.com',
    via: 'X-Team',
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    start: '2021-01',
    end: null,
    summary: {
      en: 'On the Cosm product team through X-Team: storefront, checkout and admin tooling for immersive venues, in React and Next.js.',
      pt: 'No time de produto da Cosm, via X-Team: loja, checkout e ferramentas administrativas para venues imersivos, em React e Next.js.',
    },
  },
  {
    company: 'X-Team',
    url: 'https://x-team.com',
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    start: '2021-01',
    end: null,
    summary: {
      en: 'Remote engineer with X-Team, placed with Cosm from day one: React and React Native products in a distributed, async-first team.',
      pt: 'Engenheiro remoto pela X-Team, alocado na Cosm desde o primeiro dia: produtos React e React Native em um time distribuído e assíncrono por padrão.',
    },
  },
  {
    company: 'Alura',
    url: 'https://www.alura.com.br',
    role: { en: 'Instructor', pt: 'Instrutor' },
    start: '2021-01',
    end: null,
    summary: {
      en: 'Courses and content on React, React Native and front-end fundamentals for one of the largest tech schools in Brazil.',
      pt: 'Cursos e conteúdo sobre React, React Native e fundamentos de front-end para uma das maiores escolas de tecnologia do Brasil.',
    },
  },
]
