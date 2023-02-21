// Components
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { FiClock, FiArrowRight } from "react-icons/fi";

const articles = [
  {
    id: "1",
    title: "Article 1",
    description: "Lorem ipsum dolor sit amet consectur.",
  },
  {
    id: "2",
    title: "Article 2",
    description: "Lorem ipsum dolor sit amet consectur.",
  },
  {
    id: "3",
    title: "Article 3",
    description: "Lorem ipsum dolor sit amet consectur.",
  },
  {
    id: "4",
    title: "Article 4",
    description: "Lorem ipsum dolor sit amet consectur.",
  },
  {
    id: "5",
    title: "Article 5",
    description: "Lorem ipsum dolor sit amet consectur.",
  },
  {
    id: "6",
    title: "Article 6",
    description: "Lorem ipsum dolor sit amet consectur.",
  },
];

export default function Articles() {
  return (
    <section>
      <SectionTitle itemNumber="03." itemText="Artigos" />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {articles.map((article) => (
          <li
            key={article.title}
            className="bg-white border border-gray-200 p-5 rounded-xl from-teal-50 hover:bg-gradient-to-bl relative dark:bg-transparent dark:border-zinc-700 dark:from-zinc-800"
          >
            <header className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500">
              <FiClock />
              <time
                className="tracking-wider uppercase text-xs font-medium"
                dateTime="2023-02-10 20:00"
              >
                4 days ago
              </time>
            </header>
            <div className="my-6">
              <h3 className="font-bold text-lg text-zinc-900 mb-2 dark:text-zinc-200">
                <Link
                  href={`/articles/${article.id}`}
                  className="after:absolute after:content-[''] after:inset-y-0 after:inset-x-0 after:rounded-xl"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="text-zinc-700 dark:text-zinc-400">
                {article.description}
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
