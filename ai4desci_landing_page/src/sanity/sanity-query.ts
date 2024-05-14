import { groq } from "next-sanity";

export const postQuery = groq`*[_type == "post"] {
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
  }`;

export const postQueryBySlug = groq`*[_type == "post" && slug.current == $slug][0] {
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
  }`;

export const postQueryByCategory = groq`*[_type == "post" && category->slug.current == $slug] {
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
  }`;

export const postQueryByTag = groq`*[_type == "post" && $tag in tags] {
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
  }`;

export const postQueryCategory = groq`*[_type == "category"] {
    name,
    slug  
  }`;
