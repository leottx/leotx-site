// Hooks
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { motion } from "framer-motion";

const springiest = {
  type: "spring",
  duration: 0.6,
  bounce: 0.6,
};

const themeTransition = {
  default: springiest,
  opacity: {
    type: "spring",
    duration: springiest.duration - springiest.duration / 2,
    bounce: 0,
  },
};

const themeVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ...themeTransition,
      delay: springiest.duration / 2,
    },
  },
};

export default function ToggleThemeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function darkModeHandler() {
    if (theme === "light") {
      setTheme("dark");
      return;
    }

    setTheme("light");
  }

  return (
    <button
      className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors text-zinc-600 hover:bg-teal-100/50 hover:text-teal-700 dark:text-zinc-100 dark:hover:bg-zinc-500/40"
      onClick={darkModeHandler}
    >
      <svg
        className="flex-none transition-colors"
        height="24"
        role="presentation"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          animate={theme === "light" ? "visible" : "hidden"}
          fill="currentColor"
          initial="hidden"
          transition={themeTransition}
          variants={themeVariants}
        >
          <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path
            clipRule="evenodd"
            d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM19.071 4.929a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.415-1.414l1.415-1.414a1 1 0 0 1 1.414 0ZM16.243 16.243a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414ZM7.757 16.243a1 1 0 0 1 0 1.414L6.343 19.07a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0ZM4.929 4.929a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L4.93 6.343a1 1 0 0 1 0-1.414ZM12 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM18 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1ZM2 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Z"
            fillRule="evenodd"
          />
        </motion.g>
        <motion.path
          animate={theme === "dark" ? "visible" : "hidden"}
          clipRule="evenodd"
          d="M18.846 13.396c.473-.212 1.053.141.92.642a8.018 8.018 0 0 1-13.418 3.614A8.017 8.017 0 0 1 9.962 4.234c.5-.133.854.447.642.92a6.236 6.236 0 0 0 8.242 8.242Z"
          fill="currentColor"
          fillRule="evenodd"
          initial="hidden"
          transition={themeTransition}
          variants={themeVariants}
        />
      </svg>
    </button>
  );
}
