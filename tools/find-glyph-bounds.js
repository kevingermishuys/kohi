const sharp = require('sharp');

const SRC = 'C:/Users/ulric/Documents/kohi-by-ifuku/public/assets/brand/kohi-wordmark-ink-1600.png';

async function main() {
  const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const colHasInk = new Array(width).fill(false);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const idx = (y * width + x) * channels;
      if (data[idx + 3] > 20) { colHasInk[x] = true; break; }
    }
  }
  // find runs of true
  const runs = [];
  let start = null;
  for (let x = 0; x < width; x++) {
    if (colHasInk[x] && start === null) start = x;
    if (!colHasInk[x] && start !== null) { runs.push([start, x - 1]); start = null; }
  }
  if (start !== null) runs.push([start, width - 1]);
  // merge runs closer than 15px gap (macron + base letter are separate runs)
  const merged = [];
  for (const r of runs) {
    if (merged.length && r[0] - merged[merged.length - 1][1] < 20) {
      merged[merged.length - 1][1] = r[1];
    } else {
      merged.push([...r]);
    }
  }
  console.log('raw runs:', runs);
  console.log('merged clusters:', merged);
}

main().catch(e => { console.error(e); process.exit(1); });
