export type NavbarItem = {
  id: string | number;
  title: string;
  href?: string;
  external?: boolean;
  submenu?: Submenu[];
};

export type Submenu = {
  id: string | number;
  title: string;
  href: string;
  external?: boolean;
};
