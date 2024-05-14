import { teamData } from "@/static-data/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

export default function Team() {
  return (
    <section id="team" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        <SectionTitle
          mainTitle="Who's Behind AI4DeSci"
          title="Meet With Our Dedicated Team"
          paragraph="We focus on building things that matters. Accelerating AI-Empowered Decentralized Science."
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team) => (
            <SingleTeam key={team?.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
