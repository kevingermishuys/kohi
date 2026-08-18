const sharp = require('sharp');
const path = require('path');

const SRC = 'C:/Users/ulric/.claude/uploads/060f2986-c9ac-47c4-b01c-2ef439565bd4/d7060188-kohiwordmarkwashi1600.png';
const OUT_DIR = 'C:/Users/ulric/Documents/kohi-by-ifuku/public/assets/brand';

const VARIANTS = {
  washi: [0xD4, 0xC9, 0xB7], // --washi
  light: [0xF5, 0xF2, 0xEC], // for photo overlays
  ink:   [0x14, 0x14, 0x0F], // --ink
};

const SIZES = [1600, 800, 400];

async function main() {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log('source raw:', width, height, channels);

  for (const [name, [r, g, b]] of Object.entries(VARIANTS)) {
    const buf = Buffer.from(data); // copy
    for (let i = 0; i < buf.length; i += channels) {
      buf[i] = r;
      buf[i + 1] = g;
      buf[i + 2] = b;
      // alpha (buf[i+3]) untouched -> preserves letterform shape/AA
    }
    const recolored = sharp(buf, { raw: { width, height, channels } });

    for (const size of SIZES) {
      const outPath = path.join(OUT_DIR, `kohi-wordmark-${name}-${size}.png`);
      await recolored.clone().resize({ width: size }).png({ compressionLevel: 9 }).toFile(outPath);
      console.log('wrote', outPath);
    }
  }
}

main().catch(e => { console.error(e); process.exit(1); });
