import type { CategorySlug } from "./categories";

export type Product = {
  id: string;
  name: string;
  /** Price in GBP (whole pounds for now). */
  price: number;
  category: CategorySlug;
  /** Logical path of a photo in /public/images (see src/lib/images.ts). */
  image: string;
  alt: string;
  tag?: string;
  colors?: readonly string[];
};

/**
 * Sample catalogue. Names describe what each photo shows; PRICES ARE PLACEHOLDERS.
 * The first four are the "featured" pieces shown on the home page.
 * Replace this file with a CSV/WooCommerce import when the real catalogue is ready.
 */
export const products: readonly Product[] = [
  {
    id: "sienna-bloom-3-piece-suit",
    name: "Sienna Bloom 3-Piece Suit",
    price: 79,
    category: "lawn",
    image: "/images/bloom",
    alt: "Model in a floral three-piece suit with lace detail and a printed dupatta, among ferns",
    tag: "New arrival",
    colors: ["#D9DFD0", "#E5D4B8", "#C8BDA9"],
  },
  {
    id: "the-noor-embroidered-edit",
    name: "The Noor Embroidered Edit",
    price: 95,
    category: "embroidered",
    image: "/images/noor",
    alt: "Model in a black embroidered suit with a floral-print dupatta",
    tag: "Bestseller",
    colors: ["#C8BDA9", "#87947A", "#F1E8D9"],
  },
  {
    id: "meher-printed-lawn-suit",
    name: "Meher Printed Lawn Suit",
    price: 59,
    category: "lawn",
    image: "/images/meher",
    alt: "Model in a bright floral printed lawn suit with a matching dupatta",
    tag: "Easy favourite",
    colors: ["#D9DFD0", "#E5D4B8", "#87947A"],
  },
  {
    id: "ayla-occasion-choker-set",
    name: "Ayla Occasion Choker Set",
    price: 89,
    category: "jewellery",
    image: "/images/ayla",
    alt: "Portrait of a model wearing a pearl choker and green drop earrings",
    tag: "Limited edit",
    colors: ["#C8BDA9", "#E5D4B8", "#87947A"],
  },
  {
    id: "marigold-lawn-3-piece",
    name: "Marigold Lawn 3-Piece",
    price: 65,
    category: "lawn",
    image: "/images/lawn",
    alt: "Model in an orange printed lawn suit with a patterned dupatta",
  },
  {
    id: "onyx-pearl-earring-set",
    name: "Onyx & Pearl Earring Set",
    price: 38,
    category: "jewellery",
    image: "/images/jewellery",
    alt: "Black-and-pearl earrings and cuff styled on cream silk",
  },
  {
    id: "burgundy-rose-embroidered-suit",
    name: "Burgundy Rose Embroidered Suit",
    price: 110,
    category: "embroidered",
    image: "/images/embroidered",
    alt: "Model seated in a burgundy embroidered suit",
    tag: "New arrival",
  },
  {
    id: "midnight-gold-statement-earrings",
    name: "Midnight Gold Statement Earrings",
    price: 42,
    category: "jewellery",
    image: "/images/midnight",
    alt: "Gold bird-wing earrings with black stones",
  },
  {
    id: "indigo-leaf-co-ord-set",
    name: "Indigo Leaf Co-ord Set",
    price: 55,
    category: "lawn",
    image: "/images/hero",
    alt: "Model in a blue floral co-ord set in a warm, plant-filled room",
  },
  {
    id: "emerald-pearl-drop-earrings",
    name: "Emerald Pearl Drop Earrings",
    price: 46,
    category: "jewellery",
    image: "/images/pearl-drop",
    alt: "Long green-stone and pearl drop earrings",
  },
  {
    id: "ruby-embroidered-suit",
    name: "Ruby Embroidered Suit",
    price: 120,
    category: "embroidered",
    image: "/images/ruby",
    alt: "Model in a deep pink embroidered suit with a matching dupatta",
  },
  {
    id: "turquoise-necklace-set",
    name: "Turquoise Necklace Set with Tikka",
    price: 68,
    category: "jewellery",
    image: "/images/turquoise",
    alt: "Turquoise-stone necklace, earrings and tikka set",
    tag: "Bestseller",
  },
  {
    id: "sky-blue-kurta-shalwar",
    name: "Sky Blue Kurta Shalwar",
    price: 49,
    category: "menswear",
    image: "/images/kurta",
    alt: "Man in a sky blue kurta shalwar",
  },
  {
    id: "kundan-emerald-earrings",
    name: "Kundan Emerald Earrings",
    price: 52,
    category: "jewellery",
    image: "/images/kundan",
    alt: "Kundan and emerald-stone earrings held in a hand",
  },
  {
    id: "emerald-crescent-necklace-set",
    name: "Emerald Crescent Necklace Set",
    price: 74,
    category: "jewellery",
    image: "/images/crescent",
    alt: "Gold crescent necklace with emerald stone and matching earrings",
  },
  {
    id: "sapphire-statement-earrings",
    name: "Sapphire Statement Earrings",
    price: 44,
    category: "jewellery",
    image: "/images/sapphire",
    alt: "Blue sapphire-stone statement earrings",
  },
  {
    id: "emerald-chain-necklace-set",
    name: "Emerald Chain Necklace Set",
    price: 72,
    category: "jewellery",
    image: "/images/chain",
    alt: "Layered gold chain necklace with emerald accents and earrings",
  },
  {
    id: "blush-stone-cuff-bracelet",
    name: "Blush Stone Cuff Bracelet",
    price: 34,
    category: "jewellery",
    image: "/images/cuff",
    alt: "Gold cuff bracelet with blush-pink stones worn on a hand",
  },
  {
    id: "ruby-blush-cocktail-ring",
    name: "Ruby & Blush Cocktail Ring",
    price: 28,
    category: "jewellery",
    image: "/images/ring",
    alt: "Gold cocktail ring with ruby and blush-pink stones",
  },
];

/** The four pieces highlighted on the home page. */
export const featuredProducts = products.slice(0, 4);

const byId = new Map(products.map((p) => [p.id, p]));

export function getProduct(id: string): Product | undefined {
  return byId.get(id);
}
