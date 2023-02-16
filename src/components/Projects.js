// Components
import { FiClock, FiExternalLink, FiGithub } from "react-icons/fi";
import SectionTitle from "@/components/SectionTitle";

const projects = [
  {
    title: "Project 1",
    description: "Project 1 description",
    repoURL: "https://github.com/fake/project-1",
    liveURL: "https://fake.github.io/project-1/",
    techList: ["TailwindCSS", "React", "Firebase"],
  },
  {
    title: "Project 2",
    description: "Project 2 description",
    repoURL: "https://github.com/fake/project-2",
    liveURL: "https://fake.github.io/project-2/",
    techList: ["TailwindCSS", "React", "Firebase"],
  },
  {
    title: "Project 3",
    description: "Project 3 description",
    repoURL: "https://github.com/fake/project-3",
    liveURL: "https://fake.github.io/project-3/",
    techList: ["TailwindCSS", "React", "Firebase"],
  },
  {
    title: "Project 4",
    description: "Project 4 description",
    repoURL: "https://github.com/fake/project-4",
    liveURL: "https://fake.github.io/project-4/",
    techList: ["TailwindCSS", "React", "Firebase"],
  },
  {
    title: "Project 5",
    description: "Project 5 description",
    repoURL: "https://github.com/fake/project-5",
    liveURL: "https://fake.github.io/project-5/",
    techList: ["TailwindCSS", "React", "Firebase"],
  },
  {
    title: "Project 6",
    description: "Project 6 description",
    repoURL: "https://github.com/fake/project-6",
    liveURL: "https://fake.github.io/project-6/",
    techList: ["TailwindCSS", "React", "Firebase"],
  },
  {
    title: "Project 7",
    description: "Project 7 description",
    repoURL: "https://github.com/fake/project-7",
    liveURL: "https://fake.github.io/project-7/",
    techList: ["TailwindCSS", "React", "Firebase"],
  },
  {
    title: "Project 8",
    description: "Project 8 description",
    repoURL: "https://github.com/fake/project-8",
    liveURL: "https://fake.github.io/project-8/",
    techList: ["TailwindCSS", "React", "Firebase"],
  },
  {
    title: "Project 9",
    description: "Project 9 description",
    repoURL: "https://github.com/fake/project-9",
    liveURL: "https://fake.github.io/project-9/",
    techList: ["TailwindCSS", "React", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section>
      <SectionTitle itemNumber="02." itemText={"Projetos"} />
      <ul className="grid grid-cols-fill gap-4">
        {projects.map((project) => (
          <li key={project.title} className="bg-zinc-100 p-5 rounded-lg">
            <header className="flex justify-between gap-4 items-center text-zinc-500">
              <div className="flex items-center gap-2">
                <FiClock />
                <time
                  className="tracking-wider uppercase text-xs font-medium"
                  dateTime="2023-02-10 20:00"
                >
                  4 days ago
                </time>
              </div>
              <div className="flex gap-4 items-center">
                {project?.repoURL && (
                  <a href={project.repoURL}>
                    <FiGithub size="18" />
                  </a>
                )}
                {project?.liveURL && (
                  <a href={project.liveURL}>
                    <FiExternalLink size="18" />
                  </a>
                )}
              </div>
            </header>
            <div className="my-6">
              <h3 className="font-bold text-lg text-zinc-900 mb-2">
                <a href={project?.repoURL}>{project.title}</a>
              </h3>
              <p className="text-zinc-700">{project.description}</p>
            </div>
            <footer>
              <ul className="flex flex-wrap gap-x-4 text-zinc-700 text-xs font-mono">
                {project.techList.map((tech) => (
                  <li key={`${project.title}${tech}`}>{tech}</li>
                ))}
              </ul>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
