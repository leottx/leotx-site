// Components
import ToggleThemeBtn from "./ToggleThemeBtn";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-12 md:mb-16">
      <Link
        className="flex h-10 border border-teal-100 items-center font-bold bg-teal-100/50 rounded-md text-teal-700 px-3"
        href="/"
      >
        leotx
      </Link>
      <nav className="hidden h-10 md:block">
        <ul className="flex h-full text-sm font-medium text-zinc-600">
          <li>
            <Link
              href="#"
              className="flex items-center px-3 py-2 h-full rounded-lg duration-200 transition-colors hover:bg-teal-100/50 hover:text-teal-700"
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-3 py-2 h-full rounded-lg duration-200 transition-colors hover:bg-teal-100/50 hover:text-teal-700"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-3 py-2 h-full rounded-lg duration-200 transition-colors hover:bg-teal-100/50 hover:text-teal-700"
            >
              Artigos
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center px-3 py-2 h-full rounded-lg duration-200 transition-colors hover:bg-teal-100/50 hover:text-teal-700"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden md:block">
        <ToggleThemeBtn />
      </div>
      <nav className="md:hidden">
        <ul className="flex items-center text-zinc-600">
          <li>
            <button className="flex h-10 gap-1 items-center px-3 py-2 rounded-lg text-base transition-colors font-medium hover:bg-teal-100/50 hover:text-teal-700">
              Menu
              <FaChevronDown size={10} />
            </button>
          </li>
          <li>
            <ToggleThemeBtn />
          </li>
        </ul>
      </nav>
    </header>
  );
}
