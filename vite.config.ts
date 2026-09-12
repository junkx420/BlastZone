import { defineConfig } from 'vite';

// Relative base + hash routing: the build runs from any static host or sub-path.
export default defineConfig({
  base: './',
  // host: true bindet auf 0.0.0.0 – der Dev-Server ist damit aus dem ganzen LAN erreichbar.
  server: { port: 5173, strictPort: true, host: true },
  preview: { port: 4173, strictPort: true, host: true },
  build: { target: 'es2022', cssMinify: true },
});
