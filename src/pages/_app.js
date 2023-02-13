// Styles
import "@/global/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-zinc-50 h-screen">
      <div className="mx-auto max-w-screen-lg px-4">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
