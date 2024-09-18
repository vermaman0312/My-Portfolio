import { MoveUpRight } from "lucide-react";
import React from "react";

const FooterBodyPageComponent = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-4 md:p-52 p-4">
      <p className="text-xs font-display text-[#DAC5A7] uppercase font-light text-center">
        Project in mind?
      </p>
      <p className="text-4xl md:text-8xl font-display text-[#DAC5A7] font-light text-center">
        Let's make website shine
      </p>
      <p className="text-xs font-display text-[#DAC5A7] uppercase font-light text-center">
        Premium web design, webflow, and SEO services to help your business
        stand out.
      </p>
      <button className="bg-[#DAC5A7] p-2 w-40 h-12 flex items-center justify-center gap-2 rounded-lg font-display">
        <p>Get in touch</p>
        <MoveUpRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default FooterBodyPageComponent;
