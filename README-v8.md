# Little Values, Big Impact — v8 (2026-11-14)

Built from v7. v7 is untouched.

## What changed

- **Price is now $9.99** (was $19). The only change is the price, in the
  two places that carry it: `SETTINGS.price` in index.html and the static
  price-tag text on the buy card. The tag and the price line are both filled
  from `SETTINGS.price` by JavaScript, so one edit updates both. To change
  the price again, edit that one line.

Nothing else changed: same v7 database-backed reader (uploads save to Neon
and load back on open), same Formspree Join form, same 10-page watermarked
reader, same illustrated background, same 60-page / Kindling Tales / ages 4–8
structured data, same empty `buyUrl` (Buy now still takes no payment).

## Files (only these two changed vs v7)
index.html, README-v8.md. Everything else in v7 is identical.

## Deploy
Push to GitHub `JibranTeam/little-values` (main) — Vercel auto-deploys.
Live: https://little-values-tau.vercel.app
Price decided 2026-11-14: $9.99 launch price (keeps ~$8.14 after Pakistan
Etsy fees); plan is to raise to $12.99 once the listing has 10+ reviews.
