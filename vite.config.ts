import { defineConfig } from 'vite';

// Relative base + hash routing: the build runs from any static host or sub-path.
export default defineConfig({
  base: './',
  server: { port: 5173, strictPort: true },
  build: { target: 'es2022', cssMinify: true },
});
