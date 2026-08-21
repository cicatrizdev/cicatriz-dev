import type { Service } from '@/content/types'

export const services: readonly Service[] = [
  {
    flag: '--build',
    arg: '<web|mobile|api>',
    title: { en: 'Development', pt: 'Desenvolvimento' },
    description: {
      en: 'Web, mobile and back-end applications, end to end: from the first screen to the store listing or the production deploy. React, React Native, Node.js — and whatever the product honestly needs.',
      pt: 'Aplicações web, mobile e back-end de ponta a ponta: da primeira tela à publicação na loja ou ao deploy em produção. React, React Native, Node.js — e o que mais o produto honestamente precisar.',
    },
  },
  {
    flag: '--consult',
    arg: '<team>',
    title: { en: 'Consulting', pt: 'Consultoria' },
    description: {
      en: 'Help for development teams to ship better products: architecture reviews, code reviews, front-end foundations and hands-on training tailored to the team.',
      pt: 'Ajuda para times de desenvolvimento entregarem produtos melhores: revisão de arquitetura, code review, fundações de front-end e treinamento prático feito sob medida.',
    },
  },
  {
    flag: '--addon',
    arg: '<classic>',
    title: { en: 'Addons & macros', pt: 'Addons e macros' },
    description: {
      en: 'Lua addons, WeakAuras and macros for World of Warcraft Classic — for guilds, communities and players who want a UI that does exactly what they need. A new focus, and a growing one.',
      pt: 'Addons em Lua, WeakAuras e macros para World of Warcraft Classic — para guildas, comunidades e jogadores que querem uma UI que faça exatamente o que precisam. Foco novo, e crescendo.',
    },
  },
  {
    flag: '--mentor',
    arg: '<dev>',
    title: { en: 'Mentorship', pt: 'Mentoria' },
    description: {
      en: '1:1 mentorship for developers starting out or levelling up. Career direction, study plans, portfolio and interview practice — with honest feedback.',
      pt: 'Mentoria 1:1 para devs começando ou subindo de nível. Direção de carreira, plano de estudos, portfólio e treino de entrevista — com feedback honesto.',
    },
  },
]
