import React from "react";
import FooterTagPageComponent from "./components/footer.tag.component";
import FooterBodyPageComponent from "./components/footer-body.component";
import FooterCopyRightTagPageComponent from "./components/footer-copyright-tag.component";
import FooterProfileMenuOptionPageComponent from "./components/profile-menuOption.component";
import FooterPageMenuOptionPageComponent from "./components/page.menuOption.component";
import FooterMenuOptionPageComponent from "./components/menuOption.component";
import FooterOtherMenuOptionPageComponent from "./components/other-menuOption.component";

const PortfolioFooterPageTemplate = () => {
  return (
    <div className="w-full">
      <div>
        <FooterTagPageComponent number={25} />
      </div>

      <div>
        <FooterBodyPageComponent />
      </div>

      <div className="w-full p-4 md:p-16 flex flex-col items-center justify-center gap-1">
        <div className="w-full flex items-center justify-around flex-wrap gap-4">
          <div>
            <FooterProfileMenuOptionPageComponent />
          </div>
          <div>
            <FooterPageMenuOptionPageComponent />
          </div>
          <div>
            <FooterMenuOptionPageComponent />
          </div>
          <div>
            <FooterOtherMenuOptionPageComponent />
          </div>
        </div>
        <div className="w-full mt-3">
          <FooterCopyRightTagPageComponent />
        </div>
      </div>
    </div>
  );
};

export default PortfolioFooterPageTemplate;
