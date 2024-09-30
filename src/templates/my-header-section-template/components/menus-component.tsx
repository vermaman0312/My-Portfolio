import React from "react";
import { CustomLabel } from "../../../components/custom-components/custom-label/component";

type props = {
  onClick: (value: string) => void;
};

const PortfolioMyHeaderSectionMenusPageComponent = ({ ...props }: props) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <CustomLabel
        onClick={() => props.onClick("about")}
        className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
      >
        About
      </CustomLabel>
      <CustomLabel
        onClick={() => props.onClick("technology")}
        className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
      >
        Technologies
      </CustomLabel>
      <CustomLabel
        onClick={() => props.onClick("servicesWork")}
        className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
      >
        Services & Work
      </CustomLabel>
      <CustomLabel
        onClick={() => props.onClick("certification")}
        className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
      >
        Certifications
      </CustomLabel>
      <CustomLabel
        onClick={() => props.onClick("project")}
        className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
      >
        Projects
      </CustomLabel>
      <CustomLabel
        onClick={() => props.onClick("contact")}
        className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
      >
        Contact
      </CustomLabel>
    </div>
  );
};

export default PortfolioMyHeaderSectionMenusPageComponent;
