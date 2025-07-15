// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL completa de tu sitio desplegado.
  // Es crucial para la generación de sitemaps, RSS feeds, etc.
  site: 'https://alburaproducciones.github.io/',

  // Ruta base de tu sitio.
  // Para un sitio de GitHub Pages de usuario/organización (alburaproducciones.github.io),
  // si el contenido está en la raíz del repositorio, usa '/'.
  // Si tu sitio estuviera en un subdirectorio (ej: alburaproducciones.github.io/mi-repo/),
  // deberías usar '/mi-repo/'.
  base: '/',

  // Define el tipo de salida de la construcción.
  // 'static' es el valor por defecto y es necesario para GitHub Pages.
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});