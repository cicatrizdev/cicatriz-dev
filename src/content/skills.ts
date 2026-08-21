import type { SkillGroup } from '@/content/types'

/** Stack tags under DESCRIPTION. Specialties first; edit freely. */
export const skills: readonly SkillGroup[] = [
  {
    label: { en: 'languages', pt: 'linguagens' },
    items: ['typescript', 'javascript', 'python', 'rust', 'swift', 'kotlin'],
  },
  {
    label: { en: 'web', pt: 'web' },
    items: ['react', 'next.js', 'redux', 'tailwind', 'styled-components'],
  },
  {
    label: { en: 'mobile', pt: 'mobile' },
    items: ['react-native', 'expo', 'flutter'],
  },
  {
    label: { en: 'back-end', pt: 'back-end' },
    items: ['node.js', 'postgres', 'mongodb', 'supabase', 'firebase'],
  },
  {
    label: { en: 'infra', pt: 'infra' },
    items: ['vercel', 'netlify', 'github-actions', 'ci/cd'],
  },
  {
    label: { en: 'practice', pt: 'prática' },
    items: ['architecture', 'code-review', 'testing', 'ui-design', 'mentoring'],
  },
]
