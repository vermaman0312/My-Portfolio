import React from "react";

type props = {
  type: "text" | "email" | "password" | "number" | "textarea";
  title: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const CustomInputField = ({ ...props }: props) => {
  return <div className="w-full"></div>;
};

export default CustomInputField;
