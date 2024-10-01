import React from "react";
import { CustomLabel } from "../../../components/custom-components/custom-label/component";
import { Button } from "../../../components/ui/button-ui/ui";

const PortfolioContactFormPageComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:p-16 p-4">
      <div className="w-full flex items-center justify-center">
        <CustomLabel className="text-[#DAC5A7] text-xl font-display uppercase">
          Contact Me
        </CustomLabel>
      </div>
      <div className="w-full md:w-[60%]">
        <CustomLabel className="font-display text-[#DAC5A7]">Name:</CustomLabel>
        <input
          type="text"
          placeholder="Your name"
          className="border-2 border-[#716a60] outline-none text-xs text-[#DAC5A7] text-opacity-70 placeholder:text-[#DAC5A7] placeholder:text-opacity-40 font-display bg-transparent w-full p-2 rounded-lg"
        />
      </div>
      <div className="w-full md:w-[60%]">
        <CustomLabel className="font-display">Email address:</CustomLabel>
        <input
          type="text"
          placeholder="example@example.com"
          className="border-2 border-[#716a60] outline-none text-xs text-[#DAC5A7] text-opacity-70 placeholder:text-[#DAC5A7] placeholder:text-opacity-40 font-display bg-transparent w-full p-2 rounded-lg"
        />
      </div>
      <div className="w-full md:w-[60%]">
        <CustomLabel className="font-display">Contact No:</CustomLabel>
        <input
          type="text"
          placeholder="+XX-XXXXXXXXXX"
          className="border-2 border-[#716a60] outline-none text-xs text-[#DAC5A7] text-opacity-70 placeholder:text-[#DAC5A7] placeholder:text-opacity-40 font-display bg-transparent w-full p-2 rounded-lg"
        />
      </div>
      <div className="w-full md:w-[60%]">
        <CustomLabel className="font-display">Message:</CustomLabel>
        <textarea
          placeholder="write a message..."
          className="border-2 border-[#716a60] outline-none text-xs text-[#DAC5A7] text-opacity-70 placeholder:text-[#DAC5A7] placeholder:text-opacity-40 font-display bg-transparent w-full p-2 min-h-24 rounded-lg max-h-32 scroll-container"
        />
      </div>

      <div className="w-full flex items-center justify-center">
        <Button className="bg-[#DAC5A7] text-black w-32 h-10 font-display">
          Reach Me
        </Button>
      </div>
    </div>
  );
};

export default PortfolioContactFormPageComponent;
