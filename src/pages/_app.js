// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Styles
import "@/styles/fonts.css";
import "@/styles/main.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-zinc-50">
      <div className="mx-auto max-w-screen-lg pt-6 px-5">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
