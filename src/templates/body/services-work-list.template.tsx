import { workDataType } from "../../mock-data/services-data";
import { CustomLabel } from "../../components/custom-label/page.component";

type props = {
  data: Array<workDataType>;
};

const PortfolioServicesWorkListPageTemplate = ({ data }: props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <CustomLabel className="text-4xl font-display text-[#DAC5A7] text-opacity-60 font-normal border-b-8 border-[#DAC5A7] border-opacity-60 rounded-b-lg text-center">
          SERVICES & WORK
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
                  {service.type}
                </CustomLabel>
              </div>
              <div className="w-full mt-5">
                <CustomLabel className="text-4xl font-display text-[#DAC5A7] font-normal">
                  {service.title}
                </CustomLabel>
              </div>
              <div className="mt-10">
                <img src={service.urlImage} alt="" />
              </div>
              <div className="mt-10 flex items-center justify-center">
                <CustomLabel className="text-sm font-display text-[#DAC5A7] font-light text-center break-normal md:w-[50rem] ">
                  {service.description}
                </CustomLabel>
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DAC5A7] pb-5">
                  <CustomLabel className="text-[#DAC5A7] font-display text-sm">
                    Concept
                  </CustomLabel>
                  <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
                    {service.concept}
                  </CustomLabel>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DAC5A7] pb-5 mt-5">
                  <CustomLabel className="text-[#DAC5A7] font-display text-sm">
                    Design
                  </CustomLabel>
                  <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
                    {service.desgin}
                  </CustomLabel>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DAC5A7] pb-5 mt-5">
                  <CustomLabel className="text-[#DAC5A7] font-display text-sm">
                    Prototype
                  </CustomLabel>
                  <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
                    {service.protoType}
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

export default PortfolioServicesWorkListPageTemplate;
