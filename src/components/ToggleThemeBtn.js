// Hooks
import { useState } from "react";

// Icons
import SunIcon from "src/icons/SunIcon";
import MoonIcon from "src/icons/MoonIcon";

export default function ToggleThemeBtn() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <button onClick={() => setDarkMode((currentState) => !currentState)}>
      {!isDarkMode ? <SunIcon size="20" /> : <MoonIcon size="20" />}
    </button>
  );
}
