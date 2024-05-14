import SingleBlog from "@/components/Blog/SingleBlog";
import { postQueryByCategory } from "@/sanity/sanity-query";
import { sanityFetch } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";

type Props = {
  params: { slug: string };
};

const siteName = process.env.SITE_NAME;
const authorName = process.env.AUTHOR_NAME;

export async function generateMetadata({ params }: Props) {
  const { slug } = params;

  const formattedCategory = slug.charAt(0).toUpperCase() + slug.slice(1);

  if (slug) {
    return {
      title: ` ${formattedCategory} | ${siteName}`,
      description: `This is the Category page for ${siteName}`,
      author: authorName,

      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No category has been found",
    };
  }
}

export default async function CategoryBlogPage({ params }: Props) {
  const posts: Blog[] = await sanityFetch({
    query: postQueryByCategory,
    qParams: { slug: params.slug },
    tags: ["post"],
  });

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="pt-[130px]">
        <div className="px-4 xl:container">
          <div className="-mx-4 flex flex-wrap">
            {posts.length > 0 &&
              posts.map((post, key) => <SingleBlog key={key} blog={post} />)}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
}
