import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function BlogPage({ postsFrontmatter }) {
  const topicsSet = new Set(postsFrontmatter.map(({ topic }) => topic));
  const topics = Array.from(topicsSet);

  function getNumberOfPosts(topic) {
    const totalPosts = postsFrontmatter.filter(
      (frontmatter) => frontmatter.topic === topic
    ).length;
    return Number(totalPosts);
  }

  return (
    <div className="flex flex-col gap-y-14">
      <header className="flex flex-col gap-y-6 max-w-2xl">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Software, provocações e um local para retribuir a comunidade.
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Conheça alguns dos meus pensamentos sobre tecnologia, programação e
          carreira em TI. Esse é um espaço para ajudar a comunidade que tanto
          contribuiu para minha formação enquanto programador.
        </p>
      </header>
      <div className="flex flex-col gap-y-16">
        {topics.map((topic) => {
          const numberOfPosts = getNumberOfPosts(topic);
          return (
            <section key={topic}>
              <header className="flex justify-between text-zinc-900 mb-9 dark:text-zinc-100">
                <h2 className="text-2xl font-bold">{topic}</h2>
                <span>
                  {numberOfPosts <= 1
                    ? `${numberOfPosts} post`
                    : `${numberOfPosts} posts`}
                </span>
              </header>
              <div className="flex flex-col gap-y-12 md:border-l-2 md:border-zinc-200/80 md:pl-6 md:dark:border-zinc-700/80">
                {postsFrontmatter
                  .filter((frontmatter) =>
                    frontmatter.topic === topic ? true : false
                  )
                  .map((frontmatter) => (
                    <article
                      key={frontmatter.id}
                      className="relative gap-y-6 md:gap-x-4 md:grid md:grid-cols-4"
                    >
                      <div className="flex text-zinc-500 border-l-2 mb-4 border-zinc-300 pl-2 min-w-max md:mt-[26px] md:border-none md:pl-0 dark:border-zinc-500">
                        <time className="tracking-wider uppercase text-xs font-medium">
                          {format(
                            new Date(frontmatter.publishedAt),
                            "dd 'de' MMM, yyy",
                            {
                              locale: pt,
                            }
                          )}
                        </time>
                      </div>
                      <div className="p-5 from-teal-50 rounded-xl border border-transparent transition-colors hover:border-gray-200 hover:bg-gradient-to-bl md:col-span-3 dark:hover:border-zinc-700 dark:from-zinc-800">
                        <h3 className="text-lg text-zinc-900 font-bold mb-2 dark:text-zinc-100">
                          <Link
                            href={`/blog/${frontmatter.slug}`}
                            className="after:absolute after:content-[''] after:inset-y-0 after:inset-x-0"
                          >
                            {frontmatter.title}
                          </Link>
                        </h3>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 mb-4">
                          {frontmatter.description}
                        </p>
                        <p className="flex gap-1 items-center font-semibold text-sm text-teal-500">
                          Leia o artigo <FiArrowRight />
                        </p>
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const postsFrontmatter = await getAllFilesFrontMatter();

  return { props: { postsFrontmatter } };
}
