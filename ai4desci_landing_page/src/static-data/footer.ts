import { FooterLink } from "@/types/footer";
import { v4 as uuid } from "uuid";

export const footerLinks: FooterLink[] = [
  {
    id: uuid(),
    title: "Home",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "Products",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "Careers",
    href: "/",
    external: false,
    badge: {
      text: "Hiring",
    },
  },
  {
    id: uuid(),
    title: "Pricing",
    href: "/",
    external: false,
  },
];

export const footerLinksTwo: FooterLink[] = [
  {
    id: uuid(),
    title: "Company",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "Press Media",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "Our Blog",
    href: "/blog",
    external: false,
  },
  {
    id: uuid(),
    title: "Contact Us",
    href: "/contact",
    external: false,
  },
];
