import CustomNavBarComponent from "../../components/nav-bar-component/component";
import react_logo from "../../assets/images/react_logo.png";
import next_logo from "../../assets/images/next_logo.png";
import node_logo from "../../assets/images/nodejs_logo.png";
import typescript_logo from "../../assets/images/typescript_logo.png";
import mongodb_logo from "../../assets/images/mongodb_logo.png";
import mern_logo from "../../assets/images/mern_logo.png";
import redux_logo from "../../assets/images/redux_logo.png";
import docker_logo from "../../assets/images/docker_logo.png";
import html5_logo from "../../assets/images/html5_logo.png";
import css_logo from "../../assets/images/css_logo.png";
import tailwind_logo from "../../assets/images/tailwind_logo.png";
import python_logo from "../../assets/images/python_logo.png";
import shellscript_logo from "../../assets/images/shellscript_logo.png";
import kalilinux_logo from "../../assets/images/kalilinux_logo.png";
import "../../css/scroll-container.css";
import "../../css/sliding_animation.css";

interface skillsType {
  title: string;
  logo: string;
}

const skillsData: skillsType[] = [
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

const PortfolioPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div>
        <CustomNavBarComponent />
      </div>
      <div className="w-full h-[50rem] p-4 flex flex-col items-center justify-end gap-4">
        <div className="w-full md:w-[25.5%]">
          <p className="text-5xl md:text-8xl text-[#DAC5A7] text-center">
            Web Designer & Developer
          </p>
        </div>
        <div>
          <p className="text-xs text-[#DAC5A7] text-opacity-60 text-center font-display">
            Premium web design, development, and SEO services to help your
            business stand out.
          </p>
        </div>
        <div
          className="p-2 w-full flex items-center justify-center gap-[5rem] scroll-container"
        >
          {skillsData.map((skill, index) => {
            return (
              <div className="flex items-center justify-center gap-2 sliding_animation select-none">
                <img src={skill.logo} alt="" width={30} />
                <p className="text-xs font-display text-[#DAC5A7] text-nowrap">
                  {skill.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
