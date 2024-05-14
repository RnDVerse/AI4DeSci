import { v4 as uuid } from "uuid";

export const portfolioData = [
  {
    id: uuid(),
    title: "Use Case 1",
    subTitle: "Mini Description",
    tags: ["brand", "ecommerce"],
    image: "/images/portfolio/image-1.jpg",
  },
  {
    id: uuid(),
    title: "Use Case 2",
    subTitle: "Mini Description",
    tags: ["brand", "ecommerce"],
    image: "/images/portfolio/image-2.jpg",
  },
  {
    id: uuid(),
    title: "Use Case 3",
    subTitle: "Mini Description",
    tags: ["brand"],
    image: "/images/portfolio/image-3.jpg",
  },
  {
    id: uuid(),
    title: "Use Case 4",
    subTitle: "Mini Description",
    tags: ["ecommerce"],
    image: "/images/portfolio/image-4.jpg",
  },
];
