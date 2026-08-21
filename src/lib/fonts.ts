import { IBM_Plex_Mono, Martian_Mono } from 'next/font/google'

/** Body face: humanist mono, comfortable for long reading. */
export const plex = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
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
