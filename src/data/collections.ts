export type Collection = {
  slug: string;
  title: string;
  tagline: string;
  cta: string;
  image: string;
  alt: string;
  href: string;
};

export const collections: readonly Collection[] = [
  {
    slug: "lawn-edit",
    title: "Lawn edit",
    tagline: "Easy, expressive, everyday",
    cta: "Shop the edit",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    alt: "Elegant traditional outfit in rich tones",
    href: "#new",
  },
  {
    slug: "embroidered",
    title: "Embroidered",
    tagline: "Made for the moment",
    cta: "Find your piece",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e3",
    alt: "Textile and fashion details",
    href: "#new",
  },
  {
    slug: "kaftans",
    title: "Kaftans",
    tagline: "Effortless statement",
    cta: "Meet your new favourite",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
    alt: "Fashion styling in warm neutral colours",
    href: "#new",
  },
];
