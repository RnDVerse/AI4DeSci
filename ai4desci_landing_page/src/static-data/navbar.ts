import { NavbarItem } from "@/types/navbar";
import { v4 as uuid } from "uuid";

export const navbarData: NavbarItem[] = [
  {
    id: uuid(),
    title: "About",
    href: "#about",
    external: false,
  },
  {
    id: uuid(),
    title: "Use Cases",
    href: "#portfolio",
    external: false,
  },
  {
    id: uuid(),
    title: "Collaborative Cloud",
    href: "https://hub.ai4desci.com",
    external: true,
  },
  {
    id: uuid(),
    title: "Science Crowdsourcing",
    href: "https://app.ai4desci.com",
    external: true,
  },
  {
    id: uuid(),
    title: "Pages",
    submenu: [
      {
        id: uuid(),
        title: "Home",
        href: "/",
        external: false,
      },
      {
        id: uuid(),
        title: "Docs",
        href: "https://docs.ai4desci.com",
        external: true,
      },
      {
        id: uuid(),
        title: "Support",
        href: "/support",
        external: false,
      },
      {
        id: uuid(),
        title: "Blog",
        href: "/blog",
        external: false,
      },
    ],
  },
];
