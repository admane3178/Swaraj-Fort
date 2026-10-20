// scripts/generate-hero-images.js
// Run with: npm run hero:generate
// Generates WebP and AVIF hero images at 640w, 1024w, 1920w from the source file.

import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const srcJpg = path.resolve(__dirname, '..', 'public', 'assets', 'hero', 'shivaji-hero.jpg');
const srcPng = path.resolve(__dirname, '..', 'public', 'assets', 'hero', 'shivaji-hero.png');
const src = fs.existsSync(srcJpg) ? srcJpg : srcPng;
if (!fs.existsSync(src)) {
  console.error('Source hero image not found:', src);
  process.exit(1);
}
const outDir = path.resolve(__dirname, '..', 'public', 'assets', 'hero');

const sizes = [640, 1024, 1920];

(async () => {
  if (!fs.existsSync(src)) {
    console.error('Source hero image not found:', src);
    process.exit(1);
  }
  for (const width of sizes) {
    const filenameWebp = `shivaji-hero-${width}.webp`;
    const filenameAvif = `shivaji-hero-${width}.avif`;
    await sharp(src)
      .resize({ width })
      .toFormat('webp')
      .toFile(path.join(outDir, filenameWebp));
    await sharp(src)
      .resize({ width })
      .toFormat('avif')
      .toFile(path.join(outDir, filenameAvif));
    console.log(`Generated ${filenameWebp} & ${filenameAvif}`);
  }
})();
