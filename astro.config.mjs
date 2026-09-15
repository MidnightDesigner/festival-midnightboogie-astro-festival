// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.midnightboogie.net', // Importante para canonical URLs
  vite: {
    plugins: [tailwind()],
    build: {
      // Optimitzación de assets
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['@astrojs/sitemap']
          }
        }
      }
    }
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto', // CSS crítico inline
    assetsInlineLimit: 4096   // Imágenes pequeñas inline (<4KB)
  }
});