import SingleBlog from "@/components/Blog/SingleBlog";
import { postQueryByTag } from "@/sanity/sanity-query";
import { sanityFetch } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";

type Props = {
  params: { tag: string };
};

const siteName = process.env.SITE_NAME;
const authorName = process.env.AUTHOR_NAME;

export async function generateMetadata({ params }: Props) {
  const { tag } = params;

  const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  if (tag) {
    return {
      title: ` ${formattedTag} | ${siteName}`,
      description: `This is the Tag page for ${siteName}`,
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
      description: "No tag has been found",
    };
  }
}

export default async function TagSlugPage({ params }: Props) {
  const posts: Blog[] = await sanityFetch({
    query: postQueryByTag,
    qParams: { tag: params.tag as any },
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
