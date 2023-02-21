const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fill: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        base: [
          "1rem",
          {
            lineHeight: "1.75rem",
          },
        ],
      },
      backgroundImage: {
        "waves-light": "url(/images/waves-texture-light.svg)",
        "waves-dark": "url(/images/waves-texture-dark.svg)",
        "pic-shadow": "url(/images/shadow.png)",
      },
      width: {
        "7/10": "70%",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
