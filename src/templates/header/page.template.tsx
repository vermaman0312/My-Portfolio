import { CustomLabel } from "../../components/custom-label/page.component";
import { ChevronDown } from "lucide-react";
import { CustomButtonVariantOne } from "../../components/custom-button/page.component";

type props = {
  title?: string;
  onClickService?: (value: string) => void;
  onClickWork?: (value: string) => void;
  onClickAbout?: (value: string) => void;
  onClickBlog?: (value: string) => void;
};

const PortfolioHeaderPageTemplate = ({
  title,
  onClickService,
  onClickWork,
  onClickAbout,
  onClickBlog,
}: props) => {
  return (
    <div className="w-full flex items-center justify-center pt-6 pl-6 pr-6">
      <div className="p-3 border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 flex flex-wrap items-center justify-center rounded-lg gap-6">
        <div className="flex items-center justify-center">
          <p className="text-lg text-[#DAC5A7] font-display">{title}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <CustomLabel
            onClick={() => onClickService && onClickService("services")}
            className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
          >
            Services
          </CustomLabel>
          <CustomLabel
            onClick={() => onClickWork && onClickWork("work")}
            className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
          >
            Work
          </CustomLabel>
          <CustomLabel
            onClick={() => onClickAbout && onClickAbout("about")}
            className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
          >
            About
          </CustomLabel>
          <CustomLabel
            onClick={() => onClickBlog && onClickBlog("blog")}
            className="text-sm text-[#DAC5A7] font-normal font-display cursor-pointer select-none uppercase"
          >
            Blog
          </CustomLabel>
        </div>

        <div>
          <CustomButtonVariantOne
            onClick={() => alert("lets talk")}
            className="bg-[#DAC5A7] p-2 rounded-lg text-xs font-normal font-display"
          >
            LET'S TALK
          </CustomButtonVariantOne>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeaderPageTemplate;
