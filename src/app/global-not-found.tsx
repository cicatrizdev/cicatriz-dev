import type { Metadata, Viewport } from 'next'
import { plex, martian } from '@/lib/fonts'
import { langTag } from '@/lib/i18n'
import { getUi, site } from '@/content'
import { ThemeScript } from '@/components/theme/ThemeScript'
import { ManHeader } from '@/components/layout/ManHeader'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/layout/Section'
import { CurrentPath } from '@/components/layout/CurrentPath'
import '@/styles/globals.css'
import layout from '@/app/[locale]/layout.module.css'
import styles from './global-not-found.module.css'

/**
 * Routing-level 404 for anything that matches no route — including unknown
 * locales. It bypasses the locale layout, so it is a full document and speaks
 * both languages.
 */
export const metadata: Metadata = {
  title: `404 · ${site.command}(${site.manSection})`,
  robots: { index: false, follow: false },
}

export const viewport: Viewport = { colorScheme: 'light dark' }

export default function GlobalNotFound() {
  const en = getUi('en')
  const pt = getUi('pt')
  return (
    <html
      lang="en"
      className={`${plex.variable} ${martian.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <ManHeader locale="en" />
        <main id="content" className={layout.page}>
          <Section id="not-found" title="404">
            <p className={styles.line}>
              <span className={styles.prompt} aria-hidden="true">
                ${' '}
              </span>
              <code>man {site.command}</code>
            </p>
            <p className={styles.message}>
              {en.notFound.title} <CurrentPath />
            </p>
            <p>
              {en.notFound.body}{' '}
              {/* Plain anchors: this document renders outside the app router. */}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/en">{en.notFound.back}</a>
            </p>
            <p className={styles.message} lang={langTag.pt}>
              {pt.notFound.title} <CurrentPath />
            </p>
            <p lang={langTag.pt}>
              {pt.notFound.body}{' '}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/pt">{pt.notFound.back}</a>
            </p>
          </Section>
        </main>
        <Footer locale="en" />
      </body>
    </html>
  )
}
