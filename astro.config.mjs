// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Note: Tailwind CSS is usually an Astro integration, not a Vite plugin for Astro.

// https://astro.build/config
export default defineConfig({
  // URL completa de tu sitio desplegado.
  // Es crucial para la generación de sitemaps, RSS feeds, etc.
  site: 'https://alburadev.github.io',

  // Ruta base de tu sitio.
  // Para un sitio de GitHub Pages de usuario/organización (alburaproducciones.github.io),
  // si el contenido está en la raíz del repositorio, usa '/'.
  // Si tu sitio estuviera en un subdirectorio (ej: alburaproducciones.github.io/mi-repo/),
  // deberías usar '/mi-repo/'.
  base: '/',

  // Define el tipo de salida de la construcción.
  // 'static' es el valor por defecto y es necesario para GitHub Pages.
  output: 'static',

  // --- Integraciones de Astro ---
  // Para Tailwind CSS, deberías instalarlo como una integración de Astro
  // en lugar de un plugin de Vite en la mayoría de los casos.
  // Si ya lo instalaste con `npx astro add tailwind`, no necesitas la parte `vite.plugins`.
  integrations: [], // Aquí irían tus integraciones de Astro, por ejemplo: tailwind(),

  // --- Configuración de Vite (si es necesaria para otras cosas) ---
  vite: {
    // Si necesitas plugins de Vite que no sean integraciones de Astro, irían aquí.
     plugins: [tailwindcss()] // Esta línea generalmente no es necesaria si usas la integración de Astro.
  },

  // --- Configuración de Astro Dev Toolbar ---
  devToolbar: {
    enabled: false, // Set to false to disable the toolbar
  },
});