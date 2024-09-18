import { MoveUp } from "lucide-react";
import React from "react";

const FooterCopyRightTagPageComponent = () => {
  return (
    <div className="w-full border-t-2 pt-2 border-[#DAC5A7] border-opacity-60 flex items-center justify-center md:justify-between flex-wrap gap-4">
      <div>
        <p className="text-[#DAC5A7] text-opacity-60 text-xs font-display">
          © 2024 Made by Aman Verma. Powered by Framer..
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-[#DAC5A7] font-display font-extralight text-nowrap">
          To Top
        </p>
        <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
          <MoveUp className="w-5 h-5 text-[#DAC5A7]" />
        </button>
      </div>
    </div>
  );
};

export default FooterCopyRightTagPageComponent;
