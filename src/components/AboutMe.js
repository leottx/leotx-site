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
    <section className="flex flex-col md:flex-row">
      <div>
        <h2 className="text-xl">
          <span className="font-mono">01.</span>
          <span className="font-bold">Sobre mim</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores
          inventore architecto veniam id culpa cumque unde, accusantium quisquam
          ex veritatis corrupti odit deleniti similique dolor earum excepturi
          suscipit adipisci.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores
          inventore architecto veniam id culpa cumque unde, accusantium quisquam
          ex veritatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores
          inventore architecto.
        </p>
        <ul className="grid grid-cols-2 gap-4">
          {techList.map((tech) => (
            <li key={tech.name} className="flex gap-x-2">
              <BsFillCircleFill size={5} className="h-6 self-start" />
              <span className="block">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/350"
          alt="Foto de Leonardo"
          className="max-w-[250px]"
        />
      </div>
    </section>
  );
}
