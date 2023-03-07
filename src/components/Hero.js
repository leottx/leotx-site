// Components
import Emoji from "@/components/Emoji";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCodepen,
} from "react-icons/fa";
import SocialLink from "./SocialLink";

const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/leottx/",
    icon: FaGithub,
    classes:
      "bg-zinc-900 text-white transition-colors hover:bg-zinc-600 dark:bg-zinc-600 dark:hover:bg-zinc-500",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/leotx/",
    icon: FaLinkedin,
    classes: "bg-blue-700 text-white transition-colors hover:bg-blue-500",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/heyleotx/",
    icon: FaInstagram,
    classes: "bg-pink-500 text-white transition-colors hover:bg-pink-400",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/tadeuleotx/",
    icon: FaTwitter,
    classes: "bg-blue-500 text-white transition-colors hover:bg-blue-400",
  },
  {
    name: "Codepen",
    url: "https://codepen.io/ltteixeira",
    icon: FaCodepen,
    classes: "bg-lime-500 text-white transition-colors hover:bg-lime-400",
  },
];

export default function Hero() {
  return (
    <section>
      <h1 className="mb-10">
        <p className="text-base text-zinc-700 dark:text-zinc-400">
          Oi, meu nome é
        </p>
        <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Leonardo Teixeira <Emoji symbol={"👋"} />
        </p>
        <p className="text-lg text-zinc-400">Desenvolvedor Frontend</p>
      </h1>
      <p className="text-zinc-600 text-base max-w-xl dark:text-zinc-400">
        Gosto tanto de criar aplicações bonitas e divertidas que decidi fazer
        disso minha profissão. No momento estou aberto a novas oportunidades.
        Sinta-se à vontade para conhecer meu trabalho e entrar em contato.
      </p>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-8">
        {socialLinks.map((link) => {
          const { name, url, classes, icon } = link;
          return (
            <li key={name}>
              <SocialLink name={name} url={url} classes={classes} icon={icon} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
