import type { ReactNode } from 'react'
import type { ManFont } from '@/content/types'
import styles from './Tag.module.css'

type Props = {
  children: ReactNode
  /** man(7) font that encodes how deep a skill goes. */
  font?: ManFont
  title?: string
}

/** `[label]` — a bracketed inline token, the man page's idea of a chip. */
export function Tag({ children, font, title }: Props) {
  return (
    <span className={styles.tag} title={title}>
      <span className={font ? styles[font] : undefined}>{children}</span>
    </span>
  )
}
