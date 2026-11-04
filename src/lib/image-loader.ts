import type { ImageLoaderProps } from "next/image";
import { imageUrl } from "./images";

/**
 * Custom next/image loader: serves the pre-resized WebP files in /public/images
 * straight from /public, so the server never runs an image optimiser.
 */
export default function imageLoader({ src, width }: ImageLoaderProps): string {
  return imageUrl(src, width);
}
