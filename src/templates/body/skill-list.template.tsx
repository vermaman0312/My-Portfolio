import React from "react";
import { skillsType } from "../../mock-data/skill-data";

type props = {
  data: Array<skillsType>;
};

const PortfolioProfileSkillPageTemplate = ({ data }: props) => {
  return (
    <div className="p-2 w-full flex items-center justify-center gap-[5rem]">
      {data.map((skill, index) => {
        return (
          <div className="flex items-center justify-center gap-2 sliding_animation select-none">
            <img src={skill.logo} alt="" width={30} />
            <p className="text-xs font-display text-[#DAC5A7] text-nowrap">
              {skill.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioProfileSkillPageTemplate;
