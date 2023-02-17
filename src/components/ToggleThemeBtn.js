// Hooks
import { useState } from "react";

// Icons
import SunIcon from "src/icons/SunIcon";
import MoonIcon from "src/icons/MoonIcon";

export default function ToggleThemeBtn() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <button
      className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors hover:bg-teal-100/50 hover:text-teal-700"
      onClick={() => setDarkMode((currentState) => !currentState)}
    >
      {!isDarkMode ? <SunIcon size="18" /> : <MoonIcon size="18" />}
    </button>
  );
}
