// Components
import Emoji from "./Emoji";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-center sm:justify-between gap-y-2 gap-x-8 flex-wrap">
      <div>
        <p className="flex gap-2">
          <Emoji symbol="🌈" />
          <span className="text-zinc-400/90 font-medium">—</span>
          <span className="text-zinc-600 font-medium">
            &copy;{" "}
            <time datetime={new Date().getFullYear()}>
              {new Date().getFullYear()}
            </time>{" "}
            <span className="text-zinc-400/90">|</span> Leonardo Teixeira
          </span>
        </p>
      </div>
      <a
        href="https://github.com/fake/meu-site"
        target="_blank"
        className="flex gap-2 group items-center text-zinc-600 font-medium"
      >
        <FaGithub />
        <span className="decoration-2 decoration-zinc-600/20 transition-colors underline-offset-2 underline group-hover:decoration-zinc-600/40">
          Source code
        </span>
      </a>
    </footer>
  );
}
