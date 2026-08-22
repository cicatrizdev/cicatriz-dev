import type { Metadata } from 'next'
import { langTag, ogLocale, otherLocale, type Locale } from '@/lib/i18n'
import { site, getUi } from '@/content'

export const metadataBase = new URL(site.url)

export function buildMetadata(locale: Locale): Metadata {
  const ui = getUi(locale)
  const other = otherLocale(locale)
  return {
    metadataBase,
    title: {
      default: ui.meta.title,
      template: `%s · ${site.command}(${site.manSection})`,
    },
    description: ui.meta.description,
    applicationName: `${site.command}.dev`,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    keywords: [
      'Pedro Mello',
      'Cicatriz',
      'software engineer',
      'React',
      'React Native',
      'Next.js',
      'Node.js',
      'TypeScript',
      'software architecture',
      'mentorship',
      'consulting',
      'Brazil',
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        [langTag.en]: '/en',
        [langTag.pt]: '/pt',
        'x-default': '/en',
      },
    },
    openGraph: {
      type: 'profile',
      url: `/${locale}`,
      siteName: `${site.command}.dev`,
      title: ui.meta.title,
      description: ui.meta.description,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[other]],
      firstName: 'Pedro',
      lastName: 'Mello',
      username: site.handle,
    },
    twitter: {
      card: 'summary_large_image',
      title: ui.meta.title,
      description: ui.meta.description,
    },
    robots: { index: true, follow: true },
  }
}
