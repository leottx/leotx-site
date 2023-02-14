// Components
import Head from "next/head";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leonardo Teixeira</title>
      </Head>
      <Hero />
      <AboutMe />
      <Projects />
      <Articles />
    </>
  );
}
