import { useState } from "react";

// Components
import ToggleThemeBtn from "./ToggleThemeBtn";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="flex justify-between items-center mb-12 md:mb-16">
      <Link
        className="flex h-10 border border-teal-100 items-center font-bold bg-teal-100/50 rounded-md text-teal-700 px-3 dark:text-zinc-200 dark:border-zinc-400/50 dark:bg-zinc-500/40"
        href="/"
      >
        leotx
      </Link>
      <nav className="hidden h-10 md:block">
        <ul className="flex h-full text-sm font-medium text-zinc-600 dark:text-zinc-200">
          <li>
            <Link
              href="/#projects"
              className="flex items-center px-3 py-2 h-full rounded-lg duration-200 transition-colors hover:bg-teal-100/50 hover:text-teal-700 dark:hover:text-zinc-200 dark:hover:bg-zinc-500/40"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="flex items-center px-3 py-2 h-full rounded-lg duration-200 transition-colors hover:bg-teal-100/50 hover:text-teal-700 dark:hover:text-zinc-200 dark:hover:bg-zinc-500/40"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="flex items-center px-3 py-2 h-full rounded-lg duration-200 transition-colors hover:bg-teal-100/50 hover:text-teal-700 dark:hover:text-zinc-200 dark:hover:bg-zinc-500/40"
            >
              Contato
            </Link>
          </li>
          <li>
            <a
              className="flex items-center px-3 py-2 h-full rounded-lg duration-200 transition-colors hover:bg-teal-100/50 hover:text-teal-700 dark:hover:text-zinc-200 dark:hover:bg-zinc-500/40"
              href="/docs/leonardo-tadeu-teixeira-curriculo.pdf"
              target="_blank"
            >
              Currículo
            </a>
          </li>
        </ul>
      </nav>
      <div className="hidden md:block">
        <ToggleThemeBtn />
      </div>
      <div className="md:hidden">
        <div className="flex items-center text-zinc-600">
          <div>
            <button
              className="flex h-10 gap-1 items-center px-3 py-2 rounded-lg text-base transition-colors font-medium hover:bg-teal-100/50 hover:text-teal-700 dark:text-zinc-200 dark:hover:bg-zinc-500/40"
              onClick={() => setShowMobileMenu(true)}
            >
              Menu
              <FaChevronDown size={10} />
            </button>
            <MobileMenu
              showMenu={showMobileMenu}
              closeMenu={() => setShowMobileMenu(false)}
            />
          </div>
          <div>
            <ToggleThemeBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
