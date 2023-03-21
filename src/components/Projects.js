import SectionTitle from "@/components/SectionTitle";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Site Pessoal",
    description:
      "Meu site pessoal e primeiro projeto desenvolvido com Next.js e Tailwind CSS.",
    username: "leottx",
    repo: "leotx-site",
    site: "",
    techList: ["react", "tailwind"],
    id: 1,
  },
  {
    title: "Lingo",
    description: "Um clone do premiado jogo Wordle, criado por Josh Wardle.",
    username: "leottx",
    repo: "lingo",
    site: "https://lingo-alpha.vercel.app/",
    techList: ["react", "typescript", "tailwind"],
    id: 1,
  },
];

export default function Projects() {
  return (
    <section className="my-16 md:my-20 lg:my-24" id="projects">
      <SectionTitle itemNumber="02." itemText={"Projetos"} />
      <ul className="grid grid-cols-fill gap-5 sm:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
