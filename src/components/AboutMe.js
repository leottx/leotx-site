// Components
import { BsFillCircleFill } from "react-icons/bs";

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
    <section className="flex flex-col md:flex-row my-16 md:my-20 lg:my-24">
      <div>
        <h2 className="flex whitespace-nowrap items-center text-xl mb-4 after:content-[''] after:relative after:h-[1px] after:w-full after:bg-zinc-200 after:block after:ml-3">
          <span className="font-mono text-zinc-500 mr-1">01.</span>
          <span className="font-bold text-zinc-900">Sobre mim</span>
        </h2>
        <p className="text-base text-zinc-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores
          inventore architecto veniam id culpa cumque unde, accusantium quisquam
          ex veritatis corrupti odit deleniti similique dolor earum excepturi
          suscipit adipisci.
        </p>
        <p className="text-base text-zinc-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores
          inventore architecto veniam id culpa cumque unde, accusantium quisquam
          ex veritatis.
        </p>
        <p className="text-base text-zinc-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores
          inventore architecto:
        </p>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-zinc-700 text-sm mt-5 mb-12">
          {techList.map((tech) => (
            <li key={tech.name} className="flex gap-x-2">
              <BsFillCircleFill
                size={5}
                className="h-6 self-start text-zinc-900"
              />
              <span className="block">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <figure className="-rotate-12">
          <img
            src="https://via.placeholder.com/350"
            alt="Foto de Leonardo"
            className="max-w-[250px] border-8 rounded-2xl border-zinc-500/10"
          />
        </figure>
      </div>
    </section>
  );
}
