import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { isLocale, defaultLocale, locales } from '@/lib/i18n'
import { site, services, getUi } from '@/content'

export const alt = 'cicatriz(1) — Pedro Mello, software engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
/** Re-render daily so the GitHub avatar stays current. */
export const revalidate = 86400

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const fontsDir = join(
  process.cwd(),
  'node_modules/@fontsource/ibm-plex-mono/files'
)
const [regular, bold, fallbackAvatar] = await Promise.all([
  readFile(join(fontsDir, 'ibm-plex-mono-latin-400-normal.woff')),
  readFile(join(fontsDir, 'ibm-plex-mono-latin-700-normal.woff')),
  readFile(join(process.cwd(), 'src/assets/avatar.jpg')),
])

/** Current GitHub avatar as a data URL; the committed file if GitHub is unreachable. */
async function avatarDataUrl(): Promise<string> {
  try {
    const res = await fetch(`${site.avatar}?s=440`, { next: { revalidate } })
    if (!res.ok) throw new Error(`avatar ${res.status}`)
    const type = res.headers.get('content-type') ?? 'image/jpeg'
    const data = Buffer.from(await res.arrayBuffer()).toString('base64')
    return `data:${type};base64,${data}`
  } catch (error) {
    console.warn('[og] GitHub avatar unavailable, using local fallback', error)
    return `data:image/jpeg;base64,${fallbackAvatar.toString('base64')}`
  }
}

const colors = {
  bg: '#0c0f0d',
  fg: '#e6e1d6',
  dim: '#7a8480',
  accent: '#f5a524',
  rule: '#2a302d',
}

const heading = {
  fontSize: 30,
  fontWeight: 700,
  letterSpacing: 4,
  color: colors.accent,
} as const

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  const locale = isLocale(raw) ? raw : defaultLocale
  const ui = getUi(locale)
  const avatarSrc = await avatarDataUrl()
  const title = `${site.command.toUpperCase()}(${site.manSection})`
  // Satori lays out nested inline text poorly: render word by word in wrapping flex rows.
  const nameWords = ui.name.summary.split(' ')
  const usageTokens = [site.command, ...services.map((s) => `[${s.flag}]`)]

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: colors.bg,
        color: colors.fg,
        fontFamily: 'Plex',
        padding: '56px 72px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 28,
          color: colors.dim,
          borderBottom: `2px solid ${colors.rule}`,
          paddingBottom: 24,
        }}
      >
        <span style={{ color: colors.fg, fontWeight: 700 }}>{title}</span>
        <span>{ui.chrome.manual}</span>
        <span style={{ color: colors.fg, fontWeight: 700 }}>{title}</span>
      </div>

      <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 56 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <span style={heading}>{ui.sections.name.toUpperCase()}</span>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              columnGap: 14,
              fontSize: 38,
              lineHeight: 1.35,
              marginTop: 12,
              paddingLeft: 48,
            }}
          >
            <span style={{ fontWeight: 700 }}>{site.command}</span>
            <span style={{ color: colors.dim }}>—</span>
            {nameWords.map((word, i) => (
              <span key={`${word}-${i}`}>{word}</span>
            ))}
          </div>
          <span style={{ ...heading, marginTop: 44 }}>
            {ui.sections.synopsis.toUpperCase()}
          </span>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              columnGap: 14,
              fontSize: 28,
              marginTop: 12,
              paddingLeft: 48,
            }}
          >
            {usageTokens.map((token, i) => (
              <div
                key={token}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span
                  style={{
                    color: i === 0 ? colors.accent : colors.fg,
                    fontWeight: i === 0 ? 700 : 400,
                  }}
                >
                  {token}
                </span>
                {i === usageTokens.length - 1 && (
                  <div
                    style={{
                      width: 16,
                      height: 30,
                      marginLeft: 6,
                      background: colors.accent,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <img
          src={avatarSrc}
          alt=""
          width={220}
          height={220}
          style={{ borderRadius: 9999, border: `4px solid ${colors.accent}` }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 26,
          color: colors.dim,
          borderTop: `2px solid ${colors.rule}`,
          paddingTop: 24,
        }}
      >
        <span>{new URL(site.url).host}</span>
        <span style={{ color: colors.fg, fontWeight: 700 }}>{title}</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Plex', data: regular, weight: 400, style: 'normal' },
        { name: 'Plex', data: bold, weight: 700, style: 'normal' },
      ],
    }
  )
}
