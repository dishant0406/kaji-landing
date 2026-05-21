# Conductor reference DNA

Source inspected: https://www.conductor.build/

Fetched assets for inspection only:
- HTML: `/tmp/conductor-reference/index.html`
- CSS chunks: `/tmp/conductor-reference/style-0.css`, `/tmp/conductor-reference/style-1.css`

Extracted dark-mode values seen in the CSS bundle:
- Background family: `#0e0c0b`, `#121212`, `#191919`, `#212121`
- Foreground family: `#eae8e6`, `#f1f0ee`, `#fafafa`
- Muted text family: `#b3aca8`, `#b3b3b3cc`
- Border/surface accents: `#edebe81f`, `#6663`, `#6868684d`

Structure to adapt for Kaji:
1. Promo strip
2. Sticky minimal header
3. Narrow centered hero with product mark, headline, description, and two CTAs
4. Wide app screenshot
5. Compact credibility/tool grid
6. Dense cards below the fold
7. Small numbered how-it-works list
8. FAQ list
9. Closing CTA
10. Sparse multi-column footer

The implementation uses these observations as reference. It does not vendor the fetched CSS or copy Conductor brand assets.
