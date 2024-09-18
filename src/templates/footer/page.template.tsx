import FooterTagPageComponent from "./components/footer.tag.component";
import FooterBodyPageComponent from "./components/footer-body.component";
import FooterCopyRightTagPageComponent from "./components/footer-copyright-tag.component";
import FooterProfileMenuOptionPageComponent from "./components/profile-menuOption.component";
import FooterPageMenuOptionPageComponent from "./components/page.menuOption.component";
import FooterMenuOptionPageComponent from "./components/menuOption.component";
import FooterOtherMenuOptionPageComponent from "./components/other-menuOption.component";
import { useCallback, useState } from "react";
import { CustomDialogBox } from "../../components/custom-dialogbox/page.component";
import FooterGetInTouchFormPageComponent from "./components/get-in-touch-form.component";

const PortfolioFooterPageTemplate = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenForm = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    }, 3000);
  }, []);

  return (
    <div className="w-full">
      <div>
        <FooterTagPageComponent number={25} />
      </div>

      <div>
        <FooterBodyPageComponent
          title="Project in mind?"
          headingTitle="Let's make website shine"
          description="Premium web design, webflow, and SEO services to help your business
        stand out."
          isLoading={isLoading}
          onClick={handleOpenForm}
        />
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

      {/* DIALOG BOX OPEN FORM TO GET TOUCH */}
      <div>
        <FooterGetInTouchFormPageComponent
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default PortfolioFooterPageTemplate;
