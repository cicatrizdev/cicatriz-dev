import type { MetadataRoute } from 'next'
import { site } from '@/content'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.command}(${site.manSection}) — ${site.name}`,
    short_name: `${site.command}.dev`,
    description: `${site.name} — software engineer`,
    start_url: '/',
    display: 'minimal-ui',
    background_color: '#0c0f0d',
    theme_color: '#0c0f0d',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
