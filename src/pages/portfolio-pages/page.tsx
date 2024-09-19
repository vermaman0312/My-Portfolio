import { skillsData } from "../../mock-data/skill-data";
import { workData } from "../../mock-data/services-data";
import { useState } from "react";
import PortfolioPageLayout from "../../layouts/portfolio-layout/page.layout";

const PortfolioPage = () => {
  const [menuOption, setMenuOption] = useState<string>("");
  return (
    <div className="w-screen h-screen">
      <PortfolioPageLayout
        setMenuOption={setMenuOption}
        menuOption={menuOption}
        skillsData={skillsData}
        workData={workData}
      />
    </div>
  );
};

export default PortfolioPage;
