import { MoveUpRight } from "lucide-react";
import { workDataType } from "../../mock-data/services-data";
import { CustomLabel } from "../../components/custom-label/page.component";
import mac from "../../assets/images/mac.png";

type props = {
  data: Array<workDataType>;
};

const PortfolioServicesListPageTemplate = ({ data }: props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <CustomLabel className="text-4xl font-display text-[#DAC5A7] text-opacity-60 font-normal border-b-8 border-[#DAC5A7] border-opacity-60 rounded-b-lg text-center">
          SERVICES
        </CustomLabel>
        <CustomLabel className="text-xs font-display text-[#DAC5A7] text-opacity-60 font-normal">
          Premium web design, development, and SEO services to help your
          business stand out.
        </CustomLabel>
      </div>
      <div className="mt-5 w-full flex items-center justify-center">
        <CustomLabel className="text-6xl md:text-6xl font-display text-[#DAC5A7] font-normal text-center w-[50%]">
          Web Design & Framer
        </CustomLabel>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-4 p-4">
        {data.map((service, index) => {
          return (
            <div className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 rounded-lg p-10 animate-slideUp select-none cursor-pointer">
              <div className="w-full">
                <CustomLabel className="text-sm font-display text-[#DAC5A7] font-light uppercase">
                  Frontend
                </CustomLabel>
              </div>
              <div className="w-full mt-5">
                <CustomLabel className="text-4xl font-display text-[#DAC5A7] font-normal">
                  Transforming Your Ideas into Reality
                </CustomLabel>
              </div>
              <div className="mt-10">
                <img src={service.urlImage} alt="" />
              </div>
              <div className="mt-10">
                <CustomLabel className="text-sm font-display text-[#DAC5A7] font-light text-center">
                  Visually stunning web designs that captivate your audience by
                  blending your brand voice and customer needs.
                </CustomLabel>
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DAC5A7] pb-5">
                  <CustomLabel className="text-[#DAC5A7] font-display text-sm">
                    Concept
                  </CustomLabel>
                  <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
                    I take time to understand your business needs and audience
                    to develop a unique concept for your website. I'll create
                    wireframes that serve as the foundation for your site's
                    design and functionality.
                  </CustomLabel>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DAC5A7] pb-5 mt-5">
                  <CustomLabel className="text-[#DAC5A7] font-display text-sm">
                    UX / Ui Design
                  </CustomLabel>
                  <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
                    I'll design a user-friendly interface that is visually
                    appealing and engages your target audience. Your website
                    will be created to meet your brand's needs and goals while
                    ensuring a seamless user experience.
                  </CustomLabel>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DAC5A7] pb-5 mt-5">
                  <CustomLabel className="text-[#DAC5A7] font-display text-sm">
                    Prototype
                  </CustomLabel>
                  <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
                    With an interactive prototype, you'll have the ability to
                    test your website's functionality before it goes live. This
                    will ensure that your website's design and user experience
                    are optimized for your audience's needs and preferences.
                  </CustomLabel>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioServicesListPageTemplate;
