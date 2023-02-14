// Components
import Link from "next/link";

// Icons
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
      <h2 className="text-xl">
        <span className="font-mono">03.</span>
        <span className="font-bold">Artigos</span>
      </h2>
      <ul className="grid grid-cols-filltwo gap-4">
        {articles.map((article) => (
          <li key={article.title} className="bg-zinc-100 p-5 rounded-lg">
            <header className="flex gap-2 items-center">
              <FiClock />
              <time dateTime="2023-02-10 20:00">4 days ago</time>
            </header>
            <div>
              <h3>
                <Link href={`/articles/${article.id}`}>{article.title}</Link>
              </h3>
              <p>{article.description}</p>
            </div>
            <footer>
              <p className="flex gap-1 items-center">
                Leia o artigo <FiArrowRight />
              </p>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
