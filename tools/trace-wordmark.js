const potrace = require('potrace');
const fs = require('fs');

const SRC = 'C:/Users/ulric/Documents/kohi-by-ifuku/public/assets/brand/kohi-wordmark-ink-1600.png';
const OUT = 'C:/Users/ulric/Documents/kohi-by-ifuku/public/assets/brand/kohi-wordmark.svg';

potrace.trace(SRC, {
  threshold: 128,
  turdSize: 8,
  optTolerance: 0.3,
  color: 'currentColor',
  background: 'transparent',
}, (err, svg) => {
  if (err) { console.error(err); process.exit(1); }
  fs.writeFileSync(OUT, svg);
  console.log('wrote', OUT, svg.length, 'bytes');
});
