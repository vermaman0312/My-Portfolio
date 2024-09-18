import { MoveUpRight } from "lucide-react";
import React from "react";
import { workDataType } from "../../mock-data/work-data";

type props = {
  data: Array<workDataType>;
};

const PortfolioWorkListPageTemplate = ({ data }: props) => {
  return (
    <div className="w-full p-4 flex flex-wrap items-center justify-center gap-4">
      {data.map((work, index) => {
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
                Visually stunning web designs that captivate your audience by
                blending your brand voice and customer needs.
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
  );
};

export default PortfolioWorkListPageTemplate;
