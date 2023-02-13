import React from "react";

// Components
import ToggleThemeBtn from "./ToggleThemeBtn";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-8">
      <Link href="/">leotx</Link>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <button>Menu</button>
          </li>
          <li className="h-5 border-c">
            <ToggleThemeBtn />
          </li>
        </ul>
      </nav>
    </header>
  );
}
