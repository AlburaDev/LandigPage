import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Import Astro's Tailwind integration

export default defineConfig({
  // Full URL of your deployed site on GitHub Pages.
  // If your repository is 'alburadev/LandigPage', your URL will be 'https://alburadev.github.io/LandigPage'.
  site: 'https://alburadev.github.io/LandigPage',

  base: '/LandigPage/',

  integrations: [tailwind()], // Correctly add Tailwind CSS as an Astro integration
  // vite: {
  //   plugins: [tailwindcss()] // This line is not needed and causes the error
  // },

  devToolbar: {
    enabled: false,
  },
});