const sharp = require('sharp');

const OUT = 'C:/Users/ulric/Documents/kohi-by-ifuku/public/assets/photos';
const HIRES = 'C:/Users/ulric/AppData/Local/Temp/kohi-frames-hires';

const jobs = [
  {
    name: 'room-doorway-plant',
    src: `${HIRES}/room-6s.jpg`,
    crop: { left: 300, top: 330, width: 420, height: 525 }, // 4:5
  },
  {
    name: 'session-turntable',
    src: `${HIRES}/vinyl-3s.jpg`,
    crop: { left: 0, top: 0, width: 560, height: 700 }, // 4:5
  },
];

async function main() {
  for (const job of jobs) {
    const base = sharp(job.src).extract(job.crop);
    const w = job.crop.width;
    await base.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(`${OUT}/${job.name}-${w}.jpg`);
    await base.clone().webp({ quality: 80 }).toFile(`${OUT}/${job.name}-${w}.webp`);
    const halfW = Math.round(w * 0.6);
    const halfBase = sharp(job.src).extract(job.crop).resize({ width: halfW });
    await halfBase.clone().webp({ quality: 80 }).toFile(`${OUT}/${job.name}-${halfW}.webp`);
    console.log('done', job.name, w, halfW);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
