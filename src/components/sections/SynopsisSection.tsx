import type { CSSProperties } from 'react'
import type { Locale } from '@/lib/i18n'
import { site, services, getUi, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import s from './sections.module.css'

export function SynopsisSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  const options = services.map(
    (svc) => `[${svc.flag}${svc.arg ? ` ${svc.arg}` : ''}]`
  )
  return (
    <Section id={sectionIds.synopsis} title={ui.sections.synopsis}>
      <p className={s.usage}>
        <code className={s.usageCmd}>{site.command}</code>
        {options.map((opt, i) => (
          <code
            key={opt}
            className={s.usageOpt}
            style={{ '--i': i } as CSSProperties}
          >
            {opt}
            {i === options.length - 1 && (
              <span className={s.cursor} aria-hidden="true" />
            )}
          </code>
        ))}
      </p>
      <p className={s.note}>{ui.synopsis.note}</p>
    </Section>
  )
}
