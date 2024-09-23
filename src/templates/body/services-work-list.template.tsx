import { workDataType } from "../../mock-data/services-data";
import { CustomLabel } from "../../components/custom-label/page.component";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/embla-carousel-react/embla-carousel-react";
import react_logo from "../../assets/images/react_logo.png";

type props = {
  data: Array<workDataType>;
};

const PortfolioServicesWorkListPageTemplate = ({ ...props }: props) => {
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
      <div className="mt-10 w-full flex items-center justify-center">
        <CustomLabel className="text-6xl md:text-6xl font-display text-[#DAC5A7] font-normal text-center w-[50%]">
          Software Design & Framer
        </CustomLabel>
      </div>
      <div className="w-full flex items-center justify-center select-none">
        <Carousel className="mt-10 w-[70%]">
          <CarouselContent className="flex gap-4">
            {props.data.map((item, index) => {
              return (
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 w-96 text-white flex flex-col items-center justify-start border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 rounded-lg p-10">
                  <div className="w-full flex flex-wrap items-center justify-between">
                    <CustomLabel className="text-xs font-display text-[#DAC5A7] font-light uppercase">
                      {item.type}
                    </CustomLabel>
                    <div className="flex">
                      <img src={react_logo} alt="" className="w-12 h-12" />
                      <img src={react_logo} alt="" className="w-12 h-12" />
                      <img src={react_logo} alt="" className="w-12 h-12" />
                    </div>
                  </div>
                  <div className="w-full mt-5">
                    <CustomLabel className="text-2xl font-display text-[#DAC5A7] font-normal">
                      {item.title}
                    </CustomLabel>
                  </div>
                  <div className="flex items-center justify-start word-break">
                    <CustomLabel className="text-xs font-display text-[#DAC5A7] font-light text-start word-break">
                      {item.description}
                    </CustomLabel>
                  </div>
                  <div className="mt-5 w-full">
                    <div className="flex flex-col items-start justify-start gap-2 border-b border-[#DAC5A7] pb-5">
                      <CustomLabel className="text-[#DAC5A7] font-display text-xs">
                        Concept
                      </CustomLabel>
                      <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
                        {item.concept}
                      </CustomLabel>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2 border-b border-[#DAC5A7] pb-5 mt-5">
                      <CustomLabel className="text-[#DAC5A7] font-display text-xs">
                        Design
                      </CustomLabel>
                      <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
                        {item.desgin}
                      </CustomLabel>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2 border-b border-[#DAC5A7] pb-5 mt-5">
                      <CustomLabel className="text-[#DAC5A7] font-display text-xs">
                        Prototype
                      </CustomLabel>
                      <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
                        {item.protoType}
                      </CustomLabel>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="text-[#DAC5A7] text-opacity-50 border-2 border-[#DAC5A7] border-opacity-15" />
          <CarouselNext className="text-[#DAC5A7] text-opacity-50 border-2 border-[#DAC5A7] border-opacity-15" />
        </Carousel>
      </div>
    </div>
  );
};

export default PortfolioServicesWorkListPageTemplate;
