import { getFiles, getFileBySlug } from "@/lib/mdx";
import BlogLayout from "src/layouts/BlogLayout";

export default function Post({ mdxSource }) {
  return <BlogLayout {...mdxSource} />;
}

export async function getStaticPaths() {
  const posts = await getFiles();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug(params.slug);

  return { props: post };
}
