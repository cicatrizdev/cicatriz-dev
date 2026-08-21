import type { Experience } from '@/content/types'

/**
 * Professional history shown under HISTORY, most recent first.
 * TODO(pedro): fill in real roles, dates and one-line summaries. The entries
 * below are placeholders inferred from public profiles — dates are NOT real.
 */
export const experience: readonly Experience[] = [
  {
    company: 'Cosm',
    url: 'https://www.cosm.com',
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    start: '2024-01',
    end: null,
    summary: {
      en: 'Front-end for immersive venue experiences: storefront, checkout and admin tooling in React and Next.js.',
      pt: 'Front-end para experiências imersivas em venues: loja, checkout e ferramentas administrativas em React e Next.js.',
    },
  },
  {
    company: 'X-Team',
    url: 'https://x-team.com',
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    start: '2021-01',
    end: '2023-12',
    summary: {
      en: 'Remote engineering for partner companies, shipping React and React Native products in distributed teams.',
      pt: 'Engenharia remota para empresas parceiras, entregando produtos React e React Native em times distribuídos.',
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
