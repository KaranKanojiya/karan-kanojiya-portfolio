import { defineConfig, type Plugin } from 'vite';
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

// Copy dist/index-standalone.html to dist/index.html after a build so the site root
// works on `vite preview` and on static hosts, which look for index.html.
function emitIndexHtml(): Plugin {
  let root = __dirname;
  let outDir = 'dist';
  return {
    name: 'emit-index-html',
    apply: 'build',
    configResolved(config) {
      root = config.root;
      outDir = config.build.outDir;
    },
    closeBundle() {
      const from = path.resolve(root, outDir, 'index-standalone.html');
      const to = path.resolve(root, outDir, 'index.html');
      if (fs.existsSync(from)) fs.copyFileSync(from, to);
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
  plugins: [react(), serveStandaloneAtRoot(), emitIndexHtml()],
  server: {
    port: 5173,
    open: '/',
  },
});
