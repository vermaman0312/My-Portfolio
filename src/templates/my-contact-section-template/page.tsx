import FooterTagPageComponent from "./components/contact.tag.component";
import PortfolioContactMainBodyPageComponent from "./components/contact-main-body.component";
import PortfolioContactFormPageComponent from "./components/contact-form.component";

const PortfolioMyContactSectionPageTemplate = () => {
  return (
    <div className="w-full">
      <div>
        <FooterTagPageComponent number={25} />
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
        <div className="w-full h-full flex items-center justify-center">
          <PortfolioContactMainBodyPageComponent
            title="Project in mind?"
            headingTitle="Let's get in touch"
            description="Premium web design, webflow, and SEO services to help your business
        stand out."
          />
        </div>

        <div className="w-full">
          <PortfolioContactFormPageComponent />
        </div>
      </div>
    </div>
  );
};

export default PortfolioMyContactSectionPageTemplate;
