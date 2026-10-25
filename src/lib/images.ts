import manifest from "@/data/image-manifest.json";

type Manifest = Record<string, number[]>;
const widthsByName = manifest as Manifest;

/**
 * Photos live in /public/images as pre-resized WebP files: <name>-<width>.webp.
 * Components refer to them by logical path ("/images/hero"); this picks the
 * smallest file that is at least as wide as the width the browser needs.
 */
export function imageUrl(src: string, width: number): string {
  const match = /^\/images\/([a-z0-9-]+)$/i.exec(src);
  const widths = match ? widthsByName[match[1]] : undefined;
  if (!match || !widths?.length) return src;
  const best = widths.find((w) => w >= width) ?? widths[widths.length - 1];
  return `/images/${match[1]}-${best}.webp`;
}
