import type { Locale } from '@/lib/i18n'
import { getUi } from '@/content'
import { careerStart, currentLevelStart, monthsBetween } from '@/lib/played'
import styles from './Played.module.css'

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

/** The WoW `/played` readout: total career time and time at the current "level". */
export function Played({ locale }: { locale: Locale }) {
  const ui = getUi(locale).chrome.played
  const level = currentLevelStart()
  return (
    <div className={styles.played}>
      <p className={styles.cmd}>
        <span className={styles.slash} aria-hidden="true">
          /
        </span>
        played
      </p>
      <p className={styles.line}>
        {ui.total}:{' '}
        <span className={styles.value}>
          {format(monthsBetween(careerStart(), now), ui)}
        </span>
      </p>
      {level && (
        <p className={styles.line}>
          {ui.level}:{' '}
          <span className={styles.value}>
            {format(monthsBetween(level, now), ui)}
          </span>
        </p>
      )}
    </div>
  )
}
