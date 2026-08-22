import type { Experience } from '@/content/types'

/**
 * Professional history shown under HISTORY, most recent first (stable for ties).
 * Source: LinkedIn profile export (2026-08), condensed to one or two lines each.
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
      en: 'Placed with Cosm from the start: web and mobile products in TypeScript (React, React Native, Next.js) for a team across three time zones — testing at 85%+ coverage, performance work and state architecture included.',
      pt: 'Alocado na Cosm desde o início: produtos web e mobile em TypeScript (React, React Native, Next.js) para um time em três fusos — com testes acima de 85% de cobertura, performance e arquitetura de estado no pacote.',
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
    role: {
      en: 'Senior → Lead Software Engineer',
      pt: 'Engenheiro de Software Sênior → Lead',
    },
    start: '2021-01',
    end: '2023-01',
    summary: {
      en: "Joined the “infinite shelf” product discovery for Brazil's second-largest retail chain during the move from the monolith to React, then led its five-engineer front-end team: seller dashboard and customer-facing e-commerce in React and React Native for 10M+ monthly users (+40% product visibility), Keycloak auth, Dynatrace/GA observability.",
      pt: 'Entrei na descoberta de produtos “prateleira infinita” da segunda maior varejista do Brasil durante a saída do monólito para React e depois liderei seu time de cinco engenheiros de front-end: painel do vendedor e e-commerce para 10M+ usuários mensais em React e React Native (+40% de visibilidade de produto), autenticação Keycloak, observabilidade Dynatrace/GA.',
    },
  },
  {
    company: 'IGTI',
    url: 'https://www.xpeducacao.com.br',
    role: { en: 'Instructor', pt: 'Instrutor' },
    start: '2020-11',
    end: '2021-11',
    summary: {
      en: '“Mobile Developer” and “Beginner Software Developer” bootcamps for 500+ students: JavaScript, React, React Native, Python, Dart and Flutter, plus Git, Node.js and Android workflows.',
      pt: 'Bootcamps “Desenvolvedor Mobile” e “Desenvolvedor de Software Iniciante” para mais de 500 alunos: JavaScript, React, React Native, Python, Dart e Flutter, além de fluxos com Git, Node.js e Android.',
    },
  },
  {
    company: 'Blu',
    url: 'https://www.useblu.com.br',
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    start: '2020-09',
    end: '2020-12',
    summary: {
      en: 'Fintech onboarding flow in React and Ruby on Rails, TDD throughout, and a design system in a Lerna monorepo shared across products.',
      pt: 'Fluxo de onboarding de fintech em React e Ruby on Rails, TDD do início ao fim, e um design system em monorepo Lerna compartilhado entre produtos.',
    },
  },
  {
    company: 'Safra',
    url: 'https://www.safra.com.br',
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    start: '2020-04',
    end: '2020-09',
    summary: {
      en: 'Modernized an internal banking dashboard from AngularJS to Angular 8 and built mobile banking features with NativeScript for one of Brazil’s largest private banks.',
      pt: 'Modernizei um painel bancário interno de AngularJS para Angular 8 e construí features de mobile banking com NativeScript para um dos maiores bancos privados do Brasil.',
    },
  },
  {
    company: 'BRQ Digital Solutions',
    url: 'https://www.brq.com',
    role: { en: 'Front-end Engineer', pt: 'Engenheiro de Front-end' },
    start: '2020-02',
    end: '2020-04',
    summary: {
      en: 'New SPA for BTG’s Exame media platform, preparing the WordPress site for a headless CMS migration, with Redux for state.',
      pt: 'Nova SPA para a plataforma de mídia Exame (BTG), preparando o site WordPress para uma migração headless, com Redux para o estado.',
    },
  },
  {
    company: 'Tata Consultancy Services',
    url: 'https://www.tcs.com',
    role: { en: 'Front-end Developer', pt: 'Desenvolvedor Front-end' },
    start: '2019-08',
    end: '2020-02',
    summary: {
      en: 'WCAG-compliant design system components for financial applications; a personal-finance dashboard POC in React + Electron, later moved to Ionic; Jest across Angular 8 and React codebases.',
      pt: 'Componentes de design system em conformidade com WCAG para aplicações financeiras; POC de painel de finanças pessoais em React + Electron, depois migrado para Ionic; Jest em bases Angular 8 e React.',
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
