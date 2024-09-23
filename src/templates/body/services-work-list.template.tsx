import { workDataType } from "../../mock-data/services-data";
import { CustomLabel } from "../../components/custom-label/page.component";
import { InfiniteMovingCards } from "../../components/infinite-moving-cards/infinite-moving-cards";

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
      <div className="w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mt-5">
        <InfiniteMovingCards items={data} direction="right" speed="slow" />
      </div>
    </div>
  );
};

export default PortfolioServicesWorkListPageTemplate;
