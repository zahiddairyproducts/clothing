/**
 * Blog posts. To write a new one, copy an entry below, give it a unique `slug`,
 * and add it to the `allPosts` array. Set `draft: true` to keep it hidden while you write.
 *
 * `cover` is a logical photo path from public/images (e.g. "/images/story"), see README.
 * `body` is a list of blocks:
 *   { type: "p", text }              paragraph
 *   { type: "h2", text }             sub-heading
 *   { type: "ul", items: [...] }     bullet list
 *   { type: "quote", text }          pull quote
 *   { type: "image", src, alt }      photo from public/images
 */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2026-11-04" */
  date: string;
  category: string;
  readingMinutes: number;
  cover: { src: string; alt: string };
  draft?: boolean;
  body: BlogBlock[];
};

const allPosts: BlogPost[] = [
  {
    slug: "welcome-to-the-journal",
    title: "Welcome to the Rangeen Dhaage journal",
    excerpt:
      "Styling ideas, colour stories and notes from behind the scenes. A first hello from our new journal.",
    date: "2026-11-04",
    category: "Journal",
    readingMinutes: 2,
    cover: {
      src: "/images/story",
      alt: "Model in a floral sleeveless kameez in a garden with colourful parrots",
    },
    body: [
      {
        type: "p",
        text: "Rangeen Dhaage means “coloured thread”, and this journal is where we follow those threads a little further than a product page allows.",
      },
      { type: "h2", text: "What you will find here" },
      {
        type: "ul",
        items: [
          "Styling ideas for lawn, embroidered suits and jewellery.",
          "Colour stories behind our newest arrivals.",
          "Care tips so your favourite pieces last.",
        ],
      },
      {
        type: "p",
        text: "We will be adding new posts regularly. If there is something you would love us to write about, we would love to hear from you.",
      },
    ],
  },
];

export const posts: BlogPost[] = allPosts
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatPostDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
