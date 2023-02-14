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
    url: "https://github.com/leotx",
    icon: FaGithub,
    classes: "bg-zinc-900 text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/leotx/",
    icon: FaLinkedin,
    classes: "bg-blue-700 text-white",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/leotx/",
    icon: FaInstagram,
    classes: "bg-pink-500 text-white",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/leotx",
    icon: FaTwitter,
    classes: "bg-blue-500 text-white",
  },
  {
    name: "Codepen",
    url: "https://codepen.io/leotx",
    icon: FaCodepen,
    classes: "bg-lime-500 text-white",
  },
];

export default function Hero() {
  return (
    <section>
      <h1 className="text-2xl font-bold">
        Olá, pessoa! Me chamo Leonardo Teixeira <Emoji symbol={"👋"} />
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro fugit
        quia dolor eum ducimus, magnam unde doloremque necessitatibus aliquid.
      </p>
      <ul className="flex flex-wrap gap-x-3 gap-y-1">
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
