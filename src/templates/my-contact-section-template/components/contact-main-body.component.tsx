import { useState } from "react";

type props = {
  title?: string;
  headingTitle?: string;
  description?: string;
};

const PortfolioContactMainBodyPageComponent = ({ ...props }: props) => {
  const [buttonText, setButtonText] = useState<string>("Get in touch");

  const handleClick = () => {
    navigator.clipboard
      .writeText("verma.kittu500@gmail.com")
      .then(() => {
        setButtonText("Email Copied");
        setTimeout(() => {
          setButtonText("Get in touch");
        }, 2000);
        window.location.href = `mailto:${"verma.kittu500@gmail.com"}`;
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="w-full flex items-center justify-center flex-col gap-4 md:p-16 p-4">
      <p className="text-xs font-display text-[#DAC5A7] uppercase font-light text-center">
        {props.title}
      </p>
      <p className="text-4xl md:text-8xl font-display text-[#DAC5A7] font-light text-center">
        {props.headingTitle}
      </p>
      <p className="text-xs font-display text-[#DAC5A7] uppercase font-light text-center">
        {props.description}
      </p>
      <button
        onClick={handleClick}
        className="bg-[#DAC5A7] p-2 w-40 h-12 flex items-center justify-center gap-2 rounded-lg font-display"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PortfolioContactMainBodyPageComponent;
