import type { Service } from '@/content/types'

export const services: readonly Service[] = [
  {
    flag: '--build',
    arg: '<web|mobile|api>',
    title: { en: 'Development', pt: 'Desenvolvimento' },
    description: {
      en: 'Web, mobile and back-end applications, end to end — from the first screen to the store listing or the production deploy. TypeScript by default; beyond that, whatever the product honestly needs.',
      pt: 'Aplicações web, mobile e back-end de ponta a ponta — da primeira tela à publicação na loja ou ao deploy em produção. TypeScript por padrão; fora isso, o que o produto honestamente precisar.',
    },
  },
  {
    flag: '--consult',
    arg: '<team>',
    title: { en: 'Consulting', pt: 'Consultoria' },
    description: {
      en: "For teams that want to ship better: architecture and code reviews, technical foundations (tooling, CI/CD, testing) and hands-on training shaped to the team's actual codebase.",
      pt: 'Para times que querem entregar melhor: revisão de arquitetura e de código, fundações técnicas (ferramental, CI/CD, testes) e treinamento prático moldado na base de código real do time.',
    },
  },
  {
    flag: '--addon',
    arg: '<classic>',
    title: { en: 'Addons & macros', pt: 'Addons e macros' },
    description: {
      en: 'Lua addons, WeakAuras and macro packs for World of Warcraft Classic: custom tools for guilds and communities, raid-ready auras, and rescuing addons their authors left behind.',
      pt: 'Addons em Lua, WeakAuras e pacotes de macros para World of Warcraft Classic: ferramentas sob medida para guildas e comunidades, auras prontas pra raid e resgate de addons que os autores abandonaram.',
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
