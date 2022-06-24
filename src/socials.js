import { RiLinkedinLine, RiTwitterLine, RiGithubLine } from "react-icons/ri";

const socials = [
  {
    id: 1,
    title: "LinkedIn",
    icon: <RiLinkedinLine />,
    color: "hover:text-[#0072b1]",
    url: "https://www.linkedin.com/in/raymond-zeaiter/",
  },
  {
    id: 2,
    title: "Github",
    icon: <RiGithubLine />,
    color: "hover:text-[#2dba4e]",
    url: "https://github.com/king-oldmate",
  },
  {
    id: 3,
    title: "Twitter",
    icon: <RiTwitterLine />,
    color: "hover:text-[#08a0e9]",
    url: "https://twitter.com/RayZeaiter",
  },
];

export default socials;
