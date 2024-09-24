import PortfolioProfileMainBodyPageTemplate from "../../templates/body/profile-main-body.template";
import PortfolioProfileSkillPageTemplate from "../../templates/body/skill-list.template";
import PortfolioServicesWorkListPageTemplate from "../../templates/body/services-work-list.template";
import PortfolioHeaderPageTemplate from "../../templates/header/page.template";
import PortfolioFooterPageTemplate from "../../templates/footer/page.template";
import { CustomSmoothScroll } from "../../utils/custom-smooth-scroll/custom-smooth-scrollable";
import { skillsType } from "../../mock-data/skill-data";
import { workDataType } from "../../mock-data/services-data";
import "../../css/scroll-container.css";
import "../../css/sliding_animation.css";
import PortfolioTechnologyPageTemplate from "../../templates/body/technologies.template";
import { technologiesData } from "../../mock-data/technologies.llist";
import PortofolioCertificationListPageTemplate from "../../templates/body/certifications-list.template";
import { certificationData } from "../../mock-data/certification_list";
import PortfolioProjectListPageTemplate from "../../templates/body/preojects-list.template";
import { projectList } from "../../mock-data/preoject-list";
import PortfolioAboutPageTemplate from "../../templates/body/about.template";

type props = {
  setMenuOption?: (value: string) => void;
  menuOption: string;
  skillsData: Array<skillsType>;
  workData: Array<workDataType>;
};

const PortfolioPageLayout = ({
  setMenuOption,
  menuOption,
  skillsData,
  workData,
}: props) => {
  const scrollContainerRef = CustomSmoothScroll();

  console.log("menuOption", menuOption);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full">
        <PortfolioHeaderPageTemplate
          title="aman."
          onClick={(value) => setMenuOption && setMenuOption(value)}
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
        <div className="w-full mt-10">
          <PortfolioAboutPageTemplate />
        </div>
        <div className="w-full mt-10">
          <PortfolioServicesWorkListPageTemplate data={workData} />
        </div>
        <div className="w-full mt-10">
          <PortfolioTechnologyPageTemplate data={technologiesData} />
        </div>
        <div className="w-full mt-10">
          <PortofolioCertificationListPageTemplate data={certificationData} />
        </div>
        <div className="w-full mt-10">
          <PortfolioProjectListPageTemplate data={projectList} />
        </div>
        <div className="w-full">
          <PortfolioFooterPageTemplate />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPageLayout;
