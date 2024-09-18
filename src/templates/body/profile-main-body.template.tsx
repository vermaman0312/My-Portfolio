import { ArrowRight } from "lucide-react";
import PortfolioProfilePicturePageTemplate from "./profile-picture.template";

const PortfolioProfileMainBodyPageTemplate = () => {
  return (
    <div className="w-full flex flex-col items-center flex-wrap justify-center gap-4 md:p-24 md:pb-10">
      <div className="">
        <PortfolioProfilePicturePageTemplate />
      </div>
      <div className="md:w-[50%]">
        <div className="flex items-center justify-center">
          <div>
            <p className="text-2xl md:text-4xl text-[#DAC5A7] text-center">
              Hi, I'm <span className="text-blue-500">Aman Verma</span>
            </p>
            <p className="text-4xl md:text-7xl text-[#DAC5A7] text-center">
              Software Engineer
            </p>
          </div>
          <p
            className="text-xs text-[#DAC5A7] text-center text-nowrap flex items-center gap-2 md:mt-16"
            style={{ transform: "rotate(90deg)" }}
          >
            <span>Scroll-down</span>
            <span>
              <ArrowRight className="w-5 h-5" />
            </span>
          </p>
        </div>

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
