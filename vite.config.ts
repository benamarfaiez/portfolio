// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const isAnalyze = mode === 'analyze'

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // Génère un fichier stats.json uniquement en mode analyse
      reportCompressedSize: true,
      rollupOptions: {
        // Optionnel : nomme ton chunk principal pour plus de clarté
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'framer-motion'],
            ui: ['lucide-react', 'tailwind-merge'],
          },
        },
      },
      // Active la génération du stats file pour vite-bundle-visualizer
      ...(isAnalyze && {
        rollupOptions: {
          output: {
            // Important : génère le fichier stats.json
            treeshake: true,
          },
        },
        // Cette option force la création du fichier .stats.json
        // vite-bundle-visualizer le lit automatiquement
      }),
    },
  }
})