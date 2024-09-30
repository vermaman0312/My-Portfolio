import React from "react";
import "../../css/card-animation.style.css";
import { CustomLabel } from "../../components/custom-components/custom-label/component";
import { TUserCertificationsType } from "../../types/portfolio.type";
import { Link } from "react-router-dom";
import PortfolioCertificationDesktopViewPageComponent from "./components/certification-list-desktop.component";
import PortfolioCertificationListMobilePageComponent from "./components/certification-list-mobile-component";

type props = {
  data: Array<TUserCertificationsType>;
};

const PortfolioMyCertificationSectionPageTemplate = ({ ...props }: props) => {
  return (
    <div className="w-full h-full">
      <div className="hidden md:block">
        <PortfolioCertificationDesktopViewPageComponent data={props.data} />
      </div>
      <div className="md:hidden">
        <PortfolioCertificationListMobilePageComponent />
      </div>
    </div>
  );
};

export default PortfolioMyCertificationSectionPageTemplate;
