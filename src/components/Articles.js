// Components
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { FiClock, FiArrowRight } from "react-icons/fi";

import { formatDistanceStrict } from "date-fns";
import { pt } from "date-fns/locale";

export default function Articles({ postsFrontmatter }) {
  return (
    <section>
      <SectionTitle itemNumber="03." itemText="Artigos" />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {postsFrontmatter.map((frontmatter) => (
          <li
            key={frontmatter.title}
            className="bg-white border border-gray-200 p-5 rounded-xl from-teal-50 hover:bg-gradient-to-bl relative dark:bg-transparent dark:border-zinc-700 dark:from-zinc-800"
          >
            <header className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500">
              <FiClock />
              <time
                className="tracking-wider uppercase text-xs font-medium"
                dateTime="2023-02-10 20:00"
              >
                Publicado{" "}
                {formatDistanceStrict(
                  new Date(frontmatter.publishedAt),
                  new Date(),
                  {
                    addSuffix: true,
                    locale: pt,
                  }
                )}
              </time>
            </header>
            <div className="my-6">
              <h3 className="font-bold text-lg text-zinc-900 mb-2 dark:text-zinc-200">
                <Link
                  href={`/blog/${frontmatter.slug}`}
                  className="after:absolute after:content-[''] after:inset-y-0 after:inset-x-0 after:rounded-xl"
                >
                  {frontmatter.title}
                </Link>
              </h3>
              <p className="text-zinc-700 dark:text-zinc-400">
                {frontmatter.description}
              </p>
            </div>
            <footer>
              <p className="flex gap-1 items-center font-semibold text-sm text-teal-500">
                Leia o artigo <FiArrowRight />
              </p>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
