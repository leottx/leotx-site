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
        fillthree: "repeat(auto-fill, minmax(250px, 1fr))",
        filltwo: "repeat(auto-fill, minmax(350px, 1fr))",
      },
    },
  },
  plugins: [],
};
