import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/blog/PostCard";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { formatPostDate, getPost, posts } from "@/data/blog";
import { site } from "@/data/site";
import { imageUrl } from "@/lib/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: imageUrl(post.cover.src, 960), alt: post.cover.alt }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${site.url}${imageUrl(post.cover.src, 960)}`,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <main id="main">
      <Section className="pt-8 pb-[60px] tablet:pt-10 tablet:pb-[clamp(64px,8vw,112px)]">
        <nav aria-label="Breadcrumb" className="text-[10px] tracking-[.14em] text-muted uppercase">
          <Link href="/" className="transition-colors hover:text-maroon">Home</Link>
          <span aria-hidden="true" className="px-2">/</span>
          <Link href="/blog" className="transition-colors hover:text-maroon">Journal</Link>
          <span aria-hidden="true" className="px-2">/</span>
          <span aria-current="page" className="text-ink">{post.title}</span>
        </nav>

        <article className="mx-auto mt-8 max-w-[760px]">
          <header>
            <div className="flex items-center gap-3 text-[10px] tracking-[.18em] text-muted uppercase">
              <span className="font-semibold text-maroon">{post.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
            <h1 className="mt-3 font-serif text-[36px] leading-[1.08] font-medium tracking-[-.04em] tablet:text-[clamp(38px,5vw,56px)]">
              {post.title}
            </h1>
            <p className="mt-4 text-[14px] leading-[1.9] text-muted">{post.excerpt}</p>
          </header>

          <div className="relative mt-8 aspect-[4/3] overflow-hidden border border-maroon/30">
            <Photo
              src={post.cover.src}
              alt={post.cover.alt}
              fill
              preload
              sizes="(min-width: 851px) 760px, 100vw"
              className="object-cover object-[center_15%]"
            />
          </div>

          <div aria-hidden="true" className="mt-8 border-t border-dashed border-maroon/40" />

          <div className="mt-8 space-y-5 text-[14px] leading-[2] text-ink-soft">
            {post.body.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2 key={i} className="pt-4 font-serif text-[26px] leading-[1.2] font-medium tracking-[-.03em] text-ink tablet:text-[30px]">
                      {block.text}
                    </h2>
                  );
                case "ul":
                  return (
                    <ul key={i} className="space-y-1.5">
                      {block.items.map((item) => (
                        <li key={item} className="ml-4 list-disc pl-1">{item}</li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <blockquote key={i} className="border-l-2 border-maroon py-1 pl-5 font-serif text-[20px] leading-[1.5] text-maroon italic">
                      {block.text}
                    </blockquote>
                  );
                case "image":
                  return (
                    <div key={i} className="relative my-8 aspect-[4/3] overflow-hidden border border-maroon/30">
                      <Photo src={block.src} alt={block.alt} fill sizes="(min-width: 851px) 760px, 100vw" className="object-cover" />
                    </div>
                  );
                default:
                  return <p key={i}>{block.text}</p>;
              }
            })}
          </div>

          <div className="mt-12 border-t border-dashed border-maroon/40 pt-8">
            <ButtonLink href="/shop">Browse the shop</ButtonLink>
          </div>
        </article>

        {more.length > 0 && (
          <div className="mt-[clamp(56px,8vw,96px)]">
            <h2 className="mb-8 font-serif text-[30px] font-medium tracking-[-.04em]">
              Keep <em className="text-maroon">reading</em>
            </h2>
            <div className="grid gap-x-6 gap-y-12 tablet:grid-cols-2 desktop:grid-cols-3">
              {more.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          </div>
        )}
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </main>
  );
}
