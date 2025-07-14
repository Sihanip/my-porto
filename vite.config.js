import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    commonjs()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "lucide-react": "lucide-react/cjs" // ⬅️ Force CJS build
    }
  },
  build: {
    outDir: 'dist'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', 'cookie']
  },
  ssr: {
    noExternal: ['react-router', 'cookie', 'lucide-react'],
    external: ['react', 'react-dom'] // ⬅️ Mark react as external
  },
  base: './'
});
