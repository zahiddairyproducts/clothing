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
    colors: ["#7b343b", "#c9a889", "#d5c6b3"],
  },
  {
    id: "the-noor-embroidered-edit",
    name: "The Noor Embroidered Edit",
    price: 95,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e3",
    alt: "Close-up of embroidered fabric in warm neutral tones",
    tag: "Bestseller",
    colors: ["#bca18b", "#7c283b", "#e1d5c5"],
  },
  {
    id: "meher-printed-lawn-suit",
    name: "Meher Printed Lawn Suit",
    price: 59,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
    alt: "Printed lawn suit styled in warm neutral colours",
    tag: "Easy favourite",
    colors: ["#b64d55", "#d8b58b", "#65715a"],
  },
  {
    id: "ayla-occasion-kaftan",
    name: "Ayla Occasion Kaftan",
    price: 89,
    image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0",
    alt: "Occasion kaftan photographed against natural textures",
    tag: "Limited edit",
    colors: ["#6a2939", "#c7a777", "#252d2b"],
  },
];

const byId = new Map(products.map((p) => [p.id, p]));

export function getProduct(id: string): Product | undefined {
  return byId.get(id);
}
