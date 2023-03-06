// Components
import Emoji from "./Emoji";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-center sm:justify-between gap-y-2 gap-x-8 flex-wrap absolute bottom-5 inset-x-5 sm:inset-x-8 lg:inset-x-12">
      <div>
        <p className="flex gap-2">
          <Emoji symbol="🌈" />
          <span className="text-zinc-400/90 font-medium dark:text-zinc-500">
            —
          </span>
          <span className="text-zinc-600 font-medium dark:text-zinc-200">
            &copy;{" "}
            <time dateTime={new Date().getFullYear()}>
              {new Date().getFullYear()}
            </time>{" "}
            <span className="text-zinc-400/90 dark:text-zinc-500">|</span>{" "}
            Leonardo Teixeira
          </span>
        </p>
      </div>
      <a
        href="https://github.com/leottx/leotx-site"
        target="_blank"
        className="flex gap-2 group items-center text-zinc-600 font-medium dark:text-zinc-200"
      >
        <FaGithub />
        <span className="decoration-2 decoration-zinc-600/20 transition-colors underline-offset-2 underline group-hover:decoration-zinc-600/40 dark:decoration-zinc-600/80 dark:group-hover:decoration-zinc-500">
          Source code
        </span>
      </a>
    </footer>
  );
}
