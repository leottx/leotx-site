import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "@/components/MDXComponents";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import "highlight.js/styles/github-dark-dimmed.css";

export default function BlogLayout({ compiledSource, frontmatter }) {
  return (
    <div>
      <article className="max-w-[65ch] mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
          <time className="flex gap-x-3 text-sm whitespace-nowrap after:content-[''] after:relative after:h-[1px] after:bg-zinc-200 after:w-full after:self-center dark:after:bg-zinc-700/60">
            <span className="px-2 py-1 bg-zinc-100 rounded-md text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
              {format(new Date(frontmatter.publishedAt), "dd 'de' MMM, yyy", {
                locale: pt,
              })}
            </span>
          </time>
        </header>
        <div className="prose prose-zinc dark:prose-invert max-w-none w-full">
          <MDXRemote
            compiledSource={compiledSource}
            components={MDXComponents}
          />
        </div>
      </article>
    </div>
  );
}
