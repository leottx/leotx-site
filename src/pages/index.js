// Components
import Head from "next/head";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leonardo Teixeira</title>
      </Head>
      <Hero />
      <AboutMe />
    </>
  );
}
