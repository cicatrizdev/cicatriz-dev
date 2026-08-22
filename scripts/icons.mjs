// Generates raster icons from src/app/icon.svg. Run: node scripts/icons.mjs
import sharp from 'sharp'
import { readFile, writeFile } from 'node:fs/promises'

const svg = await readFile(new URL('../src/app/icon.svg', import.meta.url))

async function png(size, out) {
  await sharp(svg, { density: 512 }).resize(size, size).png().toFile(out)
  console.log('wrote', out)
}

await png(180, 'src/app/apple-icon.png')
await png(192, 'public/icons/icon-192.png')
await png(512, 'public/icons/icon-512.png')

// favicon.ico: an ICO container holding a single 32px PNG (supported since Vista).
const png32 = await sharp(svg, { density: 512 }).resize(32, 32).png().toBuffer()
const header = Buffer.alloc(6 + 16)
header.writeUInt16LE(0, 0) // reserved
header.writeUInt16LE(1, 2) // type: icon
header.writeUInt16LE(1, 4) // count
header.writeUInt8(32, 6) // width
header.writeUInt8(32, 7) // height
header.writeUInt8(0, 8) // palette
header.writeUInt8(0, 9) // reserved
header.writeUInt16LE(1, 10) // planes
header.writeUInt16LE(32, 12) // bpp
header.writeUInt32LE(png32.length, 14) // size
header.writeUInt32LE(22, 18) // offset
await writeFile('src/app/favicon.ico', Buffer.concat([header, png32]))
console.log('wrote src/app/favicon.ico')
