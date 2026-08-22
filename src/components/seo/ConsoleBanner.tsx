'use client'

import { useEffect } from 'react'
import { site } from '@/content/site'

const banner = `
%c${site.command.toUpperCase()}(${site.manSection})%c            General Commands Manual            %c${site.command.toUpperCase()}(${site.manSection})%c

  You found the terminal. Of course you did.

  $ ${site.command} --help
  Source:   ${site.repo}
  Bugs:     ${site.email}
  Stack:    Next.js, TypeScript, CSS Modules, no UI kit
`

let logged = false

/** Logs the man page header to the devtools console, once per load. */
export function ConsoleBanner() {
  useEffect(() => {
    if (logged) return
    logged = true
    const bold = 'font-weight:700'
    const dim = 'color:#7a8480'
    console.info(banner, bold, dim, bold, '')
  }, [])
  return null
}
