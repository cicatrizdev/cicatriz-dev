'use client'

import type { ReactNode } from 'react'

export const TOPIC_SELECT_ID = 'contact-topic'

type Props = {
  topic: string
  label: string
  className?: string
  children: ReactNode
}

/**
 * `$ cicatriz --flag` under each option: a plain anchor to the contact form
 * that also preselects the matching subject. Without JS it still scrolls.
 */
export function RequestLink({ topic, label, className, children }: Props) {
  return (
    <a
      href="#bugs"
      className={className}
      aria-label={label}
      onClick={() => {
        const select = document.getElementById(TOPIC_SELECT_ID)
        if (select instanceof HTMLSelectElement) select.value = topic
      }}
    >
      {children}
    </a>
  )
}
