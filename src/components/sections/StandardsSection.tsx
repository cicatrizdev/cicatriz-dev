import type { Locale } from '@/lib/i18n'
import { education, getUi, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import s from './sections.module.css'

/** Degrees, listed the way a man page lists the standards a command conforms to. */
export function StandardsSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  if (education.length === 0) return null
  const entries = [...education].sort((a, b) => b.start - a.start)
  return (
    <Section id={sectionIds.standards} title={ui.sections.standards}>
      <p className={s.lead}>{ui.standards.lead}</p>
      <ul className={s.standards}>
        {entries.map((item) => (
          <li key={`${item.institution}-${item.start}`}>
            <span className={s.standard}>{item.degree[locale]}</span>{' '}
            <span className={s.dim}>
              —{' '}
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener">
                  {item.institution}
                </a>
              ) : (
                item.institution
              )}
              {`, ${item.start}–${item.end}`}
              {item.inProgress && ` (${ui.standards.inProgress})`}
            </span>
          </li>
        ))}
      </ul>
      <p className={s.note}>{ui.standards.note}</p>
    </Section>
  )
}
