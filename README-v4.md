# Little Values, Big Impact — v4 (2026-11-08)

Built from v3. v3 is untouched.

## What changed (user feedback, 2026-11-08 evening)
The landing page background was a solid green (`#2F5A2A`) with the woodland
illustration only at the borders (tree trunks + pine silhouettes). v4 puts the
illustration across the whole page and removes the green solid backgrounds.

- **New asset: `forest-bg.webp`** (1920×640, ~200 KB) — a wide watercolour
  woodland illustration in the book-cover style: deer, squirrel, bear, bunny,
  hedgehog, bluebird and bees, trees framing the sides, soft bright cream
  centre so the parchment pages stay readable. Generated for this site.
- **Full-page illustrated background:** the fixed `.scene` layer now paints
  `forest-bg.webp` (cover, fixed) instead of the green sky gradient. The
  parchment pages sit on top of it. Preloaded in `<head>`.
- **Green solids removed:** page background `#2F5A2A` → warm cream `#F6EED6`
  (fallback under the illustration); buy panel `#1F4A1F` → warm wood brown
  `#3A2A18`; footer band `--night` `#1E3A1B` → `#3A2A18`; `theme-color` and
  manifest colours → `#F7EFD2`. Dark mode keeps the same illustration with a
  dark veil over it (background `#20180F`, band `#171008`) — no green there
  either. Green remains only as small text/accent colour (headings, leaf
  icons), not as background.
- **Removed:** the pine-silhouette layers (`.pines far/near`) and the side
  tree-trunk strips (`.trunk l/r`) plus their CSS — the new illustration
  already carries the trees. `trunk-l.webp` / `trunk-r.webp` are deleted from
  this folder (stale copies may still sit in the GitHub repo; they are
  unreferenced).
- **Blog pages:** same treatment — body background is now the illustration
  over cream, CTA panel brown instead of green.

Nothing else changed: same 60-page / Kindling Tales / ages 4–8 structured
data, same price `$19`, same empty `buyUrl`, same reader behaviour
(portrait 460px / square 620px / landscape 820px, no letterbox).

## Files (14, upload these to the repo root)
index.html, blog-kindness-bedtime-stories.html,
blog-character-education-activities.html, blog-weekly-virtue-habit.html,
cover.webp, animals.webp, canopy.webp, meadow.webp, forest-bg.webp,
robots.txt, sitemap.xml, manifest.webmanifest — plus this README (dev note,
not a site file).

## Deploy
Push to GitHub `JibranTeam/little-values` (main) — Vercel auto-deploys.
Live: https://little-values-tau.vercel.app
