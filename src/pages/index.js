// Components
import Head from "next/head";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";
import ContactMe from "@/components/ContactMe";

import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Home({ postsFrontmatter }) {
  return (
    <>
      <Head>
        <title>Leonardo Teixeira</title>
      </Head>
      <Hero />
      <AboutMe />
      <Projects />
      <Articles postsFrontmatter={postsFrontmatter} />
      <ContactMe />
    </>
  );
}

export async function getStaticProps() {
  const postsFrontmatter = await getAllFilesFrontMatter();

  return { props: { postsFrontmatter } };
}
