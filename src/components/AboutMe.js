// Components
import { BsFillCircleFill } from "react-icons/bs";
import Title from "@/components/SectionTitle";

const techList = [
  {
    name: "JavaScript (ES6+)",
  },
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  {
    name: "Node.js",
  },
  {
    name: "TypeScript",
  },
  {
    name: "TailwindCSS",
  },
];

export default function AboutMe() {
  return (
    <section className="mt-16 mb-20 md:my-20 lg:my-24" id="about">
      <Title itemNumber="01." itemText="Sobre mim" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p className="text-base text-zinc-700 mb-4 dark:text-zinc-400">
            Meu interesse por programação (particularmente pela área de web)
            começou no último semestre da faculdade através de uma disciplina de
            introdução ao HTML e CSS.
          </p>
          <p className="text-base text-zinc-700 mb-4 dark:text-zinc-400">
            Desenvolvi um enorme gosto por essa área da programação e pela
            comunidade que a integra. A ligação foi tão forte que decidi fazer
            deste novo interesse minha profissão.
          </p>
          <p className="text-base text-zinc-700 dark:text-zinc-400">
            Já desenvolvi inúmeros projetos e mais recentemente atuei como
            Desenvolvedor Front-end em um agência focada em e-commerce (veja
            mais detalhes no meu currículo).
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-zinc-700 text-sm mt-5 mb-14 md:mb-0 dark:text-zinc-500">
            {techList.map((tech) => (
              <li key={tech.name} className="flex gap-x-2">
                <BsFillCircleFill
                  size={5}
                  className="h-6 self-start text-zinc-900 dark:text-zinc-400"
                />
                <span className="block">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="block justify-start w-7/10 max-w-[300px] justify-self-center md:justify-self-start md:w-full md:max-w-[380px] md:pl-16 md:pr-4">
          <figure className="inline-block z-10 origin-top-left relative after:content-[''] after:h-12 after:-bottom-[42px] after:-left-[32%] after:w-[160%] after:block after:bg-[length:100%_100%] after:absolute after:inset-x-0 after:bg-pic-shadow after:bg-no-repeat after:-z-10">
            <img
              src="/images/me.png"
              alt="Foto de Leonardo"
              className="aspect-square border-8 rounded-2xl border-teal-100 from-teal-200/50 bg-gradient-to-br to-teal-400/60 -rotate-6 dark:border-zinc-700 dark:from-zinc-700 dark:bg-gradient-to-br dark:to-zinc-800"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
