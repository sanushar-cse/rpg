# Life RPG (Production Build)

This is a ready-to-deploy package created from the production `dist` of Life RPG.

> **Important Limitation**  
> This package contains only the built frontend.  
> Full server-side features (SSR, server functions, real auth API, CSRF) require the original source code + backend.

## Structure

```
life-rpg-deploy/
├── index.html              ← Entry HTML
├── server-node.js          ← Simple Node server (for Railway/Render/VPS)
├── package.json
├── assets/                 ← All JS + CSS bundles
└── README.md
```

## How to run locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Deploy Options

### 1. Vercel / Netlify / Cloudflare Pages (Static)

- Just drag & drop this folder or connect the GitHub repo
- Set **output directory** / **publish directory** to the root of this folder
- It will work as a client-side SPA

### 2. Railway / Render / Any Node host

1. Push this folder to GitHub
2. Create new project → Deploy from GitHub
3. It will automatically run `npm start`

### 3. GitHub Pages

1. Push to a repository
2. Go to Settings → Pages
3. Source: Deploy from branch → `/ (root)`

## Notes

- Login / Signup will try to call `http://localhost:4000/api` (hardcoded in the build).  
  You need a real backend or you must rebuild from source with the correct API URL.
- Protected routes and server functions will not work without the original TanStack Start server.
