import type { CSSProperties } from 'react'
import type { Locale } from '@/lib/i18n'
import { site, services, getUi, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import { optionId } from './OptionsSection'
import s from './sections.module.css'

export function SynopsisSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  const options = services.map((svc) => ({
    flag: svc.flag,
    text: `[${svc.flag}${svc.arg ? ` ${svc.arg}` : ''}]`,
  }))
  return (
    <Section id={sectionIds.synopsis} title={ui.sections.synopsis}>
      <p className={s.usage}>
        <code className={s.usageCmd}>{site.command}</code>
        {options.map((opt, i) => (
          <code
            key={opt.flag}
            className={s.usageOpt}
            style={{ '--i': i } as CSSProperties}
          >
            {/* Each token jumps to its entry under OPTIONS. */}
            <a href={`#${optionId(opt.flag)}`} className={s.usageLink}>
              {opt.text}
            </a>
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
