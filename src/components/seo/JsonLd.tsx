import type { Locale } from '@/lib/i18n'
import { langTag } from '@/lib/i18n'
import { site, getUi } from '@/content'

export function JsonLd({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    alternateName: 'Cicatriz',
    url: `${site.url}/${locale}`,
    email: `mailto:${site.email}`,
    jobTitle: 'Software Engineer',
    description: ui.meta.description,
    image: `${site.url}/${locale}/opengraph-image`,
    address: { '@type': 'PostalAddress', addressCountry: 'BR' },
    sameAs: [site.social.github, site.social.linkedin, site.social.blog],
    knowsLanguage: [langTag.pt, langTag.en],
    knowsAbout: ['React', 'React Native', 'TypeScript', 'Next.js', 'Node.js'],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
