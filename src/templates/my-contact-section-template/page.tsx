import React from "react";
import FooterTagPageComponent from "./components/contact.tag.component";
import PortfolioContactMainBodyPageComponent from "./components/contact-main-body.component";

const PortfolioMyContactSectionPageTemplate = () => {
  return (
    <div className="w-full">
      <div>
        <FooterTagPageComponent number={25} />
      </div>
      <div>
        <PortfolioContactMainBodyPageComponent
          title="Project in mind?"
          headingTitle="Let's get in touch"
          description="Premium web design, webflow, and SEO services to help your business
        stand out."
        />
      </div>
    </div>
  );
};

export default PortfolioMyContactSectionPageTemplate;
