export type Collection = {
  slug: string;
  title: string;
  tagline: string;
  cta: string;
  image: string;
  alt: string;
  href: string;
  /** CSS object-position so the subject stays in frame when the card crops the photo. */
  focus: string;
};

export const collections: readonly Collection[] = [
  {
    slug: "lawn-edit",
    title: "Lawn edit",
    tagline: "Easy, expressive, everyday",
    cta: "Shop the edit",
    image: "/images/lawn",
    alt: "Model in an orange printed lawn suit with a patterned dupatta",
    href: "#new",
    focus: "32% center",
  },
  {
    slug: "embroidered",
    title: "Embroidered",
    tagline: "Made for the moment",
    cta: "Find your piece",
    image: "/images/embroidered",
    alt: "Model seated in a burgundy embroidered suit",
    href: "#new",
    focus: "center top",
  },
  {
    slug: "jewellery",
    title: "Jewellery",
    tagline: "Effortless statement",
    cta: "Meet your new favourite",
    image: "/images/jewellery",
    alt: "Black-and-pearl earrings and cuff styled on cream silk",
    href: "#new",
    focus: "center",
  },
];
