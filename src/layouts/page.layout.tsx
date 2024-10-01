import PortfolioMyHeaderSectionPageTemplate from "../templates/my-header-section-template/page";
import {
  TUserCertificationsType,
  TUserPortfolioTypeInterface,
  TUserProjectsType,
  TUserServicesWorkType,
  TUserSkillsType,
  TUserWorkExperienceType,
} from "../types/portfolio.type";
import "../css/scroll-container.css";
import PortfolioMyIntroductionSectionPageTemplate from "../templates/my-introduction-section-template/page";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision/ui";
import PortfolioAboutSectionPageTemplate from "../templates/about-section-template/page";
import PortfolioMyTechnologySectionPageTemplate from "../templates/my-technology-section-template/page";
import PortfolioServicesWorkSectionPageTemplate from "../templates/services-work-section-template/page";
import PortfolioMyCertificationSectionPageTemplate from "../templates/my-certification-section-template/page";
import PortfolioMyProjectSectionPageTemplate from "../templates/my-project-section-template/page";
import PortfolioMyContactSectionPageTemplate from "../templates/my-contact-section-template/page";
import PortfolioMyWorkingExperienceSectionPageTemplate from "../templates/my-working-experience-section-template/page";
import PortfolioMyTestonomialSectionPageTemplate from "../templates/my-testonomial-section-template/page";
import PortfolioMyFooterSectionPageTemplate from "../templates/my-footer-section-template/page";
import { CustomLabel } from "../components/custom-components/custom-label/component";
import { ArrowRight } from "lucide-react";
import { Cover } from "../components/ui/cover/ui";

type props = {
  userData: TUserPortfolioTypeInterface;
  setMenuOption: (value: string) => void;
  menuOption: string;
};

const PortfolioPageLayout = ({ ...props }: props) => {
  return (
    <div className="w-full h-full scroll-container">
      {/* HEADER */}
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

      {/* INTRODUCTION */}
      <BackgroundBeamsWithCollision className="w-full h-full mt-5">
        <PortfolioMyIntroductionSectionPageTemplate />
      </BackgroundBeamsWithCollision>

      {/* SCROLL COMPONENT */}
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

      {/* ABOUT */}
      <div
        id="about"
        className="w-full mt-5 flex items-center justify-center select-none p-4"
      >
        <PortfolioAboutSectionPageTemplate />
      </div>

      {/* Testonomial */}
      <div
        id="technology"
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <CustomLabel className="text-[#DAC5A7] font-display text-4xl flex items-center justify-center gap-2 uppercase text-center">
            <Cover className="text-[#DAC5A7]">Testonomial</Cover>
          </CustomLabel>
          <CustomLabel className="text-[#DAC5A7] font-display text-xs text-center md:w-[50%]">
            I'm proficient in React JS, Next JS, Node JS, Express JS, MongoDB,
            Electron JS, and TypeScript for web and mobile app development, with
            a strong interest in IoT and cybersecurity.
          </CustomLabel>
        </div>
        <div className="w-full flex items-center justify-center">
          <PortfolioMyTestonomialSectionPageTemplate />
        </div>
      </div>

      {/* MY TECHNOLOGIES */}
      <div
        id="technology"
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <CustomLabel className="text-[#DAC5A7] font-display text-4xl flex items-center text-center justify-center gap-2 uppercase">
            <Cover className="text-[#DAC5A7]">My Technologies</Cover>
          </CustomLabel>
          <CustomLabel className="text-[#DAC5A7] font-display text-xs text-center md:w-[50%] z-1">
            I'm proficient in React JS, Next JS, Node JS, Express JS, MongoDB,
            Electron JS, and TypeScript for web and mobile app development, with
            a strong interest in IoT and cybersecurity.
          </CustomLabel>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <PortfolioMyTechnologySectionPageTemplate
            data={props.userData.userSkills as TUserSkillsType[]}
          />
        </div>
      </div>

      {/* SERVICES & WORK */}
      <div
        id="servicesWork"
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <CustomLabel className="text-[#DAC5A7] font-display text-4xl flex items-center justify-center gap-2 uppercase text-center">
            <Cover className="text-[#DAC5A7]">Services & Work</Cover>
          </CustomLabel>
          <CustomLabel className="text-[#DAC5A7] font-display text-xs text-center md:w-[50%]">
            I'm proficient in React JS, Next JS, Node JS, Express JS, MongoDB,
            Electron JS, and TypeScript for web and mobile app development, with
            a strong interest in IoT and cybersecurity.
          </CustomLabel>
        </div>
        <div className="w-full mt-5">
          <PortfolioServicesWorkSectionPageTemplate
            data={props.userData.userServicesWork as TUserServicesWorkType[]}
          />
        </div>
      </div>

      {/* CERTIFICATION */}
      <div
        id="certification"
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <PortfolioMyCertificationSectionPageTemplate
          data={props.userData.userCertifications as TUserCertificationsType[]}
        />
      </div>

      {/* EXPERIENCE */}
      <div
        id="experience"
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <CustomLabel className="text-[#DAC5A7] font-display text-4xl flex items-center justify-center gap-2 uppercase text-center">
            <Cover className="text-[#DAC5A7]">My Work Experiences</Cover>
          </CustomLabel>
          <CustomLabel className="text-[#DAC5A7] font-display text-xs text-center md:w-[50%]">
            I'm proficient in React JS, Next JS, Node JS, Express JS, MongoDB,
            Electron JS, and TypeScript for web and mobile app development, with
            a strong interest in IoT and cybersecurity.
          </CustomLabel>
        </div>
        <div className="w-full flex items-center justify-center">
          <PortfolioMyWorkingExperienceSectionPageTemplate
            data={
              props.userData.userWorkExperience as TUserWorkExperienceType[]
            }
          />
        </div>
      </div>

      {/* PROJECTS */}
      <div
        id="projects"
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <CustomLabel className="text-[#DAC5A7] font-display text-4xl flex items-center text-center justify-center gap-2 uppercase">
            <Cover className="text-[#DAC5A7]">My Projects</Cover>
          </CustomLabel>
          <CustomLabel className="text-[#DAC5A7] font-display text-xs text-center md:w-[50%]">
            I'm proficient in React JS, Next JS, Node JS, Express JS, MongoDB,
            Electron JS, and TypeScript for web and mobile app development, with
            a strong interest in IoT and cybersecurity.
          </CustomLabel>
        </div>
        <div className="w-full">
          <PortfolioMyProjectSectionPageTemplate
            data={props.userData.userProjects as TUserProjectsType[]}
          />
        </div>
      </div>

      {/* CONTACT */}
      <div
        id="contacts"
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <PortfolioMyContactSectionPageTemplate />
      </div>

      {/* FOOTER */}
      <div
        id="footer"
        className="w-full mt-5 flex flex-col items-center justify-between select-none mb-5"
      >
        <PortfolioMyFooterSectionPageTemplate />
      </div>
    </div>
  );
};

export default PortfolioPageLayout;
