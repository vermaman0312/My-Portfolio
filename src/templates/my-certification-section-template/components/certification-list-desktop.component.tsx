import { TUserCertificationsType } from "../../../types/portfolio.type";
import { AnimatedTestimonials } from "../../../components/ui/animated-testimonials/ui";

type props = {
  data: Array<TUserCertificationsType>;
};

const PortfolioCertificationDesktopViewPageComponent = ({
  ...props
}: props) => {
  return (
    <div className="w-full h-full z-10">
      <AnimatedTestimonials testimonials={props.data} />
    </div>
  );
};

export default PortfolioCertificationDesktopViewPageComponent;
