import type { Locale } from '@/lib/i18n'
import { site, getUi } from '@/content'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { LocaleSwitcher } from '@/components/i18n/LocaleSwitcher'
import styles from './ManHeader.module.css'

export function manTitle() {
  return `${site.command.toUpperCase()}(${site.manSection})`
}

export function ManHeader({ locale }: { locale: Locale }) {
  const ui = getUi(locale)
  const title = manTitle()
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href={`/${locale}`} className={styles.title}>
          {title}
        </a>
        <span className={styles.manual}>{ui.chrome.manual}</span>
        <div className={styles.controls}>
          <LocaleSwitcher locale={locale} label={ui.chrome.langSwitch} />
          <ThemeToggle
            label={ui.chrome.themeToggle}
            light={ui.chrome.themeLight}
            dark={ui.chrome.themeDark}
          />
        </div>
      </div>
    </header>
  )
}
