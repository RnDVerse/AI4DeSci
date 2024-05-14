import { NavbarItem } from "@/types/navbar";
import { v4 as uuid } from "uuid";

export const navbarData: NavbarItem[] = [
  {
    id: uuid(),
    title: "Features",
    href: "#features",
    external: false,
  },
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
    title: "Roadmap",
    href: "#roadmap",
    external: false,
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
        href: "/docs",
        external: false,
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
      {
        id: uuid(),
        title: "Sign in",
        href: "/auth/signin",
        external: false,
      },
      {
        id: uuid(),
        title: "Sign up",
        href: "/auth/signup",
        external: false,
      },
    ],
  },
];
