# Kaji Landing

Landing page for [Kaji](https://kaji.sh), a native macOS command center for terminal-native coding agents.

## Stack

- Next.js App Router
- Tailwind CSS
- JSON-managed landing, changelog, legal, and SEO content
- Static and generated Open Graph assets
- Optimized hero video with poster fallback

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
```

## Content

Main editable content lives in:

- `data/site.json`
- `data/changelog.json`
- `data/legal.json`

Generated crawler and SEO routes include:

- `/sitemap.xml`
- `/robots.txt`
- `/llms.txt`
- `/pricing.md`
- route-specific Open Graph images

## Media

Hero video assets live in `public/media/`:

- `kaji-hero-desktop.mp4`
- `kaji-hero-mobile.mp4`
- `kaji-hero-desktop.webm`
- `kaji-hero-mobile.webm`
- `kaji-hero-poster.webp`
