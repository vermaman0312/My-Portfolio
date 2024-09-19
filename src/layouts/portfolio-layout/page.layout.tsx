import PortfolioProfileMainBodyPageTemplate from "../../templates/body/profile-main-body.template";
import PortfolioProfileSkillPageTemplate from "../../templates/body/skill-list.template";
import PortfolioServicesListPageTemplate from "../../templates/body/services-list.template";
import PortfolioHeaderPageTemplate from "../../templates/header/page.template";
import PortfolioFooterPageTemplate from "../../templates/footer/page.template";
import { CustomSmoothScroll } from "../../utils/custom-smooth-scroll/custom-smooth-scrollable";
import { skillsType } from "../../mock-data/skill-data";
import { workDataType } from "../../mock-data/services-data";
import "../../css/scroll-container.css";
import "../../css/sliding_animation.css";
import PortfolioWorkListPageTemplate from "../../templates/body/work-list.template";

type props = {
  setMenuOption?: (value: string) => void;
  menuOption: string;
  skillsData: Array<skillsType>;
  workData: Array<workDataType>;
};

const PortfolioPageLayout = ({
  setMenuOption,
  skillsData,
  workData,
}: props) => {
  const scrollContainerRef = CustomSmoothScroll();

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full">
        <PortfolioHeaderPageTemplate
          title="aman."
          onClickService={(value) => setMenuOption && setMenuOption(value)}
          onClickWork={(value) => setMenuOption && setMenuOption(value)}
          onClickAbout={(value) => setMenuOption && setMenuOption(value)}
          onClickBlog={(value) => setMenuOption && setMenuOption(value)}
        />
      </div>
      <div
        ref={scrollContainerRef}
        className="w-full h-full flex flex-col items-center justify-start gap-4 scroll-container"
      >
        <div className="w-full mt-10">
          <PortfolioProfileMainBodyPageTemplate />
        </div>
        <div className="w-full mt-5">
          <PortfolioProfileSkillPageTemplate data={skillsData} />
        </div>
        <div className="w-full">
          <PortfolioServicesListPageTemplate data={workData} />
        </div>
        <div className="w-full">
          <PortfolioWorkListPageTemplate />
        </div>
        <div className="w-full">
          <PortfolioFooterPageTemplate />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPageLayout;
