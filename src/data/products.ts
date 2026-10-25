export type Product = {
  id: string;
  name: string;
  /** Price in GBP (whole pounds for now). */
  price: number;
  /** Logical path of a photo in /public/images (see src/lib/images.ts). */
  image: string;
  alt: string;
  tag: string;
  colors: readonly string[];
};

export const products: readonly Product[] = [
  {
    id: "sienna-bloom-3-piece-suit",
    name: "Sienna Bloom 3-Piece Suit",
    price: 79,
    image: "/images/bloom",
    alt: "Model in a floral three-piece suit with lace detail and a printed dupatta, among ferns",
    tag: "New arrival",
    colors: ["#D9DFD0", "#E5D4B8", "#C8BDA9"],
  },
  {
    id: "the-noor-embroidered-edit",
    name: "The Noor Embroidered Edit",
    price: 95,
    image: "/images/noor",
    alt: "Model in a black embroidered suit with a floral-print dupatta",
    tag: "Bestseller",
    colors: ["#C8BDA9", "#87947A", "#F1E8D9"],
  },
  {
    id: "meher-printed-lawn-suit",
    name: "Meher Printed Lawn Suit",
    price: 59,
    image: "/images/meher",
    alt: "Model in a bright floral printed lawn suit with a matching dupatta",
    tag: "Easy favourite",
    colors: ["#D9DFD0", "#E5D4B8", "#87947A"],
  },
  {
    id: "ayla-occasion-choker-set",
    name: "Ayla Occasion Choker Set",
    price: 89,
    image: "/images/ayla",
    alt: "Portrait of a model wearing a pearl choker and green drop earrings",
    tag: "Limited edit",
    colors: ["#C8BDA9", "#E5D4B8", "#87947A"],
  },
];

const byId = new Map(products.map((p) => [p.id, p]));

export function getProduct(id: string): Product | undefined {
  return byId.get(id);
}
