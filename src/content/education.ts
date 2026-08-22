import type { Education } from '@/content/types'

/** Formal education, shown under STANDARDS most recent first. Source: LinkedIn. */
export const education: readonly Education[] = [
  {
    degree: {
      en: 'MBA, Information Technology',
      pt: 'MBA em Tecnologia da Informação',
    },
    institution: 'Estácio',
    url: 'https://estacio.br',
    start: 2025,
    end: 2026,
    inProgress: true,
  },
  {
    degree: {
      en: 'Postgraduate degree, Information Technology',
      pt: 'Pós-graduação em Tecnologia da Informação',
    },
    institution: 'Estácio',
    url: 'https://estacio.br',
    start: 2024,
    end: 2025,
  },
  {
    degree: {
      en: 'Bachelor of Technology, Information Technology',
      pt: 'Tecnólogo em Tecnologia da Informação',
    },
    institution: 'Estácio',
    url: 'https://estacio.br',
    start: 2020,
    end: 2022,
  },
  {
    degree: {
      en: "Bachelor's degree, Information Technology",
      pt: 'Bacharelado em Tecnologia da Informação',
    },
    institution: 'IF Sudeste MG',
    url: 'https://www.ifsudestemg.edu.br',
    start: 2017,
    end: 2020,
  },
]
