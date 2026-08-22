import type { Locale } from '@/lib/i18n'
import { site, services, getUi, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import { RequestLink } from '@/components/contact/RequestLink'
import s from './sections.module.css'

export const optionId = (flag: string) => `opt-${flag.replace(/^--/, '')}`

export function OptionsSection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <Section id={sectionIds.options} title={ui.sections.options}>
      <p className={s.lead}>{ui.options.lead}</p>
      <dl className={s.options}>
        {services.map((svc) => (
          <div key={svc.flag} id={optionId(svc.flag)} className={s.option}>
            <dt className={s.optHead}>
              <code className={s.flag}>{svc.flag}</code>
              {svc.arg && <code className={s.arg}>{svc.arg}</code>}
              <span className={s.optTitle}>{svc.title[locale]}</span>
            </dt>
            <dd className={s.optBody}>
              <p>{svc.description[locale]}</p>
              <p className={s.optInvoke}>
                <RequestLink
                  topic={svc.flag.replace(/^--/, '')}
                  label={`${ui.options.request}: ${svc.title[locale]}`}
                  className={s.invoke}
                >
                  <span className={s.prompt} aria-hidden="true">
                    ${' '}
                  </span>
                  <code>
                    {site.command} {svc.flag}
                  </code>
                </RequestLink>
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
