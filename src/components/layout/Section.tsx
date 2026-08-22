import type { ReactNode } from 'react'
import styles from './Section.module.css'

type Props = {
  id: string
  title: string
  children: ReactNode
}

/** A man page section: flush-left uppercase header, indented body. */
export function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={styles.section}>
      <h2 id={`${id}-title`} className={styles.title}>
        {title}
      </h2>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
