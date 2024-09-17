import React, { useEffect, useRef } from "react";
import CustomNavBarComponent from "../../components/nav-bar-component/component";
import redux_logo from "../../assets/images/redux_logo.png";
import { skillsType } from "../../mock-data/skill-data";
import { workDataType } from "../../mock-data/work-data";
import { MoveUpRight } from "lucide-react";
import CustomFooter from "../../components/footer-component/component";
import PortfolioProfilePicturePageTemplate from "../../templates/profile-picture.template";
import "../../css/scroll-container.css";
import "../../css/sliding_animation.css";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let isScrolling = false; // Flag to prevent multiple scrolls at the same time

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const smoothScroll = (deltaY: number) => {
      const scrollMultiplier = 5; // Amplify the scroll distance
      const targetScrollTop = container.scrollTop + deltaY * scrollMultiplier; // Increase scroll distance
      const duration = 1000; // Smoothness duration, adjust for preference
      const startPosition = container.scrollTop;
      const distance = targetScrollTop - startPosition;
      let startTime: number | null = null;

      const animationScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        container.scrollTop = run;
        if (timeElapsed < duration) {
          requestAnimationFrame(animationScroll);
        } else {
          isScrolling = false;
        }
      };

      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animationScroll);
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); // Prevent default browser scroll behavior
      if (!isScrolling) {
        isScrolling = true;
        smoothScroll(event.deltaY); // Scroll amplified by deltaY
      }
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div>
        <CustomNavBarComponent
          onClickService={() => setMenuOption && setMenuOption("service")}
          onClickWork={() => setMenuOption && setMenuOption("work")}
          onClickAbout={() => setMenuOption && setMenuOption("about")}
          onClickBlog={() => setMenuOption && setMenuOption("blog")}
        />
      </div>
      <div
        ref={scrollContainerRef}
        className="w-full h-full flex flex-col items-center justify-start gap-4 scroll-container"
      >
        <div className="w-full flex items-center flex-wrap justify-center gap-4 md:p-24">
          <div className="">
            {/* <img src={redux_logo} alt="" /> */}
            <PortfolioProfilePicturePageTemplate />
          </div>
          <div className="md:w-[50%]">
            <p className="text-5xl md:text-8xl text-[#DAC5A7] text-center">
              Web Designer & Developer
            </p>

            <div className="mt-3 p-4 flex items-center flex-wrap justify-center gap-4">
              <button className="bg-[#DAC5A7] bg-opacity-10 border-2 border-[#DAC5A7] border-opacity-15 p-2 rounded-lg text-xs font-display text-[#DAC5A7] w-40">
                Book meeting
              </button>
              <button className="bg-[#DAC5A7] bg-opacity-10 border-2 border-[#DAC5A7] border-opacity-15 p-2 rounded-lg text-xs font-display text-[#DAC5A7] w-40">
                Download Resume
              </button>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs text-[#DAC5A7] text-opacity-60 text-center font-display">
            Premium web design, development, and SEO services to help your
            business stand out.
          </p>
        </div>

        <div className="p-2 w-full flex items-center justify-center gap-[5rem]">
          {skillsData.map((skill, index) => {
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

        <div className="w-full p-4 flex flex-wrap items-center justify-center gap-4">
          {workData.map((work, index) => {
            return (
              <div className="w-[30rem] border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 rounded-lg p-10 animate-slideUp select-none">
                <div>
                  <p className="text-xs font-display text-[#DAC5A7] text-opacity-60">
                    {`0${index + 1}`}
                  </p>
                </div>
                <div className="mt-5">
                  <p className="text-4xl font-light font-display text-[#DAC5A7] uppercase">
                    {work.title}
                  </p>
                </div>
                <div className="mt-5">
                  <p className="font-display text-[#DAC5A7] text-opacity-60 font-light">
                    Visually stunning web designs that captivate your audience
                    by blending your brand voice and customer needs.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4">
                  <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
                    <MoveUpRight className="text-[#DAC5A7] w-5 h-5" />
                  </button>
                  <p className="text-2xl font-light font-display text-[#DAC5A7] uppercase">
                    {`About ${work.title}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full">
          <CustomFooter />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPageLayout;
