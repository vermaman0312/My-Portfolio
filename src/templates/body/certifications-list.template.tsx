import React from "react";
import { CustomLabel } from "../../components/custom-label/page.component";
import { HoverEffect } from "../../components/card-hover-effect/card-hover-effect";
import { certificationType } from "../../mock-data/certification_list";

type props = {
  data: Array<certificationType>;
};

const PortofolioCertificationListPageTemplate = ({ ...props }: props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <CustomLabel className="text-4xl font-display text-[#DAC5A7] text-opacity-60 font-normal border-b-8 border-[#DAC5A7] border-opacity-60 rounded-b-lg text-center">
          My Certifications
        </CustomLabel>
        <CustomLabel className="text-xs font-display text-[#DAC5A7] text-opacity-60 font-normal">
          Premium web design, development, and SEO services to help your
          business stand out.
        </CustomLabel>
      </div>

      <div>
        <HoverEffect items={props.data} />
      </div>
    </div>
  );
};

export default PortofolioCertificationListPageTemplate;
