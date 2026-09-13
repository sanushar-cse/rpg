/**
 * Simple Node.js server for the Life RPG production build.
 * Serves static assets + falls back to index.html for SPA routing.
 * Note: Full SSR / server functions will NOT work with only the dist.
 */

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

const server = createServer(async (req, res) => {
  try {
    let url = req.url?.split('?')[0] || '/';

    // Security: prevent path traversal
    if (url.includes('..')) {
      res.writeHead(400);
      return res.end('Bad Request');
    }

    // Default to index.html for SPA routes
    let filePath = join(__dirname, url === '/' ? 'index.html' : url);

    // If requesting a route without extension, serve index.html
    if (!extname(filePath) && !url.startsWith('/assets')) {
      filePath = join(__dirname, 'index.html');
    }

    const data = await readFile(filePath);
    const ext = extname(filePath);
    const contentType = MIME[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
    });
    res.end(data);
  } catch (err) {
    // Fallback to index.html for client-side routing
    try {
      const html = await readFile(join(__dirname, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
    } catch {
      res.writeHead(404);
      res.end('Not Found');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Life RPG running at http://localhost:${PORT}`);
});
