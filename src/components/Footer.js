// Components
import Emoji from "./Emoji";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-center sm:justify-between gap-y-2 gap-x-8 flex-wrap">
      <div>
        <p className="flex gap-2">
          <Emoji symbol="🌈" />
          <span>—</span>
          <span>&copy; {new Date().getFullYear()} | Leonardo Teixeira</span>
        </p>
      </div>
      <a
        href="https://github.com/fake/meu-site"
        target="_blank"
        className="flex gap-2 items-center"
      >
        <FaGithub />
        <span>Source code</span>
      </a>
    </footer>
  );
}
