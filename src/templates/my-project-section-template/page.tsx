import React from "react";
import { PortfolioProjectListTimeLinePageComponent } from "./components/project-list-timeline.component";
import { TUserProjectsType } from "../../types/portfolio.type";

type props = {
  data: TUserProjectsType[];
};

const PortfolioMyProjectSectionPageTemplate = ({ ...props }: props) => {
  return (
    <div>
      <PortfolioProjectListTimeLinePageComponent data={props.data} />
    </div>
  );
};

export default PortfolioMyProjectSectionPageTemplate;
