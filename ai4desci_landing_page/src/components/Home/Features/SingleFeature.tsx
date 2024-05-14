import { Feature } from "@/types/feature";

export default function SingleFeature({ feature }: { feature: Feature }) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="group mx-auto mb-10 max-w-[380px] text-center md:mb-16">
        <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]">
          {feature?.icon}
        </div>
        <div>
          <h3 className="mb-3 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl md:mb-5">
            {feature?.title}
          </h3>
          <p className="text-base text-dark-text">{feature?.description}</p>
        </div>
      </div>
    </div>
  );
}
