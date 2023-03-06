import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// Components
import Link from "next/link";
import { CgClose } from "react-icons/cg";

export default function MobileMenu({ showMenu, closeMenu }) {
  const [isClientSide, setIsClientSide] = useState(false);

  useEffect(() => {
    setIsClientSide(true);
  }, []);

  const modalContent = (
    <div
      className={`p-5 fixed inset-0 z-[9999] sm:px-8 ${
        showMenu ? "visible" : "invisible"
      }`}
    >
      <div
        className={`fixed inset-0 bg-zinc-800/40 backdrop-blur-sm transition-[opacity] ease-in-out duration-300 ${
          showMenu ? "opacity-1" : "opacity-0"
        }`}
        onClick={closeMenu}
      ></div>
      <div
        className={`p-6 bg-white rounded-xl relative z-10 transition-[opacity] ease-in-out duration-300 border border-zinc-400/80 dark:bg-zinc-700 dark:border-zinc-500/50 ${
          showMenu ? "opacity-1" : "opacity-0"
        }`}
      >
        <header className="flex justify-between">
          <h2 className="text-sm text-zinc-600 font-semibold dark:text-zinc-400">
            Menu
          </h2>
          <button className="text-zinc-500 ml-auto dark:text-zinc-400">
            <CgClose onClick={closeMenu} size={20} />
          </button>
        </header>
        <nav className="mt-6">
          <ul className="flex flex-col divide-y divide-zinc-100 text-zinc-900 dark:text-zinc-300 dark:divide-zinc-500/50">
            <li onClick={closeMenu}>
              <Link className="py-2 block" href="/#about">
                Sobre mim
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link className="py-2 block" href="/#projects">
                Projetos
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link className="py-2 block" href="/blog">
                Blog
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link className="pt-2 block" href="/#contact">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  if (isClientSide) {
    return createPortal(modalContent, document.getElementById("modal-root"));
  }
}
