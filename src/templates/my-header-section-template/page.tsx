import CustomButton from "../../components/custom-components/custom-button/component";
import PortfolioMyHeaderSectionMenusPageComponent from "./components/menus-component";

type props = {
  title: string;
  onClick: (value: string) => void;
};

const PortfolioMyHeaderSectionPageTemplate = ({ ...props }: props) => {
  return (
    <div className="p-3 border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 flex flex-wrap items-center justify-center rounded-lg gap-6">
      <div className="flex items-center justify-center">
        <p className="text-lg text-[#DAC5A7] font-display">{props.title}</p>
      </div>

      <div>
        <PortfolioMyHeaderSectionMenusPageComponent
          onClick={(value) => props.onClick(value)}
        />
      </div>

      <div>
        <CustomButton
          onClick={() => alert("Button clicked")}
          variant="outline"
          size="sm"
          disabled={false}
          className="text-xs border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 rounded-lg p-2 text-[#DAC5A7] font-display select-none"
        >
          Contact me
        </CustomButton>
      </div>
    </div>
  );
};

export default PortfolioMyHeaderSectionPageTemplate;
