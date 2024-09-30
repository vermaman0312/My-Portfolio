import React from "react";
import "../../css/card-animation.style.css";
import { TUserCertificationsType } from "../../types/portfolio.type";
import PortfolioCertificationDesktopViewPageComponent from "./components/certification-list-desktop.component";
import PortfolioCertificationListMobilePageComponent from "./components/certification-list-mobile-component";
import { CustomLabel } from "../../components/custom-components/custom-label/component";

type props = {
  data: Array<TUserCertificationsType>;
};

const PortfolioMyCertificationSectionPageTemplate = ({ ...props }: props) => {
  return (
    <div className="w-full h-full">
      <div className="hidden md:block">
        <PortfolioCertificationDesktopViewPageComponent data={props.data} />
      </div>
      <div className="md:hidden w-full flex flex-col items-center justify-center mt-5">
        <div className="w-full flex flex-col items-center justify-center">
          <CustomLabel className="text-4xl font-display text-[#DAC5A7]">
            Certifications
          </CustomLabel>
          <CustomLabel className="text-[#DAC5A7] text-opacity-60 font-display text-xs text-center">
            Certifications showcase my dedication to continuous learning and
            practical skill development, validating my expertise and readiness
            to apply the latest technologies in real-world projects.
          </CustomLabel>
        </div>
        <div className="mt-16">
          <PortfolioCertificationListMobilePageComponent data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioMyCertificationSectionPageTemplate;
