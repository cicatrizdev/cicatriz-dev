# cicatriz(1)

Source of [cicatriz.dev](https://cicatriz.dev) — the personal site of Pedro "Cicatriz" Mello, written as a man page.

## Stack

- [Next.js](https://nextjs.org) (App Router, React 19, TypeScript) deployed on Vercel
- CSS Modules + custom properties (`src/styles/tokens.css`) — light "paper" and dark "phosphor" themes
- [Resend](https://resend.com) for the contact form (`/api/contact`)
- No UI kit, no icon library, no CSS framework

## Editing the site

Everything visible lives in `src/content/`:

| File                   | What                                        |
| ---------------------- | ------------------------------------------- |
| `ui/en.ts`, `ui/pt.ts` | All prose, per locale (typed by `types.ts`) |
| `services.ts`          | OPTIONS — services offered                  |
| `projects.ts`          | EXAMPLES — selected work                    |
| `experience.ts`        | HISTORY — professional timeline             |
| `skills.ts`            | DESCRIPTION — stack tags                    |
| `site.ts`              | Name, URLs, email, analytics id             |

The avatar is the GitHub profile picture (`site.avatar`), so updating it on GitHub updates the site; `src/assets/avatar.jpg` is only the fallback for the social card.

Structured entries carry both languages (`{ en, pt }`), so a missing translation is a type error.

## Development

```bash
nvm use          # Node 22 (.nvmrc)
npm install
cp .env.example .env.local   # optional: RESEND_API_KEY for real emails
npm run dev
```

Without `RESEND_API_KEY` the contact route logs the message instead of sending it.

| Script                   | Purpose                                     |
| ------------------------ | ------------------------------------------- |
| `npm run dev`            | local server at http://localhost:3000       |
| `npm run build`          | production build                            |
| `npm run check`          | lint + typecheck + prettier                 |
| `node scripts/icons.mjs` | regenerate favicons from `src/app/icon.svg` |
| `npm run cli`            | build and run the terminal man page         |

## `npx cicatriz`

The same manual page in the terminal, built from the same content:

```bash
npx cicatriz            # full man page (pages through less)
npx cicatriz --mentor   # one option + how to get in touch
npx cicatriz --lang pt  # Portuguese (defaults to your LANG)
```

Source in `cli/`, bundled by `npm run cli:build` (esbuild, content baked in). Publish from `cli/` with `npm publish` after building.

## Routes

- `/` → redirects to `/pt` or `/en` (cookie, then `Accept-Language`, then English)
- `/en`, `/pt` — the page; `/{locale}/opengraph-image` — social card
- `/api/contact` — `POST` JSON or form-encoded
- `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`

## Deploy

Pushes to `master` deploy to production on Vercel. Required environment variables: `RESEND_API_KEY`, optionally `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` (see `.env.example`).

## License

MIT — see [LICENSE](LICENSE). Content and images are © Pedro Mello.
