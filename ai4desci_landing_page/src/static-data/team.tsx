import { Team } from "@/types/team";
import { v4 as uuid } from "uuid";

export const teamData: Team[] = [

  {
    id: uuid(),
    name: "Dominikus Brian",
    designation: "Ecosystem Architect & Lead Developer",
    image: "/images/team/domi_team.png",
    socialLinks: [
      {
        id: uuid(),
        name: "Github",
        link: "https://github.com/dominikusbrian",
      },
      {
        id: uuid(),
        name: "Discord",
        link: "https://discord.com/invite/Cq5bxYrGQj",
      },
      {
        id: uuid(),
        name: "Linkedin",
        link: "https://www.linkedin.com/in/dominikus-brian-%E9%92%9F%E9%B8%BF%E7%9B%9B-82226161/",
      },
    ],
  },
];
