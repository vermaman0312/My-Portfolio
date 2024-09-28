import React from "react";
import "./components/style.css";
import { Link } from "react-router-dom";
import { TUserServicesWorkType } from "../../types/portfolio.type";

type props = {
  data: Array<TUserServicesWorkType>;
};

const PortfolioServicesWorkSectionPageTemplate = ({ ...props }: props) => {
  return (
    <div className="w-full h-full">
      <div className="void w-full" id="void">
        <div className="crop text-white">
          <ul id="card-list">
            {props.data.map((item, index) => {
              return (
                <li>
                  <div className="card border-2 border-[#DAC5A7] border-opacity-60 bg-[#DAC5A7] bg-opacity-5">
                    <Link to="#">
                      <span className="model-name">{item.type}</span>
                      <span>
                        Model for generating highly dimensional, mostly numeric,
                        tabular data
                      </span>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="last-circle"></div>
          <div className="second-circle"></div>
        </div>
        <div className="mask"></div>
        <div className="center-circle"></div>
      </div>
    </div>
  );
};

export default PortfolioServicesWorkSectionPageTemplate;
