import React from "react";
import { CustomLabel } from "../../components/custom-components/custom-label/component";

const PortfolioAboutSectionPageTemplate = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="flex items-start justify-start flex-col">
        <CustomLabel className="text-8xl text-[#DAC5A7] font-display font-bold">
          2+
        </CustomLabel>
        <CustomLabel className="text-[#DAC5A7] font-display font-bold">
          Years Working Experience
        </CustomLabel>
      </div>
      <div className="mt-5">
        <CustomLabel className="text-[#DAC5A7] font-display text-xs font-light text-opacity-60 text-center md:w-[50rem]">
          Aspiring software engineer with a strong passion for MERN (MongoDB,
          Express.js, React.js, Node.js) stack development and cybersecurity
          like ethical hacking. Skilled in building full-stack web applications
          with a focus on user experience and security. Proficient in various
          programming languages including JavaScript, Python, Html, CSS, Shell
          Scripting, Bootstrap, Node Js, Express Js and experienced in using
          modern front-end frameworks such as React.js and Next.js. Familiar
          with cybersecurity concepts such as network security and secure coding
          practices. Looking for opportunities to learn and grow while
          contributing to a dynamic team.
        </CustomLabel>
      </div>
      <div className="mt-5">
        <CustomLabel className="text-[#DAC5A7] font-display text-xs font-light text-opacity-60 text-center md:w-[50rem]">
          Aspiring software engineer with a strong passion for MERN (MongoDB,
          Express.js, React.js, Node.js) stack development and cybersecurity
          like ethical hacking. Skilled in building full-stack web applications
          with a focus on user experience and security. Proficient in various
          programming languages including JavaScript, Python, Html, CSS, Shell
          Scripting, Bootstrap, Node Js, Express Js and experienced in using
          modern front-end frameworks such as React.js and Next.js. Familiar
          with cybersecurity concepts such as network security and secure coding
          practices. Looking for opportunities to learn and grow while
          contributing to a dynamic team.
        </CustomLabel>
      </div>
    </div>
  );
};

export default PortfolioAboutSectionPageTemplate;
