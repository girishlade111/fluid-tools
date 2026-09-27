# Fluid Tools — FlowBuilder Landing Page

A Next.js marketing landing page for **FlowBuilder**, a (concept) internal-tools builder — "Build Internal Tools That Actually Flow. Fast to launch. Easy to evolve. Built to feel invisible."

Originally generated with [v0.app](https://v0.app); now maintained as a standalone template.

## Features

- **Full-screen hero** with fixed navigation, headline CTA, and "Get Started" buttons
- **Animated space video background** — looping ambient space video over a radial-gradient + film-grain noise overlay
- **Responsive nav** — desktop links + CTA, mobile hamburger menu with slide-down panel
- **Feature / template / pricing sections** — typical SaaS landing structure (sections scaffolded on the single page)
- **Dark space theme** — deep-navy palette with glassy backdrop-blur buttons
- **Inter font** via `next/font`, theme provider for dark/light support
- Static-export ready — no API routes, no server actions, fully client-side

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS (v3, `tailwind.config.ts`), autoprefixer
- **UI:** Radix UI primitives, lucide-react icons, class-variance-authority, clsx, tailwind-merge
- **Extras:** react-hook-form + zod, recharts, embla-carousel-react, date-fns, cmdk, sonner toasts
- **Analytics:** @vercel/analytics

## Quick Start

```bash
# Install dependencies (npm recommended on this setup)
npm install --legacy-peer-deps

# Run the dev server
npm run dev
# open http://localhost:3000

# Build for production (static export)
npm run build
# static output is written to ./out
```

## Project Structure

```
app/
  layout.tsx        # root layout, Inter font, metadata, globals
  page.tsx          # the full landing page (nav, hero, sections)
  globals.css       # Tailwind + global styles
components/
  ui/button.tsx     # reusable button (cva variants)
  theme-provider.tsx
lib/
  utils.ts          # cn() class-merging helper
public/             # static assets
tailwind.config.ts  # theme tokens
next.config.mjs     # static export (output: 'export'), unoptimized images
```

## Notes

- The hero background video is hot-linked from Vercel Blob storage
  (`hebbkx1anhila5yf.public.blob.vercel-storage.com`). If it ever stops
  resolving, replace `public/space.mp4` reference with a local file.
- Landing-page links (Product / Templates / Pricing / Docs / Login) are
  placeholder `#` anchors — wire them to your real pages.

## Env Vars

None required. The site runs entirely client-side.

## Deployment

The site is a fully static export (`output: 'export'` in `next.config.mjs`):

- **GitHub Pages** — build with `npm run build` and publish the `out/` folder to the `gh-pages` branch.
- **Vercel** — import the repo; no build overrides needed.
- **Any static host** (Netlify, Cloudflare Pages) — publish directory is `out/`.

Note: the GitHub Pages build uses `basePath`/`assetPrefix` for the `/<repo>` subpath in `next.config.mjs`; if you deploy to a root domain (e.g. Vercel), remove those settings.

---

Built by Girish Lade — https://ladestack.in
