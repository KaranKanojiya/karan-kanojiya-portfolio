import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Serve the standalone app at / so opening localhost:5173 works without @dfinity packages
function serveStandaloneAtRoot() {
  return {
    name: 'serve-standalone-at-root',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/' || req.url === '/index.html') {
          const htmlPath = path.resolve(__dirname, 'index-standalone.html');
          if (fs.existsSync(htmlPath)) {
            req.url = '/index-standalone.html';
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  root: __dirname,
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index-standalone.html'),
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), serveStandaloneAtRoot()],
  server: {
    port: 5173,
    open: '/',
  },
});
