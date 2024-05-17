import SectionTitle from "@/components/Common/SectionTitle";
import { featuresData } from "@/static-data/featurte";
import SingleFeature from "./SingleFeature";

export default function Features() {
  return (
    <section id="features" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        {/* <!-- Section Title --> */}
        <SectionTitle
          mainTitle="Feature"
          title="State-of-the-Art AI Integration for Decentralized Science"
          paragraph="We incorporate the latest of tech that enable AI empowerment for decentralized science. We focus on future-proof tech stack for better user experiences."
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          {featuresData.map((feature) => (
            <SingleFeature key={feature?.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
