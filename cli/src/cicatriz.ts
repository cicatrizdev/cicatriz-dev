/**
 * cicatriz(1) in the terminal. Reads the very same content as cicatriz.dev
 * (bundled at build time) and renders it the way `man` would.
 */
import { spawnSync } from 'node:child_process'
import {
  site,
  services,
  experience,
  education,
  skills,
  getUi,
  synopsisUsage,
} from '@/content'
import { isLocale, defaultLocale, type Locale } from '@/lib/i18n'
import type { Quality } from '@/content/types'
import { careerStart, currentLevelStart, monthsBetween } from '@/lib/played'

declare const __VERSION__: string
declare const __BUILD_DATE__: string

// ---------- args ----------

type Args = {
  lang: Locale
  color: boolean
  pager: boolean
  help: boolean
  version: boolean
  contact: boolean
  only: string[]
}

function detectLang(): Locale {
  const env =
    process.env.LC_ALL || process.env.LC_MESSAGES || process.env.LANG || ''
  return env.toLowerCase().startsWith('pt') ? 'pt' : defaultLocale
}

function parseArgs(argv: string[]): Args {
  const args: Args = {
    lang: detectLang(),
    color: Boolean(process.stdout.isTTY) && !process.env.NO_COLOR,
    pager: Boolean(process.stdout.isTTY),
    help: false,
    version: false,
    contact: false,
    only: [],
  }
  const flags = new Set(services.map((s) => s.flag))
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--lang' || a === '-l') {
      const v = argv[++i]
      if (isLocale(v)) args.lang = v
    } else if (a.startsWith('--lang=')) {
      const v = a.slice(7)
      if (isLocale(v)) args.lang = v
    } else if (a === '--no-color') args.color = false
    else if (a === '--color') args.color = true
    else if (a === '--no-pager') args.pager = false
    else if (a === '--help' || a === '-h') args.help = true
    else if (a === '--version' || a === '-v') args.version = true
    else if (a === '--contact') args.contact = true
    else if (flags.has(a)) args.only.push(a)
  }
  return args
}

// ---------- ansi ----------

const width = Math.min(process.stdout.columns || 80, 80)
const INDENT = 7

function makeStyle(on: boolean) {
  const wrap =
    (open: string, close = '\x1b[0m') =>
    (s: string) =>
      on ? `${open}${s}${close}` : s
  return {
    bold: wrap('\x1b[1m'),
    dim: wrap('\x1b[2m'),
    ul: wrap('\x1b[4m'),
    accent: wrap('\x1b[38;5;214m'),
    ok: wrap('\x1b[38;5;71m'),
    quality: {
      legendary: wrap('\x1b[38;5;208m'),
      epic: wrap('\x1b[38;5;135m'),
      rare: wrap('\x1b[38;5;33m'),
      uncommon: wrap('\x1b[38;5;46m'),
      common: (s: string) => s,
    } satisfies Record<Quality, (s: string) => string>,
  }
}

/** Visible length, ignoring escape codes. */
const visible = (s: string) => s.replace(/\x1b\[[0-9;]*m/g, '').length

function wrap(text: string, indent: number, max = width): string[] {
  const room = max - indent
  const lines: string[] = []
  let line = ''
  for (const word of text.split(/\s+/)) {
    if (!word) continue
    if (line && visible(line) + 1 + visible(word) > room) {
      lines.push(line)
      line = word
    } else line = line ? `${line} ${word}` : word
  }
  if (line) lines.push(line)
  return lines.map((l) => ' '.repeat(indent) + l)
}

function pad(s: string, n: number) {
  return s + ' '.repeat(Math.max(0, n - visible(s)))
}

function center(left: string, mid: string, right: string) {
  const space = width - visible(left) - visible(right)
  const leftPad = Math.max(1, Math.floor((space - visible(mid)) / 2))
  const rightPad = Math.max(1, space - visible(mid) - leftPad)
  return `${left}${' '.repeat(leftPad)}${mid}${' '.repeat(rightPad)}${right}`
}

// ---------- render ----------

function render(args: Args): string {
  const st = makeStyle(args.color)
  const ui = getUi(args.lang)
  const L = args.lang
  const title = `${site.command.toUpperCase()}(${site.manSection})`
  const out: string[] = []
  const H = (s: string) => out.push('', st.bold(s.toUpperCase()))
  const P = (text: string, indent = INDENT) => out.push(...wrap(text, indent))
  const selected = args.only.length
    ? services.filter((s) => args.only.includes(s.flag))
    : services
  const partial = args.only.length > 0 || args.contact

  out.push(center(st.bold(title), st.dim(ui.chrome.manual), st.bold(title)))

  if (!partial) {
    H(ui.sections.name)
    P(`${st.bold(site.command)} — ${ui.name.summary}`)

    H(ui.sections.synopsis)
    // Bracket groups are atomic: swap their spaces for a non-whitespace placeholder while wrapping.
    const GLUE = '\u2063'
    const atomic = (t: string) =>
      t.replace(/\[[^\]]+\]/g, (g) => g.replace(/ /g, GLUE))
    const usage = `${st.bold(st.accent(site.command))} ${atomic(synopsisUsage().slice(site.command.length + 1))}`
    const extra = atomic('[--lang en|pt] [--no-color] [--contact] [--help]')
    const hang = INDENT + site.command.length + 1
    wrap(`${usage} ${extra}`, hang).forEach((line, i) => {
      const text = line.replace(/\u2063/g, ' ')
      out.push(i === 0 ? ' '.repeat(INDENT) + text.trimStart() : text)
    })
    out.push(...wrap(st.dim(ui.synopsis.note), INDENT))

    H(ui.sections.description)
    ui.description.paragraphs.forEach((p, i) => {
      if (i) out.push('')
      P(p)
    })
    out.push('', ' '.repeat(INDENT) + st.bold(ui.description.skillsLead))
    const labelWidth = Math.max(...skills.map((g) => g.label[L].length)) + 2
    for (const group of skills) {
      const tags = group.items.map(
        (item) =>
          `${st.dim('[')}${st.quality[item.quality](item.name)}${st.dim(']')}`
      )
      let line = ' '.repeat(INDENT) + pad(st.dim(group.label[L]), labelWidth)
      const cont = ' '.repeat(INDENT + labelWidth)
      for (const tag of tags) {
        if (visible(line) + 1 + visible(tag) > width) {
          out.push(line)
          line = cont + tag
        } else
          line +=
            (visible(line) > INDENT + labelWidth - 1 && !line.endsWith(' ')
              ? ' '
              : '') + tag
      }
      out.push(line)
    }
    const legend = (['legendary', 'epic', 'rare', 'uncommon'] as const)
      .map(
        (q) =>
          `${st.dim('[')}${st.quality[q](q)}${st.dim(']')} ${ui.description.quality[q]}`
      )
      .join('  ')
    out.push(
      '',
      ...wrap(`${st.dim(ui.description.qualityLegend)} ${legend}`, INDENT)
    )
  }

  if (!args.contact || args.only.length) {
    H(ui.sections.options)
    if (!partial) P(st.dim(ui.options.lead))
    for (const svc of selected) {
      out.push('')
      const head = `${st.bold(st.accent(svc.flag))}${svc.arg ? ' ' + st.dim(svc.arg) : ''} ${st.dim('—')} ${st.bold(svc.title[L])}`
      out.push(' '.repeat(INDENT) + head)
      out.push(...wrap(svc.description[L], INDENT + 7))
      out.push(
        ' '.repeat(INDENT + 7) + st.dim(`$ npx ${site.command} ${svc.flag}`)
      )
    }
  }

  if (!partial) {
    H(ui.sections.history)
    P(st.dim(ui.history.lead))
    out.push('')
    const rows = [...experience].sort((a, b) => b.start.localeCompare(a.start))
    for (const job of rows) {
      const company =
        typeof job.company === 'string' ? job.company : job.company[L]
      const range = pad(`${job.start} – ${job.end ?? ui.history.present}`, 19)
      const head = `${st.bold(company)} ${st.dim('—')} ${job.role[L]}`
      const [first, ...rest] = wrap(head, 0, width - INDENT - 19)
      out.push(' '.repeat(INDENT) + st.dim(range) + first)
      rest.forEach((l) => out.push(' '.repeat(INDENT + 19) + l))
    }

    H(ui.sections.standards)
    P(st.dim(ui.standards.lead))
    out.push('')
    for (const d of [...education].sort((a, b) => b.start - a.start)) {
      const prog = d.inProgress ? ` (${ui.standards.inProgress})` : ''
      out.push(
        ...wrap(
          `${st.bold(d.degree[L])} ${st.dim('—')} ${d.institution}, ${d.start}–${d.end}${prog}`,
          INDENT
        )
      )
    }
    out.push('', ...wrap(st.dim(ui.standards.note), INDENT))
  }

  H(ui.sections.bugs)
  const bugsLine =
    L === 'pt'
      ? `Reporte bugs, ideias de projeto, pedidos de addon ou de mentoria para ${st.ul(site.email)} — ou use o formulário em ${st.dim(`${site.url}/pt#bugs`)}.`
      : `Report bugs, project ideas, addon or mentorship requests to ${st.ul(site.email)} — or use the form at ${st.dim(`${site.url}/en#bugs`)}.`
  P(bugsLine)

  if (!partial) {
    H(ui.sections.seeAlso)
    for (const item of ui.seeAlso.items) {
      out.push(
        ' '.repeat(INDENT) +
          `${st.bold(item.label)} ${st.dim('— ' + item.description)}  ${st.dim(item.href)}`
      )
    }
    out.push(
      ' '.repeat(INDENT) +
        `${st.bold(`${site.command}(7)`)} ${st.dim('— the web version')}  ${st.dim(site.url)}`
    )

    const now = new Date()
    const words = ui.chrome.played
    const fmt = ({ years, months }: { years: number; months: number }) => {
      const parts: string[] = []
      if (years) parts.push(`${years} ${words.years[years === 1 ? 0 : 1]}`)
      if (months || !parts.length)
        parts.push(`${months} ${words.months[months === 1 ? 0 : 1]}`)
      return parts.join(', ')
    }
    out.push('', ' '.repeat(INDENT) + `${st.accent('/')}played`)
    out.push(
      ' '.repeat(INDENT) +
        `${st.dim(words.total + ':')} ${st.accent(fmt(monthsBetween(careerStart(), now)))}`
    )
    const level = currentLevelStart()
    if (level)
      out.push(
        ' '.repeat(INDENT) +
          `${st.dim(words.level + ':')} ${st.accent(fmt(monthsBetween(level, now)))}`
      )
  }

  out.push(
    '',
    center(
      st.dim(new URL(site.url).host),
      st.dim(__BUILD_DATE__),
      st.bold(title)
    ),
    ''
  )
  return out.join('\n')
}

function help(lang: Locale): string {
  const pt = lang === 'pt'
  return [
    `${site.command} ${__VERSION__} — ${pt ? 'a man page de Pedro Mello no seu terminal' : "Pedro Mello's man page in your terminal"}`,
    '',
    pt ? 'uso:' : 'usage:',
    `  npx ${site.command} [${services.map((s) => s.flag).join('|')}] [--contact]`,
    `  npx ${site.command} [--lang en|pt] [--no-color] [--no-pager] [--help] [--version]`,
    '',
    pt
      ? '  Sem flags, imprime o manual inteiro. Uma flag de serviço imprime só aquela opção e como entrar em contato.'
      : '  With no flags, prints the whole manual. A service flag prints that option and how to get in touch.',
    '',
  ].join('\n')
}

// ---------- main ----------

const args = parseArgs(process.argv.slice(2))
if (args.version) {
  console.log(__VERSION__)
} else if (args.help) {
  process.stdout.write(help(args.lang))
} else {
  const text = render(args)
  const rows = process.stdout.rows || 24
  const lines = text.split('\n').length
  if (args.pager && lines > rows) {
    const pager = process.env.PAGER || 'less'
    const res = spawnSync(pager, pager === 'less' ? ['-R', '-F', '-X'] : [], {
      input: text,
      stdio: ['pipe', 'inherit', 'inherit'],
    })
    if (res.error) console.log(text)
  } else {
    console.log(text)
  }
}
