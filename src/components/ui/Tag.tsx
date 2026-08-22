import type { ReactNode } from 'react'
import type { Quality } from '@/content/types'
import styles from './Tag.module.css'

type Props = {
  children: ReactNode
  /** Colors the tag like a WoW item of that quality. */
  quality?: Quality
  title?: string
}

/** `[label]` — a bracketed inline token, the man page's idea of a chip. */
export function Tag({ children, quality, title }: Props) {
  const className = quality ? `${styles.tag} ${styles[quality]}` : styles.tag
  return (
    <span className={className} title={title}>
      {children}
    </span>
  )
}
