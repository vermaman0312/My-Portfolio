import CustomNavBarComponent from "../../components/nav-bar-component/component";
import "../../css/scroll-container.css";
import "../../css/sliding_animation.css";
import { MoveUpRight } from "lucide-react";
import { skillsData } from "../../mock-data/skill-data";
import { workData } from "../../mock-data/work-data";
import CustomFooter from "../../components/footer-component/component";

const PortfolioPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div>
        <CustomNavBarComponent />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-start pt-[20rem] gap-4 scroll-container">
        <div className="w-full md:w-[25.5%]">
          <p className="text-5xl md:text-8xl text-[#DAC5A7] text-center">
            Web Designer & Developer
          </p>
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

        {/* FOOTER */}
        <div className="w-full pb-5">
          <CustomFooter />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
