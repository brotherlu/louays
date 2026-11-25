import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://louays.com',
  output: 'static',
  build: { format: 'directory' },
  redirects: { '/services': '/#services' },
});
