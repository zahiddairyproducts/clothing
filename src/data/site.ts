export const site = {
  name: "Rangeen Dhaage",
  tagline: "Threaded with colour",
  description:
    "Discover considered colour, beautiful prints and everyday occasionwear at Rangeen Dhaage.",
  announcement: "Complimentary UK delivery on orders over £100",
  freeDeliveryThreshold: 100,
  locale: "en-GB",
  currency: "GBP",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const navLinks = [
  { label: "New arrivals", href: "/#new" },
  { label: "Collections", href: "/#collections" },
  { label: "Our story", href: "/#story" },
] as const;

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "All products", href: "/shop" },
      { label: "Lawn edit", href: "/shop?category=lawn" },
      { label: "Embroidered", href: "/shop?category=embroidered" },
      { label: "Jewellery", href: "/shop?category=jewellery" },
      { label: "Menswear", href: "/shop?category=menswear" },
    ],
  },
  {
    title: "Need a hand?",
    links: [
      { label: "Contact us", href: "/#newsletter" },
      { label: "Delivery & returns", href: "/#newsletter" },
      { label: "Size guide", href: "/#newsletter" },
      { label: "FAQs", href: "/#newsletter" },
    ],
  },
  {
    title: "Stay connected",
    links: [
      { label: "Instagram", href: "/#newsletter" },
      { label: "Pinterest", href: "/#newsletter" },
      { label: "Join our mailing list", href: "/#newsletter" },
    ],
  },
] as const;
