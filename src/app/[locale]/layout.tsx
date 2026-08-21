import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import {
  locales,
  isLocale,
  defaultLocale,
  langTag,
  type Locale,
} from '@/lib/i18n'
import { plex, martian } from '@/lib/fonts'
import { metadataBase } from '@/lib/metadata'
import { site, getUi } from '@/content'
import { ThemeScript } from '@/components/theme/ThemeScript'
import { ManHeader } from '@/components/layout/ManHeader'
import { Footer } from '@/components/layout/Footer'
import '@/styles/globals.css'
import styles from './layout.module.css'

/** Inherited by every route below, so relative OG/icon URLs resolve to the production host. */
export const metadata: Metadata = { metadataBase }

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f5f0' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0f0d' },
  ],
}

/** Only the two locales exist; anything else is a routing-level 404 (global-not-found). */
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const ui = getUi(locale)
  const analyticsOn = process.env.VERCEL_ENV === 'production'

  return (
    <html
      lang={langTag[locale]}
      className={`${plex.variable} ${martian.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <a href="#content" className={styles.skip}>
          {ui.chrome.skipToContent}
        </a>
        <ManHeader locale={locale} />
        <main id="content" className={styles.page}>
          {children}
        </main>
        <Footer locale={locale} />
        {analyticsOn && <GoogleAnalytics gaId={site.gaId} />}
      </body>
    </html>
  )
}
