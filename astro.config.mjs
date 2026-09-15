// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.midnightboogie.net',
  vite: {
    plugins: [tailwind()]
    // ← Eliminado: build.rollupOptions.output.manualChunks
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
    assetsInlineLimit: 4096
  }
});