import React, { useState } from "react";
import { CustomLabel } from "../../components/custom-label/page.component";
import { HoverEffect } from "../../components/card-hover-effect/card-hover-effect";
import { certificationType } from "../../mock-data/certification_list";
import { ChevronsDown } from "lucide-react";

type props = {
  data: Array<certificationType>;
};

const PortofolioCertificationListPageTemplate = ({ ...props }: props) => {
  const [isViewMore, setIsViewMore] = useState<boolean>(false);
  const list = isViewMore ? props.data : props.data.slice(0, 3);
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
        <HoverEffect items={list} />
      </div>
      <div>
        <button
          onClick={() => setIsViewMore((prev) => !prev)}
          className="text-[#DAC5A7] text-xs font-display p-2 border-2 border-[#DAC5A7] border-opacity-60 rounded-lg flex items-center justify-center gap-2"
        >
          <span>View More</span>
          <span>
            <ChevronsDown className="w-4 h-4 hover:animate-bounce" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PortofolioCertificationListPageTemplate;
