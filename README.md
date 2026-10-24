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
| Variable (runtime) | `NEWSLETTER_WEBHOOK_URL` = endpoint receiving `{ email, source, subscribedAt }` |

Manual deploy: `npm run deploy` (after `npx wrangler login`).
Then attach your domain under the Worker's Settings → Domains & Routes.

## Structure
- `src/data/` – products, collections, site copy (edit content here)
- `src/components/home/` – page sections · `layout/` – header/footer · `shop/` – cart, search, forms
- `src/app/api/subscribe/route.ts` – newsletter endpoint
- `src/lib/image-loader.ts` – swap for Cloudflare Images / R2 once you have real photography

## Before going live
1. **Checkout is not connected** (`CartDrawer.tsx`, marked `TODO(checkout)`). Add Stripe Checkout or similar.
2. **Newsletter** returns 503 until `NEWSLETTER_WEBHOOK_URL` is set.
3. Photos are Unsplash placeholders; product names/prices are sample data.
4. Footer help links (Contact, Delivery & returns, Size guide, FAQs, Privacy, Terms) are placeholders and need real pages.
