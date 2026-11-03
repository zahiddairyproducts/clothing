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
 * Sample catalogue. Names describe what each photo shows; Prices and sizes are real for the pieces with measurements listed; the rest are still placeholders.
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
    description: "A floral three-piece suit that brings a garden into your wardrobe. The kameez is finished with delicate lace detail, and the printed dupatta carries the soft colours of the print so the whole outfit feels like one considered picture. A pretty choice for daytime gatherings and family visits.",
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
    description: "The Noor is a black embroidered suit with a floral-print dupatta, a pairing that gives a classic dark outfit a rich burst of colour. The embroidery gives the kameez depth, while the printed dupatta adds pattern and movement when you drape it. A polished choice for evenings and celebrations when you want black with personality.",
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
    price: 65,
    category: "lawn",
    tag: "Easy favourite",
    description: "A polly lawn suit in a bold, bright floral print, with a matching printed dupatta that completes the look. The colours are lively and expressive, so this is the suit to choose when you want to be noticed for the right reasons. It is available in size M only, with the bust, hips and shirt length listed in the details.",
    details: ["Fabric: polly lawn.", "Size M only. Bust 20″, hips 22″, shirt length 48″."],
    sizes: ["M"],
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
    description: "A pearl choker paired with green drop earrings, designed to be worn together as a set. The pearls sit softly at the neckline while the green drops add a bright note of colour. An easy way to finish an embroidered suit for weddings and celebrations.",
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
    id: "onyx-pearl-earring-set",
    name: "Onyx & Pearl Earring Set",
    price: 38,
    category: "jewellery",
    description: "Black and pearl earrings with a matching cuff, a pairing that is classic and a little dramatic. The black stones keep things sleek and the pearls soften them. Wear the earrings and cuff together for an evening look, or choose just one piece for a quieter finish.",
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
    description: "A deep burgundy embroidered suit with a rich, jewel-toned look. Floral embroidery in rose tones gives the kameez depth and detail, and the dark colour suits evening events, celebrations and festive gatherings. Pair it with simple jewellery and let the colour do the work.",
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
    price: 25,
    category: "lawn",
    description: "A soft lawn two-piece co-ord set, with a matching top and trousers in a blue and purple leaf print. The print is lively but easy to wear, and having both pieces together gives you a complete outfit with no styling effort. A relaxed choice for everyday wear, available in size S only.",
    details: ["Fabric: soft lawn, two pieces.", "Size S only. Bust 18″, hips 19″, shirt length 42″."],
    sizes: ["S"],
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
    price: 55,
    category: "embroidered",
    description: "A soft lawn suit in a vivid ruby shade with embroidery, supplied with a lawn dupatta. The colour is warm and celebratory, so it suits festive days and family occasions, and the matching dupatta finishes the look. It is available in sizes M and L, with the measurements for each size listed in the details.",
    details: ["Fabric: soft lawn, with a lawn dupatta.", "Size M: bust 21½″, hips 22″, shirt length 40″.", "Size L: bust 23″, hips 24½″, shirt length 41″."],
    sizes: ["M", "L"],
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
    description: "A necklace, earrings and tikka in turquoise-coloured stones, sold together as one set. The tikka completes a traditional look, and the turquoise brings a fresh pop of colour against both deep and light outfits. A lovely set for weddings, mehndi and festive occasions.",
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
    description: "A classic kurta shalwar with a mandarin collar and a button placket, for a clean, traditional look. It comes in sky blue, cobalt blue and black, so you can choose the shade that suits the occasion. A dependable choice for family gatherings, celebrations and everyday wear.",
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
    description: "Kundan-style earrings with emerald-green stones. The detail is intricate and the green is rich, a combination that works beautifully with bridal and festive colours. Wear them with a simple neckline and let the earrings be the feature.",
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
    description: "A gold-toned collar necklace with a large stone pendant and pearls, sold with matching earrings. The collar sits close to the neck and the pendant draws the eye, so it works well with a plain or lightly embroidered neckline. Choose from emerald, onyx or ruby.",
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
    description: "A layered gold-toned chain necklace with emerald-green accents, sold with matching earrings. The layers give the necklace presence, and the green accents add colour. A versatile set that can dress up a simple outfit or complete a festive one.",
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
    description: "A gold-toned cocktail ring set with ruby and blush-pink stones. The two colours give it a romantic, celebratory feel, and the stones make it a statement on their own. Wear it with simple bracelets, or let it stand alone against an embroidered suit.",
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
    description: "Statement drop earrings built around a sweeping gold-toned feather, a flower-set baroque pearl and a large faceted stone. They are bold and designed to be noticed, so a simple neckline lets them shine. Choose from navy, teal, mint, blush, pink and silver, black and sapphire blue.",
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
    description: "A charcoal suit finished with a long sheer jacket that is heavily beaded and embroidered. The jacket is the statement: worn open over the suit, it adds length, texture and a touch of sparkle. An elegant choice for evenings and celebrations when you want something a little more dramatic than a standard suit.",
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
    description: "A long necklace of jewelled flowers with pearl drops, sold with matching earrings. The length makes it a natural partner for plain or deeply coloured kameez, where the flowers and pearls really stand out. Available in multicolour and turquoise.",
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
    description: "Gold-toned earrings built around a baroque pearl, with jewelled leaves and a round stone drop edged with seed pearls. The shapes are organic and the detail is rich, so they feel special without being overwhelming. Choose from emerald, multicolour, ruby, sapphire and amethyst.",
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
    description: "Three-tier drop earrings with a square stone at the top, a baroque pearl in a jewelled setting in the middle and a halo-cut stone below. The length draws the eye downwards and frames the face. Available in emerald, mint and navy.",
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
    description: "Floral earrings in navy enamel and sapphire-blue crystal, finished with a champagne stone and a baroque pearl. The deep navy makes the champagne and pearl details glow. They suit blue, black, cream and gold outfits.",
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
    description: "Jewelled earrings with a baroque pearl, multicolour crystals and a large oval emerald-green drop. The mix of colours gives them a festive feel, and the emerald drop is the focus. They look especially good against solid-coloured outfits.",
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
    description: "Jhumka-style earrings with a large oval stone, a fan of crystal petals and a pearl drop. The jhumka shape is a traditional favourite, and the petals add sparkle that moves as you do. Choose from onyx, mint, teal or ruby.",
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
    description: "Jhumka earrings in rose-quartz pink, with pink crystals and pearl drops, shown in a pink box. The soft pink is gentle and pretty, and the pearl drops add a delicate finish. A lovely choice for daytime events and pastel outfits.",
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
    description: "Floral earrings set with crystals on a stone post, finished with a baroque pearl drop and shown in a gift box. The flower shape is feminine and the pearl drop adds movement. Choose from champagne or ruby red.",
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
    description: "A gold-toned charm bracelet with pearls, jewelled flowers and a stone cluster. It is detailed enough to be the main piece on your wrist, yet it layers easily with simple bangles. Available in blush and turquoise.",
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
    description: "A braided gold-toned bracelet with a jewelled hexagon, a square stone and a baroque pearl charm. The braid gives it texture and the jewelled centre gives it sparkle. Choose from blush, emerald or amethyst.",
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
    description: "A twisted gold-toned cuff set with a large baroque pearl and a jewelled stone. The twist adds texture and the pearl gives it a soft glow. It looks lovely worn alone or stacked with a second cuff. Available in ruby, amber, rose and moonstone.",
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
    description: "A multi-strand choker of faceted beads and pearls with a jewelled pendant, shown with matching earrings. The strands give it a rich, layered look at the neckline. Available in champagne, black, sage, ruby, blush and navy.",
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
    description: "A layered choker of pearls and beads with an ornate gold-toned stone centrepiece, sold with matching drop earrings. The centrepiece is the focal point, and the layers around it add depth. Choose from blush and emerald, or ruby.",
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
    description: "A kurta shalwar with an embroidered collar and placket, a quiet detail that lifts a simple outfit. It comes in charcoal, black and ivory, so there is a shade for daytime and one for evening. Wear it to family gatherings and celebrations when you want to look put together without trying too hard.",
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
    description: "A wide gold-toned cuff set with ruby-red stones and crystal flowers. The width gives it presence on the wrist, and the red stones bring colour. Wear it as the single statement piece with a simple sleeve.",
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
    price: 45,
    category: "embroidered",
    description: "A sky blue summer dress with embroidery, soft in colour and easy to wear from day into evening. The light shade pairs beautifully with pearl or silver-toned jewellery. It is available in size L only, with the bust, hips and shirt length listed in the details.",
    details: ["Sky blue summer dress.", "Size L only. Bust 22½″, hips 24½″, shirt length 47″."],
    sizes: ["L"],
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
    description: "Antique-gold chandelier earrings with a baroque pearl and a champagne crystal, shown on a velvet display stand. The antique finish gives them a vintage, collected feel. They suit gold, cream, ivory and blush outfits.",
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
    description: "A choker of teal stones and baroque pearls, sold with matching earrings and a tikka. Together they make a complete occasion set, with the deep teal standing out against both bright and soft outfits. Suited to weddings, mehndi and other celebrations.",
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
    price: 45,
    category: "embroidered",
    description: "A mustard chiffon three-piece suit with heavy gota-style work, supplied with plazo trousers and a chiffon dupatta. The warm mustard against the deep plum is a classic festive pairing, and the gold-toned detailing catches the light. A strong choice for celebrations, available in size S only.",
    details: ["Fabric: chiffon, three pieces, with heavy gota-style work.", "Size S only. Bust 18″, hips 19″, shirt length 43″."],
    sizes: ["S"],
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
    description: "A silver-toned necklace with amethyst-purple stones and baroque pearls, with matching earrings, shown in a lilac box. The purple and pearl combination feels regal and soft at the same time. A good match for lilac, silver, grey, ivory or black outfits.",
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
    price: 85,
    category: "embroidered",
    description: "A shantly net shirt with fully heavy cutdana work on the front and back, so the detail is carried all the way around the outfit. It comes with an organza dupatta and straight capri-style trousers, in yellow, sky blue or tea pink, all at the same price. Choose it for celebrations when you want delicate colour with rich, sparkling detail. Sizes S, M and L are available.",
    details: ["Fabric: shantly net shirt with an organza dupatta.", "Size S: bust 19″, hips 20″, shirt length 48″.", "Size M: bust 20″, hips 22″, shirt length 47″.", "Size L: bust 22″, hips 23″, shirt length 47″."],
    sizes: WOMENS_SIZES,
    variants: [
      {
        id: "ice-blue",
        label: "Sky Blue",
        swatch: "#bcd3ee",
        photos: [
          { src: "/images/ice-blue-net", alt: "Model in an ice blue floral net shirt with pearl detail, satin trousers and an organza dupatta" },
        ],
      },
      {
        id: "blush-pink",
        label: "Tea Pink",
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
    price: 45,
    category: "embroidered",
    description: "A black chiffon three-piece suit with embroidery and sequin detail across the kameez, finished with a lace-trimmed dupatta. Black is always elegant, and the sequins add a quiet shimmer for evenings and celebrations. It is available in size S only.",
    details: ["Fabric: chiffon, three pieces.", "Size S only. Bust 18″, hips 19″, shirt length 46″."],
    sizes: ["S"],
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
    price: 65,
    category: "embroidered",
    description: "A black embroidered organza shirt, worn with a printed trouser and a chiffon dupatta. The printed trouser adds a surprise of pattern against the black, so the outfit feels designed rather than simply dressed. It is available in size XL only.",
    details: ["Fabric: organza shirt with a chiffon dupatta.", "Size XL only. Bust 24″, hips 25½″, shirt length 49″."],
    sizes: ["XL"],
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
    id: "plum-velvet-embroidered-3-piece",
    name: "Plum Velvet Embroidered 3-Piece",
    price: 85,
    category: "embroidered",
    tag: "New arrival",
    description: "A plum velvet three-piece suit with embroidery in gold and rose tones, supplied with an organza dupatta. Velvet gives the colour real depth, which makes this a natural choice for winter evenings, weddings and festive gatherings. It is available in size L only.",
    details: ["Fabric: velvet, three pieces, with an organza dupatta.", "Size L only. Bust 21″, hips 23″, shirt length 49″."],
    sizes: ["L"],
    variants: [
      {
        id: "plum",
        label: "Plum",
        swatch: "#4a1b3a",
        photos: [
          { src: "/images/plum-velvet", alt: "Model seated on a gold-framed sofa in a plum velvet embroidered suit with an embroidered organza dupatta" },
          { src: "/images/plum-velvet-full", alt: "Model standing in a plum velvet embroidered suit with an embroidered organza dupatta and matching trousers" },
          { src: "/images/plum-velvet-detail", alt: "Close-up of the gold and rose-gold embroidery on the plum velvet kameez" },
        ],
      },
    ],
  },
  {
    id: "black-cotton-lawn-floral-3-piece",
    name: "Black Cotton Lawn Floral 3-Piece",
    price: 35,
    category: "lawn",
    tag: "New arrival",
    description: "A black cotton lawn three-piece suit with colourful floral embroidery across the neckline and sleeves. Small cut-work eyelets are scattered over the kameez and the hem is edged in scalloped lace, while the black floral-print dupatta repeats the pinks, oranges and purples of the embroidery. A striking choice when you want black with plenty of colour. It is available in size M only.",
    details: ["Fabric: cotton lawn, three pieces.", "Size M only. Bust 20″, hips 21″, shirt length 38″."],
    sizes: ["M"],
    variants: [
      {
        id: "black",
        label: "Black",
        swatch: "#1c1c1f",
        photos: [
          { src: "/images/black-cotton-model", alt: "Model in a black cotton lawn suit with pink, orange and purple floral embroidery, a floral-print dupatta and wide black trousers" },
        ],
      },
    ],
  },
  {
    id: "lilac-cutdana-lawn-3-piece",
    name: "Lilac Cutdana Lawn 3-Piece",
    price: 45,
    category: "embroidered",
    tag: "New arrival",
    description: "A soft lilac cotton lawn suit with cutdana work on the shirt, paired with a soft net dupatta and matching trousers. Gold-toned embroidery follows the neckline and sleeves, the hem is finished with a scalloped net panel, and the dupatta carries a gold border with tassels. A gentle, celebratory choice for daytime events. It is available in size M only.",
    details: ["Fabric: cotton lawn with cutdana work, with a soft net dupatta.", "Size M only. Bust 20″, hips 22″, shirt length 46″."],
    sizes: ["M"],
    variants: [
      {
        id: "lilac",
        label: "Lilac",
        swatch: "#d9c3cf",
        photos: [
          { src: "/images/lilac-model", alt: "Model standing in a garden in a soft lilac embroidered suit with a gold-bordered net dupatta with tassels" },
          { src: "/images/lilac-model-2", alt: "Model in a soft lilac suit with gold-toned embroidery, a scalloped net hem and a net dupatta" },
        ],
      },
    ],
  },
  {
    id: "mustard-paisley-viscose-3-piece",
    name: "Mustard Paisley Viscose 3-Piece",
    price: 45,
    category: "embroidered",
    tag: "New arrival",
    description: "A mustard viscose three-piece suit from the winter collection, with navy paisley embroidery down the front and beaded, scalloped cuffs and hem. The navy dupatta has a printed panel and a scalloped edge that brings out the warm mustard. A rich, seasonal choice for colder days and gatherings. It is available in size M only.",
    details: ["Fabric: viscose, three pieces (winter).", "Size M only. Bust 20″, hips 21″, shirt length 47″."],
    sizes: ["M"],
    variants: [
      {
        id: "mustard",
        label: "Mustard",
        swatch: "#c78a1d",
        photos: [
          { src: "/images/viscose-model", alt: "Model in a mustard viscose suit with navy paisley embroidery, beaded cuffs and a navy printed dupatta with a scalloped edge" },
        ],
      },
    ],
  },
  {
    id: "pomegranate-print-lawn-3-piece",
    name: "Pomegranate Print Lawn 3-Piece",
    price: 45,
    category: "lawn",
    tag: "New arrival",
    description: "A polly lawn three-piece suit printed with pomegranates in reds, pinks and greens on a white ground. Maroon trim runs around the neckline and hem and finishes in beaded tassels, and the maroon printed dupatta and white trousers with a printed border complete the set. A cheerful, colourful choice for daytime. It is available in size L only.",
    details: ["Fabric: polly lawn, three pieces.", "Size L only. Bust 23″, hips 25″, shirt length 43″."],
    sizes: ["L"],
    variants: [
      {
        id: "white",
        label: "White",
        swatch: "#f4efe6",
        photos: [
          { src: "/images/pomegranate-model", alt: "Model in a white polly lawn suit printed with red and pink pomegranates, maroon trim, a maroon printed dupatta and white trousers" },
        ],
      },
    ],
  },
  {
    id: "fuchsia-baroque-pearl-statement-earrings",
    name: "Fuchsia & Baroque Pearl Statement Earrings",
    price: 52,
    category: "jewellery",
    description: "Statement earrings with fuchsia crystals and a baroque pearl. The bright pink is bold and joyful, and the pearl keeps it elegant. Wear them with a simple outfit so the colour is the focus.",
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
    description: "Long drop earrings with a stone post, a baroque pearl and a spray of jewelled flowers. The design flows downwards like a small bouquet. Choose from onyx or sapphire blue.",
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
    description: "Cluster earrings with a baroque pearl, amethyst-purple crystals and a marquise-cut stone. The cluster shape gives them volume, and the purple tones are rich. They look lovely with lilac, black and silver outfits.",
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
    description: "Silver-toned stud earrings with a baroque pearl and a purple crystal flower. They are small enough for everyday wear, with a little sparkle and colour. Wear them alone or layered with other earrings.",
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
    description: "Stud earrings with a pearl-bordered stone above a crystal flower and a twisted curl. A small design with a lot of detail. Choose from ruby, pink and silver, aqua or mint.",
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
