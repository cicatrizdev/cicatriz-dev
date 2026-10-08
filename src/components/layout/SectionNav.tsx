import type { Locale } from '@/lib/i18n'
import {
  getUi,
  pageSectionOrder,
  pageSectionTitle,
  projects,
  sectionIds,
} from '@/content'
import styles from './SectionNav.module.css'

/** The `less`-style index line: section anchors, scrollable on small screens. */
export function SectionNav({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <nav aria-label={ui.chrome.manual} className={styles.nav}>
      <span className={styles.prompt} aria-hidden="true">
        :
      </span>
      <ul className={styles.list}>
        {pageSectionOrder
          .filter((key) => key !== 'examples' || projects.length > 0)
          .map((key) => (
            <li key={key}>
              <a href={`#${sectionIds[key]}`} className={styles.link}>
                {pageSectionTitle(locale, key)}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  )
}
