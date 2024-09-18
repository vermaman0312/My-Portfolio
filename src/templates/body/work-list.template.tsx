import React from "react";
import { CustomLabel } from "../../components/custom-label/page.component";
import "../../css/global.css";

const PortfolioWorkListPageTemplate = () => {
  return (
    <div className="w-full p-4 flex flex-col items-center justify-center gap-4">
      <div>
        <CustomLabel className="text-4xl font-display text-[#DAC5A7] text-opacity-60 font-normal border-b-8 border-[#DAC5A7] border-opacity-60 rounded-b-lg">
          WORK
        </CustomLabel>
      </div>
      <div className="w-full flex items-center justify-around gap-4 flex-wrap">
        <div className="container">
          <div className="step step1">
            <div className="text">React JS</div>
            <div className="circ">
              <div className="half"></div>
              <div className="inner">A</div>
            </div>
          </div>
          <div className="step step2">
            <div className="text">Next JS</div>
            <div className="circ">
              <div className="half"></div>
              <div className="inner"></div>
            </div>
          </div>
          <div className="step step3">
            <div className="text">Typescript</div>
            <div className="circ">
              <div className="half"></div>
              <div className="inner"></div>
            </div>
          </div>
          <div className="step step4">
            <div className="text">NodeJS</div>
            <div className="circ">
              <div className="half"></div>
              <div className="inner"></div>
            </div>
          </div>
          <div className="step step5">
            <div className="text">Typescript</div>
            <div className="circ">
              <div className="half"></div>
              <div className="inner"></div>
            </div>
          </div>
          <div className="step step6">
            <div className="text">NodeJS</div>
            <div className="circ">
              <div className="half"></div>
              <div className="inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWorkListPageTemplate;
