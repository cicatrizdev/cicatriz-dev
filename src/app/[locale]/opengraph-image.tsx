import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { isLocale, defaultLocale, locales } from '@/lib/i18n'
import { site, services, getUi } from '@/content'

export const alt = 'cicatriz(1) — Pedro Mello, software engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const fontsDir = join(
  process.cwd(),
  'node_modules/@fontsource/ibm-plex-mono/files'
)
const [regular, bold, avatar] = await Promise.all([
  readFile(join(fontsDir, 'ibm-plex-mono-latin-400-normal.woff')),
  readFile(join(fontsDir, 'ibm-plex-mono-latin-700-normal.woff')),
  readFile(join(process.cwd(), 'src/assets/avatar.jpg'), 'base64'),
])
const avatarSrc = `data:image/jpeg;base64,${avatar}`

const colors = {
  bg: '#0c0f0d',
  fg: '#e6e1d6',
  dim: '#7a8480',
  accent: '#f5a524',
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  const locale = isLocale(raw) ? raw : defaultLocale
  const ui = getUi(locale)
  const title = `${site.command.toUpperCase()}(${site.manSection})`
  const usage = `${site.command} ${services.map((s) => `[${s.flag}]`).join(' ')}`

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
          borderBottom: `2px solid #2a302d`,
          paddingBottom: 24,
        }}
      >
        <span style={{ color: colors.fg, fontWeight: 700 }}>{title}</span>
        <span>{ui.chrome.manual}</span>
        <span style={{ color: colors.fg, fontWeight: 700 }}>{title}</span>
      </div>

      <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 56 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <span
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 4,
              color: colors.accent,
            }}
          >
            {ui.sections.name.toUpperCase()}
          </span>
          <span
            style={{
              fontSize: 40,
              lineHeight: 1.35,
              marginTop: 12,
              paddingLeft: 48,
            }}
          >
            <span style={{ fontWeight: 700 }}>{site.command}</span>
            {` — ${ui.name.summary}`}
          </span>
          <span
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 4,
              color: colors.accent,
              marginTop: 44,
            }}
          >
            {ui.sections.synopsis.toUpperCase()}
          </span>
          <span
            style={{
              fontSize: 32,
              marginTop: 12,
              paddingLeft: 48,
              color: colors.fg,
            }}
          >
            {usage}
            <span style={{ color: colors.accent }}>█</span>
          </span>
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
          borderTop: `2px solid #2a302d`,
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
