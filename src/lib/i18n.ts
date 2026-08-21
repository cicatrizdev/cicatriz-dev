export const locales = ['en', 'pt'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export type Localized<T = string> = Record<Locale, T>

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === 'string' && (locales as readonly string[]).includes(value)
  )
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'pt' : 'en'
}

/** BCP 47 tag used for <html lang>, hreflang and Intl APIs. */
export const langTag: Localized = { en: 'en', pt: 'pt-BR' }

/** Open Graph locale codes. */
export const ogLocale: Localized = { en: 'en_US', pt: 'pt_BR' }

/** POSIX-style locale names, used in the man page chrome (`LANG=pt_BR`). */
export const posixLocale: Localized = { en: 'en_US', pt: 'pt_BR' }
