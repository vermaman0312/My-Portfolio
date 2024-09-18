import { CustomLabel } from "../../components/custom-label/page.component";
import redux_logo from "../../assets/images/redux_logo.png";
import { Edit, Trash } from "lucide-react";
import "../../css/global.css";

const PortfolioProfilePicturePageTemplate = () => {
  const components = [Edit, Trash, Edit, Trash, Edit, Trash, Edit, Trash, Edit];
  const radius = 45;
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          borderColor: "#DAC5A7",
          animation: "spinBorder 200s linear infinite",
          transform: "skew(45deg)",
        }}
      >
        <div className="absolute inset-0 rounded-full -z-10">
          {components.map((Component, index) => {
            const angle = index * (360 / components.length) * (Math.PI / 180);
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Component className="w-6 h-6 text-white" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="-mt-28 ml-5 z-50">
        {/* <CustomLabel className="text-white">Aman</CustomLabel> */}
        <img src={redux_logo} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default PortfolioProfilePicturePageTemplate;
