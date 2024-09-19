import mac from "../assets/images/mac.png";

export interface workDataType {
  type: string;
  title: string;
  description: string;
  urlImage: string;
  concept: string;
  desgin: string;
  protoType: string;
}

export const workData: workDataType[] = [
  {
    type: "Frontend",
    title: "Transforming your ideas into reality",
    description:
      "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
    urlImage: mac,
    concept: "",
    desgin: "",
    protoType: "",
  },
  // {
  //   title: "Backend",
  //   description:
  //     "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
  // },
  // {
  //   title: "Deployment",
  //   description:
  //     "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
  // },
  // {
  //   title: "Mobile Application",
  //   description:
  //     " Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
  // },
  // {
  //   title: "Wireframe",
  //   description:
  //     " Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
  // },
  // {
  //   title: "Desktop Application",
  //   description:
  //     " Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
  // },
];
