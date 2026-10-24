import type { ImageLoaderProps } from "next/image";

/**
 * Custom next/image loader.
 * Unsplash (our placeholder photography) resizes and re-encodes on its CDN, so we
 * only need to ask for the width/quality Next computed. Swap this for Cloudflare
 * Images / R2 URLs once you have your own product photography.
 */
export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("auto", "format");
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 80));
    return url.toString();
  }
  return src;
}
