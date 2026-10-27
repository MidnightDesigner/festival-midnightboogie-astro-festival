import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.midnightboogie.net',

  integrations: [
    // sitemap eliminado: usaremos sitemap manual con hreflang correctos
  ],

  vite: {
    plugins: [tailwind()],
  },

  build: {
    inlineStylesheets: 'auto',
    assetsInlineLimit: 4096,
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'eu', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
      fallbackType: 'redirect',
    },
  },
});