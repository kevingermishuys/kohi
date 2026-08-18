const sharp = require('sharp');
const fs = require('fs');

const OUT_DIR = 'C:/Users/ulric/Documents/kohi-by-ifuku/public';
const GLYPH = 'C:/Users/ulric/AppData/Local/Temp/kohi-frames-hires/o-glyph.png';

const SIZE = 512;
const WASHI = '#D4C9B7';
const INK = '#14140F';

async function main() {
  // 1. squircle mask (superellipse-ish rounded square)
  const r = Math.round(SIZE * 0.27);
  const squircleSvg = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="${SIZE}" height="${SIZE}" rx="${r}" ry="${r}" fill="#fff"/>
  </svg>`;
  const mask = await sharp(Buffer.from(squircleSvg)).png().toBuffer();

  // 2. washi background
  const bg = await sharp({
    create: { width: SIZE, height: SIZE, channels: 4, background: WASHI }
  }).png().toBuffer();

  // 3. ink glyph, recolored + sized to ~64% of canvas, centered
  const glyphMeta = await sharp(GLYPH).metadata();
  const glyphTargetW = Math.round(SIZE * 0.62);
  const glyphTargetH = Math.round(glyphTargetW * (glyphMeta.height / glyphMeta.width));

  const { data, info } = await sharp(GLYPH).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const inkRgb = [0x14, 0x14, 0x0F];
  for (let i = 0; i < data.length; i += info.channels) {
    data[i] = inkRgb[0]; data[i + 1] = inkRgb[1]; data[i + 2] = inkRgb[2];
  }
  const glyphInk = await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .resize({ width: glyphTargetW, height: glyphTargetH })
    .png()
    .toBuffer();

  const left = Math.round((SIZE - glyphTargetW) / 2);
  const top = Math.round((SIZE - glyphTargetH) / 2) + Math.round(SIZE * 0.02); // tiny optical nudge down

  const composed = await sharp(bg)
    .composite([{ input: glyphInk, left, top }])
    .png()
    .toBuffer();

  const squared = await sharp(composed)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  fs.writeFileSync(`${OUT_DIR}/favicon-512.png`, squared);
  await sharp(squared).resize(180, 180).png().toFile(`${OUT_DIR}/apple-touch-icon.png`);
  await sharp(squared).resize(32, 32).png().toFile(`${OUT_DIR}/favicon-32.png`);
  await sharp(squared).resize(16, 16).png().toFile(`${OUT_DIR}/favicon-16.png`);

  const b64 = squared.toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">
<image width="${SIZE}" height="${SIZE}" href="data:image/png;base64,${b64}"/>
</svg>`;
  fs.writeFileSync(`${OUT_DIR}/favicon.svg`, svg);

  console.log('favicon assets written');
}

main().catch(e => { console.error(e); process.exit(1); });
