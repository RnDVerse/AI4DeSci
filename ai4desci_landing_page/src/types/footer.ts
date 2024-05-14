export type FooterLink = {
  id: string | number;
  title: string;
  href: string;
  external?: boolean;
  badge?: {
    text: string;
  };
};
