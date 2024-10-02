import React, { useEffect } from "react";
import { CustomLabel } from "../../custom-components/custom-label/component";

type props = {
  title?: string;
  description?: string;
  display?: boolean;
  setDisplay?: (display: boolean) => void;
};

const CustomToast = ({ ...props }: props) => {
  useEffect(() => {
    if (props.display) {
      setTimeout(() => {
        props.setDisplay?.(false);
      }, 3000);
    }
  }, [props]);

  return props.display ? (
    <div className="max-w-96 absolute bottom-10 right-10 flex flex-col justify-start items-start z-50 p-4 border-2 border-[#DAC5A7] border-opacity-20 bg-[#DAC5A7] rounded-lg shadow-lg shadow-[#DAC5A7]/50">
      <CustomLabel className="text-sm font-display font-bold text-gray-700">
        {props.title}
      </CustomLabel>
      <CustomLabel className="text-xs font-display font-light text-gray-700 break-words">
        {props.description}
      </CustomLabel>
    </div>
  ) : null;
};

export default CustomToast;
