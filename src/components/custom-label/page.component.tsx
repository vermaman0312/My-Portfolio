import React from "react";

type props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: Record<string, string>;
};

export const CustomLabel = ({ children, onClick, className, style }: props) => {
  return (
    <p onClick={onClick} className={className} style={style}>
      {children}
    </p>
  );
};
