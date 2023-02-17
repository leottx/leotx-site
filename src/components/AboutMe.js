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
    <section className=" mt-16 mb-20 md:my-20 lg:my-24">
      <Title itemNumber="01." itemText="Sobre mim" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p className="text-base text-zinc-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            maiores inventore architecto veniam id culpa cumque unde,
            accusantium quisquam ex veritatis corrupti odit deleniti similique
            dolor earum excepturi suscipit adipisci.
          </p>
          <p className="text-base text-zinc-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            maiores inventore architecto veniam id culpa cumque unde,
            accusantium quisquam ex veritatis.
          </p>
          <p className="text-base text-zinc-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            maiores inventore architecto:
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-zinc-700 text-sm mt-5 mb-14 md:mb-0">
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
        <div className="block justify-start w-7/10 max-w-[300px] justify-self-center md:justify-self-start md:w-full md:max-w-[380px] md:pl-16 md:pr-4">
          <figure className="inline-block origin-top-left">
            <img
              src="https://via.placeholder.com/350"
              alt="Foto de Leonardo"
              className="border-8 rounded-2xl border-zinc-500/10 -rotate-6"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
