import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    strictPort: true,
    host: true, // Allows external access
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Clears previous build
    cssCodeSplit: true, // Extracts CSS into separate files
    minify: 'esbuild',
  },
  optimizeDeps: {
    include: ["react-awesome-reveal"],
  },
});
// Compare this snippet from client/src/components/Contact.jsx: