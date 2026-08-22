import type { Experience } from '@/content/types'

/**
 * Professional history shown under HISTORY, most recent first (stable for ties).
 * Source: LinkedIn (linkedin.com/in/pedro-c-mello), condensed to one or two lines each.
 * TODO(pedro): the 2020 role (Angular 8 → Ionic, financial dashboard) is missing —
 * company, title and months needed.
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
      en: 'Placed with Cosm: web and mobile products in TypeScript (React, React Native, Next.js) for a team spread across three time zones — testing, performance and state architecture included.',
      pt: 'Alocado na Cosm: produtos web e mobile em TypeScript (React, React Native, Next.js) para um time espalhado em três fusos — com testes, performance e arquitetura de estado no pacote.',
    },
  },
  {
    company: 'Alura',
    url: 'https://www.alura.com.br',
    role: { en: 'Instructor', pt: 'Instrutor' },
    start: '2023-09',
    end: null,
    summary: {
      en: 'Advanced React curriculum — performance, observability, micro-frontends with Single-SPA — taught to 5,000+ students and kept current with the ecosystem.',
      pt: 'Currículo avançado de React — performance, observabilidade, micro-frontends com Single-SPA — para mais de 5.000 alunos, sempre atualizado com o ecossistema.',
    },
  },
  {
    company: 'Lojas Riachuelo',
    url: 'https://www.riachuelo.com.br',
    role: { en: 'Lead Software Engineer', pt: 'Lead Software Engineer' },
    start: '2021-10',
    end: '2023-01',
    summary: {
      en: "Led a five-engineer front-end team shipping the “infinite shelf” product discovery for Brazil's second-largest retail chain (+40% product visibility): seller dashboard and customer-facing e-commerce in React and React Native for 10M+ monthly users, with Keycloak auth and Dynatrace/GA observability.",
      pt: 'Liderei um time de cinco engenheiros de front-end entregando a descoberta de produtos “prateleira infinita” da segunda maior varejista do Brasil (+40% de visibilidade de produto): painel do vendedor e e-commerce para 10M+ usuários mensais em React e React Native, com autenticação Keycloak e observabilidade Dynatrace/GA.',
    },
  },
  {
    company: 'Lojas Riachuelo',
    url: 'https://www.riachuelo.com.br',
    role: {
      en: 'Senior Software Engineer',
      pt: 'Engenheiro de Software Sênior',
    },
    start: '2021-01',
    end: '2021-10',
    summary: {
      en: 'Core features of the “infinite shelf” initiative while the storefront moved away from its monolith.',
      pt: 'Funcionalidades centrais da iniciativa “prateleira infinita” durante a saída do monólito da loja.',
    },
  },
  {
    company: { en: 'Early career', pt: 'Início de carreira' },
    role: {
      en: 'Full-stack developer & research mentor',
      pt: 'Dev full-stack e mentor de pesquisa',
    },
    start: '2015-01',
    end: '2019-12',
    summary: {
      en: 'Agência VWP, App Masters, Planejar Consultores, freelance clients and a research mentorship at Instituto Federal (Juiz de Fora): e-commerce and web apps in WordPress, React, PHP, Laravel and Node.js; REST APIs and React Native apps; an IoT aquarium-automation dashboard; 20+ sites for small businesses.',
      pt: 'Agência VWP, App Masters, Planejar Consultores, clientes freelance e mentoria de pesquisa no Instituto Federal (Juiz de Fora): e-commerces e apps web em WordPress, React, PHP, Laravel e Node.js; APIs REST e apps React Native; um painel IoT de automação de aquário; 20+ sites para pequenos negócios.',
    },
  },
]
