# Little Values, Big Impact — v7 (2026-11-14)

Built from v6. v6 is untouched.

## What changed

- **Reader saves uploads to the Neon database (new, live once the database
  is switched on).** Every image added in the reader is now also posted to
  `POST /api/pages` and stored in the `preview_pages` table (slots 1-10).
  Large phone photos are downsized to 1600px JPEG before upload so they fit
  the function limits; small files go up as-is. After saving, the message
  under the reader says so, or says how many saved if some failed — the pages
  stay in the browser either way. On open, the reader fetches
  `GET /api/pages` and loads the saved pages instead of the samples, so the
  preview survives refreshes and shows to every visitor. If the database is
  not reachable, the reader silently keeps working exactly as before.
- **`api/` is now in the repo.** `api/pages.js` (list + upload) and
  `api/pages/[id].js` (serve one page) are Vercel serverless functions, and
  `package.json` at the root adds the `@neondatabase/serverless` driver.
  They need the `DATABASE_URL` environment variable in Vercel (the Neon
  connection string) — without it they return a database error and the reader
  falls back to browser-only uploads.
- `backend/` is kept as reference and still holds the same files plus the
  switch-on guide.

Nothing else changed: same v6 price-tag cover ($19), same Formspree Join
form, same 10-page watermarked reader, same illustrated background, same
60-page / Kindling Tales / ages 4–8 structured data, same empty `buyUrl`.

## Files (upload everything to the repo root, keeping the folders)
index.html, blog-kindness-bedtime-stories.html,
blog-character-education-activities.html, blog-weekly-virtue-habit.html,
cover.webp, animals.webp, canopy.webp, meadow.webp, forest-bg.webp,
robots.txt, sitemap.xml, manifest.webmanifest, package.json,
api/pages.js, api/pages/[id].js (+ this README, backend/ as reference).

## Deploy
Push to GitHub `JibranTeam/little-values` (main) — Vercel auto-deploys.
Live: https://little-values-tau.vercel.app
Requires: `DATABASE_URL` set in Vercel (Neon connection string) and the
`preview_pages` table created in Neon (see backend/schema.sql).
