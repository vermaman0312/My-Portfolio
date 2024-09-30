import React from "react";
import { TUserWorkExperienceType } from "../../types/portfolio.type";
import { HoverEffect } from "./components/experience-list.component";

type props = {
  data: TUserWorkExperienceType[];
}

const PortfolioMyWorkingExperienceSectionPageTemplate = ({...props}: props) => {
  return (
    <div>
      <HoverEffect items={props.data as TUserWorkExperienceType[]} />
    </div>
  );
};

export default PortfolioMyWorkingExperienceSectionPageTemplate;
