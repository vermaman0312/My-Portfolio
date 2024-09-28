import PortfolioMyHeaderSectionPageTemplate from "../../templates/my-header-section-template/page";
import {
  TUserPortfolioTypeInterface,
  TUserServicesWorkType,
} from "../../types/portfolio.type";
import "../../css/scroll-container.css";
import PortfolioMyIntroductionSectionPageTemplate from "../../templates/my-introduction-section-template/page";
import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collision/ui";
import { CustomLabel } from "../../components/custom-components/custom-label/component";
import { ArrowRight } from "lucide-react";
import PortfolioAboutSectionPageTemplate from "../../templates/about-section-template/page";
import PortfolioServicesWorkSectionPageTemplate from "../../templates/services-work-section-template/page";
import { useEffect, useState } from "react";

type props = {
  userData: TUserPortfolioTypeInterface;
  setMenuOption: (value: string) => void;
  menuOption: string;
};

const PortfolioPageLayout = ({ ...props }: props) => {
  return (
    // <div className="w-full h-full flex flex-col items-center justify-start">
    //   <div className="w-full">
    //     <PortfolioHeaderPageTemplate
    //       title="aman."
    //       onClick={(value) => setMenuOption && setMenuOption(value)}
    //     />
    //   </div>
    //   <div
    //     ref={scrollContainerRef}
    //     className="w-full h-full flex flex-col items-center justify-start gap-4 scroll-container"
    //   >
    //     <div className="w-full mt-10">
    //       <PortfolioProfileMainBodyPageTemplate />
    //     </div>
    //     <div className="w-full mt-5">
    //       <PortfolioProfileSkillPageTemplate data={skillsData} />
    //     </div>
    //     <div className="w-full mt-10">
    //       <PortfolioAboutPageTemplate />
    //     </div>
    //     <div className="w-full mt-10">
    //       <PortfolioServicesWorkListPageTemplate data={workData} />
    //     </div>
    //     <div className="w-full mt-10">
    //       <PortfolioTechnologyPageTemplate data={technologiesData} />
    //     </div>
    //     <div className="w-full mt-10">
    //       <PortofolioCertificationListPageTemplate data={certificationData} />
    //     </div>
    //     <div className="w-full mt-10">
    //       <PortfolioProjectListPageTemplate data={projectList} />
    //     </div>
    //     <div className="w-full ">
    //       <PortfolioFooterPageTemplate />
    //     </div>
    //   </div>
    // </div>

    <div className="w-full h-full scroll-container">
      <div
        id="header"
        className="sticky top-0 w-full flex items-center justify-center bg-[#0E0E0E] z-50"
      >
        <div className="w-full flex items-center justify-center pt-6 pl-6 pr-6 z-50">
          <PortfolioMyHeaderSectionPageTemplate
            title="aman."
            onClick={(value) => props.setMenuOption(value)}
          />
        </div>
      </div>
      <BackgroundBeamsWithCollision className="w-full h-full mt-5">
        <PortfolioMyIntroductionSectionPageTemplate />
      </BackgroundBeamsWithCollision>

      <div
        id="scroll"
        className={`hidden md:flex w-full md:mt-16 items-center justify-center p-10 select-none`}
      >
        <div style={{ transform: "rotate(90deg)" }}>
          <CustomLabel className="text-[#DAC5A7] font-display text-xs flex items-center justify-center gap-2">
            <span>Scroll down</span>
            <span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </CustomLabel>
        </div>
      </div>

      <div
        id="about"
        className="w-full mt-5 flex items-center justify-center select-none p-4"
      >
        <PortfolioAboutSectionPageTemplate />
      </div>

      <div
        id="servicesWork"
        className="w-full mt-5 hidden md:flex items-center justify-between select-none p-4 mb-5"
      >
        <div className="flex flex-col items-center justify-center gap-4 border">
          <CustomLabel className="text-[#DAC5A7] font-display text-6xl flex items-center justify-center gap-2">
            Services & Work
          </CustomLabel>
          <CustomLabel className="text-[#DAC5A7] font-display text-xs text-center">
            I'm proficient in React JS, Next JS, Node JS, Express JS, MongoDB,
            Electron JS, and TypeScript for web and mobile app development, with
            a strong interest in IoT and cybersecurity.
          </CustomLabel>
        </div>
        <div className="w-full border">
          <PortfolioServicesWorkSectionPageTemplate
            data={props.userData.userServicesWork as TUserServicesWorkType[]}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPageLayout;
