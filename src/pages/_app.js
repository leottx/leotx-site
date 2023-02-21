// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

// Styles
import "@/styles/fonts.css";
import "@/styles/main.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      storageKey="preferred-theme"
      attribute="class"
      enableSystem={false}
    >
      <div className="bg-zinc-50 dark:bg-zinc-900 sm:px-8 lg:px-16 bg-waves-light dark:bg-waves-dark bg-[length:12px]">
        <div className="mx-auto bg-white dark:bg-zinc-900/80 max-w-[1216px] py-6 px-5 sm:px-8 lg:px-12 sm:border-x border-x-zinc-200/50 dark:border-x-zinc-700/60 min-h-screen">
          <div className="max-w-screen-lg mx-auto">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
