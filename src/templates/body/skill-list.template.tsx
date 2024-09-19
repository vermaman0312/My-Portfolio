import React from "react";
import { skillsType } from "../../mock-data/skill-data";

type props = {
  data: Array<skillsType>;
};

const PortfolioProfileSkillPageTemplate = ({ data }: props) => {
  return (
    <div className="p-4 w-full flex items-center justify-start gap-[5rem] slider border-none">
      <div className="slide-track">
        {data.map((skill, index) => (
          <div
            className="flex items-center justify-center gap-2 select-none slide"
            key={index}
          >
            <img src={skill.logo} alt={skill.title} width={30} />
            <p className="text-xs font-display text-[#DAC5A7] text-nowrap">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioProfileSkillPageTemplate;
