import type { SkillGroup } from '@/content/types'

export const skills: readonly SkillGroup[] = [
  {
    label: { en: 'languages', pt: 'linguagens' },
    items: ['typescript', 'javascript', 'python', 'swift', 'kotlin', 'rust'],
  },
  {
    label: { en: 'front-end', pt: 'front-end' },
    items: ['react', 'next.js', 'redux', 'tailwind', 'styled-components'],
  },
  {
    label: { en: 'mobile', pt: 'mobile' },
    items: ['react-native', 'expo', 'flutter'],
  },
  {
    label: { en: 'back-end', pt: 'back-end' },
    items: ['node.js', 'mongodb', 'firebase', 'supabase'],
  },
]
