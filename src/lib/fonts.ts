import { IBM_Plex_Mono, Martian_Mono } from 'next/font/google'

/** Body face: humanist mono, comfortable for long reading. */
export const plex = IBM_Plex_Mono({
  subsets: ['latin'],
  // Only what the page uses; italics are synthesized for the one line that needs them.
  weight: ['400', '600'],
  variable: '--font-plex',
  display: 'swap',
})

/** Display face: wide variable mono for section headers and the synopsis. */
export const martian = Martian_Mono({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-martian',
  display: 'swap',
})
