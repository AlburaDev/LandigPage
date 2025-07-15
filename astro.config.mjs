// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Note: Tailwind CSS is usually an Astro integration, not a Vite plugin for Astro.


// Determina la ruta base y la URL completa del sitio dinámicamente
let base_path = '/'; // Por defecto, para desarrollo local
let site_url = 'https://alburadev.github.io'; // URL base del usuario/organización en GitHub Pages

// Si estamos en un entorno de GitHub Actions (producción), ajustamos la base y el sitio
// La variable de entorno GITHUB_REPOSITORY tiene el formato 'propietario/nombre-del-repositorio'
if (process.env.GITHUB_REPOSITORY) {
  const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]; // Extrae solo el nombre del repositorio (ej: 'LandigPage')
  base_path = `/${repoName}/`; // La base será /nombre-del-repositorio/ (¡con barra final!)
  site_url = `https://alburadev.github.io/${repoName}`; // El sitio completo incluirá el nombre del repositorio
}

// https://astro.build/config
export default defineConfig({
 // URL completa de tu sitio desplegado.
  // Es crucial para la generación de sitemaps, RSS feeds, y para que Astro resuelva correctamente las URLs absolutas.
  // Para un repositorio de proyecto en GitHub Pages (ej: 'alburadev/LandigPage'),
  // la URL debe ser 'https://alburadev.github.io/LandigPage'.
  site: site_url,

  // Ruta base de tu sitio.
  // Esto es CRUCIAL para que los activos (CSS, JS, imágenes) se carguen correctamente.
  // En local, será '/', lo que funciona bien.
  // En GitHub Pages, será '/nombre-del-repositorio/' (ej: '/LandigPage/').
  base: base_path,

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