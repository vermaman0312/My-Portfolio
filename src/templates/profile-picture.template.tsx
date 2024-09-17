import React from "react";
import redux_logo from "../assets/images/redux_logo.png";

const PortfolioProfilePicturePageTemplate = () => {
  return (
    <div
      className="w-64 h-64 border-8 border-dashed flex items-center justify-center p-2 text-white rounded-full"
      style={{
        transform: "rotateX(45deg)",
        backfaceVisibility: "hidden",
        perspective: "1000px",
      }}
    >
      <img
        src={redux_logo}
        alt=""
        style={{
          width: "500px",
          height: "500px",
          position: "relative",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default PortfolioProfilePicturePageTemplate;
