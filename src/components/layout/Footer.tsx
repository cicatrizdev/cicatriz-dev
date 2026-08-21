import type { Locale } from '@/lib/i18n'
import { site, getUi } from '@/content'
import { manTitle } from './ManHeader'
import styles from './Footer.module.css'

/** Stamped once per build; the man page's "date" field. */
const buildDate = new Date().toISOString().slice(0, 10)

export function Footer({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  const host = new URL(site.url).host
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a
          href={site.repo}
          className={styles.cell}
          rel="noopener"
          target="_blank"
        >
          {host} <span className={styles.dim}>({ui.chrome.sourceLink})</span>
        </a>
        <span className={`${styles.cell} ${styles.center}`}>
          <span className={styles.dim}>{ui.chrome.built}</span> {buildDate}
        </span>
        <span className={`${styles.cell} ${styles.right}`}>{manTitle()}</span>
      </div>
    </footer>
  )
}
