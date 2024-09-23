import react_logo from "../assets/images/react_logo.png";
import next_logo from "../assets/images/next_logo.png";
import typescript_logo from "../assets/images/typescript_logo.png";
import viteJS_logo from "../assets/images/viteJS_logo.png";
import veuJS_logo from "../assets/images/vueJS_logo.png";
import nodeJS_logo from "../assets/images/nodejs_logo.png";
import mongodb_logo from "../assets/images/mongodb_logo.png";
import mern_logo from "../assets/images/mern_logo.png";
import docker_logo from "../assets/images/docker_logo.png";
import shellscript_logo from "../assets/images/shellscript_logo.png";
import kalilinux_logo from "../assets/images/kalilinux_logo.png";
import html5_logo from "../assets/images/html5_logo.png";
import css_logo from "../assets/images/css_logo.png";
import tailwind_logo from "../assets/images/tailwind_logo.png";
import python_logo from "../assets/images/python_logo.png"

export interface technologyType {
  technologyId: string;
  technologyName: string;
  technologyImage: string;
  technologyDescription: string;
  technologyContent: string;
  technologyLink: string;
}

export const technologiesData: technologyType[] = [
  {
    technologyId: "001",
    technologyName: "React JS",
    technologyImage: react_logo,
    technologyDescription:
      "React JS is a JavaScript library for building fast, interactive user interfaces using reusable components and a virtual DOM. It's widely used for creating dynamic, single-page applications.",
    technologyContent:
      "I have hands-on experience working with React JS, building dynamic and responsive user interfaces. I am skilled in creating reusable components, managing application state, and leveraging React's virtual DOM for efficient updates. My experience includes working with hooks, managing data flows, and integrating APIs to create scalable single-page applications.",
    technologyLink: "https://react.dev/",
  },
  {
    technologyId: "004",
    technologyName: "Next JS",
    technologyImage: next_logo,
    technologyDescription:
      "Redux is a state management library for JavaScript applications, commonly used with React. It provides a centralized store for managing and updating application state predictably across components.",
    technologyContent:
      "I have experience working with Redux for state management, effectively managing complex application state in a predictable and scalable manner. I am skilled in setting up and integrating Redux with React to handle data flows across components.",
    technologyLink: "https://redux.js.org/",
  },
  {
    technologyId: "006",
    technologyName: "Node JS",
    technologyImage: nodeJS_logo,
    technologyDescription:
      "Redux is a state management library for JavaScript applications, commonly used with React. It provides a centralized store for managing and updating application state predictably across components.",
    technologyContent:
      "I have experience working with Redux for state management, effectively managing complex application state in a predictable and scalable manner. I am skilled in setting up and integrating Redux with React to handle data flows across components.",
    technologyLink: "https://redux.js.org/",
  },
  {
    technologyId: "007",
    technologyName: "MongoDB",
    technologyImage: mongodb_logo,
    technologyDescription:
      "Redux is a state management library for JavaScript applications, commonly used with React. It provides a centralized store for managing and updating application state predictably across components.",
    technologyContent:
      "I have experience working with Redux for state management, effectively managing complex application state in a predictable and scalable manner. I am skilled in setting up and integrating Redux with React to handle data flows across components.",
    technologyLink: "https://redux.js.org/",
  },
  {
    technologyId: "013",
    technologyName: "Python",
    technologyImage: python_logo,
    technologyDescription:
      "Redux is a state management library for JavaScript applications, commonly used with React. It provides a centralized store for managing and updating application state predictably across components.",
    technologyContent:
      "I have experience working with Redux for state management, effectively managing complex application state in a predictable and scalable manner. I am skilled in setting up and integrating Redux with React to handle data flows across components.",
    technologyLink: "https://redux.js.org/",
  },
  {
    technologyId: "015",
    technologyName: "Kali Linux",
    technologyImage: kalilinux_logo,
    technologyDescription:
      "Redux is a state management library for JavaScript applications, commonly used with React. It provides a centralized store for managing and updating application state predictably across components.",
    technologyContent:
      "I have experience working with Redux for state management, effectively managing complex application state in a predictable and scalable manner. I am skilled in setting up and integrating Redux with React to handle data flows across components.",
    technologyLink: "https://redux.js.org/",
  },
];
