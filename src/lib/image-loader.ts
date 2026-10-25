import type { ImageLoaderProps } from "next/image";
import { imageUrl } from "./images";

/**
 * Custom next/image loader: serves the pre-resized WebP files in /public/images
 * straight from Cloudflare's asset CDN, so the Worker never runs an image optimiser.
 */
export default function imageLoader({ src, width }: ImageLoaderProps): string {
  return imageUrl(src, width);
}
