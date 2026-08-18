const sharp = require('sharp');

const POSTER = 'C:/Users/ulric/Documents/kohi-by-ifuku/public/assets/video/kohi-hero-poster.jpg';
const WORDMARK = 'C:/Users/ulric/Documents/kohi-by-ifuku/public/assets/brand/kohi-wordmark-washi-800.png';
const OUT = 'C:/Users/ulric/Documents/kohi-by-ifuku/public/assets/og-image.jpg';

const W = 1200, H = 630;

async function main() {
  const cropH = Math.round(720 / (W / H)); // source width 720
  const base = await sharp(POSTER)
    .extract({ left: 0, top: 100, width: 720, height: Math.min(cropH, 1150) })
    .resize(W, H)
    .modulate({ brightness: 0.85 })
    .toBuffer();

  // scrim gradient bottom-left for legibility
  const scrimSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="1" x2="1" y2="0.4">
        <stop offset="0%" stop-color="#14140F" stop-opacity="0.92"/>
        <stop offset="55%" stop-color="#14140F" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#14140F" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
  </svg>`;
  const scrim = await sharp(Buffer.from(scrimSvg)).png().toBuffer();

  const wordmarkMeta = await sharp(WORDMARK).metadata();
  const wmW = 340;
  const wmH = Math.round(wmW * (wordmarkMeta.height / wordmarkMeta.width));
  const wordmark = await sharp(WORDMARK).resize({ width: wmW }).toBuffer();

  await sharp(base)
    .composite([
      { input: scrim, left: 0, top: 0 },
      { input: wordmark, left: 64, top: H - wmH - 56 },
    ])
    .jpeg({ quality: 85 })
    .toFile(OUT);

  console.log('wrote', OUT);
}

main().catch(e => { console.error(e); process.exit(1); });
