# Little Values, Big Impact — v5 (2026-11-08)

Built from v4. v4 is untouched.

## What changed (user feedback, 2026-11-08 night)
The reader only ever held 1 page: every new upload replaced the pages
already loaded, so adding pages one by one (the normal phone flow) never
built up a preview. v5 fixes that and adds the watermark.

- **Load up to 10 pages, additively.** New uploads now JOIN the pages
  already loaded instead of replacing them. Pick several images at once, or
  add them one by one — they accumulate to a 10-page preview. A PDF loads
  its first 10 pages (or fewer, if pages are already loaded). Past 10, the
  reader says the preview is full and suggests starting over.
- **Watermark on every preview page.** A diagonal "Kindling Tales / Preview"
  mark sits over each page (uploaded images, PDF pages and the sample pages
  alike), semi-transparent so the artwork stays readable. It is a display
  overlay — it discourages casual copying; screenshots are still possible,
  as with any on-screen preview.
- **Thumbnails.** A thumbnail strip under the reader shows every loaded
  page; tap one to jump to it. The current page is highlighted.
- **Copy updated** in the preview section and the upload box to explain the
  10-page watermarked preview and the add-more-any-time behaviour.

Nothing else changed: same v4 illustrated background, same 60-page /
Kindling Tales / ages 4–8 structured data, same price `$19`, same empty
`buyUrl`, same orientation-following reader frame (portrait 460px / square
620px / landscape 820px, no letterbox).

## Files (13 site files + this README — upload the site files to the repo root)
index.html, blog-kindness-bedtime-stories.html,
blog-character-education-activities.html, blog-weekly-virtue-habit.html,
cover.webp, animals.webp, canopy.webp, meadow.webp, forest-bg.webp,
robots.txt, sitemap.xml, manifest.webmanifest.

## Deploy
Push to GitHub `JibranTeam/little-values` (main) — Vercel auto-deploys.
Live: https://little-values-tau.vercel.app
