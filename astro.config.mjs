// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite:{
      plugins:[tailwindcss()]
  },

  image:{
      domains: ['coffeeshop.local', 'denisdev1.byethost18.com'],
  },

  adapter: netlify()
});