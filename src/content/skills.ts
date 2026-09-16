import type { ManFont, Skill, SkillGroup } from '@/content/types'

const q =
  (font: ManFont) =>
  (name: string): Skill => ({ name, font })
const bold = q('bold')
const underline = q('underline')
const roman = q('roman')
const dim = q('dim')

/**
 * Stack tags under DESCRIPTION, set in man(7) fonts:
 * bold = specialty, underline = daily use, roman = comfortable, dim = familiar.
 */
export const skills: readonly SkillGroup[] = [
  {
    label: { en: 'languages', pt: 'linguagens' },
    items: [
      bold('typescript'),
      bold('javascript'),
      roman('python'),
      roman('go'),
      roman('java'),
      dim('rust'),
      dim('swift'),
      dim('kotlin'),
    ],
  },
  {
    label: { en: 'web', pt: 'web' },
    items: [
      bold('react'),
      underline('next.js'),
      underline('redux'),
      underline('styled-components'),
      roman('tailwind'),
    ],
  },
  {
    label: { en: 'mobile', pt: 'mobile' },
    items: [bold('react-native'), underline('expo'), roman('flutter')],
  },
  {
    label: { en: 'back-end', pt: 'back-end' },
    items: [
      underline('node.js'),
      roman('postgres'),
      roman('mongodb'),
      roman('supabase'),
      roman('firebase'),
    ],
  },
  {
    label: { en: 'infra', pt: 'infra' },
    items: [
      underline('vercel'),
      roman('netlify'),
      roman('github-actions'),
      roman('ci/cd'),
    ],
  },
  {
    label: { en: 'ai', pt: 'ia' },
    items: [underline('claude-code'), roman('mcp'), roman('agent-skills')],
  },
  {
    label: { en: 'practice', pt: 'prática' },
    items: [
      bold('mentoring'),
      underline('architecture'),
      underline('code-review'),
      roman('testing'),
      roman('ui-design'),
    ],
  },
]
