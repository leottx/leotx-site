// Icons
import { FiClock, FiExternalLink, FiGithub } from "react-icons/fi";

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
      <h2 className="text-xl">
        <span className="font-mono">02.</span>
        <span className="font-bold">Projetos</span>
      </h2>
      <ul className="grid grid-cols-autofill gap-4">
        {projects.map((project) => (
          <li key={project.title} className="bg-zinc-100 p-5 rounded-lg">
            <header className="flex justify-between gap-4 items-center">
              <div className="flex items-center gap-2">
                <FiClock />
                <time dateTime="2023-02-10 20:00">4 days ago</time>
              </div>
              <div className="flex gap-4 items-center">
                {project?.repoURL && (
                  <a href={project.repoURL}>
                    <FiGithub />
                  </a>
                )}
                {project?.liveURL && (
                  <a href={project.liveURL}>
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </header>
            <div>
              <h3>
                <a href={project?.repoURL}>{project.title}</a>
              </h3>
              <p>{project.description}</p>
            </div>
            <footer>
              <ul className="flex flex-wrap gap-4">
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
