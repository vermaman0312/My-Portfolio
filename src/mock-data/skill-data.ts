import react_logo from "../assets/images/react_logo.png";
import next_logo from "../assets/images/next_logo.png";
import node_logo from "../assets/images/nodejs_logo.png";
import typescript_logo from "../assets/images/typescript_logo.png";
import mongodb_logo from "../assets/images/mongodb_logo.png";
import mern_logo from "../assets/images/mern_logo.png";
import redux_logo from "../assets/images/redux_logo.png";
import docker_logo from "../assets/images/docker_logo.png";
import html5_logo from "../assets/images/html5_logo.png";
import css_logo from "../assets/images/css_logo.png";
import tailwind_logo from "../assets/images/tailwind_logo.png";
import python_logo from "../assets/images/python_logo.png";
import shellscript_logo from "../assets/images/shellscript_logo.png";
import kalilinux_logo from "../assets/images/kalilinux_logo.png";

export interface skillsType {
  title: string;
  logo: string;
}

export const skillsData: skillsType[] = [
  {
    title: "React JS",
    logo: react_logo,
  },
  {
    title: "Next JS",
    logo: next_logo,
  },
  {
    title: "Redux",
    logo: redux_logo,
  },
  {
    title: "Typescript",
    logo: typescript_logo,
  },
  {
    title: "Node JS",
    logo: node_logo,
  },
  {
    title: "MongoDB",
    logo: mongodb_logo,
  },
  {
    title: "MERN STACK",
    logo: mern_logo,
  },
  {
    title: "Docker",
    logo: docker_logo,
  },
  {
    title: "HTML5",
    logo: html5_logo,
  },
  {
    title: "CSS",
    logo: css_logo,
  },
  {
    title: "Tailwind CSS",
    logo: tailwind_logo,
  },
  {
    title: "Python",
    logo: python_logo,
  },
  {
    title: "Shell Scripting",
    logo: shellscript_logo,
  },
  {
    title: "Kali Linux",
    logo: kalilinux_logo,
  },
];
