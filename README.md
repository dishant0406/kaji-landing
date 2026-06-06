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

## Hashnode Blog

Hashnode moved GraphQL API access behind publication Pro plans in May 2026. Blog pages use the paid API endpoint by default:

```bash
HASHNODE_GQL_ENDPOINT=https://gql-beta.hashnode.com
HASHNODE_PUBLICATION_HOST=your-publication.hashnode.dev
HASHNODE_TOKEN=optional-personal-access-token
HASHNODE_AUTHORIZATION=optional-exact-authorization-header
```

`HASHNODE_TOKEN` is sent as a bearer token. Use `HASHNODE_AUTHORIZATION` only if Hashnode support gives you an exact header value.

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
