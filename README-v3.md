# Little Values, Big Impact — v3 (same-book details filled in)

Built 2026-11-08 from v2 after Jibran's "yes" (2026-11-08, side chat "Improve kids website speed and SEO") to the 2026-11-05 questions. v2 is untouched; only the three changes below differ (verified by diff).

## What changed in v3
- **Same book confirmed:** this site is the same book as "Values That Matter", so the Book structured data now says 60 pages (was 30), author + publisher "Kindling Tales", audience ages 4–8.
- **Buy card shows it too:** tick list now includes "Ages 4–8 · 60 pages (30 stories + 30 activities)", and the card reads "Digital edition · by Kindling Tales".
- Price NOT changed: SETTINGS.price is still '$19' (carried over from v1). The Etsy-kit prices were $12.99 / $9.99 — that choice is still Jibran's. At Pakistan Etsy rates (6.5% + 6.5% + $0.30 + 2.5%), keeps are about $15.76 at $19, $10.68 at $12.99, $8.14 at $9.99.
- Book title NOT renamed: the site still calls the book "Little Values, Big Impact". If that is the site name and "Values That Matter" is the book title, the JSON-LD name should change — Jibran to confirm.

## Still open before launch (unchanged from v2)
- Real domain (example.com placeholder), checkout link (buyUrl empty — Buy now takes no payment yet), email service for the Join form (Formspree recommended, not wired — needs a form endpoint), price decision above.
- Deploy: v3 is plain HTML, no build step — deploy as a Vercel preview exactly like THE JIMMY LAB, then run Lighthouse on the live preview URL.

---
# Little Values, Big Impact — v2 (fixed)

## What changed in this version
- **Book upload / preview — no more white bars:** the page frame used to be a fixed 3:4 box with `object-fit: contain`, so every landscape page got white bars above and below it. The frame now follows the uploaded page itself: portrait stays narrow (460px), square goes to 620px, landscape widens to 820px. Images, PDF pages and sample pages all use their real width/height.
- **PDF reader actually fixed:** the old code loaded `pdf.worker.min.js` as a normal script, which does not register the PDF worker. v2 loads only `pdf.min.js` and sets `GlobalWorkerOptions.workerSrc` properly.
- **Reader extras:** swipe left/right on touch screens, page alt text from the file name, and uploaded object URLs are now released when you go back to sample pages.
- **SEO head fixed:** the old file had `<title>` after `<body>` and no description, Open Graph, Twitter card, canonical, favicon or structured data. v2 has all of those, plus Book + FAQ JSON-LD, `lang="en"`, a skip link, a `<main>` landmark and image width/height (less layout shift).
- **Blog is now functional:** the three cards used to link back to `#blog` (a dead loop). Each now opens a full article page with its own title, description, Article structured data and related posts, and the blog section has All / Parenting / Classroom / Family filters.
- **New files:** `sitemap.xml`, `robots.txt`, `manifest.webmanifest` (for installability once hosted).

## How to test the upload
1. Open `index.html` in a browser.
2. Go to "Turn the first pages" → drag a PDF or page images onto the upload box, or use Choose files.
3. Flip with Back / Next, arrow keys, or swipe. A landscape page should fill the wider frame with no white bars; a portrait page should stay tall and narrow.

## Before launch — still needed from you (nothing here is faked)
1. **Real domain:** replace every `https://example.com/` in `index.html`, the blog pages, `sitemap.xml` and `robots.txt` with your real domain. The placeholder is marked TODO in the code.
2. **Checkout:** open `index.html`, find `SETTINGS` near the top of the script, and set `buyUrl` to your Gumroad / Stripe / Shopify / Etsy link. Until then "Buy now" only scrolls back to the card — it does not take payment. The $19 price is carried over from v1; confirm it.
3. **Email signup:** the Join form still shows "Signup goes live once an email service is connected." Connect Mailchimp / ConvertKit / Buttondown, or tell me which one and I will wire it.
4. **Age range / author / brand:** the site never states an age range or author name, so v2 does not invent one. Tell me those and I will add them to the Book structured data and the buy card.
5. **100/100 scores:** no one can honestly promise 100 Performance + 100 SEO before the site is hosted on its real domain. v2 removes every known blocker found in the file (invalid head, dead blog links, dead buy link, fixed-ratio reader, broken PDF worker, layout shift). Run Lighthouse on the hosted URL and send me the report — the remaining points are usually hosting (server response, image CDN, font hosting) rather than page code.

## 2026 items intentionally NOT added yet (say the word and I will)
- A service worker for offline reading (can serve stale previews if done wrong — needs a versioning decision).
- Search on the blog, comments, or a shop/cart (needs a backend or a platform choice).
- Analytics / Search Console (needs your GA4 ID and verification tag, as with THE JIMMY LAB).
