import React from "react";
import { Button } from "../../components/ui/button-ui/ui";
import { CustomLabel } from "../../components/custom-components/custom-label/component";

const PortfolioMyFooterSectionPageTemplate = () => {
  return (
    <div className="w-full p-4 flex flex-wrap items-center justify-around gap-8">
      <div className="flex items-center justify-center gap-2">
        <Button className="border-2 border-[#DAC5A7] border-opacity-40 text-[#DAC5A7] text-opacity-60 w-10 h-10">
          W
        </Button>
        <Button className="border-2 border-[#DAC5A7] border-opacity-40 text-[#DAC5A7] text-opacity-60 w-10 h-10">
          L
        </Button>
        <Button className="border-2 border-[#DAC5A7] border-opacity-40 text-[#DAC5A7] text-opacity-60 w-10 h-10">
          I
        </Button>
        <Button className="border-2 border-[#DAC5A7] border-opacity-40 text-[#DAC5A7] text-opacity-60 w-10 h-10">
          D
        </Button>
        <Button className="border-2 border-[#DAC5A7] border-opacity-40 text-[#DAC5A7] text-opacity-60 w-10 h-10">
          G
        </Button>
        <Button className="border-2 border-[#DAC5A7] border-opacity-40 text-[#DAC5A7] text-opacity-60 w-10 h-10">
          T
        </Button>
      </div>
      <div>
        <CustomLabel className="text-xs font-display text-[#DAC5A7]">
          Copyrights © Aman Verma
        </CustomLabel>
      </div>
    </div>
  );
};

export default PortfolioMyFooterSectionPageTemplate;
