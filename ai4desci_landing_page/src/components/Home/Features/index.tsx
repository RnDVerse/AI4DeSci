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
          title="Essential Integrations with Modern Design"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
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
