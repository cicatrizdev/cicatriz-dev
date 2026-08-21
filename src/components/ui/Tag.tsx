import type { ReactNode } from 'react'
import styles from './Tag.module.css'

/** `[label]` — a bracketed inline token, the man page's idea of a chip. */
export function Tag({ children }: { children: ReactNode }) {
  return <span className={styles.tag}>{children}</span>
}
