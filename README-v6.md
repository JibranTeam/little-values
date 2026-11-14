# Little Values, Big Impact — v6 (2026-11-14)

Built from v5. v5 is untouched.

## What changed

1. **Cover with a price tag (done, live).** The buy card now shows the book
   cover on top, with a gold price-tag sticker on its corner reading the
   current price ($19) and "Digital edition". The tag follows `SETTINGS.price`
   in the code, so changing the price once updates both the tag and the price
   line. Price is still $19 — the $19 / $12.99 / $9.99 choice is still open.
2. **Join form works (done, live).** The signup form now posts to Formspree
   (endpoint `xdeekyqk`, the same form THE JIMMY LAB's contact form uses).
   Submissions arrive at thejimmylab@gmail.com with the subject "Little
   Values — new signup", so they are easy to tell apart. Success and failure
   messages show on the page. Formspree free plan: 50 submissions a month,
   shared with the Jimmy Lab form.
3. **Save uploads to a database (prepared, NOT live).** The reader still saves
   uploads only in the browser for now. `backend/` in this folder holds
   everything ready: `schema.sql` (a `preview_pages` table, slots 1-10),
   `api/pages.js` (list + upload) and `api/pages/[id].js` (serve one page),
   `package.json` (the Neon serverless driver) and a `README.md` with the
   exact switch-on steps and the reader wiring snippet. Blocked on: a working
   Neon connection — the API key on file is still rejected (401, re-tested
   2026-11-14). Once Neon access works, the steps are: create the project,
   run the schema, add `DATABASE_URL` in Vercel, move `backend/api/` to
   `api/`, wire the reader snippet, redeploy.

Nothing else changed: same v5 reader (10 pages, watermark, thumbnails), same
v4 illustrated background, same 60-page / Kindling Tales / ages 4–8 structured
data, same empty `buyUrl` (Buy now still takes no payment).

## Files (13 site files + this README — upload the site files to the repo root)
index.html, blog-kindness-bedtime-stories.html,
blog-character-education-activities.html, blog-weekly-virtue-habit.html,
cover.webp, animals.webp, canopy.webp, meadow.webp, forest-bg.webp,
robots.txt, sitemap.xml, manifest.webmanifest.

`backend/` (schema + API functions + setup guide) lives in the v6 folder and
zip only — it is NOT in the repo. It is reference only: do NOT copy it to the
repo root as `api/` until the database steps in its README are done.

## Deploy
Push to GitHub `JibranTeam/little-values` (main) — Vercel auto-deploys.
Live: https://little-values-tau.vercel.app
