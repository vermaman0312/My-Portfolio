import React from "react";

type props = {
  number: number;
};

const FooterTagPageComponent = ({ number }: props) => {
  return (
    <div className="p-2 bg-[#DAC5A7] bg-opacity-10 border-t border-b border-[#DAC5A7] border-opacity-15 flex items-center justify-start gap-4 overflow-hidden select-none">
      {Array.from({ length: number }, (_, index) => (
        <div key={index} className="flex items-center justify-start gap-4">
          <p className="text-xs font-light font-display text-[#DAC5A7] uppercase text-nowrap">
            +++
          </p>
          <p className="text-xs font-light font-display text-[#DAC5A7] uppercase text-nowrap">
            Let's Talk
          </p>
        </div>
      ))}
    </div>
  );
};

export default FooterTagPageComponent;
