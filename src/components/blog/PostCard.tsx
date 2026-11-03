import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { formatPostDate, type BlogPost } from "@/data/blog";

export function PostCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden border border-maroon/30">
          <Photo
            src={post.cover.src}
            alt={post.cover.alt}
            fill
            preload={priority}
            sizes="(min-width: 851px) 33vw, (min-width: 481px) 50vw, 100vw"
            className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-4 flex items-center gap-3 text-[9px] tracking-[.18em] text-muted uppercase">
          <span className="font-semibold text-maroon">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </div>
        <h2 className="mt-2.5 font-serif text-[24px] leading-[1.2] font-medium tracking-[-.03em] transition-colors group-hover:text-maroon">
          {post.title}
        </h2>
        <p className="mt-2 text-[12px] leading-[1.9] text-muted">{post.excerpt}</p>
        <span className="mt-4 inline-block border-b border-maroon pb-1.5 text-[10px] tracking-[.13em] uppercase">
          Read more
        </span>
      </Link>
    </article>
  );
}
