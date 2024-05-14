export type Team = {
  id: string | number;
  name: string;
  designation: string;
  image: string;
  socialLinks: SocialLink[];
};

export type SocialLink = {
  id: string | number;
  name: string;
  link: string;
};
