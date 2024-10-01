import React from "react";
import "../../../css/about-education.style.css";

const PortfolioAboutEducationPageComponent = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="c-timeline">
          <div className="c-timeline__item">
            <div className="c-timeline__content">
              <h3 className="c-timeline__title text-[#DAC5A7] text-xl font-display font-normal">
                Bachelor of Technology in Computer Engineering
              </h3>
              <p className="c-timeline__desc text-[#DAC5A7] text-xs font-display font-normal">
                R.K University - Rajkot-36002, Gujarat, India
              </p>
              <p className="c-timeline__desc text-[#DAC5A7] text-xs font-display font-normal mt-3">
                8.86 CGPA
              </p>
            </div>
            <time className="text-[#DAC5A7] text-sm font-display">
              2020 to 2024
            </time>
          </div>
          <div className="c-timeline__item">
            <div className="c-timeline__content">
              <h3 className="c-timeline__title text-[#DAC5A7] text-xl font-display font-normal">
                12th - Science
              </h3>
              <p className="c-timeline__desc text-[#DAC5A7] text-xs font-display font-normal">
                R.B.P Intermediate College - Bairgania-843313, Bihar, India
              </p>
              <p className="c-timeline__desc text-[#DAC5A7] text-xs font-display font-normal mt-3">
                66%
              </p>
            </div>
            <time className="text-[#DAC5A7] text-sm font-display">
              2014 to 2016
            </time>
          </div>
          <div className="c-timeline__item">
            <div className="c-timeline__content">
              <h3 className="c-timeline__title text-[#DAC5A7] text-xl font-display font-normal">
                10th - Schooling
              </h3>
              <p className="c-timeline__desc text-[#DAC5A7] text-xs font-display font-normal">
                Shree Juddha Higher Secondary School - Gaur-44500, Rautahat,
                Nepal
              </p>
              <p className="c-timeline__desc text-[#DAC5A7] text-xs font-display font-normal mt-3">
                62.50%
              </p>
            </div>
            <time className="text-[#DAC5A7] text-sm font-display">
              2004 to 2014
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAboutEducationPageComponent;
