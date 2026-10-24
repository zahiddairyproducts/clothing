export type Product = {
  id: string;
  name: string;
  /** Price in GBP (whole pounds for now). */
  price: number;
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
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    alt: "Model wearing a rich burgundy three-piece suit",
    tag: "New arrival",
    colors: ["#D9DFD0", "#E5D4B8", "#C8BDA9"],
  },
  {
    id: "the-noor-embroidered-edit",
    name: "The Noor Embroidered Edit",
    price: 95,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e3",
    alt: "Close-up of embroidered fabric in warm neutral tones",
    tag: "Bestseller",
    colors: ["#C8BDA9", "#87947A", "#F1E8D9"],
  },
  {
    id: "meher-printed-lawn-suit",
    name: "Meher Printed Lawn Suit",
    price: 59,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
    alt: "Printed lawn suit styled in warm neutral colours",
    tag: "Easy favourite",
    colors: ["#D9DFD0", "#E5D4B8", "#87947A"],
  },
  {
    id: "ayla-occasion-kaftan",
    name: "Ayla Occasion Kaftan",
    price: 89,
    image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0",
    alt: "Occasion kaftan photographed against natural textures",
    tag: "Limited edit",
    colors: ["#C8BDA9", "#E5D4B8", "#87947A"],
  },
];

const byId = new Map(products.map((p) => [p.id, p]));

export function getProduct(id: string): Product | undefined {
  return byId.get(id);
}
