import type { Locale } from '@/lib/i18n'
import { getUi, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import s from './sections.module.css'

export function SeeAlsoSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <Section id={sectionIds.seeAlso} title={ui.sections.seeAlso}>
      <ul className={s.seeAlso}>
        {ui.seeAlso.items.map((item) => (
          <li key={item.label}>
            <a href={item.href} target="_blank" rel="noopener me">
              {item.label}
            </a>{' '}
            <span className={s.dim}>— {item.description}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
