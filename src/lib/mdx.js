// Método do Node.js para manipular o sistema de arquivos (file system)
import fs from "fs";

// Método para extrair o front-matter do arquivo .mdx
import matter from "gray-matter";

// Módulo que provê utilidade para manipular paths de arquivos e diretórios
import path from "path";

import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";

// Obtendo o path do diretório atual
const root = process.cwd();

export async function getFiles() {
  return fs.readdirSync(path.join(root, "src", "posts"));
}

export async function getFileBySlug(slug) {
  const source = fs.readFileSync(
    path.join(root, "src", "posts", `${slug}.mdx`),
    "utf8"
  );

  const mdxSource = await serialize(source, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
    parseFrontmatter: true,
  });

  return { mdxSource };
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join(root, "src", "posts"));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "src", "posts", postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
