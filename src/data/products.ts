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
 * Several designs appear in more than one colour (e.g. the plume earrings); merge them into one
 * product with colour options once the real catalogue is imported.
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
  {
    id: "navy-plume-statement-earrings",
    name: "Navy Plume Statement Earrings",
    price: 48,
    category: "jewellery",
    image: "/images/navy-plume",
    alt: "Navy and blue-crystal statement earrings with a gold feather motif and baroque pearl",
  },
  {
    id: "classic-black-kurta-shalwar",
    name: "Classic Black Kurta Shalwar",
    price: 52,
    category: "menswear",
    image: "/images/black-kurta",
    alt: "Man in a black kurta shalwar standing in a sunlit garden",
  },
  {
    id: "charcoal-embellished-jacket-suit",
    name: "Charcoal Embellished Jacket Suit",
    price: 185,
    category: "embroidered",
    image: "/images/charcoal-jacket",
    alt: "Model in a charcoal suit with a long beaded and embroidered sheer jacket",
  },
  {
    id: "pearl-rose-cuff-bracelet-pair",
    name: "Pearl & Rose Cuff Bracelet Pair",
    price: 58,
    category: "jewellery",
    image: "/images/pearl-rose-cuffs",
    alt: "Two gold cuff bracelets, one with a baroque pearl and one with a rose-pink stone, worn on a wrist",
  },
  {
    id: "mint-turquoise-flower-earrings",
    name: "Mint & Turquoise Flower Earrings",
    price: 36,
    category: "jewellery",
    image: "/images/mint-turquoise",
    alt: "Mint-stone and turquoise flower earrings in a green velvet box beside a small plant",
  },
  {
    id: "gemstone-long-necklace-set",
    name: "Multicolour Gemstone Long Necklace Set",
    price: 96,
    category: "jewellery",
    image: "/images/gemstone-necklace",
    alt: "Long multicolour gemstone and pearl necklace with matching earrings, worn over a black kameez",
  },
  {
    id: "emerald-baroque-pearl-earrings",
    name: "Emerald & Baroque Pearl Earrings",
    price: 54,
    category: "jewellery",
    image: "/images/emerald-baroque",
    alt: "Gold earrings with baroque pearls, emerald crystals and a round emerald drop",
  },
  {
    id: "amethyst-baroque-pearl-earrings",
    name: "Baroque Pearl & Amethyst Earrings",
    price: 50,
    category: "jewellery",
    image: "/images/amethyst-baroque",
    alt: "Model wearing gold floral earrings with a baroque pearl and an amethyst drop",
  },
  {
    id: "charcoal-beaded-jacket-close-up",
    name: "Charcoal Beaded Jacket (Close-up)",
    price: 185,
    category: "embroidered",
    image: "/images/charcoal-jacket-detail",
    alt: "Close-up of a beaded and embroidered sheer jacket in charcoal",
  },
  {
    id: "teal-plume-statement-earrings",
    name: "Teal Plume Statement Earrings",
    price: 48,
    category: "jewellery",
    image: "/images/teal-plume",
    alt: "Teal and green-crystal statement earrings with a gold feather motif and baroque pearl",
  },
  {
    id: "emerald-tiered-drop-earrings",
    name: "Emerald Tiered Drop Earrings",
    price: 62,
    category: "jewellery",
    image: "/images/emerald-tiered",
    alt: "Three-tier emerald and pearl drop earrings in a black jewellery box",
  },
  {
    id: "navy-enamel-floral-earrings",
    name: "Navy Enamel Floral Earrings",
    price: 56,
    category: "jewellery",
    image: "/images/navy-enamel",
    alt: "Navy enamel and sapphire-crystal floral earrings with a baroque pearl on navy velvet",
  },
  {
    id: "emerald-pearl-jewelled-earrings",
    name: "Emerald & Pearl Jewelled Earrings",
    price: 58,
    category: "jewellery",
    image: "/images/emerald-jewelled",
    alt: "Jewelled earrings with a baroque pearl, multicolour crystals and a large oval emerald drop",
  },
  {
    id: "onyx-multicolour-jhumka-earrings",
    name: "Onyx Multicolour Jhumka Earrings",
    price: 44,
    category: "jewellery",
    image: "/images/onyx-jhumka",
    alt: "Close-up of an ear wearing a black onyx and multicolour crystal jhumka earring with a pearl",
  },
  {
    id: "cobalt-blue-kurta-shalwar",
    name: "Cobalt Blue Kurta Shalwar",
    price: 52,
    category: "menswear",
    image: "/images/cobalt-kurta",
    alt: "Man in a cobalt blue kurta shalwar in a warmly lit interior",
  },
  {
    id: "rose-quartz-jhumka-earrings",
    name: "Rose Quartz Jhumka Earrings",
    price: 46,
    category: "jewellery",
    image: "/images/rose-jhumka",
    alt: "Rose-quartz and pink-crystal jhumka earrings with pearl drops in a pink box",
  },
  {
    id: "champagne-floral-pearl-drop-earrings",
    name: "Champagne Floral Pearl Drop Earrings",
    price: 60,
    category: "jewellery",
    image: "/images/champagne-floral",
    alt: "Champagne-crystal floral earrings with baroque pearl drops in a gold-trimmed box",
  },
  {
    id: "mint-multicolour-jhumka-earrings",
    name: "Mint Multicolour Jhumka Earrings",
    price: 44,
    category: "jewellery",
    image: "/images/mint-jhumka",
    alt: "Mint-stone jhumka earrings with multicolour crystal petals and pearl drops, held in a hand",
  },
  {
    id: "amber-pearl-cuff-bracelet-pair",
    name: "Amber & Pearl Cuff Bracelet Pair",
    price: 58,
    category: "jewellery",
    image: "/images/amber-pearl-cuffs",
    alt: "Two gold cuff bracelets with an amber stone and a baroque pearl, worn while holding a teacup",
  },
  {
    id: "ruby-floral-pearl-drop-earrings",
    name: "Ruby Floral Pearl Drop Earrings",
    price: 60,
    category: "jewellery",
    image: "/images/ruby-floral",
    alt: "Ruby-red floral earrings with baroque pearl drops in a red velvet box",
  },
];

/** The four pieces highlighted on the home page. */
export const featuredProducts = products.slice(0, 4);

const byId = new Map(products.map((p) => [p.id, p]));

export function getProduct(id: string): Product | undefined {
  return byId.get(id);
}
