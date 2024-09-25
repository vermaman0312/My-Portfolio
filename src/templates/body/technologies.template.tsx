import React, { useState } from "react";
import { CustomLabel } from "../../components/custom-label/page.component";
import { technologyType } from "../../mock-data/technologies.llist";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../components/3d-card/3d-card";
import { Link } from "react-router-dom";
import { CustomButtonVariantOne } from "../../components/custom-button/page.component";
import { ArrowRight } from "lucide-react";

type props = {
  data: Array<technologyType>;
};

const PortfolioTechnologyPageTemplate = ({ data }: props) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // Determine the number of items to display
  const displayedData = showAll ? data : data.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4">
        <CustomLabel className="text-4xl font-display text-[#DAC5A7] text-opacity-60 font-normal border-b-8 border-[#DAC5A7] border-opacity-60 rounded-b-lg text-center">
          My Technologies
        </CustomLabel>
        <CustomLabel className="text-xs font-display text-[#DAC5A7] text-opacity-60 font-normal text-center">
          Premium web design, development, and SEO services to help your
          business stand out.
        </CustomLabel>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center p-4 gap-4 mt-10">
        {displayedData.map((technology, index) => {
          return (
            <div>
              <CardContainer className="inter-var h-[40rem] border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 rounded-xl p-4">
                <CardBody className="relative group/card border-none w-auto h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="40"
                    className="text-4xl font-semibold text-[#DAC5A7] font-display text-opacity-60 dark:text-white"
                  >
                    {technology.technologyName}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="70"
                    className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light max-w-sm mt-2"
                  >
                    {technology.technologyDescription}
                  </CardItem>
                  <CardItem
                    translateZ="120"
                    className="w-full h-48 mt-4 flex items-center justify-center"
                  >
                    <img
                      src={technology.technologyImage}
                      className={`${
                        technology.technologyName.toLowerCase() === "node js" &&
                        "w-64"
                      } h-full object-fit rounded-xl group-hover/card:shadow-xl`}
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="80"
                    className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light max-w-sm mt-2"
                  >
                    {technology.technologyContent}
                  </CardItem>
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={120}
                      as="p"
                      href={technology.technologyLink}
                      target="__blank"
                      className="rounded-xl text-xs font-display font-normal bg-[#DAC5A7] p-4 cursor-pointer"
                    >
                      <Link to={technology.technologyLink} target="_">
                        Go to official page
                      </Link>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          );
        })}
      </div>

      <div className="w-full flex items-center justify-center">
        <CustomButtonVariantOne
          onClick={toggleShowAll}
          className="border-2 text-[#DAC5A7] text-opacity-60 border-[#DAC5A7] border-opacity-60 p-2 text-xs font-display rounded-lg flex items-center justify-center gap-2"
        >
          <span>{showAll ? "Hide Technologies" : "More Technologies"}</span>
          <span>
            <ArrowRight className="w-5 h-5" />
          </span>
        </CustomButtonVariantOne>
      </div>
    </div>
  );
};

export default PortfolioTechnologyPageTemplate;
