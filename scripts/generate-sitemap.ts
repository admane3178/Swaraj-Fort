// Simple sitemap generator for Swaraj‑Forts
// This script scans the src/pages directory for route files and creates a basic sitemap.xml.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.resolve(__dirname, '../src/pages');
const outputPath = path.resolve(__dirname, '../public/sitemap.xml');

function isRouteFile(file: string): boolean {
  return file.endsWith('.tsx') && !file.toLowerCase().includes('test');
}

function fileToUrl(file: string): string {
  const name = path.basename(file, '.tsx');
  if (name.toLowerCase() === 'index') return '/';
  return `/${name}`;
}

const files = fs.readdirSync(pagesDir).filter(isRouteFile);
const urls = files.map(fileToUrl);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map(u => `  <url><loc>https://example.com${u}</loc></url>`)
  .join('\n')}\n</urlset>`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, sitemap);
console.log('Sitemap generated at', outputPath);
