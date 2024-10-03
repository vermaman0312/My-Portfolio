import { useState } from "react";
import PortfolioPageLayout from "../../layouts/page.layout";
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
        setUserData={setUserData}
        setMenuOption={setMenuOption}
        menuOption={menuOption}
      />
    </div>
  );
};

export default PortfolioPage;
