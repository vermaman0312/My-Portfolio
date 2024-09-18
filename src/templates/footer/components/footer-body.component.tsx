import { Loader, MoveUpRight } from "lucide-react";
import React from "react";

type props = {
  title?: string;
  headingTitle?: string;
  description?: string;
  onClick?: () => void;
  isLoading?: boolean;
};

const FooterBodyPageComponent = ({
  title,
  headingTitle,
  description,
  onClick,
  isLoading,
}: props) => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-4 md:p-52 p-4">
      <p className="text-xs font-display text-[#DAC5A7] uppercase font-light text-center">
        {title}
      </p>
      <p className="text-4xl md:text-8xl font-display text-[#DAC5A7] font-light text-center">
        {headingTitle}
      </p>
      <p className="text-xs font-display text-[#DAC5A7] uppercase font-light text-center">
        {description}
      </p>
      <button
        onClick={onClick}
        className="bg-[#DAC5A7] p-2 w-40 h-12 flex items-center justify-center gap-2 rounded-lg font-display"
      >
        <p>Get in touch</p>
        {isLoading ? (
          <Loader className="w-5 h-5 animate-spin" />
        ) : (
          <MoveUpRight className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default FooterBodyPageComponent;
