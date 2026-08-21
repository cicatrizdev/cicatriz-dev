import type { Locale } from '@/lib/i18n'
import { site, getUi, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import { ContactForm } from '@/components/contact/ContactForm'
import s from './sections.module.css'

export function BugsSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <Section id={sectionIds.bugs} title={ui.sections.bugs}>
      <p className={s.lead}>
        {ui.bugs.lead} <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <ContactForm locale={locale} strings={ui.bugs.form} email={site.email} />
    </Section>
  )
}
