# Rangeen Dhaage

Next.js (App Router) + Tailwind CSS v4 storefront, deployed to Cloudflare Workers with
[OpenNext](https://opennext.js.org/cloudflare).

## Develop
```bash
npm install
npm run dev          # http://localhost:3000
npm run lint && npm run typecheck
npm run preview      # build + run in the real Workers runtime locally
```

## Deploy (Cloudflare Workers Builds, from GitHub)
Workers & Pages → Create → Import a repository → this repo, then:

| Setting | Value |
| --- | --- |
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx wrangler deploy` |
| Variable | `NEXT_PUBLIC_SITE_URL` = `https://your-domain` (set at **build** time) |
| Variable (build) | `NEXT_PUBLIC_WHATSAPP_NUMBER` = number that receives orders, digits only with country code (e.g. `447123456789`) |
| Variable (runtime) | `NEWSLETTER_WEBHOOK_URL` = endpoint receiving `{ email, source, subscribedAt }` |

Manual deploy: `npm run deploy` (after `npx wrangler login`).
Then attach your domain under the Worker's Settings → Domains & Routes.

## Structure
- `src/data/` – products (each with colour variants, photo galleries and sizes), collections, site copy (edit content here)
- `src/components/home/` – page sections · `layout/` – header/footer · `shop/` – cart, search, forms
- `src/app/api/subscribe/route.ts` – newsletter endpoint
- `public/images/` – your photos, pre-resized to WebP (`<name>-<width>.webp`); `src/data/image-manifest.json` lists the widths available per photo
- `src/lib/image-loader.ts` – serves those files; swap for Cloudflare Images / R2 if the catalogue grows

## Before going live
1. **Checkout** (`/cart`, `/checkout`) sends the order to WhatsApp as a pre-filled message (`src/lib/whatsapp.ts`). Set `NEXT_PUBLIC_WHATSAPP_NUMBER` at build time; until then checkout says it is unavailable. There is no order database or online payment: payment is agreed in the chat. Confirm `deliveryFee` in `src/data/site.ts`.
2. **Newsletter** returns 503 until `NEWSLETTER_WEBHOOK_URL` is set.
3. Product names and prices are sample data (the photos are your own).
4. Footer help links (Contact, Delivery & returns, Size guide, FAQs, Privacy, Terms) are placeholders and need real pages.

## Adding or replacing a photo
1. Export WebP at roughly 240, 480, 960 and 1440 px wide (plus the original width if smaller), named `<name>-<width>.webp`, into `public/images/`.
2. Add `"<name>": [240, 480, 960, 1440]` to `src/data/image-manifest.json` (the widths you exported).
3. Reference it as `/images/<name>` in `src/data/products.ts` / `collections.ts`, as a photo inside a product's `variants`.
4. Every product gets its own page at `/products/<id>` automatically.
