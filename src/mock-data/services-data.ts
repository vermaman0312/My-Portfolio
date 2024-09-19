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
    type: "Frontend - UI/UX Design",
    title: "Transforming your ideas into reality",
    description:
      "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
    urlImage: mac,
    concept:
      "I take time to understand your business needs and audience to develop a unique concept for your website. I'll create wireframes that serve as the foundation for your site's design and functionality.",
    desgin:
      "I'll design a user-friendly interface that is visually appealing and engages your target audience. Your website will be created to meet your brand's needs and goals while ensuring a seamless user experience.",
    protoType:
      " With an interactive prototype, you'll have the ability to test your website's functionality before it goes live. This will ensure that your website's design and user experience are optimized for your audience's needs and preferences.",
  },
  {
    type: "Backend - Architecture & Development",
    title: "Building a robust foundation for application",
    description:
      "Efficient and scalable backend solutions tailored to support your business's growth and operational needs.",
    urlImage: mac,
    concept:
      "I carefully analyze your business requirements and design a backend architecture that ensures high performance, scalability, and security. This includes choosing the right database, server setup, and APIs to support your application.",
    desgin:
      "I'll develop a backend system that seamlessly integrates with your frontend, ensuring smooth data flow and optimized performance. This includes building APIs, setting up server environments, and implementing security protocols.",
    protoType:
      "Your backend will be deployed using the latest technologies and best practices. You'll have a stable and secure system that can handle your application's current needs and scale with future growth.",
  },
  {
    type: "Deployment - Frontend/Backend",
    title: "Deploying application with scalability",
    description:
      "Ensuring smooth and efficient deployment for both frontend and backend, creating a robust and scalable live environment for your application.",
    urlImage: mac,
    concept:
      "The frontend will be deployed using modern hosting platforms like Vercel, Netlify, or cloud services. We'll ensure that your UI is optimized for performance, SEO, and accessibility, with automated build pipelines in place.",
    desgin:
      "For the backend, I will handle cloud deployment through platforms like AWS, Google Cloud, or Azure. Docker containers and CI/CD pipelines will be set up to automate updates and manage scaling based on demand.",
    protoType:
      "Post-deployment, monitoring tools will be integrated for real-time performance tracking, error reporting, and system alerts to ensure continuous smooth operation.",
  },
  {
    type: "Mobile Application Development",
    title: "Building innovative mobile experiences",
    description:
      "Crafting mobile applications that provide seamless and engaging user experiences, tailored to your audience's needs across platforms.",
    urlImage: mac,
    concept:
      "I start by understanding your target users and business goals to create a mobile app concept that blends user-centric design with functionality. Wireframes will be designed to serve as a blueprint for the app's interface and flow.",
    desgin:
      "I'll design a mobile-friendly, intuitive interface that provides an engaging user experience across all devices. Your app will be tailored to meet your brand’s aesthetic while delivering high functionality.",
    protoType:
      "With a functional prototype, you'll be able to interact with your mobile app before development begins, ensuring that its design, usability, and overall experience meet your requirements and delight users.",
  },
  {
    type: "Desktop Application Development",
    title: "Building efficient desktop applications",
    description:
      "Creating desktop applications that combine performance, user experience, and functionality to meet your business needs.",
    urlImage: mac,
    concept:
      "I begin by understanding your business objectives and the needs of your users, designing a concept that aligns with your goals. Wireframes and mockups are crafted to map out the application's functionality and flow.",
    desgin:
      "I'll design a clean and intuitive interface for your desktop application that enhances user interaction and meets your business’s requirements. The focus will be on usability, efficiency, and a seamless experience.",
    protoType:
      "An interactive prototype will be provided, allowing you to explore and test the application's features and user experience before development. This ensures that the final product aligns with your expectations and provides the desired functionality.",
  },
  {
    type: "Wireframe Design",
    title: "Building the blueprint for your digital solution",
    description:
      "Creating detailed wireframes that provide a visual foundation for your application, helping define the structure and flow before full development.",
    urlImage: mac,
    concept:
      "I begin by understanding your project requirements and audience to develop a wireframe concept that outlines the core structure and flow of the application. These wireframes serve as the blueprint for the design and functionality.",
    desgin:
      "I'll create low-fidelity and high-fidelity wireframes to visually represent the user interface layout, ensuring a smooth user journey and alignment with your business goals. These wireframes will focus on user interaction and content placement without distractions from design elements.",
    protoType:
      "Once the wireframe is approved, I can provide an interactive prototype to simulate how the application will function. This helps in gathering feedback on the user experience and making necessary adjustments before moving to the full design phase.",
  },
];
