import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { PageShell } from "@/components/pages/PageShell";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Journal",
  description: "Styling ideas, colour stories and notes from behind the scenes at Rangeen Dhaage.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <PageShell
      wide
      crumb="Journal"
      kicker="The journal"
      title="Stories, styling and"
      emphasis="colour."
      intro="Ideas for getting dressed, and the thinking behind what we make."
    >
      {posts.length === 0 ? (
        <p className="text-[13px] text-muted">New stories are on their way. Please check back soon.</p>
      ) : (
        <div className="grid gap-x-6 gap-y-12 tablet:grid-cols-2 desktop:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} priority={i === 0} />
          ))}
        </div>
      )}
    </PageShell>
  );
}
