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
    sameAs: [site.social.github, site.social.linkedin],
    knowsLanguage: [langTag.pt, langTag.en],
    knowsAbout: [
      'Software engineering',
      'TypeScript',
      'React',
      'React Native',
      'Next.js',
      'Node.js',
      'Software architecture',
      'Mentoring',
    ],
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
