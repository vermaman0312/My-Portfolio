import mac from "../assets/images/mac.png";
// Verma Social
import dashboard from "../assets/verma-social/dashboard.png";
import profile from "../assets/verma-social/profile.png";
import setting from "../assets/verma-social/setting.png";
import option from "../assets/verma-social/option.png";
import message from "../assets/verma-social/message.png";
import channel from "../assets/verma-social/channel.png";

export type TimelineEntry = {
  projectId: string;
  projectTitle: string;
  ProjectDescription: string;
  projectTechnology: string[];
  projectContent: string[];
  projectURL: string[];
};

export const projectList: TimelineEntry[] = [
  {
    projectId: "001",
    projectTitle: "Virtual Engagement and Real-time Social Application",
    ProjectDescription:
      "Versa Social a social media platform that allows users to log in, register, and post content. Users can like and comment on posts, engage in private chats or messages, and view and update their profiles, providing a complete social networking experience.",
    projectTechnology: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Web Socket",
    ],
    projectContent: [dashboard, profile, setting, option, message, channel],
    projectURL: [
      "https://github.com/vermaman0312/Versa-Web-Frontend",
      "https://github.com/vermaman0312/Versa-Backend",
    ],
  },
  {
    projectId: "002",
    projectTitle: "Virtual Engagement and Real-time Social Application",
    ProjectDescription:
      "Verma Social a social media platform that allows users to log in, register, and post content. Users can like and comment on posts, engage in private chats or messages, and view and update their profiles, providing a complete social networking experience.",
    projectTechnology: ["Figma"],
    projectContent: [],
    projectURL: [
      "https://www.figma.com/design/fiDAln4BJdGvpSPdEq2fJ7/Virtual-Meeting-(Community)?node-id=69-3241&node-type=canvas&t=g91dseoTSXbzuJ9H-0",
    ],
  },
  {
    projectId: "003",
    projectTitle: "Virtual Engagement and Real-time Social Application",
    ProjectDescription:
      "VERSA is a social media mobile application that enables users to log in, register, and engage with the platform by posting content, liking, commenting, and chatting. It also features channels for group discussions, a map feature, and friend request functionality, allowing users to connect by sending and accepting requests.",
    projectTechnology: [
      "Next JS",
      "Typescript",
      "Tailwind CSS",
      "MongoDB",
      "Express JS",
      "Node JS",
      "Web Socket",
      "React Native",
    ],
    projectContent: [dashboard, profile, setting, option, message, channel],
    projectURL: [
      "https://github.com/vermaman0312/Versa-Mobile-Application",
      "https://github.com/vermaman0312/Versa-Backend",
    ],
  },
  {
    projectId: "004",
    projectTitle: "Management and Academic Student Application",
    ProjectDescription:
      "MASA is a student management ERP application designed to streamline academic and administrative tasks. It includes features for tracking fees paid, managing fee structures, viewing timetables, accessing course information, conducting online meetings, using an integrated email system, submitting applications, and generating marksheets. The platform efficiently organizes and manages essential student-related processes in one place.",
    projectTechnology: [
      "React JS",
      "Node JS",
      "Typescript",
      "Express JS",
      "MongoDB",
      "Web Socket",
      "WebRTC",
      "Google Cloud",
      "Docker",
    ],
    projectContent: [dashboard, profile, setting, option, message, channel],
    projectURL: [
      "https://github.com/vermaman0312/MASA-Frontend",
      "https://github.com/vermaman0312/MASA-Backend",
    ],
  },
  {
    projectId: "005",
    projectTitle: "Voice Analysis Application",
    ProjectDescription:
      "The 'Voice Analysis Application' is a React TypeScript-based platform that utilizes machine learning to analyze voice data. The application processes audio inputs to compare, identify, and generate detailed reports on various aspects of voice, such as frequency and patterns. This system is designed for accurate voice recognition and analysis, making it suitable for tasks like voice matching and performance evaluation.",
    projectTechnology: [
      "React JS",
      "Node JS",
      "Typescript",
      "Express JS",
      "MongoDB",
      "Machine Learning",
      "Tensorflow",
    ],
    projectContent: [dashboard, profile, setting, option, message, channel],
    projectURL: [
      "https://github.com/vermaman0312/Voice-Compare-App-Frontend",
      "https://github.com/vermaman0312/Voice-Compare-App-Backend",
    ],
  },
  {
    projectId: "005",
    projectTitle: "V-Editor",
    ProjectDescription:
      "V-Editor is a text-editor application built using React and TypeScript. It provides users with a sleek, interactive interface for creating and editing text documents. The application offers rich text formatting options, ensuring a smooth and efficient writing experience, making it ideal for developers and content creators seeking a modern, customizable editor.",
    projectTechnology: [
      "React JS",
      "Node JS",
      "Typescript",
      "Express JS",
      "MongoDB",
    ],
    projectContent: [dashboard, profile, setting, option, message, channel],
    projectURL: [
      "https://github.com/vermaman0312/V-Editor-Frontend",
      "https://github.com/vermaman0312/V-Editor-Bakcend",
    ],
  },
];
