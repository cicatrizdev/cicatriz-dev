import type { Locale } from '@/lib/i18n'
import { getUi } from '@/content'
import { careerStart, currentJobStart, monthsBetween } from '@/lib/uptime'
import styles from './Uptime.module.css'

/** Stamped once per build, like the footer date. */
const now = new Date()

type Words = { years: [string, string]; months: [string, string] }

function format(
  { years, months }: { years: number; months: number },
  w: Words
) {
  const parts: string[] = []
  if (years > 0) parts.push(`${years} ${w.years[years === 1 ? 0 : 1]}`)
  if (months > 0 || parts.length === 0)
    parts.push(`${months} ${w.months[months === 1 ? 0 : 1]}`)
  return parts.join(', ')
}

/** Career `uptime`: total time and time in the current job. */
export function Uptime({ locale }: { locale: Locale }) {
  const ui = getUi(locale).chrome.uptime
  const current = currentJobStart()
  return (
    <div className={styles.uptime}>
      <p className={styles.cmd}>
        <span className={styles.prompt} aria-hidden="true">
          ${' '}
        </span>
        uptime
      </p>
      <p className={styles.line}>
        {ui.total}{' '}
        <span className={styles.value}>
          {format(monthsBetween(careerStart(), now), ui)}
        </span>
      </p>
      {current && (
        <p className={styles.line}>
          {ui.current}:{' '}
          <span className={styles.value}>
            {format(monthsBetween(current, now), ui)}
          </span>
        </p>
      )}
    </div>
  )
}
