import { AiFillAppstore } from "react-icons/ai";
import { FaServer } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiAdobexd } from "react-icons/si";

const data = [
  {
    id: 1,
    icon: <SiAdobexd />,
    title: "UI/UX Design",
    desc: "I specialize in creating modern, intuitive designs that focus on user experience. Using industry-standard principles, I ensure your users enjoy a seamless interaction with your product.",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "I build fast, responsive, and visually appealing websites using cutting-edge frontend technologies like React, HTML, CSS, and JavaScript to enhance user engagement.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "I develop powerful server-side solutions that ensure the reliability, scalability, and security of your web applications. I work with technologies like Node.js, Express, and databases to build robust backends.",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "App Development",
    desc: "I design and develop user-friendly mobile apps for both iOS and Android platforms. Using frameworks like React Native, I deliver cross-platform applications that provide a seamless user experience.",
  },
];

export default data;
