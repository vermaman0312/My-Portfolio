import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../components/custom-components/custom-label/component";
import { Button } from "../../../components/ui/button-ui/ui";
import emailjs from "emailjs-com";
import CustomToast from "../../../components/ui/toast/toast";

interface formData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const PortfolioContactFormPageComponent = () => {
  const [isToastDisplayed, setIsToastDisplayed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Replace with your EmailJS user ID and service/template IDs
    const serviceID = "service_cmequjq";
    const templateID = "template_c5wri3h";
    const userID = "4PtK9Y-6kWjt0Uc6R";

    emailjs
      .send(
        serviceID,
        templateID,
        Object.fromEntries(Object.entries(formData)),
        userID
      )
      .then(
        (response) => {
          setIsLoading(false);
          setIsToastDisplayed(true);
          setTimeout(() => {
            setFormData({ name: "", email: "", phone: "", message: "" });
          }, 3000);
        },
        (error) => {
          console.error("Error sending email:", error);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 md:p-16 p-4">
      <div className="w-full flex items-center justify-center">
        <CustomLabel className="text-[#DAC5A7] text-xl font-display uppercase">
          Contact Me
        </CustomLabel>
      </div>
      <div className="w-full md:w-[60%]">
        <CustomLabel className="font-display text-[#DAC5A7]">Name:</CustomLabel>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="border-2 border-[#716a60] outline-none text-xs text-[#DAC5A7] text-opacity-70 placeholder:text-[#DAC5A7] placeholder:text-opacity-40 font-display bg-transparent w-full p-2 rounded-lg"
        />
      </div>
      <div className="w-full md:w-[60%]">
        <CustomLabel className="font-display text-[#DAC5A7]">
          Email address:
        </CustomLabel>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@example.com"
          className="border-2 border-[#716a60] outline-none text-xs text-[#DAC5A7] text-opacity-70 placeholder:text-[#DAC5A7] placeholder:text-opacity-40 font-display bg-transparent w-full p-2 rounded-lg"
        />
      </div>
      <div className="w-full md:w-[60%]">
        <CustomLabel className="font-display text-[#DAC5A7]">
          Contact No:
        </CustomLabel>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+XX-XXXXXXXXXX"
          className="border-2 border-[#716a60] outline-none text-xs text-[#DAC5A7] text-opacity-70 placeholder:text-[#DAC5A7] placeholder:text-opacity-40 font-display bg-transparent w-full p-2 rounded-lg"
        />
      </div>
      <div className="w-full md:w-[60%]">
        <CustomLabel className="font-display text-[#DAC5A7]">
          Message:
        </CustomLabel>
        <textarea
          placeholder="write a message..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border-2 border-[#716a60] outline-none text-xs text-[#DAC5A7] text-opacity-70 placeholder:text-[#DAC5A7] placeholder:text-opacity-40 font-display bg-transparent w-full p-2 min-h-24 rounded-lg max-h-32 scroll-container"
        />
      </div>

      <div className="w-full flex items-center justify-center">
        <Button
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.message
          }
          onClick={handleSubmit}
          className="bg-[#DAC5A7] text-black w-32 h-10 font-display"
        >
          {isLoading ? "Sending..." : "Reach Me"}
        </Button>
      </div>

      {isToastDisplayed && (
        <CustomToast
          display={isToastDisplayed}
          setDisplay={setIsToastDisplayed}
          title={`Hi, ${formData.name}`}
          description="Your email has been sent successfully. I will get back to you soon."
        />
      )}
    </div>
  );
};

export default PortfolioContactFormPageComponent;
