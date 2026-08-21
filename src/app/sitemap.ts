import type { MetadataRoute } from 'next'
import { locales, langTag } from '@/lib/i18n'
import { site } from '@/content'

const lastModified = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [langTag[l], `${site.url}/${l}`])
  )
  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.9,
    alternates: { languages },
  }))
}
