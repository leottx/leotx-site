// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Styles
import "@/styles/fonts.css";
import "@/styles/main.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-zinc-50 sm:px-8 lg:px-16">
      <div className="mx-auto bg-white max-w-[1216px] pt-6 px-8 lg:px-12">
        <div className="max-w-screen-lg mx-auto">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </div>
  );
}
