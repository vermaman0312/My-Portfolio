import { HandPlatter, House, PersonStanding, ReceiptText } from "lucide-react";
import React from "react";

const FooterPageMenuOptionPageComponent = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-4">
      <div className="w-full">
        <p className="text-[#DAC5A7] font-display text-xl">Pages</p>
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <div className="flex items-center justify-center gap-4 cursor-pointer">
          <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
            <House className="text-[#DAC5A7] w-3 h-3" />
          </button>
          <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
            Home
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 cursor-pointer">
          <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
            <HandPlatter className="text-[#DAC5A7] w-3 h-3" />
          </button>
          <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
            Services
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 cursor-pointer">
          <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
            <PersonStanding className="text-[#DAC5A7] w-3 h-3" />
          </button>
          <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
            About
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 cursor-pointer">
          <button className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 p-2 rounded-full">
            <ReceiptText className="text-[#DAC5A7] w-3 h-3" />
          </button>
          <p className="text-[#DAC5A7] text-opacity-60 font-display uppercase text-xs font-light">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterPageMenuOptionPageComponent;
