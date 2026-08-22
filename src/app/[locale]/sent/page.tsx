import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n'
import { getUi, site } from '@/content'
import { Section } from '@/components/layout/Section'
import styles from './page.module.css'

type Props = { params: Promise<{ locale: string }> }

/** Landing page for the no-JS form submission. */
export const metadata: Metadata = { title: '200 OK', robots: { index: false } }

export default async function SentPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const ui = getUi(locale)
  return (
    <Section id="sent" title={ui.sections.bugs}>
      <p className={styles.line}>
        <span className={styles.prompt} aria-hidden="true">
          ${' '}
        </span>
        <code>send --to {site.email}</code>
      </p>
      <p className={styles.ok}>{ui.bugs.form.sentTitle}</p>
      <p>{ui.bugs.form.sentBody}</p>
      <p>
        <a href={`/${locale}`}>{ui.notFound.back}</a>
      </p>
    </Section>
  )
}
