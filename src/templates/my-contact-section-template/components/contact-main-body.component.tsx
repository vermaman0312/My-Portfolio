import { MoveUpRight } from "lucide-react";
import React from "react";

type props = {
  title?: string;
  headingTitle?: string;
  description?: string;
};

const PortfolioContactMainBodyPageComponent = ({ ...props }: props) => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-4 md:p-52 p-4">
      <p className="text-xs font-display text-[#DAC5A7] uppercase font-light text-center">
        {props.title}
      </p>
      <p className="text-4xl md:text-8xl font-display text-[#DAC5A7] font-light text-center">
        {props.headingTitle}
      </p>
      <p className="text-xs font-display text-[#DAC5A7] uppercase font-light text-center">
        {props.description}
      </p>
      <button className="bg-[#DAC5A7] p-2 w-40 h-12 flex items-center justify-center gap-2 rounded-lg font-display">
        <span>Get in touch</span>
        <span>
          <MoveUpRight className="w-5 h-5 text-black" />
        </span>
      </button>
    </div>
  );
};

export default PortfolioContactMainBodyPageComponent;
