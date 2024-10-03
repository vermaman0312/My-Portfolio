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
import { useEffect, useRef } from "react";

type props = {
  setUserData: (value: TUserPortfolioTypeInterface) => void;
  userData: TUserPortfolioTypeInterface;
  setMenuOption: (value: string) => void;
  menuOption: string;
};

const PortfolioPageLayout = ({ ...props }: props) => {
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    testimonial: useRef<HTMLDivElement>(null),
    technology: useRef<HTMLDivElement>(null),
    servicesWork: useRef<HTMLDivElement>(null),
    certification: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contacts: useRef<HTMLDivElement>(null),
    contactme: useRef<HTMLDivElement>(null),
  };
  useEffect(() => {
    const section = sectionRefs[props.menuOption as keyof typeof sectionRefs];
    if (section && section.current) {
      section.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.menuOption]);

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
        ref={sectionRefs.about}
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
            Grateful for the opportunity to share my experience. This journey
            has been enriching, and I’ve grown both personally and
            professionally. Looking forward to more exciting challenges ahead!
          </CustomLabel>
        </div>
        <div className="w-full flex items-center justify-center">
          <PortfolioMyTestonomialSectionPageTemplate />
        </div>
      </div>

      {/* MY TECHNOLOGIES */}
      <div
        id="technology"
        ref={sectionRefs.technology}
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <CustomLabel className="text-[#DAC5A7] font-display text-4xl flex items-center text-center justify-center gap-2 uppercase">
            <Cover className="text-[#DAC5A7]">My Technologies</Cover>
          </CustomLabel>
          <CustomLabel className="text-[#DAC5A7] font-display text-xs text-center md:w-[50%] z-1">
            I believe in the power of technology to solve real-world problems.
            With my experience in various technologies, I continuously seek to
            innovate and create solutions that drive progress.
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
        ref={sectionRefs.servicesWork}
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <CustomLabel className="text-[#DAC5A7] font-display text-4xl flex items-center justify-center gap-2 uppercase text-center">
            <Cover className="text-[#DAC5A7]">Services & Work</Cover>
          </CustomLabel>
          <CustomLabel className="text-[#DAC5A7] font-display text-xs text-center md:w-[50%]">
            I leverage technology to deliver innovative solutions and
            high-quality services. With a passion for excellence, I strive to
            add value and exceed expectations in every project.
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
        ref={sectionRefs.certification}
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <PortfolioMyCertificationSectionPageTemplate
          data={props.userData.userCertifications as TUserCertificationsType[]}
        />
      </div>

      {/* EXPERIENCE */}
      <div
        id="experience"
        ref={sectionRefs.experience}
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <CustomLabel className="text-[#DAC5A7] font-display text-4xl flex items-center justify-center gap-2 uppercase text-center">
            <Cover className="text-[#DAC5A7]">My Work Experiences</Cover>
          </CustomLabel>
          <CustomLabel className="text-[#DAC5A7] font-display text-xs text-center md:w-[50%]">
            I bring solid experience in technology, delivering innovative
            solutions and quality services. My work is driven by a commitment to
            excellence and continuous growth.
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
        ref={sectionRefs.projects}
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <CustomLabel className="text-[#DAC5A7] font-display text-4xl flex items-center text-center justify-center gap-2 uppercase">
            <Cover className="text-[#DAC5A7]">My Projects</Cover>
          </CustomLabel>
          <CustomLabel className="text-[#DAC5A7] font-display text-xs text-center md:w-[50%]">
            I've developed impactful projects, blending innovation and
            technology to deliver practical solutions. Each project reflects my
            dedication to quality and problem-solving.
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
        ref={sectionRefs.contacts}
        className="w-full mt-5 flex flex-col items-center justify-between select-none p-4 mb-5"
      >
        <PortfolioMyContactSectionPageTemplate />
      </div>

      {/* FOOTER */}
      <div
        id="footer"
        ref={sectionRefs.contactme}
        className="w-full mt-5 flex flex-col items-center justify-between select-none mb-5"
      >
        <PortfolioMyFooterSectionPageTemplate />
      </div>
    </div>
  );
};

export default PortfolioPageLayout;
