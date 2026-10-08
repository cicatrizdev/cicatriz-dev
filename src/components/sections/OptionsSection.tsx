import type { Locale } from '@/lib/i18n'
import { services, getUi, pageSectionTitle, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import { InvokeLink } from './InvokeLink'
import s from './sections.module.css'

export const optionId = (flag: string) => `opt-${flag.replace(/^--/, '')}`

export function OptionsSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <Section
      id={sectionIds.options}
      title={pageSectionTitle(locale, 'options')}
    >
      <p className={s.lead}>{ui.page.optionsLead}</p>
      <dl className={s.options}>
        {services.map((svc) => (
          <div key={svc.flag} id={optionId(svc.flag)} className={s.option}>
            <dt className={s.optHead}>
              <span className={s.optTitle}>{svc.title[locale]}</span>
              <code className={s.flag}>{svc.flag}</code>
              {svc.arg && <code className={s.arg}>{svc.arg}</code>}
            </dt>
            <dd className={s.optBody}>
              <p>{svc.description[locale]}</p>
              <p className={s.optInvoke}>
                <InvokeLink locale={locale} service={svc} />
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
