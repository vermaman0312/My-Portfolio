import React from "react";
import "./components/style.css";
import { Link } from "react-router-dom";

const PortfolioServicesWorkSectionPageTemplate = () => {
  return (
    <div className="w-full h-full">
      <div className="void border w-full" id="void">
        <div className="crop text-white">
          <ul id="card-list">
            <li>
              <div className="card">
                <Link to="#">
                  <span className="model-name">Gretel-ACTGAN</span>
                  <span>
                    Model for generating highly dimensional, mostly numeric,
                    tabular data
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className="card">
                <Link to="#">
                  <span className="model-name">Gretel-ACTGAN</span>
                  <span>
                    Model for generating highly dimensional, mostly numeric,
                    tabular data
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className="card">
                <Link to="#">
                  <span className="model-name">Gretel-ACTGAN</span>
                  <span>
                    Model for generating highly dimensional, mostly numeric,
                    tabular data
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className="card">
                <Link to="#">
                  <span className="model-name">Gretel-ACTGAN</span>
                  <span>
                    Model for generating highly dimensional, mostly numeric,
                    tabular data
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className="card">
                <Link to="#">
                  <span className="model-name">Gretel-ACTGAN</span>
                  <span>
                    Model for generating highly dimensional, mostly numeric,
                    tabular data
                  </span>
                </Link>
              </div>
            </li>
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
