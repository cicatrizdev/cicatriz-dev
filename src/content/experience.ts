import type { Experience } from '@/content/types'

/**
 * Professional history shown under HISTORY, most recent first (stable for ties).
 * Pure man(1) style: one line per role, no prose. `summary` is optional if ever wanted.
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
  },
  {
    company: 'Alura',
    url: 'https://www.alura.com.br',
    role: { en: 'Instructor', pt: 'Instrutor' },
    start: '2023-09',
    end: null,
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
  },
  {
    company: 'Tata · BRQ · Safra · Blu · IGTI',
    role: { en: 'Front-end & bootcamps', pt: 'Front-end e bootcamps' },
    start: '2019-08',
    end: '2021-11',
  },
  {
    company: { en: 'Early career', pt: 'Início de carreira' },
    role: { en: 'Full-stack developer', pt: 'Dev full-stack' },
    start: '2015-01',
    end: '2019-12',
  },
]
