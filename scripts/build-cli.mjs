// Bundles the CLI with the site's content baked in. Run: node scripts/build-cli.mjs
import { build } from 'esbuild'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pkg = JSON.parse(await readFile(join(root, 'cli/package.json'), 'utf8'))

await build({
  entryPoints: [join(root, 'cli/src/cicatriz.ts')],
  outfile: join(root, 'cli/dist/cicatriz.js'),
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node18',
  alias: { '@': join(root, 'src') },
  banner: { js: '#!/usr/bin/env node' },
  define: {
    __VERSION__: JSON.stringify(pkg.version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  legalComments: 'none',
  logLevel: 'info',
})
