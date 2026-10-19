import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fortsToFetch = [
  { id: 'raigad', title: 'Raigad_Fort' },
  { id: 'pratapgad', title: 'Pratapgad' },
  { id: 'sinhagad', title: 'Sinhagad' },
  { id: 'torna', title: 'Torna_Fort' },
  { id: 'rajgad', title: 'Rajgad_Fort' },
  { id: 'shivneri', title: 'Shivneri_Fort' },
  { id: 'sindhudurg', title: 'Sindhudurg_Fort' },
  { id: 'vijaydurg', title: 'Vijaydurg_Fort' },
  { id: 'panhala', title: 'Panhala_Fort' },
  { id: 'lohagad', title: 'Lohagad' },
  { id: 'murud-janjira', title: 'Murud-Janjira' },
  { id: 'purandar', title: 'Purandar_Fort' },
  { id: 'rangana', title: 'Rangana_Fort' },
  { id: 'rajmachi', title: 'Rajmachi' },
  { id: 'suvarnadurg', title: 'Suvarnadurg' },
  { id: 'salher', title: 'Salher' },
  { id: 'daulatabad', title: 'Daulatabad_Fort' },
  { id: 'korigad', title: 'Korigad' },
  { id: 'harishchandragad', title: 'Harishchandragad' },
  { id: 'visapur', title: 'Visapur_Fort' },
  { id: 'tikona', title: 'Tikona' },
  { id: 'tung', title: 'Tung_Fort' },
  { id: 'vasota', title: 'Vasota_Fort' },
  { id: 'sajjangad', title: 'Sajjangad' },
  { id: 'ajinkyatara', title: 'Ajinkyatara' },
  { id: 'sudhagad', title: 'Sudhagad' },
  { id: 'karnala', title: 'Karnala_Fort' },
  { id: 'prabalgad', title: 'Prabalgad' },
  { id: 'harihar', title: 'Harihar_fort' },
  { id: 'kandhar', title: 'Kandhar_Fort' },
  { id: 'gawilghur', title: 'Gawilghur' },
  { id: 'padmadurg', title: 'Padmadurg' }
];

async function fetchImage(title, attempt = 1) {
  const maxAttempts = 3;
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=1000`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 SwarajyaApp/2.0'
      }
    });
    const text = await response.text();
    const data = JSON.parse(text);
    const pages = data?.query?.pages ?? {};
    const pageId = Object.keys(pages)[0];
    if (pageId === '-1') return null;
    const thumbnail = pages[pageId].thumbnail;
    return thumbnail ? thumbnail.source : null;
  } catch (error) {
    console.error(`Error fetching image for ${title} (attempt ${attempt}):`, error.message);
    if (attempt < maxAttempts) {
      await new Promise(r => setTimeout(r, attempt * 1000));
      return fetchImage(title, attempt + 1);
    }
    return null;
  }
}

async function downloadImage(url, dest) {
  try {
    execSync(`curl -s -L -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" -o${dest}" "${url}"`);
  } catch (error) {
    console.error(`Error downloading image from ${url}:`, error.message);
  }
}

async function main() {
  const assetsDir = path.join(__dirname, 'public', 'images', 'forts');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  const placeholderPath = path.join(__dirname, 'assets', 'placeholder.jpg');
  for (const fort of fortsToFetch) {
    const destPath = path.join(assetsDir, `${fort.id}.jpg`);
    if (fs.existsSync(destPath)) {
      const stats = fs.statSync(destPath);
      if (stats.size > 5000) {
        console.log(`Image for ${fort.title} already exists and is valid. Skipping.`);
        continue;
      } else {
        console.log(`Image for ${fort.title} is too small (${stats.size} bytes). Redownloading...`);
      }
    }
    console.log(`Fetching image for ${fort.title}...`);
    const imageUrl = await fetchImage(fort.title);
    if (imageUrl) {
      await downloadImage(imageUrl, destPath);
      console.log(`Saved to ${destPath}`);
    } else if (fs.existsSync(placeholderPath)) {
      fs.copyFileSync(placeholderPath, destPath);
      console.log(`Used placeholder for ${fort.title}`);
    } else {
      console.log(`No image found for ${fort.title} and no placeholder available.`);
    }
  }
}

main().catch(console.error);
