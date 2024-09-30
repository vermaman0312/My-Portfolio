import React from "react";
import "./components/style.css";
import { Link } from "react-router-dom";
import { TUserServicesWorkType } from "../../types/portfolio.type";
import { CustomLabel } from "../../components/custom-components/custom-label/component";

type props = {
  data: Array<TUserServicesWorkType>;
};

const PortfolioServicesWorkSectionPageTemplate = ({ ...props }: props) => {
  return <div></div>;
};

export default PortfolioServicesWorkSectionPageTemplate;
