import type { Locale } from '@/lib/i18n'
import { services, getUi, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import s from './sections.module.css'

export function OptionsSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <Section id={sectionIds.options} title={ui.sections.options}>
      <p className={s.lead}>{ui.options.lead}</p>
      <dl className={s.options}>
        {services.map((svc) => (
          <div key={svc.flag} className={s.option}>
            <dt className={s.optHead}>
              <code className={s.flag}>{svc.flag}</code>
              {svc.arg && <code className={s.arg}>{svc.arg}</code>}
              <span className={s.optTitle}>{svc.title[locale]}</span>
            </dt>
            <dd className={s.optBody}>{svc.description[locale]}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
