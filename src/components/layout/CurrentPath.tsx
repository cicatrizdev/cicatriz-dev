'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/** The requested path, for the `No manual entry for <path>` line. Empty during SSR. */
export function CurrentPath() {
  const pathname = useSyncExternalStore(
    subscribe,
    () => window.location.pathname,
    () => ''
  )
  return <code>{pathname}</code>
}
