import { Button } from "../../components/ui/button-ui/ui";
import { CustomLabel } from "../../components/custom-components/custom-label/component";

const PortfolioMyFooterSectionPageTemplate = () => {
  return (
    <div className="w-full p-4 flex flex-wrap items-center justify-around gap-8">
      <div className="flex items-center justify-center gap-2">
        <Button
          onClick={() => {
            const phoneNumber = "+916205240414";
            const message = "Hi there! How are you? can we take sohrt huddle?";
            window.open(
              `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`,
              "_blank"
            );
          }}
          className="border-2 border-[#DAC5A7] border-opacity-40 text-[#DAC5A7] text-opacity-60 w-10 h-10"
        >
          <i
            className="fa fa-whatsapp text-opacity-60"
            style={{ fontSize: "25px", color: "#DAC5A7" }}
          ></i>
        </Button>
        <Button
          onClick={() => {
            window.open(
              `https://www.linkedin.com/in/aman-verma-198472219`,
              "_blank"
            );
          }}
          className="border-2 border-[#DAC5A7] border-opacity-40 text-[#DAC5A7] text-opacity-60 w-10 h-10"
        >
          <i
            className="fa fa-linkedin text-opacity-60"
            style={{ fontSize: "25px", color: "#DAC5A7" }}
          ></i>
        </Button>
        <Button
          onClick={() =>
            window.open(
              `https://www.instagram.com/verma.kittu17/profilecard/?igsh=emNndWtsbW9hNXRt`,
              "_blank"
            )
          }
          className="border-2 border-[#DAC5A7] border-opacity-40 text-[#DAC5A7] text-opacity-60 w-10 h-10"
        >
          <i
            className="fa fa-instagram text-opacity-60"
            style={{ fontSize: "25px", color: "#DAC5A7" }}
          ></i>
        </Button>
        <Button
          onClick={() => {
            window.open(
              `https://www.facebook.com/profile.php?id=100005400188000&mibextid=ZbWKwL`,
              "_blank"
            );
          }}
          className="border-2 border-[#DAC5A7] border-opacity-40 text-[#DAC5A7] text-opacity-60 w-10 h-10"
        >
          <i
            className="fa fa-facebook text-opacity-60"
            style={{ fontSize: "25px", color: "#DAC5A7" }}
          ></i>
        </Button>
        <Button
          onClick={() =>
            window.open(
              `https://x.com/vermaman0312?t=bXVNApVWZp_v4bgy9DLMPQ&s=09`,
              "_blank"
            )
          }
          className="border-2 border-[#DAC5A7] border-opacity-40 text-[#DAC5A7] text-opacity-60 w-10 h-10"
        >
          <i
            className="fa fa-twitter text-opacity-60"
            style={{ fontSize: "25px", color: "#DAC5A7" }}
          ></i>
        </Button>
      </div>
      <div>
        <CustomLabel className="text-xs font-display text-[#DAC5A7]">
          Copyrights © Aman Verma
        </CustomLabel>
      </div>
    </div>
  );
};

export default PortfolioMyFooterSectionPageTemplate;
