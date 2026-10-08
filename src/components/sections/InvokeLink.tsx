import type { Locale } from '@/lib/i18n'
import type { Service } from '@/content/types'
import { site } from '@/content'
import { RequestLink } from '@/components/contact/RequestLink'
import s from './sections.module.css'

/** `$ cicatriz --flag` plus the human CTA — scrolls to contact and preselects the topic. */
export function InvokeLink({
  locale,
  service,
}: {
  locale: Locale
  service: Service
}) {
  const topic = service.flag.replace(/^--/, '')
  return (
    <RequestLink topic={topic} label={service.cta[locale]} className={s.invoke}>
      <span className={s.prompt} aria-hidden="true">
        ${' '}
      </span>
      <code>
        {site.command} {service.flag}
      </code>
      <span className={s.ctaText}>{service.cta[locale]}</span>
    </RequestLink>
  )
}
