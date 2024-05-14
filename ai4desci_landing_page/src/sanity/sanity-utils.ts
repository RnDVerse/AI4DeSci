import ImageUrlBuilder from "@sanity/image-url";
import { createClient, groq, type QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";

export const client = createClient(clientConfig);

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"] {
    title,
    metadata,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body
  }`,
  );
}

export async function getCategories() {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "category"] {
        _id,
        name,
        image,
        slug,
      }
    `,
    {
      // Disable cache when the hook secret is undefined for development only.
      cache: process.env.SANITY_HOOOK_SECRET ? "force-cache" : "no-cache",
      next: { tags: ["category"] },
    } as any,
  );
}

export async function getPostByTag(tag: string) {
  return client.fetch(
    groq`*[_type == "post" && tags == $tag] {
    title,
    metadata,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body`,
    { tag } as any,
  );
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams as any, {
    cache: "force-cache",
    next: { tags },
  });
}

export function imageBuilder(source: string) {
  return ImageUrlBuilder(clientConfig as any).image(source);
}
