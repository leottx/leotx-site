// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Styles
import "@/global/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-zinc-50">
      <div className="mx-auto max-w-screen-lg px-4">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
