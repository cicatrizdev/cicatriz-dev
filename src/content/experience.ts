import type { Experience } from '@/content/types'

/**
 * Professional history shown under HISTORY, most recent first (stable for ties).
 * Terse on purpose — one line per role, one sentence where it adds something.
 * The long version lives on LinkedIn (see SEE ALSO).
 */
export const experience: readonly Experience[] = [
  {
    company: 'X-Team',
    url: 'https://x-team.com',
    role: {
      en: 'Senior Software Engineer',
      pt: 'Engenheiro de Software Sênior',
    },
    start: '2021-10',
    end: null,
    summary: {
      en: 'Placed with Cosm since day one — web and mobile in TypeScript, a team across three time zones.',
      pt: 'Alocado na Cosm desde o início — web e mobile em TypeScript, time em três fusos.',
    },
  },
  {
    company: 'Alura',
    url: 'https://www.alura.com.br',
    role: { en: 'Instructor', pt: 'Instrutor' },
    start: '2023-09',
    end: null,
    summary: {
      en: 'Advanced React for 5,000+ students: performance, observability, micro-frontends.',
      pt: 'React avançado para 5.000+ alunos: performance, observabilidade, micro-frontends.',
    },
  },
  {
    company: 'Lojas Riachuelo',
    url: 'https://www.riachuelo.com.br',
    role: {
      en: 'Senior → Lead Software Engineer',
      pt: 'Engenheiro Sênior → Lead',
    },
    start: '2021-01',
    end: '2023-01',
    summary: {
      en: "“Infinite shelf” for Brazil's 2nd-largest retailer — led a team of five, 10M+ monthly users.",
      pt: '“Prateleira infinita” da 2ª maior varejista do Brasil — liderei um time de cinco, 10M+ usuários/mês.',
    },
  },
  {
    company: 'Tata · BRQ · Safra · Blu · IGTI',
    role: {
      en: 'Front-end engineer, bootcamp instructor',
      pt: 'Engenheiro front-end, instrutor de bootcamp',
    },
    start: '2019-08',
    end: '2021-11',
    summary: {
      en: 'Banking, fintech and media front-ends; 500+ bootcamp students.',
      pt: 'Front-ends de banco, fintech e mídia; 500+ alunos de bootcamp.',
    },
  },
  {
    company: { en: 'Early career', pt: 'Início de carreira' },
    role: { en: 'Full-stack developer', pt: 'Dev full-stack' },
    start: '2015-01',
    end: '2019-12',
    summary: {
      en: 'Agencies and freelance in Juiz de Fora: 20+ sites, APIs, React Native, an IoT research project.',
      pt: 'Agências e freela em Juiz de Fora: 20+ sites, APIs, React Native, um projeto de pesquisa IoT.',
    },
  },
]
