import type { Service } from '@/content/types'

export const services: readonly Service[] = [
  {
    flag: '--build',
    arg: '<web|mobile|api>',
    title: { en: 'Development', pt: 'Desenvolvimento' },
    cta: { en: 'Start a project', pt: 'Quero um projeto' },
    description: {
      en: 'A new product or one that needs to grow: web, mobile and API, from the first screen to live. Solo or alongside your team, on the stack the product actually needs — TypeScript at the core.',
      pt: 'Produto novo ou um que precisa evoluir: web, mobile e API, da primeira tela ao ar. Sozinho ou junto do seu time, com o stack que o produto pede — TypeScript no centro.',
    },
  },
  {
    flag: '--consult',
    arg: '<team>',
    title: { en: 'Consulting', pt: 'Consultoria' },
    cta: { en: 'Work with my team', pt: 'Quero consultoria' },
    description: {
      en: "For teams that want to ship better: architecture and code reviews, technical foundations (tooling, CI/CD, testing) and hands-on training shaped to the team's actual codebase.",
      pt: 'Para times que querem entregar melhor: revisão de arquitetura e de código, fundações técnicas (ferramental, CI/CD, testes) e treinamento prático moldado na base de código real do time.',
    },
  },
  {
    flag: '--mentor',
    arg: '<dev>',
    title: { en: 'Mentorship', pt: 'Mentoria' },
    cta: { en: 'Get mentorship', pt: 'Quero mentoria' },
    description: {
      en: '1:1 mentorship for developers starting out or levelling up. Career direction, study plans, portfolio and interview practice — with honest feedback.',
      pt: 'Mentoria 1:1 para devs começando ou subindo de nível. Direção de carreira, plano de estudos, portfólio e treino de entrevista — com feedback honesto.',
    },
  },
]
