import React from "react";
import { CustomLabel } from "../../components/custom-label/page.component";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../components/3d-card/3d-card";
import mac from "../../assets/images/mac.png";
import { blogType } from "../../mock-data/blogs-data";
import "../../css/scroll-container.css";

type props = {
  data: Array<blogType>;
};

const PortfolioBlogListPageTemplate = ({ data }: props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <CustomLabel className="text-4xl font-display text-[#DAC5A7] text-opacity-60 font-normal border-b-8 border-[#DAC5A7] border-opacity-60 rounded-b-lg text-center">
          Blogs
        </CustomLabel>
        <CustomLabel className="text-xs font-display text-[#DAC5A7] text-opacity-60 font-normal">
          Premium web design, development, and SEO services to help your
          business stand out.
        </CustomLabel>
      </div>

      <div className="w-full flex items-center justify-start p-4 gap-4">
        <CardContainer className="inter-var border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 rounded-xl p-4">
          <CardBody className="relative group/card border-none w-auto h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={mac}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl group-hover/card:shadow-[#242421]"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={"Link" as React.ElementType}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default PortfolioBlogListPageTemplate;
