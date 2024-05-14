import Link from "next/link";

export default function Error() {
  return (
    <section className="pt-[120px] lg:pt-[240px]">
      <div className="px-4 xl:container">
        <div className="border-b pb-20 dark:border-[#2E333D] lg:pb-[130px]">
          <div className="relative mx-auto max-w-[550px] pt-6 text-center md:pt-8">
            <span className="title"> ERROR </span>
            <h1 className="mb-8 font-heading text-[100px] font-semibold leading-none text-dark dark:text-white md:text-[170px] md:leading-none">
              404
            </h1>
            <h2 className="mb-5 font-heading text-3xl font-medium text-dark dark:text-white md:text-4xl">
              Sorry, the page can&#39;t be found
            </h2>
            <p className="mx-auto mb-10 max-w-[515px] text-base text-dark-text">
              The page you were looking for appears to have been moved, deleted
              or does not exist.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded bg-primary px-8 py-[14px] text-sm font-semibold text-white"
            >
              {" "}
              Back to Home{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
