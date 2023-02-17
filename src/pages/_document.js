import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      hello="Hey there! All good? 🇧🇷✨🐱. My website is   still under construction, but feel free to explore 👀"
    >
      <Head>
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/inter/inter.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/inter/inter-italic.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/firacode/firacode.woff2"
          rel="preload"
          type="font/woff2"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
