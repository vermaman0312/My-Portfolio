import { ChevronDown } from "lucide-react";
import React from "react";

const CustomNavBarComponent = () => {
  return (
    <div className="absolute left-0 top-0 w-full flex items-center justify-center p-6">
      <div className="p-3 border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 flex flex-wrap items-center justify-center rounded-lg gap-6">
        <div className="flex items-center justify-center">
          <p className="text-xl text-[#DAC5A7] font-display">aman.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <p className="text-sm text-[#DAC5A7] font-normal font-display">
            SERVICES
          </p>
          <p className="text-sm text-[#DAC5A7] font-normal font-display">
            WORK
          </p>
          <p className="text-sm text-[#DAC5A7] font-normal font-display">
            ABOUT
          </p>
          <p className="text-sm text-[#DAC5A7] font-normal font-display">
            BLOG
          </p>
          <p className="text-sm text-[#DAC5A7] font-normal font-display flex items-center gap-1">
            <span>Page</span>{" "}
            <span>
              <ChevronDown className="w-5 h-5" />
            </span>
          </p>
        </div>

        <div>
          <button className="bg-[#DAC5A7] p-4 rounded-lg text-xs font-normal font-display">
            LET'S TALK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomNavBarComponent;
