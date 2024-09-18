import React from "react";
import { CustomLabel } from "../custom-label/page.component";
import { X } from "lucide-react";
import "../../css/scroll-container.css"

type props = {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  width?: string;
  height?: string;
  background?: string;
  title?: string;
};

export const CustomDialogBox = ({
  children,
  isOpen,
  onClose,
  width,
  height,
  background,
  title,
}: props) => {
  return isOpen ? (
    <div className="w-screen h-[100vh] bg-gray-700 bg-opacity-60 absolute left-0 top-0 flex flex-col items-center justify-center p-4 scroll-container">
      <div
        className={` ${background ? background : "bg-[#DAC5A7]"} ${
          width && width
        } ${
          height && height
        } rounded-xl animate-slideUp p-4 flex flex-col items-center justify-start`}
      >
        {(title || onClose) && (
          <div className="w-full flex items-center justify-between gap-8">
            <CustomLabel className="text-3xl font-bold font-display">
              {title}
            </CustomLabel>
            {onClose && (
              <X onClick={onClose} className="cursor-pointer text-red-700" />
            )}
          </div>
        )}
        {children && <div className="w-full mt-3">{children}</div>}
      </div>
    </div>
  ) : null;
};
