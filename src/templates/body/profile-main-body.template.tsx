import React from "react";
import PortfolioProfilePicturePageTemplate from "./profile-picture.template";
import { ArrowRight } from "lucide-react";

const PortfolioProfileMainBodyPageTemplate = () => {
  return (
    <div className="w-full flex flex-col items-center flex-wrap justify-center gap-4 md:p-24">
      <div className="">
        <PortfolioProfilePicturePageTemplate />
      </div>
      <div className="md:w-[50%]">
        <p className="text-5xl md:text-8xl text-[#DAC5A7] text-center">
          Web Designer & Developer
        </p>

        <div className="mt-3 p-4 flex items-center flex-wrap justify-center gap-4">
          <button className="bg-[#DAC5A7] bg-opacity-10 border-2 border-[#DAC5A7] border-opacity-15 p-2 rounded-lg text-xs font-display text-[#DAC5A7] w-40">
            Book meeting
          </button>
          <button className="bg-[#DAC5A7] bg-opacity-10 border-2 border-[#DAC5A7] border-opacity-15 p-2 rounded-lg text-xs font-display text-[#DAC5A7] w-40">
            Download Resume
          </button>
        </div>
        <div>
          <p className="text-xs text-[#DAC5A7] text-opacity-60 text-center font-display">
            Premium web design, development, and SEO services to help your
            business stand out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProfileMainBodyPageTemplate;
