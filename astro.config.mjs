// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // O React entra aqui como integração oficial
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    // Esta linha abaixo resolve o erro de 'reading call' em muitos casos de conflito
    optimizeDeps: {
      exclude: ['@tailwindcss/vite']
    }
  }
});