import { getImageProps, type ImageProps } from "next/image";
import { preload } from "react-dom";
import { imageUrl } from "@/lib/images";

type PhotoProps = Omit<ImageProps, "loader" | "src" | "srcSet"> & { src: string };

const avifLoader = ({ src, width }: { src: string; width: number }) => imageUrl(src, width, "avif");

/**
 * Drop-in replacement for next/image that serves AVIF (about a third smaller) to browsers
 * that support it and falls back to WebP everywhere else (e.g. iPhones older than iOS 16.4).
 */
export function Photo({ src, alt, preload: isHero, ...rest }: PhotoProps) {
  const avif = getImageProps({ ...rest, src, alt, loader: avifLoader }).props;
  const { props: fallback } = getImageProps({ ...rest, src, alt });

  if (isHero) {
    preload(avif.src, {
      as: "image",
      type: "image/avif",
      imageSrcSet: avif.srcSet,
      imageSizes: avif.sizes,
      fetchPriority: "high",
    });
  }

  return (
    <picture>
      <source type="image/avif" srcSet={avif.srcSet} sizes={avif.sizes} />
      <img {...fallback} alt={alt} {...(isHero ? { loading: "eager" as const, fetchPriority: "high" as const } : {})} />
    </picture>
  );
}
