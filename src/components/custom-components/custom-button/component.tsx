import React from "react";
import { Button } from "../../ui/button-ui/ui";

type props = {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "destructive"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
  className?: string;
};

const CustomButton = ({ ...props }: props) => {
  return (
    <Button
      variant={props.variant}
      onClick={props.onClick}
      size={props.size}
      disabled={props.disabled}
      className={props.className}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
