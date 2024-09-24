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
    projectTitle: "Virtual Engagement & Relationship Management App",
    ProjectDescription:
      "Verma Social a social media platform that allows users to log in, register, and post content. Users can like and comment on posts, engage in private chats or messages, and view and update their profiles, providing a complete social networking experience.",
    projectTechnology: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Web Socket",
    ],
    projectContent: [dashboard, profile, setting, option, message, channel],
    projectURL: [
      "https://github.com/vermaman0312/Verma-Frontend",
      "https://github.com/vermaman0312/Verma-Backend",
    ],
  },
  {
    projectId: "002",
    projectTitle: "Verma Social",
    ProjectDescription:
      "Verma Social a social media platform that allows users to log in, register, and post content. Users can like and comment on posts, engage in private chats or messages, and view and update their profiles, providing a complete social networking experience.",
    projectTechnology: ["Figma"],
    projectContent: [],
    projectURL: [
      "https://www.figma.com/design/fiDAln4BJdGvpSPdEq2fJ7/Virtual-Meeting-(Community)?node-id=69-3241&node-type=canvas&t=g91dseoTSXbzuJ9H-0",
    ],
  },
];
