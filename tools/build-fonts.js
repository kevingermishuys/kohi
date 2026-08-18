const fs = require('fs');
const https = require('https');
const path = require('path');

const CSS_SRC = path.join(__dirname, 'fonts.css');
const FONT_OUT = 'C:/Users/ulric/Documents/kohi-by-ifuku/public/assets/fonts';
const CSS_OUT = 'C:/Users/ulric/Documents/kohi-by-ifuku/public/assets/fonts/fonts.css';

// which family/weight combos we actually want (per brief §2.3)
const WANT = {
  'Shippori Mincho B1': [700],
  'Zen Kaku Gothic New': [400, 500],
  'DM Mono': [300, 400],
};

const raw = fs.readFileSync(CSS_SRC, 'utf8');
const blocks = raw.split(/\/\*\s*(latin(?:-ext)?)\s*\*\/\s*/).slice(1);
// after split: [subset, blockText, subset, blockText, ...]

const fontFaces = [];
for (let i = 0; i < blocks.length; i += 2) {
  const subset = blocks[i];
  const text = blocks[i + 1];
  const familyM = text.match(/font-family:\s*'([^']+)'/);
  const weightM = text.match(/font-weight:\s*(\d+)/);
  const urlM = text.match(/url\(([^)]+)\)/);
  if (!familyM || !weightM || !urlM) continue;
  const family = familyM[1];
  const weight = parseInt(weightM[1], 10);
  if (!WANT[family] || !WANT[family].includes(weight)) continue;
  if (subset !== 'latin' && subset !== 'latin-ext') continue;
  fontFaces.push({ family, weight, subset, url: urlM[1] });
}

console.log('font faces to fetch:', fontFaces.length);
fontFaces.forEach(f => console.log(' ', f.family, f.weight, f.subset, f.url));

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode !== 200) return reject(new Error('status ' + res.statusCode + ' for ' + url));
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => { fs.writeFileSync(dest, Buffer.concat(chunks)); resolve(); });
    }).on('error', reject);
  });
}

function slug(s) { return s.toLowerCase().replace(/\s+/g, '-'); }

async function main() {
  const cssLines = [];
  for (const f of fontFaces) {
    const filename = `${slug(f.family)}-${f.weight}-${f.subset}.woff2`;
    const dest = path.join(FONT_OUT, filename);
    await download(f.url, dest);
    const stat = fs.statSync(dest);
    console.log('downloaded', filename, stat.size, 'bytes');

    const unicodeRange = f.subset === 'latin'
      ? 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
      : 'U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF';

    cssLines.push(`@font-face {
  font-family: '${f.family}';
  font-style: normal;
  font-weight: ${f.weight};
  font-display: swap;
  src: url('/assets/fonts/${filename}') format('woff2');
  unicode-range: ${unicodeRange};
}`);
  }
  fs.writeFileSync(CSS_OUT, cssLines.join('\n\n') + '\n');
  console.log('wrote', CSS_OUT);

  const totalBytes = fontFaces.reduce((sum, f) => {
    const filename = `${slug(f.family)}-${f.weight}-${f.subset}.woff2`;
    return sum + fs.statSync(path.join(FONT_OUT, filename)).size;
  }, 0);
  console.log('total font payload:', (totalBytes / 1024).toFixed(1), 'KB');
}

main().catch(e => { console.error(e); process.exit(1); });
