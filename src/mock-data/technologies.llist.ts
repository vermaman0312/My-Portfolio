import react_logo from "../assets/images/react_logo.png";
import next_logo from "../assets/images/next_logo.png";
import redux_logo from "../assets/images/redux_logo.png";

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
    technologyId: "002",
    technologyName: "Next JS",
    technologyImage: next_logo,
    technologyDescription:
      "Next.js is a React framework that enables server-side rendering, static site generation, and simplified routing, making it ideal for building fast, it also offers features like API routes and automatic code splitting.",
    technologyContent:
      "I have experience working with Next.js, leveraging its server-side rendering, static generation, and routing features to build fast, SEO-optimized web applications. I'm skilled in using Next.js for both client and server-side development, along with API routes for full-stack capabilities.",
    technologyLink: "https://nextjs.org/",
  },
  {
    technologyId: "003",
    technologyName: "Redux",
    technologyImage: redux_logo,
    technologyDescription:
      "Redux is a state management library for JavaScript applications, commonly used with React. It provides a centralized store for managing and updating application state predictably across components.",
    technologyContent:
      "I have experience working with Redux for state management, effectively managing complex application state in a predictable and scalable manner. I am skilled in setting up and integrating Redux with React to handle data flows across components.",
    technologyLink: "https://redux.js.org/",
  },
];
