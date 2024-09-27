import { useState } from "react";
import PortfolioPageLayout from "../../layouts/portfolio-layout/page.layout";
import { TUserPortfolioTypeInterface } from "../../types/portfolio.type";
import portfolioData from "../../portfolio/portfolio.json";

const PortfolioPage = () => {
  const [userData, setUserData] =
    useState<TUserPortfolioTypeInterface>(portfolioData);
  const [menuOption, setMenuOption] = useState<string>("");
  return (
    <div className="w-screen h-screen">
      <PortfolioPageLayout
        userData={userData}
        setMenuOption={setMenuOption}
        menuOption={menuOption}
      />
    </div>
  );
};

export default PortfolioPage;
