import React from "react";
import ProfilePictureComponent from "./components/profile-picture.component";
import redux_logo from "../../assets/images/redux_logo.png";
import { TypewriterEffectSmooth } from "../../components/typewriter-effect/typewriter-effect";
import { CustomLabel } from "../../components/custom-components/custom-label/component";
import CustomButton from "../../components/custom-components/custom-button/component";

const words = [
  {
    text: "Hi,",
    className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
  },
  {
    text: "I'm",
    className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
  },
  {
    text: "Aman Verma.",
    className:
      "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl text-center",
  },
];

const PortfolioMyIntroductionSectionPageTemplate = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start p-6 gap-4">
      <div className="">
        <ProfilePictureComponent image={redux_logo} />
      </div>
      <div className="flex items-center justify-center">
        <div>
          <TypewriterEffectSmooth
            words={words}
            className="flex items-center justify-center"
          />
          <CustomLabel className="text-4xl md:text-7xl text-[#DAC5A7] text-center">
            Software Engineer
          </CustomLabel>
        </div>
      </div>
      <div className="mt-3 p-4 flex items-center flex-wrap justify-center gap-4">
        <CustomButton className="bg-[#DAC5A7] bg-opacity-10 border-2 border-[#DAC5A7] border-opacity-15 p-2 rounded-lg text-xs font-display text-[#DAC5A7] w-40">
          Book meeting
        </CustomButton>
        <CustomButton className="bg-[#DAC5A7] bg-opacity-10 border-2 border-[#DAC5A7] border-opacity-15 p-2 rounded-lg text-xs font-display text-[#DAC5A7] w-40">
          Download Resume
        </CustomButton>
      </div>
      <div>
        <CustomLabel className="text-xs text-[#DAC5A7] text-opacity-60 text-center font-display underline uppercase">
          Ethnic Portfolio
        </CustomLabel>
      </div>
      <div>
        <CustomLabel className="text-xs text-[#DAC5A7] text-opacity-60 text-center font-display">
          I'm proficient in React JS, Next JS, Node JS, Express JS, MongoDB,
          Electron JS, and TypeScript for web and mobile app development, with a
          strong interest in IoT and cybersecurity.
        </CustomLabel>
      </div>
    </div>
  );
};

export default PortfolioMyIntroductionSectionPageTemplate;
