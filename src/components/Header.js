// Components
import ToggleThemeBtn from "./ToggleThemeBtn";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-cente">
      <Link className="flex items-center font-bold" href="/">
        leotx
      </Link>
      <nav>
        <ul className="flex items-center">
          <li>
            <button className="flex gap-1 items-center px-3 py-2 rounded-lg text-base duration-200 transition-colors medium hover:bg-teal-50">
              Menu
              <FaChevronDown size={10} />
            </button>
          </li>
          <li className="border-c">
            <ToggleThemeBtn />
          </li>
        </ul>
      </nav>
    </header>
  );
}
