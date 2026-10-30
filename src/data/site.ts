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
  /** TODO: replace with your real details; shown on /contact and in the policy pages. */
  contactEmail: "hello@example.com",
  contactHours: "Monday to Friday, 10am to 5pm UK time",
  returnWindowDays: 14,
} as const;

export const navLinks = [
  { label: "New arrivals", href: "/#new" },
  { label: "Collections", href: "/#collections" },
  { label: "Our story", href: "/about" },
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
      { label: "Contact us", href: "/contact" },
      { label: "Delivery & returns", href: "/delivery-returns" },
      { label: "Size guide", href: "/size-guide" },
      { label: "FAQs", href: "/faqs" },
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
