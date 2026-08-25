// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Regroupe les grosses bibliothèques indépendantes et sûres
            if (id.includes('framer-motion')) {
              return 'vendor-animation';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('i18next')) {
              return 'vendor-i18n';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});