// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://paulinacywoniuk.com',
  // Note: NO 'base' line anymore — we're using the apex domain

  // Old addresses that moved. Anyone visiting /about (an old link, a
  // bookmark, your CV) lands on the About section of the homepage.
  redirects: {
    '/about': '/#about',
  },
});