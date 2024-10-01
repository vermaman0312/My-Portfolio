import React from "react";
import { TUserSkillsType } from "../../types/portfolio.type";
import PortfolioTechnologyListPageComponent from "./components/technology-list.component";

type props = {
  data: Array<TUserSkillsType>;
};

const PortfolioMyTechnologySectionPageTemplate = ({ ...props }: props) => {
  return (
    <div className="w-full md:w-[50%] p-4">
      <PortfolioTechnologyListPageComponent data={props.data} />
    </div>
  );
};

export default PortfolioMyTechnologySectionPageTemplate;
