// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Note: Tailwind CSS is usually an Astro integration, not a Vite plugin for Astro.

export default defineConfig({
  // URL completa de tu sitio desplegado en GitHub Pages.
  // Si tu repositorio es 'alburadev/LandigPage', tu URL será 'https://alburadev.github.io/LandigPage'.
  site: 'https://alburadev.github.io/LandigPage',

  base: '/LandigPage/',

  integrations: [], // Aquí irían tus integraciones de Astro, por ejemplo: tailwind(),
  vite: {
     plugins: [tailwindcss()] // Esta línea generalmente no es necesaria si usas la integración de Astro.
  },

  devToolbar: {
    enabled: false, 
  },
});