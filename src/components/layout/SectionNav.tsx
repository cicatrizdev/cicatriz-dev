import type { Locale } from '@/lib/i18n'
import { getUi, sectionIds, type SectionKey } from '@/content'
import styles from './SectionNav.module.css'

const order: SectionKey[] = [
  'name',
  'synopsis',
  'description',
  'options',
  'examples',
  'history',
  'bugs',
  'seeAlso',
]

/** The `less`-style index line: section anchors, scrollable on small screens. */
export function SectionNav({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  return (
    <nav aria-label={ui.chrome.manual} className={styles.nav}>
      <span className={styles.prompt} aria-hidden="true">
        :
      </span>
      <ul className={styles.list}>
        {order.map((key) => (
          <li key={key}>
            <a href={`#${sectionIds[key]}`} className={styles.link}>
              {ui.sections[key]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
