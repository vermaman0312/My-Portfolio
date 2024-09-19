import React from "react";
import { CustomLabel } from "../../components/custom-label/page.component";
import "../../css/global.css";

const PortfolioWorkListPageTemplate = () => {
  return (
    <div className="w-full p-4 flex flex-col items-center justify-center gap-4">
      <div>
        <CustomLabel className="text-4xl font-display text-[#DAC5A7] text-opacity-60 font-normal border-b-8 border-[#DAC5A7] border-opacity-60 rounded-b-lg text-center">
          WORK
        </CustomLabel>
        <CustomLabel className="text-xs font-display text-[#DAC5A7] text-opacity-60 font-normal">
          My latest web design projects and see how we can help bring your ideas
          to life.
        </CustomLabel>
      </div>
      
    </div>
  );
};

export default PortfolioWorkListPageTemplate;
