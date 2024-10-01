import { TUserServicesWorkType } from "../../types/portfolio.type";
import { CustomLabel } from "../../components/custom-components/custom-label/component";
import { TracingBeam } from "../../components/ui/tracing-beam/ui";
import { imageMap } from "../../portfolio/all-images";

type props = {
  data: Array<TUserServicesWorkType>;
};

const PortfolioServicesWorkSectionPageTemplate = ({ ...props }: props) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {props.data.map((item, index) => (
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            <div key={`content-${index}`} className="mb-10">
              <CustomLabel className="bg-[#DAC5A7] bg-opacity-10 text-[#DAC5A7] text-opacity-60 rounded-full text-xs font-display w-fit px-4 py-1 mb-4">
                {item.type}
              </CustomLabel>
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  {item.icons?.map((img, index) => {
                    return (
                      <img
                        key={index}
                        src={imageMap[img as keyof typeof imageMap]}
                        alt=""
                        className="w-6 h-6 object-fit"
                      />
                    );
                  })}
                </div>
                <CustomLabel className="text-xl font-display text-[#DAC5A7]">
                  {item.title}
                </CustomLabel>
              </div>
              <div className="border-2 border-[#DAC5A7] border-opacity-20 bg-[#DAC5A7] bg-opacity-10 p-4 rounded-xl mt-5">
                <p className="text-xs text-[#DAC5A7] text-opacity-60 font-display mb-4">
                  {item.description}
                </p>

                <div className="flex items-start gap-2 justify-start border-b-2 border-[#DAC5A7] border-opacity-20">
                  <CustomLabel className="text-xs text-[#DAC5A7] text-opacity-80 font-display font-bold mb-4">
                    Concept:
                  </CustomLabel>
                  <CustomLabel className="text-xs text-[#DAC5A7] text-opacity-60 font-display mb-4">
                    {item.concept}
                  </CustomLabel>
                </div>
                <div className="flex items-start gap-2 justify-start border-b-2 border-[#DAC5A7] border-opacity-20 mt-5">
                  <CustomLabel className="text-xs text-[#DAC5A7] text-opacity-80 font-display font-bold mb-4">
                    Design:
                  </CustomLabel>
                  <CustomLabel className="text-xs text-[#DAC5A7] text-opacity-60 font-display mb-4">
                    {item.design}
                  </CustomLabel>
                </div>
                <div className="flex items-start gap-2 justify-start border-b-2 border-[#DAC5A7] border-opacity-20 mt-5">
                  <CustomLabel className="text-xs text-[#DAC5A7] text-opacity-80 font-display font-bold mb-4">
                    ProtoType:
                  </CustomLabel>
                  <CustomLabel className="text-xs text-[#DAC5A7] text-opacity-60 font-display mb-4">
                    {item.protoType}
                  </CustomLabel>
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
      ))}
    </div>
  );
};

export default PortfolioServicesWorkSectionPageTemplate;
