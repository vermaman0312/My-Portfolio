import React from "react";

type props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const CustomLabel = ({ children, onClick, className }: props) => {
  return (
    <p onClick={onClick} className={className}>
      {children}
    </p>
  );
};
