import type { Quality, Skill, SkillGroup } from '@/content/types'

const q =
  (quality: Quality) =>
  (name: string): Skill => ({ name, quality })
const legendary = q('legendary')
const epic = q('epic')
const rare = q('rare')
const uncommon = q('uncommon')

/**
 * Stack tags under DESCRIPTION, colored by item quality:
 * legendary = specialty, epic = daily use, rare = comfortable, uncommon = familiar.
 */
export const skills: readonly SkillGroup[] = [
  {
    label: { en: 'languages', pt: 'linguagens' },
    items: [
      legendary('typescript'),
      legendary('javascript'),
      rare('python'),
      rare('lua'),
      uncommon('rust'),
      uncommon('swift'),
      uncommon('kotlin'),
    ],
  },
  {
    label: { en: 'web', pt: 'web' },
    items: [
      legendary('react'),
      epic('next.js'),
      epic('redux'),
      epic('styled-components'),
      rare('tailwind'),
    ],
  },
  {
    label: { en: 'mobile', pt: 'mobile' },
    items: [legendary('react-native'), epic('expo'), rare('flutter')],
  },
  {
    label: { en: 'back-end', pt: 'back-end' },
    items: [
      epic('node.js'),
      rare('postgres'),
      rare('mongodb'),
      rare('supabase'),
      rare('firebase'),
    ],
  },
  {
    label: { en: 'infra', pt: 'infra' },
    items: [
      epic('vercel'),
      rare('netlify'),
      rare('github-actions'),
      rare('ci/cd'),
    ],
  },
  {
    label: { en: 'azeroth', pt: 'azeroth' },
    items: [
      rare('macros'),
      rare('wow-addons'),
      uncommon('weakauras'),
      uncommon('wow-api'),
    ],
  },
  {
    label: { en: 'practice', pt: 'prática' },
    items: [
      legendary('mentoring'),
      epic('architecture'),
      epic('code-review'),
      rare('testing'),
      rare('ui-design'),
    ],
  },
]
