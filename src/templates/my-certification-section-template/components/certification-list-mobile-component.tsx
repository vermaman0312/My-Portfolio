import React, { useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel/ui";
import Autoplay from "embla-carousel-autoplay";
import { TUserCertificationsType } from "../../../types/portfolio.type";
import { imageMap } from "../../../portfolio/all-images";
import { CustomLabel } from "../../../components/custom-components/custom-label/component";

type props = {
  data: Array<TUserCertificationsType>;
};

const PortfolioCertificationListMobilePageComponent = ({ ...props }: props) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const handleDownloadCertificate = useCallback((file: string) => {
    console.log(file);
    const image = imageMap[file as keyof typeof imageMap];
    const anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = file;
    anchor.click();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full -mt-1 h-[300px] gap-4">
        {props.data.map((item, index) => (
          <CarouselItem key={index} className="w-full p-2">
            <div className="w-full h-full border-2 border-[#DAC5A7] border-opacity-60 rounded-lg p-4 flex flex-col items-center justify-between">
              <div className="w-full flex flex-col items-center justify-between">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={
                        imageMap[
                          item.certificationLogo as keyof typeof imageMap
                        ]
                      }
                      alt={item.certificationName as string}
                      className="w-8 h-8 object-fit"
                    />
                    <CustomLabel className="text-xl text-[#DAC5A7] font-semibold font-display text-center">
                      {item.certificationName}
                    </CustomLabel>
                  </div>
                </div>
                <div className="mt-5">
                  <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light ml-10">
                    {item.certificationDescription}
                  </CustomLabel>
                </div>
                <div className="w-full flex items-center justify-end gap-2 mt-5">
                  <button
                    onClick={() =>
                      handleDownloadCertificate(
                        item.certificationImage as string
                      )
                    }
                    className="text-xs text-[#DAC5A7] font-display p-2"
                  >
                    View Certificate
                  </button>
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-2 mt-5">
                <CustomLabel className="text-xs text-[#DAC5A7] font-display font-semibold ml-10">
                  {item.certificationAuthority}
                </CustomLabel>
                <CustomLabel className="text-xs text-[#DAC5A7] font-display font-light ml-10">
                  {item.certificationDate}
                </CustomLabel>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-[#DAC5A7] border-none w-6 h-6" />
      <CarouselNext className="text-[#DAC5A7] border-none w-6 h-6" />
    </Carousel>
  );
};

export default PortfolioCertificationListMobilePageComponent;
