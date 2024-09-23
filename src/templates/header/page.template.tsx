import { CustomLabel } from "../../components/custom-label/page.component";
import { CustomButtonVariantOne } from "../../components/custom-button/page.component";

type props = {
  title?: string;
  onClick?: (value: string) => void;
};

const PortfolioHeaderPageTemplate = ({ title, onClick }: props) => {
  return (
    <div className="w-full flex items-center justify-center pt-6 pl-6 pr-6">
      <div className="p-3 border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 flex flex-wrap items-center justify-center rounded-lg gap-6">
        <div className="flex items-center justify-center">
          <p className="text-lg text-[#DAC5A7] font-display">{title}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <CustomLabel
            onClick={() => onClick && onClick("servicesWork")}
            className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
          >
            Services & Work
          </CustomLabel>
          <CustomLabel
            onClick={() => onClick && onClick("technology")}
            className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
          >
            Technologies
          </CustomLabel>
          <CustomLabel
            onClick={() => onClick && onClick("certification")}
            className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
          >
            Certifications
          </CustomLabel>
          <CustomLabel
            onClick={() => onClick && onClick("project")}
            className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
          >
            Projects
          </CustomLabel>
          <CustomLabel
            onClick={() => onClick && onClick("about")}
            className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
          >
            About
          </CustomLabel>
          <CustomLabel
            onClick={() => onClick && onClick("contact")}
            className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
          >
            Contact
          </CustomLabel>
        </div>

        <div>
          <CustomButtonVariantOne
            onClick={() => alert("lets talk")}
            className="bg-[#DAC5A7] p-2 rounded-lg text-xs font-normal font-display w-32"
          >
            LET'S TALK
          </CustomButtonVariantOne>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeaderPageTemplate;
