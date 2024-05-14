import { Testimonial } from "@/types/testimonial";
import { v4 as uuid } from "uuid";

export const testimonialData: Testimonial[] = [
  {
    id: uuid(),
    name: "User 1",
    designation: "Founder @ Research Institute",
    image: "/images/testimonial/image-1.jpg",
    review:
      "Some comment about how useful is AI4DeSci, copy and add from ResearchHub",
  },
];
