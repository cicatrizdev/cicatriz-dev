'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import type { Locale } from '@/lib/i18n'
import { langTag } from '@/lib/i18n'
import styles from './ContactForm.module.css'

type Api = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string
      theme: 'light' | 'dark'
      language: string
      size: 'flexible'
      appearance: 'always'
      callback: (token: string) => void
      'expired-callback': () => void
      'error-callback': () => void
    }
  ) => string
  remove: (id: string) => void
}

function getApi(): Api | undefined {
  return (window as unknown as { turnstile?: Api }).turnstile
}

function readTheme(): 'light' | 'dark' {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

type Props = {
  siteKey: string
  locale: Locale
  onToken: (token: string | null) => void
}

/**
 * Explicit Turnstile widget. Remount (change `key`) to mint a fresh token
 * after a submit — tokens are single-use.
 */
export function Turnstile({ siteKey, locale, onToken }: Props) {
  const box = useRef<HTMLDivElement>(null)
  const onTokenRef = useRef(onToken)
  const [apiReady, setApiReady] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    onTokenRef.current = onToken
  }, [onToken])

  useEffect(() => {
    const root = document.documentElement
    const sync = () => setTheme(readTheme())
    sync()
    const obs = new MutationObserver(sync)
    obs.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const el = box.current
    const api = getApi()
    if (!apiReady || !el || !api) return
    const id = api.render(el, {
      sitekey: siteKey,
      theme,
      language: langTag[locale],
      size: 'flexible',
      appearance: 'always',
      callback: (token) => onTokenRef.current(token),
      'expired-callback': () => onTokenRef.current(null),
      'error-callback': () => onTokenRef.current(null),
    })
    return () => {
      onTokenRef.current(null)
      api.remove(id)
    }
  }, [apiReady, siteKey, locale, theme])

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
        onReady={() => setApiReady(true)}
      />
      <div ref={box} className={styles.turnstile} />
    </>
  )
}
