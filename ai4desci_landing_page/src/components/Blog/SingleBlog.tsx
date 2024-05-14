import { imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function SingleBlog({ blog }: { blog: Blog }) {
  const { title, slug, mainImage, tags } = blog;

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10">
        <div className="relative mb-8 overflow-hidden rounded">
          <Link
            href={`/blog/${slug?.current}`}
            className="relative block aspect-video"
          >
            {mainImage ? (
              <Image
                src={mainImage ? imageBuilder(mainImage).url() : ""}
                alt={title}
                fill
                className="w-full duration-300 group-hover:scale-110"
              />
            ) : (
              "No image"
            )}
          </Link>

          <Link
            href={`/blog/tag/${blog?.tags ? blog?.tags[0] : "not-found"}`}
            className="absolute left-5 top-5 rounded bg-primary px-4 py-[6px] font-heading text-sm font-medium text-white"
          >
            {blog?.tags ? blog?.tags[0] : "Not added"}
          </Link>
        </div>
        <div>
          <div className="mb-4 flex items-center">
            <p className="flex items-center pr-5 font-heading text-base text-dark-text">
              <span className="pr-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  className="fill-current"
                >
                  <path d="M15 16.5H13.5V15C13.5 14.4033 13.2629 13.831 12.841 13.409C12.419 12.9871 11.8467 12.75 11.25 12.75H6.75C6.15326 12.75 5.58097 12.9871 5.15901 13.409C4.73705 13.831 4.5 14.4033 4.5 15V16.5H3V15C3 14.0054 3.39509 13.0516 4.09835 12.3484C4.80161 11.6451 5.75544 11.25 6.75 11.25H11.25C12.2446 11.25 13.1984 11.6451 13.9016 12.3484C14.6049 13.0516 15 14.0054 15 15V16.5ZM9 9.75C8.40905 9.75 7.82389 9.63361 7.27792 9.40746C6.73196 9.18131 6.23588 8.84984 5.81802 8.43198C5.40015 8.01412 5.06869 7.51804 4.84254 6.97208C4.6164 6.42611 4.5 5.84095 4.5 5.25C4.5 4.65905 4.6164 4.07389 4.84254 3.52793C5.06869 2.98196 5.40015 2.48588 5.81802 2.06802C6.23588 1.65016 6.73196 1.31869 7.27792 1.09254C7.82389 0.866396 8.40905 0.75 9 0.75C10.1935 0.75 11.3381 1.22411 12.182 2.06802C13.0259 2.91193 13.5 4.05653 13.5 5.25C13.5 6.44348 13.0259 7.58807 12.182 8.43198C11.3381 9.2759 10.1935 9.75 9 9.75ZM9 8.25C9.79565 8.25 10.5587 7.93393 11.1213 7.37132C11.6839 6.80871 12 6.04565 12 5.25C12 4.45435 11.6839 3.69129 11.1213 3.12868C10.5587 2.56607 9.79565 2.25 9 2.25C8.20435 2.25 7.44129 2.56607 6.87868 3.12868C6.31607 3.69129 6 4.45435 6 5.25C6 6.04565 6.31607 6.80871 6.87868 7.37132C7.44129 7.93393 8.20435 8.25 9 8.25Z" />
                </svg>
              </span>
              Musharof Chy
            </p>
            <p className="flex items-center font-heading text-base text-dark-text">
              <span className="pr-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  className="fill-current"
                >
                  <path d="M12.75 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H5.25V0.75H6.75V2.25H11.25V0.75H12.75V2.25ZM11.25 3.75H6.75V5.25H5.25V3.75H3V6.75H15V3.75H12.75V5.25H11.25V3.75ZM15 8.25H3V14.25H15V8.25Z" />
                </svg>
              </span>
              25 Dec, 2025
            </p>
          </div>
          <h3>
            <Link
              href={`/blog/${slug.current}`}
              className="font-heading text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
            >
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
