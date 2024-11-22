import "../../css/card-animation.style.css";
import { TUserCertificationsType } from "../../types/portfolio.type";
import PortfolioCertificationDesktopViewPageComponent from "./components/certification-list-desktop.component";
import PortfolioCertificationListMobilePageComponent from "./components/certification-list-mobile-component";

type props = {
  data: Array<TUserCertificationsType>;
};

const PortfolioMyCertificationSectionPageTemplate = ({ ...props }: props) => {
  return (
    <div className="w-full h-full">
      <div className="hidden md:block">
        <PortfolioCertificationDesktopViewPageComponent data={props.data} />
      </div>
      <div className="md:hidden w-full flex flex-col items-center justify-center mt-5">
        <div className="mt-16">
          <PortfolioCertificationListMobilePageComponent data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioMyCertificationSectionPageTemplate;
