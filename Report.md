# Swaraj‑Forts Project Report

## Overview
This repository implements a static website that showcases the rich heritage of forts in Maharashtra and the history of the Maratha empire, focusing on **Chhatrapati Shivaji Maharaj** and **Chhatrapati Sambhaji Maharaj**. The site provides detailed information about each fort, including altitude, location coordinates, historical significance, and images.

## Tech Stack
- **Framework:** React with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data:** Static TypeScript files (`src/data/forts.ts`, `src/data/timeline.ts`)
- **Image handling:** Images stored under `public/images/forts/`
- **Build:** Vite build for production deployment

## Features
- Interactive list of major forts with search and filter capabilities
- Dedicated pages for Shivaji Maharaj and Sambhaji Maharaj with timelines
- Responsive design for desktop and mobile
- Automatic image fetching script (`fetchImages.mjs`) that pulls high‑quality images from Wikipedia

## Data Model
- `Forts` – an array of objects with fields `id`, `name`, `altitude`, `lat`, `lng`, `description`, `image`
- `Timeline` – structured timeline events for each historical figure, each entry containing `year`, `title`, `details`

## Images
- All fort images are stored in `public/images/forts/`
- A placeholder image (`placeholder.svg`) is used when a specific image is unavailable
- The `fetchImages.mjs` script can be run to (re)download missing images.

## Deployment
1. Run `npm install` to install dependencies.
2. Build the site with `npm run build` – the output is placed in the `dist/` folder.
3. Deploy the `dist/` folder to any static‑hosting provider (GitHub Pages, Netlify, Vercel, etc.).

## Local Development
```bash
npm install
npm run dev   # starts Vite dev server at http://localhost:5173
```

## PDF Generation (this report)
A Node script (`generate-pdf.js`) uses **Puppeteer** to render this markdown to HTML and export it as **Swaraj‑Forts‑Report.pdf** placed in the project root.

---
*Report generated on $(date)*
