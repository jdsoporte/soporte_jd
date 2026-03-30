import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.soporte-jd.com', // ← Cambia esto por tu dominio real
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
