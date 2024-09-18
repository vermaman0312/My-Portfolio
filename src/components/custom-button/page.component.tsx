import React from "react";

type props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const CustomButtonVariantOne = ({
  children,
  className,
  onClick,
}: props) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
