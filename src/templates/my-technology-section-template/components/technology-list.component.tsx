import React from "react";
import { TUserSkillsType } from "../../../types/portfolio.type";
import { CustomLabel } from "../../../components/custom-components/custom-label/component";
import "../../../css/card-animation.style.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip/ui";
import { Button } from "../../../components/ui/button-ui/ui";
import { imageMap } from "../../../portfolio/all-images";

type props = {
  data: Array<TUserSkillsType>;
};

const PortfolioTechnologyListPageComponent = ({ ...props }: props) => {
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center gap-8">
      {props.data.map((item, index) => {
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="border-2 border-[#DAC5A7] border-opacity-60 text-[#DAC5A7] text-opacity-60 font-display text-xs rounded-xl p-4 flex items-center justify-center gap-2"
                >
                  <span>
                    <img
                      src={imageMap[item.skillLogo as keyof typeof imageMap]}
                      alt={item.skillName as string}
                      className="w-6 h-6 object-cover"
                    />
                  </span>
                  <span>{item.skillName}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-[#252424] border-2 border-[#DAC5A7] border-opacity-10 text-[#000] text-opacity-60 font-display text-xs z-50 w-96 flex flex-col items-center justify-center gap-2">
                <div className="w-full flex items-center justify-between gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src={imageMap[item.skillLogo as keyof typeof imageMap]}
                      alt={item.skillName as string}
                      className="w-6 h-6 object-cover"
                    />
                    <CustomLabel className="text-xl font-display font-semibold text-[#DAC5A7] text-opacity-60">
                      {item.skillName}
                    </CustomLabel>
                  </div>
                  <div>
                    <CustomLabel className="text-xs font-display font-normal text-[#DAC5A7] text-opacity-60">
                      {item.skillLevel}
                    </CustomLabel>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-2 pl-8">
                  <CustomLabel className="text-xs font-display font-light text-[#DAC5A7] text-opacity-60">
                    {item.skillShortDescription}
                  </CustomLabel>
                </div>
                <div className="w-full flex items-center justify-start gap-2 pl-8">
                  <CustomLabel className="text-xs font-display font-light text-[#DAC5A7] text-opacity-60">
                    {item.skillLongDescription}
                  </CustomLabel>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default PortfolioTechnologyListPageComponent;
