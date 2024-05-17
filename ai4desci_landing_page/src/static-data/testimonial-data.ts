import { Testimonial } from "@/types/testimonial";
import { v4 as uuid } from "uuid";

export const testimonialData: Testimonial[] = [
  {
    id: uuid(),
    name: "Akash.Network",
    designation: "Akashathon 2024",
    image: "/images/about/akash-red-t.png",
    review:"Akashathon² participants will delve into the limitless possibilities of AI applications empowered by Akash's GPU marketplace. Whether you're passionate about revolutionizing crypto with AI or crafting tools to enhance the accessibility and usability of the Akash network for both providers and deployers, this hackathon is your platform to innovate!",
  },
];
