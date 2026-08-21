import type { Project } from '@/content/types'

/**
 * Selected work shown under EXAMPLES.
 * TODO(pedro): confirm the list, summaries and URLs — these were drafted from
 * public repositories and may be incomplete or slightly off.
 */
export const projects: readonly Project[] = [
  {
    slug: 'buscante',
    name: 'Buscante',
    flag: '--build',
    repo: 'https://github.com/cicatrizdev/react-buscante',
    year: 2025,
    stack: ['React', 'TypeScript', 'Vite'],
    summary: {
      en: 'A book search application built on top of a public books API, with a focus on a fast and accessible search experience.',
      pt: 'Aplicação de busca de livros sobre uma API pública de livros, com foco em uma experiência de busca rápida e acessível.',
    },
  },
  {
    slug: 'zoop-ecomm',
    name: 'Zoop',
    flag: '--build',
    url: 'https://react-zoop-ecomm.vercel.app',
    repo: 'https://github.com/cicatrizdev/react-zoop-ecomm',
    year: 2025,
    stack: ['React', 'TypeScript', 'Vercel'],
    summary: {
      en: 'E-commerce front-end: catalogue, cart and checkout flows built as a reference implementation for teaching.',
      pt: 'Front-end de e-commerce: catálogo, carrinho e checkout construídos como implementação de referência para ensino.',
    },
  },
  {
    slug: 'star-wars-journey',
    name: 'Star Wars Journey',
    flag: '--build',
    url: 'https://star-wars-journey.netlify.com',
    repo: 'https://github.com/cicatrizdev/star-wars-journey',
    stack: ['React', 'TypeScript', 'SWAPI'],
    summary: {
      en: 'A small encyclopedia of the Star Wars universe on top of SWAPI. Built to explore data fetching patterns in React.',
      pt: 'Uma pequena enciclopédia do universo Star Wars sobre a SWAPI. Feita para explorar padrões de busca de dados em React.',
    },
  },
  {
    slug: 'blog',
    name: 'pedro-mello blog',
    flag: '--mentor',
    url: 'https://pedro-mello.netlify.com',
    repo: 'https://github.com/cicatrizdev/blog',
    stack: ['Gatsby', 'React', 'Markdown'],
    summary: {
      en: 'Personal blog with articles about React and front-end fundamentals, written in Portuguese for developers starting out.',
      pt: 'Blog pessoal com artigos sobre React e fundamentos de front-end, escritos em português para quem está começando.',
    },
  },
]
