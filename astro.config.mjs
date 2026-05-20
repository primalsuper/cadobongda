
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cadobongda.org',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true
});
