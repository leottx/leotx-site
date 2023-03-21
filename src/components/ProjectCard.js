import { useState, useEffect } from "react";
import { formatDistanceStrict } from "date-fns";
import { pt } from "date-fns/locale";

// Components
import { FiClock, FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const [projectLastUpdate, setProjectLastUpdate] = useState("");
  const projectURL = `https://api.github.com/repos/${project.username}/${project.repo}`;

  useEffect(() => {
    const fetchRepoData = async () => {
      const response = await fetch(projectURL);
      const data = await response.json();

      setProjectLastUpdate(data.pushed_at);
    };

    fetchRepoData();
  }, [projectLastUpdate]);

  if (!projectLastUpdate) return null;

  return (
    <li
      key={project.title}
      className="flex flex-col bg-white border border-gray-200 p-5 rounded-xl from-teal-50 hover:bg-gradient-to-bl relative dark:bg-transparent dark:border-zinc-700 dark:from-zinc-800"
    >
      <header className="flex justify-between gap-4 items-center text-zinc-500 dark:text-zinc-500">
        <div className="flex items-center gap-2">
          <FiClock />
          <time
            className="tracking-wider uppercase text-xs font-medium"
            dateTime={projectLastUpdate}
          >
            {formatDistanceStrict(new Date(projectLastUpdate), new Date(), {
              addSuffix: true,
              locale: pt,
            })}
          </time>
        </div>
        <div className="flex gap-4 items-center relative z-10">
          {project?.repo && (
            <a href={project.repoURL} target="_blank">
              <FiGithub size="18" />
            </a>
          )}
          {project?.site && (
            <a href={project.site} target="_blank">
              <FiExternalLink size="18" />
            </a>
          )}
        </div>
      </header>
      <div className="my-6">
        <h3 className="font-bold text-lg text-zinc-900 mb-2 dark:text-zinc-200">
          <a
            href={
              project?.repo &&
              `https://github.com/${project.username}/${project.repo}`
            }
            target="_blank"
            className="after:absolute after:content-[''] after:inset-y-0 after:inset-x-0 after:rounded-xl"
          >
            {project.title}
          </a>
        </h3>
        <p className="text-zinc-700 dark:text-zinc-400">
          {project.description}
        </p>
      </div>
      <footer className="mt-auto">
        <ul className="flex flex-wrap gap-x-4 text-zinc-700 text-xs font-mono dark:text-zinc-500">
          {project.techList.map((tech) => (
            <li key={`${project.title}${tech}`}>{tech}</li>
          ))}
        </ul>
      </footer>
    </li>
  );
}
