import type { CategorySlug } from "./categories";

export type Photo = {
  /** Logical path of a photo in /public/images (see src/lib/images.ts). */
  src: string;
  alt: string;
  /** CSS object-position when a card crops the photo (default: top centre). */
  focus?: string;
};

export type Variant = {
  id: string;
  label: string;
  /** Any CSS background value (a hex colour or a gradient). */
  swatch: string;
  photos: readonly Photo[];
};

export type Product = {
  id: string;
  name: string;
  /** Price in GBP (whole pounds for now). */
  price: number;
  category: CategorySlug;
  tag?: string;
  description: string;
  details: readonly string[];
  /** Only for clothing. Sizes other than the net suits' are placeholders. */
  sizes?: readonly string[];
  /** Always at least one. A product with one variant shows no colour picker. */
  variants: readonly Variant[];
};

const WOMENS_SIZES = ["S", "M", "L"] as const;
const MENS_SIZES = ["S", "M", "L", "XL"] as const;

const JEWELLERY_DETAILS = ["Sold as shown in the photographs"] as const;
const CLOTHING_DETAILS: readonly string[] = [];

/**
 * Sample catalogue. Names describe what each photo shows; PRICES ARE PLACEHOLDERS.
 * Designs that exist in several colours are one product with several variants.
 * The first four products are the "featured" pieces shown on the home page.
 * Replace this file with a CSV/WooCommerce import when the real catalogue is ready.
 */
export const products: readonly Product[] = [
  {
    id: "sienna-bloom-3-piece-suit",
    name: "Sienna Bloom 3-Piece Suit",
    price: 79,
    category: "lawn",
    tag: "New arrival",
    description: "As shown: model in a floral three-piece suit with lace detail and a printed dupatta, among ferns.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/bloom", alt: "Model in a floral three-piece suit with lace detail and a printed dupatta, among ferns" },
        ],
      },
    ],
  },
  {
    id: "the-noor-embroidered-edit",
    name: "The Noor Embroidered Edit",
    price: 95,
    category: "embroidered",
    tag: "Bestseller",
    description: "As shown: model in a black embroidered suit with a floral-print dupatta.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/noor", alt: "Model in a black embroidered suit with a floral-print dupatta" },
        ],
      },
    ],
  },
  {
    id: "meher-printed-lawn-suit",
    name: "Meher Printed Lawn Suit",
    price: 59,
    category: "lawn",
    tag: "Easy favourite",
    description: "As shown: model in a bright floral printed lawn suit with a matching dupatta.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/meher", alt: "Model in a bright floral printed lawn suit with a matching dupatta" },
        ],
      },
    ],
  },
  {
    id: "ayla-occasion-choker-set",
    name: "Ayla Occasion Choker Set",
    price: 89,
    category: "jewellery",
    tag: "Limited edit",
    description: "As shown: portrait of a model wearing a pearl choker and green drop earrings.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/ayla", alt: "Portrait of a model wearing a pearl choker and green drop earrings" },
        ],
      },
    ],
  },
  {
    id: "marigold-lawn-3-piece",
    name: "Marigold Lawn 3-Piece",
    price: 65,
    category: "lawn",
    description: "As shown: model in an orange printed lawn suit with a patterned dupatta.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/lawn", alt: "Model in an orange printed lawn suit with a patterned dupatta" },
        ],
      },
    ],
  },
  {
    id: "onyx-pearl-earring-set",
    name: "Onyx & Pearl Earring Set",
    price: 38,
    category: "jewellery",
    description: "As shown: black-and-pearl earrings and cuff styled on cream silk.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/jewellery", alt: "Black-and-pearl earrings and cuff styled on cream silk" },
        ],
      },
    ],
  },
  {
    id: "burgundy-rose-embroidered-suit",
    name: "Burgundy Rose Embroidered Suit",
    price: 110,
    category: "embroidered",
    tag: "New arrival",
    description: "As shown: model seated in a burgundy embroidered suit.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/embroidered", alt: "Model seated in a burgundy embroidered suit" },
        ],
      },
    ],
  },
  {
    id: "indigo-leaf-co-ord-set",
    name: "Indigo Leaf Co-ord Set",
    price: 55,
    category: "lawn",
    description: "As shown: model in a blue floral co-ord set in a warm, plant-filled room.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/hero", alt: "Model in a blue floral co-ord set in a warm, plant-filled room" },
        ],
      },
    ],
  },
  {
    id: "ruby-embroidered-suit",
    name: "Ruby Embroidered Suit",
    price: 120,
    category: "embroidered",
    description: "As shown: model in a deep pink embroidered suit with a matching dupatta.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/ruby", alt: "Model in a deep pink embroidered suit with a matching dupatta" },
        ],
      },
    ],
  },
  {
    id: "turquoise-necklace-set",
    name: "Turquoise Necklace Set with Tikka",
    price: 68,
    category: "jewellery",
    tag: "Bestseller",
    description: "As shown: turquoise-stone necklace, earrings and tikka set.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/turquoise", alt: "Turquoise-stone necklace, earrings and tikka set" },
        ],
      },
    ],
  },
  {
    id: "classic-kurta-shalwar",
    name: "Classic Kurta Shalwar",
    price: 52,
    category: "menswear",
    description: "A classic kurta shalwar with a mandarin collar and button placket.",
    details: CLOTHING_DETAILS,
    sizes: MENS_SIZES,
    variants: [
      {
        id: "sky-blue",
        label: "Sky Blue",
        swatch: "#8db6e0",
        photos: [
          { src: "/images/kurta", alt: "Man in a sky blue kurta shalwar" },
        ],
      },
      {
        id: "cobalt-blue",
        label: "Cobalt Blue",
        swatch: "#3a62b8",
        photos: [
          { src: "/images/cobalt-kurta", alt: "Man in a cobalt blue kurta shalwar in a warmly lit interior" },
        ],
      },
      {
        id: "black",
        label: "Black",
        swatch: "#1b1b1d",
        photos: [
          { src: "/images/black-kurta", alt: "Man in a black kurta shalwar standing in a sunlit garden" },
        ],
      },
    ],
  },
  {
    id: "kundan-emerald-earrings",
    name: "Kundan Emerald Earrings",
    price: 52,
    category: "jewellery",
    description: "As shown: kundan and emerald-stone earrings held in a hand.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/kundan", alt: "Kundan and emerald-stone earrings held in a hand" },
        ],
      },
    ],
  },
  {
    id: "gold-collar-pendant-necklace-set",
    name: "Gold Collar Pendant Necklace Set",
    price: 96,
    category: "jewellery",
    description: "Gold collar necklace with a large stone pendant, pearls and matching earrings.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "emerald",
        label: "Emerald",
        swatch: "#1f6b4a",
        photos: [
          { src: "/images/crescent", alt: "Gold crescent necklace with emerald stone and matching earrings" },
          { src: "/images/emerald-pendant-set", alt: "Gold necklace with an emerald pendant and pearls, with matching earrings on a stand, against green satin" },
        ],
      },
      {
        id: "onyx",
        label: "Onyx",
        swatch: "#222226",
        photos: [
          { src: "/images/onyx-necklace", alt: "Gold collar necklace with a large black onyx pendant and matching earrings, worn on a black embroidered kameez" },
        ],
      },
      {
        id: "ruby",
        label: "Ruby",
        swatch: "#a31d3c",
        photos: [
          { src: "/images/ruby-pendant-set", alt: "Gold collar necklace with a ruby pendant and matching earrings worn with an ivory lace outfit" },
        ],
      },
    ],
  },
  {
    id: "emerald-chain-necklace-set",
    name: "Emerald Chain Necklace Set",
    price: 72,
    category: "jewellery",
    description: "As shown: layered gold chain necklace with emerald accents and earrings.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/chain", alt: "Layered gold chain necklace with emerald accents and earrings" },
        ],
      },
    ],
  },
  {
    id: "ruby-blush-cocktail-ring",
    name: "Ruby & Blush Cocktail Ring",
    price: 28,
    category: "jewellery",
    description: "As shown: gold cocktail ring with ruby and blush-pink stones.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/ring", alt: "Gold cocktail ring with ruby and blush-pink stones" },
        ],
      },
    ],
  },
  {
    id: "plume-statement-earrings",
    name: "Plume Statement Earrings",
    price: 48,
    category: "jewellery",
    description: "Statement drop earrings with a sweeping gold feather, a flower-set baroque pearl and a large faceted stone. Choose your colour.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "navy",
        label: "Navy",
        swatch: "#1f2a5c",
        photos: [
          { src: "/images/navy-plume", alt: "Navy and blue-crystal statement earrings with a gold feather motif and baroque pearl" },
        ],
      },
      {
        id: "teal",
        label: "Teal",
        swatch: "#2a8c8c",
        photos: [
          { src: "/images/teal-plume", alt: "Teal and green-crystal statement earrings with a gold feather motif and baroque pearl" },
        ],
      },
      {
        id: "mint",
        label: "Mint",
        swatch: "#a5dcc8",
        photos: [
          { src: "/images/mint-plume", alt: "Mint-green and turquoise statement earrings with a gold feather motif in a blue box" },
        ],
      },
      {
        id: "blush",
        label: "Blush",
        swatch: "#ecc9c9",
        photos: [
          { src: "/images/blush-plume", alt: "Blush-pink and rose-gold crystal statement earrings with a gold feather motif and baroque pearl" },
        ],
      },
      {
        id: "pink-silver",
        label: "Pink & Silver",
        swatch: "#d9a5b8",
        photos: [
          { src: "/images/pink-silver-plume", alt: "Pink-stone and silver-tone statement earrings with a feather motif and baroque pearl" },
        ],
      },
      {
        id: "black",
        label: "Black",
        swatch: "#1b1b1d",
        photos: [
          { src: "/images/midnight", alt: "Gold bird-wing earrings with black stones" },
          { src: "/images/black-plume", alt: "Black-stone and crystal statement earrings with a gold feather motif in a navy box" },
          { src: "/images/onyx-plume", alt: "Black onyx and crystal statement earrings with a gold feather motif in a black gift box" },
        ],
      },
      {
        id: "sapphire",
        label: "Sapphire",
        swatch: "#2b4da0",
        photos: [
          { src: "/images/sapphire", alt: "Blue sapphire-stone statement earrings" },
        ],
      },
    ],
  },
  {
    id: "charcoal-embellished-jacket-suit",
    name: "Charcoal Embellished Jacket Suit",
    price: 185,
    category: "embroidered",
    description: "A charcoal suit finished with a long sheer jacket, heavily beaded and embroidered.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "charcoal",
        label: "Charcoal",
        swatch: "#4b4b52",
        photos: [
          { src: "/images/charcoal-jacket", alt: "Model in a charcoal suit with a long beaded and embroidered sheer jacket" },
          { src: "/images/charcoal-jacket-detail", alt: "Close-up of a beaded and embroidered sheer jacket in charcoal" },
          { src: "/images/charcoal-jacket-detail-2", alt: "Detail of a charcoal sheer jacket with beaded embroidery, worn over a matching suit" },
        ],
      },
    ],
  },
  {
    id: "long-gemstone-pearl-necklace-set",
    name: "Long Gemstone & Pearl Necklace Set",
    price: 92,
    category: "jewellery",
    description: "Long necklace of jewelled flowers with pearl drops and matching earrings.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "multicolour",
        label: "Multicolour",
        swatch: "linear-gradient(135deg,#b3243d 0%,#2b6cb0 50%,#2f9e62 100%)",
        photos: [
          { src: "/images/gemstone-necklace", alt: "Long multicolour gemstone and pearl necklace with matching earrings, worn over a black kameez" },
        ],
      },
      {
        id: "turquoise",
        label: "Turquoise",
        swatch: "#3fb8b0",
        photos: [
          { src: "/images/turquoise-long-necklace", alt: "Long turquoise flower and pearl necklace with matching earrings, worn over a deep green kameez" },
        ],
      },
    ],
  },
  {
    id: "baroque-pearl-drop-earrings",
    name: "Baroque Pearl Drop Earrings",
    price: 58,
    category: "jewellery",
    description: "Gold earrings built around a baroque pearl, with jewelled leaves and a round stone drop edged in seed pearls.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "emerald",
        label: "Emerald",
        swatch: "#1f6b4a",
        photos: [
          { src: "/images/emerald-baroque", alt: "Gold earrings with baroque pearls, emerald crystals and a round emerald drop" },
          { src: "/images/baroque-pearl-emerald", alt: "Baroque pearl earrings with multicolour crystals and oval emerald drops in a cream box with pearl strands" },
          { src: "/images/baroque-emerald-set", alt: "Multicolour baroque pearl earrings with a pair of emerald stud earrings in a cream box" },
        ],
      },
      {
        id: "multicolour",
        label: "Multicolour",
        swatch: "linear-gradient(135deg,#b3243d 0%,#2b6cb0 50%,#2f9e62 100%)",
        photos: [
          { src: "/images/multicolour-baroque", alt: "Model smiling in gold earrings with baroque pearls, multicolour crystals and an emerald drop" },
          { src: "/images/gemstone-baroque", alt: "Baroque pearl earrings with multicolour crystals and green round drops held in a cream box" },
        ],
      },
      {
        id: "ruby",
        label: "Ruby",
        swatch: "#a31d3c",
        photos: [
          { src: "/images/ruby-baroque", alt: "Gold earrings with baroque pearls and ruby drops held in a navy jewellery box" },
        ],
      },
      {
        id: "sapphire",
        label: "Sapphire",
        swatch: "#2b4da0",
        photos: [
          { src: "/images/sapphire-silver", alt: "Silver-tone earrings with baroque pearls, blue crystals and a round sapphire drop in a cream box" },
        ],
      },
      {
        id: "amethyst",
        label: "Amethyst",
        swatch: "#6a4a8c",
        photos: [
          { src: "/images/amethyst-baroque", alt: "Model wearing gold floral earrings with a baroque pearl and an amethyst drop" },
        ],
      },
    ],
  },
  {
    id: "tiered-pearl-drop-earrings",
    name: "Tiered Pearl Drop Earrings",
    price: 62,
    category: "jewellery",
    description: "Three-tier drop earrings: a square stone, a baroque pearl in a jewelled setting and a halo-cut stone below.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "emerald",
        label: "Emerald",
        swatch: "#1f6b4a",
        photos: [
          { src: "/images/emerald-tiered", alt: "Three-tier emerald and pearl drop earrings in a black jewellery box" },
          { src: "/images/pearl-drop", alt: "Long green-stone and pearl drop earrings" },
        ],
      },
      {
        id: "mint",
        label: "Mint",
        swatch: "#a5dcc8",
        photos: [
          { src: "/images/mint-tiered", alt: "Three-tier mint-stone and pearl drop earrings in a gold box held by two hands" },
        ],
      },
      {
        id: "navy",
        label: "Navy",
        swatch: "#1f2a5c",
        photos: [
          { src: "/images/navy-tiered", alt: "Three-tier navy-stone and pearl drop earrings in a cream box on a dressing table" },
        ],
      },
    ],
  },
  {
    id: "navy-enamel-floral-earrings",
    name: "Navy Enamel Floral Earrings",
    price: 56,
    category: "jewellery",
    description: "Navy enamel and sapphire-crystal floral earrings with a champagne stone and a baroque pearl.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "navy",
        label: "Navy",
        swatch: "#1f2a5c",
        photos: [
          { src: "/images/navy-enamel", alt: "Navy enamel and sapphire-crystal floral earrings with a baroque pearl on navy velvet" },
          { src: "/images/navy-enamel-satin", alt: "Navy enamel and sapphire-crystal floral earrings with a baroque pearl on blue satin" },
          { src: "/images/navy-enamel-box", alt: "Navy enamel and sapphire-crystal floral earrings with a baroque pearl in a blue gift box" },
        ],
      },
    ],
  },
  {
    id: "emerald-pearl-jewelled-earrings",
    name: "Emerald & Pearl Jewelled Earrings",
    price: 58,
    category: "jewellery",
    description: "As shown: jewelled earrings with a baroque pearl, multicolour crystals and a large oval emerald drop.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/emerald-jewelled", alt: "Jewelled earrings with a baroque pearl, multicolour crystals and a large oval emerald drop" },
        ],
      },
    ],
  },
  {
    id: "crystal-petal-jhumka-earrings",
    name: "Crystal Petal Jhumka Earrings",
    price: 46,
    category: "jewellery",
    description: "Jhumka-style earrings with a large oval stone, a fan of crystal petals and a pearl drop.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "onyx",
        label: "Onyx",
        swatch: "#222226",
        photos: [
          { src: "/images/onyx-jhumka", alt: "Close-up of an ear wearing a black onyx and multicolour crystal jhumka earring with a pearl" },
        ],
      },
      {
        id: "mint",
        label: "Mint",
        swatch: "#a5dcc8",
        photos: [
          { src: "/images/mint-jhumka", alt: "Mint-stone jhumka earrings with multicolour crystal petals and pearl drops, held in a hand" },
        ],
      },
      {
        id: "teal",
        label: "Teal",
        swatch: "#2a8c8c",
        photos: [
          { src: "/images/teal-jhumka", alt: "Teal-stone jhumka earrings with pearl drops in a green velvet box on satin" },
        ],
      },
      {
        id: "ruby",
        label: "Ruby",
        swatch: "#a31d3c",
        photos: [
          { src: "/images/ruby-jhumka", alt: "Ruby-red jhumka earrings with pearl drops held in a cream box" },
        ],
      },
    ],
  },
  {
    id: "rose-quartz-jhumka-earrings",
    name: "Rose Quartz Jhumka Earrings",
    price: 46,
    category: "jewellery",
    description: "As shown: rose-quartz and pink-crystal jhumka earrings with pearl drops in a pink box.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/rose-jhumka", alt: "Rose-quartz and pink-crystal jhumka earrings with pearl drops in a pink box" },
        ],
      },
    ],
  },
  {
    id: "floral-pearl-drop-earrings",
    name: "Floral Pearl Drop Earrings",
    price: 60,
    category: "jewellery",
    description: "Crystal floral earrings with a stone post and a baroque pearl drop, shown in a gift box.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "champagne",
        label: "Champagne",
        swatch: "#e3cba8",
        photos: [
          { src: "/images/champagne-floral", alt: "Champagne-crystal floral earrings with baroque pearl drops in a gold-trimmed box" },
        ],
      },
      {
        id: "ruby",
        label: "Ruby",
        swatch: "#a31d3c",
        photos: [
          { src: "/images/ruby-floral", alt: "Ruby-red floral earrings with baroque pearl drops in a red velvet box" },
        ],
      },
    ],
  },
  {
    id: "pearl-charm-bracelet",
    name: "Pearl Charm Bracelet",
    price: 64,
    category: "jewellery",
    description: "Gold charm bracelet with pearls, jewelled flowers and a stone cluster.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "blush",
        label: "Blush",
        swatch: "#ecc9c9",
        photos: [
          { src: "/images/charm-bracelet", alt: "Gold charm bracelet with pearls and blush-pink stones worn while writing in a notebook", focus: "78% center" },
        ],
      },
      {
        id: "turquoise",
        label: "Turquoise",
        swatch: "#3fb8b0",
        photos: [
          { src: "/images/turquoise-charm", alt: "Gold charm bracelet with turquoise stones and pearl drops worn on a wrist" },
        ],
      },
    ],
  },
  {
    id: "braided-statement-bracelet",
    name: "Braided Statement Bracelet",
    price: 64,
    category: "jewellery",
    description: "Braided gold bracelet with a jewelled hexagon, a square stone and a baroque pearl charm.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "blush",
        label: "Blush",
        swatch: "#ecc9c9",
        photos: [
          { src: "/images/blush-bracelet", alt: "Gold braided bracelet with a blush stone, flowers and a baroque pearl, beside a peach rose" },
        ],
      },
      {
        id: "emerald",
        label: "Emerald",
        swatch: "#1f6b4a",
        photos: [
          { src: "/images/emerald-bracelet", alt: "Gold braided bracelet with emerald stones and a baroque pearl on a wrist" },
          { src: "/images/emerald-bracelet-pair", alt: "A pair of gold braided bracelets with emerald stones and baroque pearls worn on both wrists" },
        ],
      },
      {
        id: "amethyst",
        label: "Amethyst",
        swatch: "#6a4a8c",
        photos: [
          { src: "/images/amethyst-bracelet", alt: "Gold braided bracelet with an amethyst stone and black enamel hexagon worn on a wrist" },
        ],
      },
    ],
  },
  {
    id: "baroque-pearl-cuff-bracelet",
    name: "Baroque Pearl Cuff Bracelet",
    price: 64,
    category: "jewellery",
    description: "Twisted gold cuff set with a large baroque pearl and a jewelled stone.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "ruby",
        label: "Ruby",
        swatch: "#a31d3c",
        photos: [
          { src: "/images/ruby-cuff", alt: "Gold cuff bracelet with a ruby stone and a large baroque pearl worn on a wrist" },
        ],
      },
      {
        id: "amber",
        label: "Amber",
        swatch: "#d98a2b",
        photos: [
          { src: "/images/amber-pearl-cuffs", alt: "Two gold cuff bracelets with an amber stone and a baroque pearl, worn while holding a teacup" },
        ],
      },
      {
        id: "rose",
        label: "Rose",
        swatch: "#e5a9b5",
        photos: [
          { src: "/images/pearl-rose-cuffs", alt: "Two gold cuff bracelets, one with a baroque pearl and one with a rose-pink stone, worn on a wrist" },
          { src: "/images/cuff", alt: "Gold cuff bracelet with blush-pink stones worn on a hand" },
        ],
      },
      {
        id: "moonstone",
        label: "Moonstone",
        swatch: "#e8e4da",
        photos: [
          { src: "/images/moonstone-cuffs", alt: "Two gold cuff bracelets with a baroque pearl and a moonstone, worn on a wrist holding a white flower" },
        ],
      },
    ],
  },
  {
    id: "bead-pearl-pendant-choker-set",
    name: "Bead & Pearl Pendant Choker Set",
    price: 98,
    category: "jewellery",
    description: "Multi-strand faceted bead choker with pearls and a jewelled pendant, shown with matching earrings.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "champagne",
        label: "Champagne",
        swatch: "#e3cba8",
        photos: [
          { src: "/images/pearl-choker-set", alt: "Multi-strand pearl choker with a champagne-stone pendant, earrings and ring, worn with a peach embroidered suit" },
        ],
      },
      {
        id: "black",
        label: "Black",
        swatch: "#1b1b1d",
        photos: [
          { src: "/images/black-bead-choker", alt: "Black bead and pearl choker with onyx pendant, earrings and ring, shown in a mirror and in its gift box" },
        ],
      },
      {
        id: "sage",
        label: "Sage",
        swatch: "#a9bfa0",
        photos: [
          { src: "/images/sage-bead-choker", alt: "Sage-green bead and pearl choker with an emerald pendant and matching earrings" },
        ],
      },
      {
        id: "ruby",
        label: "Ruby",
        swatch: "#a31d3c",
        photos: [
          { src: "/images/ruby-bead-choker", alt: "Ruby bead and pearl choker with ruby pendant and matching stud earrings on a maroon embroidered kameez", focus: "center 30%" },
          { src: "/images/ruby-bead-necklace", alt: "Multi-strand ruby bead and pearl necklace with a ruby pendant and matching earrings on a black bust", focus: "center 25%" },
        ],
      },
      {
        id: "blush",
        label: "Blush",
        swatch: "#ecc9c9",
        photos: [
          { src: "/images/blush-bead-choker", alt: "Blush-pink bead and pearl choker with a rose-stone pendant and matching earrings on a black display bust" },
        ],
      },
      {
        id: "navy",
        label: "Navy",
        swatch: "#1f2a5c",
        photos: [
          { src: "/images/navy-bead-choker", alt: "Navy bead and pearl choker with a sapphire pendant and matching earrings worn with a navy outfit" },
        ],
      },
    ],
  },
  {
    id: "pearl-bead-choker-stone-centrepiece",
    name: "Pearl Bead Choker Set with Stone Centrepiece",
    price: 102,
    category: "jewellery",
    description: "Layered pearl and bead choker with an ornate gold stone centrepiece and matching drop earrings.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "blush-emerald",
        label: "Blush & Emerald",
        swatch: "linear-gradient(135deg,#ecc9c9 0 50%,#1f6b4a 50% 100%)",
        photos: [
          { src: "/images/blush-emerald-choker", alt: "Pearl and emerald bead choker with a blush-stone centrepiece and matching drop earrings" },
        ],
      },
      {
        id: "ruby",
        label: "Ruby",
        swatch: "#a31d3c",
        photos: [
          { src: "/images/ruby-choker-model", alt: "Pearl and ruby bead choker with a ruby centrepiece and matching drop earrings worn on a gold embroidered outfit" },
        ],
      },
    ],
  },
  {
    id: "embroidered-placket-kurta-shalwar",
    name: "Embroidered-Placket Kurta Shalwar",
    price: 56,
    category: "menswear",
    description: "A kurta shalwar with an embroidered collar and placket.",
    details: CLOTHING_DETAILS,
    sizes: MENS_SIZES,
    variants: [
      {
        id: "charcoal",
        label: "Charcoal",
        swatch: "#4b4b52",
        photos: [
          { src: "/images/charcoal-kurta", alt: "Man seated in a charcoal kurta shalwar with an embroidered collar and placket" },
        ],
      },
      {
        id: "black",
        label: "Black",
        swatch: "#1b1b1d",
        photos: [
          { src: "/images/black-collar-kurta", alt: "Folded black kurta shalwar with an embroidered collar and placket, laid on grass" },
        ],
      },
      {
        id: "ivory",
        label: "Ivory",
        swatch: "#f3ebdd",
        photos: [
          { src: "/images/ivory-kurta", alt: "Man in an ivory kurta shalwar leaning on a marble column" },
          { src: "/images/ivory-flatlay-kurta", alt: "Folded ivory kurta shalwar with an embroidered collar and placket, laid on grass" },
        ],
      },
    ],
  },
  {
    id: "ruby-diamante-cuff-bracelet",
    name: "Ruby & Diamanté Cuff Bracelet",
    price: 124,
    category: "jewellery",
    description: "As shown: wide gold cuff bracelet set with ruby stones and crystal flowers worn on a wrist.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/ruby-diamante-cuff", alt: "Wide gold cuff bracelet set with ruby stones and crystal flowers worn on a wrist" },
        ],
      },
    ],
  },
  {
    id: "powder-blue-embroidered-suit",
    name: "Powder Blue Embroidered Suit",
    price: 128,
    category: "embroidered",
    description: "Powder blue embroidered kameez with an organza dupatta. Shown with flared sharara trousers and with straight trousers.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "powder-blue",
        label: "Powder Blue",
        swatch: "#b8cde6",
        photos: [
          { src: "/images/powder-blue-sharara", alt: "Model in a powder blue embroidered kameez with flared sharara trousers and a lace-edged dupatta in a rose garden" },
          { src: "/images/powder-blue-scallop", alt: "Model in a powder blue embroidered suit with a scalloped organza dupatta and a pearl clutch" },
          { src: "/images/powder-blue-garden", alt: "Model in a powder blue embroidered suit with an organza dupatta holding a pearl handbag among roses" },
        ],
      },
    ],
  },
  {
    id: "champagne-crystal-chandelier-earrings",
    name: "Champagne Crystal & Baroque Pearl Chandelier Earrings",
    price: 62,
    category: "jewellery",
    description: "As shown: antique-gold chandelier earrings with a baroque pearl and champagne crystal on a velvet display stand.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/rangin-chandelier", alt: "Antique-gold chandelier earrings with a baroque pearl and champagne crystal on a velvet display stand" },
        ],
      },
    ],
  },
  {
    id: "teal-pearl-choker-set-tikka",
    name: "Teal & Pearl Choker Set with Tikka",
    price: 118,
    category: "jewellery",
    description: "As shown: teal-stone and baroque pearl choker with matching earrings and tikka on a linen display bust.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/teal-pearl-choker", alt: "Teal-stone and baroque pearl choker with matching earrings and tikka on a linen display bust" },
        ],
      },
    ],
  },
  {
    id: "mustard-plum-embroidered-sharara-suit",
    name: "Mustard & Plum Embroidered Sharara Suit",
    price: 168,
    category: "embroidered",
    description: "Mustard embroidered kameez with a plum sharara and a matching embroidered dupatta.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "mustard",
        label: "Mustard",
        swatch: "#d6a21e",
        photos: [
          { src: "/images/mustard-sharara", alt: "Model seated on a cream sofa in a mustard embroidered kameez with a plum sharara and matching dupatta" },
          { src: "/images/mustard-standing", alt: "Model standing in a mustard embroidered kameez with a plum sharara and a matching embroidered dupatta" },
        ],
      },
    ],
  },
  {
    id: "amethyst-baroque-pearl-necklace-set",
    name: "Amethyst & Baroque Pearl Necklace Set",
    price: 112,
    category: "jewellery",
    description: "As shown: silver-tone necklace with amethyst stones and baroque pearls and matching earrings in a lilac box.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/amethyst-necklace", alt: "Silver-tone necklace with amethyst stones and baroque pearls and matching earrings in a lilac box" },
        ],
      },
    ],
  },
  {
    id: "heavy-work-net-3-piece-suit",
    name: "Heavy Work Net 3-Piece Suit",
    price: 98,
    category: "embroidered",
    description: "Heavy work net shirt with pearl detail, satin trousers and an organza dupatta. Stitched and ready to wear.",
    details: ["3-piece stitched suit with organza dupatta", "Ready to wear", "Sizes: Small, Medium, Large"],
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "ice-blue",
        label: "Ice Blue",
        swatch: "#bcd3ee",
        photos: [
          { src: "/images/ice-blue-net", alt: "Model in an ice blue floral net shirt with pearl detail, satin trousers and an organza dupatta" },
        ],
      },
      {
        id: "blush-pink",
        label: "Blush Pink",
        swatch: "#f1c9cf",
        photos: [
          { src: "/images/pink-net", alt: "Model in a blush pink floral net shirt with satin trousers and an organza dupatta" },
        ],
      },
      {
        id: "butter-yellow",
        label: "Butter Yellow",
        swatch: "#f0de8b",
        photos: [
          { src: "/images/yellow-net", alt: "Model in a butter yellow beaded net shirt with satin trousers and an organza dupatta" },
        ],
      },
    ],
  },
  {
    id: "black-chiffon-embroidered-3-piece-suit",
    name: "Black Chiffon Embroidered 3-Piece Suit",
    price: 110,
    category: "embroidered",
    description: "As shown: model in a black chiffon embroidered suit with a lace-trimmed dupatta.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/black-chiffon", alt: "Model in a black chiffon embroidered suit with a lace-trimmed dupatta" },
        ],
      },
    ],
  },
  {
    id: "black-organza-suit-printed-trouser",
    name: "Black Organza Embroidered Suit with Printed Trouser",
    price: 120,
    category: "embroidered",
    description: "As shown: model in a black organza embroidered shirt with a printed trouser and chiffon dupatta in a garden.",
    details: CLOTHING_DETAILS,
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/black-organza", alt: "Model in a black organza embroidered shirt with a printed trouser and chiffon dupatta in a garden" },
        ],
      },
    ],
  },
  {
    id: "fuchsia-baroque-pearl-statement-earrings",
    name: "Fuchsia & Baroque Pearl Statement Earrings",
    price: 52,
    category: "jewellery",
    description: "As shown: fuchsia crystal and baroque pearl statement earrings on a rustic wooden table.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/fuchsia-pearl-studs", alt: "Fuchsia crystal and baroque pearl statement earrings on a rustic wooden table" },
        ],
      },
    ],
  },
  {
    id: "floral-spray-drop-earrings",
    name: "Floral Spray Drop Earrings",
    price: 58,
    category: "jewellery",
    description: "Long drop earrings with a stone post, a baroque pearl and a spray of jewelled flowers.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "onyx",
        label: "Onyx",
        swatch: "#222226",
        photos: [
          { src: "/images/floral-spray-onyx", alt: "Onyx, pearl and multicolour crystal floral spray drop earrings in a cream gift box beside peonies" },
        ],
      },
      {
        id: "sapphire",
        label: "Sapphire",
        swatch: "#2b4da0",
        photos: [
          { src: "/images/sapphire-spray", alt: "Blue sapphire, baroque pearl and crystal floral spray drop earrings in a navy gift box" },
        ],
      },
    ],
  },
  {
    id: "amethyst-baroque-pearl-cluster-earrings",
    name: "Amethyst & Baroque Pearl Cluster Earrings",
    price: 46,
    category: "jewellery",
    description: "Cluster earrings with a baroque pearl, amethyst crystals and a marquise stone.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "amethyst",
        label: "Amethyst",
        swatch: "#6a4a8c",
        photos: [
          { src: "/images/amethyst-stands", alt: "Amethyst crystal and baroque pearl statement earrings displayed on black velvet stands" },
          { src: "/images/amethyst-cluster", alt: "Amethyst crystal and baroque pearl cluster earrings held in a hand" },
        ],
      },
    ],
  },
  {
    id: "purple-crystal-flower-baroque-pearl-studs",
    name: "Purple Crystal Flower & Baroque Pearl Studs",
    price: 42,
    category: "jewellery",
    description: "As shown: silver-tone stud earrings with a baroque pearl and a purple crystal flower.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "default",
        label: "Default",
        swatch: "#c8bda9",
        photos: [
          { src: "/images/purple-flower-studs", alt: "Silver-tone stud earrings with a baroque pearl and a purple crystal flower" },
        ],
      },
    ],
  },
  {
    id: "flower-stud-earrings",
    name: "Flower Stud Earrings",
    price: 38,
    category: "jewellery",
    description: "Gold stud earrings with a pearl-bordered stone above a crystal flower and a twisted gold curl.",
    details: JEWELLERY_DETAILS,
    variants: [
      {
        id: "ruby",
        label: "Ruby",
        swatch: "#a31d3c",
        photos: [
          { src: "/images/ruby-flower-studs", alt: "Gold stud earrings with a ruby square stone, pearl border and a ruby crystal flower" },
        ],
      },
      {
        id: "pink-silver",
        label: "Pink & Silver",
        swatch: "#d9a5b8",
        photos: [
          { src: "/images/pink-silver-studs", alt: "Silver-tone stud earrings with a rose-pink stone, pearl border and a fuchsia crystal flower" },
        ],
      },
      {
        id: "aqua",
        label: "Aqua",
        swatch: "#8fd0db",
        photos: [
          { src: "/images/aqua-studs", alt: "Gold stud earrings with an aqua crystal and a turquoise flower with a pearl centre" },
        ],
      },
      {
        id: "mint",
        label: "Mint",
        swatch: "#a5dcc8",
        photos: [
          { src: "/images/mint-studs-hand", alt: "Gold stud earrings with a mint stone and a turquoise flower held in a hand" },
          { src: "/images/mint-stud-box", alt: "Mint-stone and turquoise flower earrings in a green velvet box with festive greenery" },
          { src: "/images/mint-turquoise", alt: "Mint-stone and turquoise flower earrings in a green velvet box beside a small plant" },
        ],
      },
    ],
  },
];

const FEATURED_IDS = [
  "sienna-bloom-3-piece-suit",
  "the-noor-embroidered-edit",
  "meher-printed-lawn-suit",
  "ayla-occasion-choker-set",
] as const;

const byId = new Map(products.map((p) => [p.id, p]));

export function getProduct(id: string): Product | undefined {
  return byId.get(id);
}

export function getVariant(product: Product, variantId: string): Variant | undefined {
  return product.variants.find((v) => v.id === variantId);
}

/** The photo shown on cards, in search and in the bag. */
export function primaryPhoto(product: Product): Photo {
  return product.variants[0].photos[0];
}

/** True when a shopper has to choose a colour or size, so one-tap "add to bag" can't be used. */
export function needsOptions(product: Product): boolean {
  return product.variants.length > 1 || (product.sizes?.length ?? 0) > 0;
}

/** The four pieces highlighted on the home page. */
export const featuredProducts: readonly Product[] = FEATURED_IDS.map((id) => byId.get(id)).filter(
  (p): p is Product => p !== undefined,
);

/** Other products in the same category (for "You may also like"). */
export function relatedProducts(product: Product, limit = 4): Product[] {
  return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}
