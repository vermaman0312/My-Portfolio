import PortfolioProfilePicturePageTemplate from "./profile-picture.template";
import { BackgroundBeamsWithCollision } from "../../components/background-beams-with-collision/background-beams-with-collision";
import { TypewriterEffectSmooth } from "../../components/typewriter-effect/typewriter-effect";

const PortfolioProfileMainBodyPageTemplate = () => {
  const words = [
    {
      text: "Hi,",
      className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
    },
    {
      text: "I'm",
      className: "text-[#DAC5A7] text-2xl md:text-4xl text-center",
    },
    {
      text: "Aman Verma.",
      className:
        "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl text-center",
    },
  ];
  return (
    <BackgroundBeamsWithCollision className="w-full h-full">
      <div className="w-full flex flex-col items-center flex-wrap justify-center gap-4 md:p-24 md:pb-10">
        <div className="mt-10 md:mt-auto">
          <PortfolioProfilePicturePageTemplate />
        </div>
        <div className="md:w-[50%]">
          <div className="flex items-center justify-center">
            <div>
              <TypewriterEffectSmooth
                words={words}
                className="flex items-center justify-center"
              />
              <p className="text-4xl md:text-7xl text-[#DAC5A7] text-center">
                Software Engineer
              </p>
            </div>
          </div>

          <div className="mt-3 p-4 flex items-center flex-wrap justify-center gap-4">
            <button className="bg-[#DAC5A7] bg-opacity-10 border-2 border-[#DAC5A7] border-opacity-15 p-2 rounded-lg text-xs font-display text-[#DAC5A7] w-40">
              Book meeting
            </button>
            <button className="bg-[#DAC5A7] bg-opacity-10 border-2 border-[#DAC5A7] border-opacity-15 p-2 rounded-lg text-xs font-display text-[#DAC5A7] w-40">
              Download Resume
            </button>
          </div>
          <div>
            <p className="text-xs text-[#DAC5A7] text-opacity-60 text-center font-display">
              Premium web design, development, and SEO services to help your
              business stand out.
            </p>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default PortfolioProfileMainBodyPageTemplate;
