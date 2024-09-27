import React from "react";

type props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: Record<string, string>;
};

export const CustomLabel = ({ ...props }: props) => {
  return (
    <p onClick={props.onClick} className={props.className} style={props.style}>
      {props.children}
    </p>
  );
};
