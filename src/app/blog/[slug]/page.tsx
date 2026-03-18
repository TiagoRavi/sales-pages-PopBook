import { notFound } from "next/navigation";
import { getPostSlugs, getPostBySlug } from "@/src/utils/blog";
import ReactMarkdown from "react-markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getPostSlugs();

  return slugs.map((slug) => ({
    slug: slug.replace(".md", ""),
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="blog-article">
      <h1>{post.slug.replaceAll("-", " ")}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}