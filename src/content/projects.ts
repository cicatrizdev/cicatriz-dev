import type { Project } from '@/content/types'

/**
 * Selected work shown under TRABALHO / WORK. Curated from the public
 * LinkedIn profile: named companies stand in for client work under NDA.
 * Hobby entries (Raspberry Pi, the 2020 blog) stay off this list.
 */
export const projects: readonly Project[] = [
  {
    slug: 'x-team',
    name: 'X-Team',
    flag: '--build',
    url: 'https://x-team.com',
    stack: ['TypeScript', 'React', 'React Native', 'Next.js'],
    summary: {
      en: 'Web and mobile products for international clients, through X-Team, since 2021. TypeScript end to end — the specific client stays under NDA.',
      pt: 'Produtos web e mobile para clientes internacionais, via X-Team, desde 2021. TypeScript de ponta a ponta — o cliente específico fica no NDA.',
    },
  },
  {
    slug: 'alura',
    name: 'Alura',
    flag: '--mentor',
    url: 'https://cursos.alura.com.br/user/pedro-c-mello',
    stack: ['React', 'React Native', 'Single-SPA', 'Next.js'],
    summary: {
      en: 'Instructor since 2023: React, React Native, micro-frontends, performance and AI. The material I wish I had starting out — now at scale, for developers levelling up.',
      pt: 'Instrutor desde 2023: React, React Native, micro-frontends, performance e IA. O material que eu gostaria de ter tido no começo — agora em escala, pra quem está subindo de nível.',
    },
  },
  {
    slug: 'riachuelo',
    name: 'Riachuelo',
    flag: '--build',
    url: 'https://www.riachuelo.com.br',
    year: 2023,
    stack: ['React', 'TypeScript'],
    summary: {
      en: 'Senior to lead on the digital product of a national retailer. Production e-commerce, front-end team, 2021–2023.',
      pt: 'Do sênior ao lead no produto digital de uma varejista nacional. E-commerce em produção, time de front-end, 2021–2023.',
    },
  },
  {
    slug: 'adote-um-dev',
    name: 'Adote um Dev',
    flag: '--mentor',
    url: 'https://pt.linkedin.com/pulse/adotei-um-dev-veja-o-que-aconteceu-pedro-mello',
    year: 2020,
    stack: ['HTML', 'CSS', 'JavaScript'],
    summary: {
      en: '1:1 mentorship for someone starting in front-end — a public curriculum, weekly calls, HTML, CSS and JavaScript fundamentals. Where the mentorship offer started.',
      pt: 'Mentoria 1:1 pra quem estava começando no front-end — currículo público, calls semanais, fundamentos de HTML, CSS e JavaScript. Onde a oferta de mentoria começou.',
    },
  },
]
