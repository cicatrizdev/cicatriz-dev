import type { Locale } from '@/lib/i18n'
import { experience, getUi, sectionIds } from '@/content'
import { Section } from '@/components/layout/Section'
import s from './sections.module.css'

export function HistorySection({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  // Most recent first; ties keep file order (Array.prototype.sort is stable).
  const entries = [...experience].sort((a, b) => b.start.localeCompare(a.start))
  return (
    <Section id={sectionIds.history} title={ui.sections.history}>
      <p className={s.lead}>{ui.history.lead}</p>
      {entries.length === 0 ? (
        <p>{ui.history.empty}</p>
      ) : (
        <ol className={s.history}>
          {entries.map((job) => (
            <li key={`${job.company}-${job.start}`} className={s.job}>
              <span className={s.range}>
                {job.start} – {job.end ?? ui.history.present}
              </span>
              <div>
                <h3 className={s.jobHead}>
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noopener">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}{' '}
                  <span className={s.role}>{job.role[locale]}</span>
                  {job.via && (
                    <span className={s.via}>
                      {ui.history.via} {job.via}
                    </span>
                  )}
                </h3>
                <p>{job.summary[locale]}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </Section>
  )
}
