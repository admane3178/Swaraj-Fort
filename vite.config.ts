import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react(),
VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Swaraj Forts',
        short_name: 'Swaraj',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffb800', // saffron
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'dynamic-cache',
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    port: 3001,
    strictPort: true,
    host: "::",
    hmr: { overlay: false },
  },
  optimizeDeps: {
    include: ['leaflet.markercluster'],
  },
});
