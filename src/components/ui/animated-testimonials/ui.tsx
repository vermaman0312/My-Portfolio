import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { TUserCertificationsType } from "../../../types/portfolio.type";
import { imageMap } from "../../../portfolio/all-images";
import { CustomLabel } from "../../custom-components/custom-label/component";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: TUserCertificationsType[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const handleDownloadCertificate = useCallback((file: string) => {
    console.log(file);
    const image = imageMap[file as keyof typeof imageMap];
    const anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = file;
    anchor.click();
  }, []);
  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.certificationImage}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={
                      imageMap[
                        testimonial.certificationImage as keyof typeof imageMap
                      ]
                    }
                    alt={testimonial.certificationName as string}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-fit object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <img
              src={
                imageMap[
                  testimonials[active]
                    .certificationLogo as keyof typeof imageMap
                ]
              }
              alt={testimonials[active].certificationName}
              className="w-24"
            />

            <h3 className="text-2xl font-bold dark:text-white text-[#DAC5A7]">
              {testimonials[active].certificationName}
            </h3>
            <p className="text-xs text-[#DAC5A7] text-opacity-60 mt-5">
              {testimonials[active].certificationDate}
            </p>
            <motion.p className="text-xs text-[#DAC5A7] text-opacity-60 mt-5">
              {testimonials[active].certificationDescription
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>
          <div className="mt-5 flex items-center justify-end">
            <CustomLabel
              onClick={() =>
                handleDownloadCertificate(
                  testimonials[active].certificationImage
                )
              }
              className="text-xs text-[#DAC5A7] font-display border p-1 border-[#DAC5A7] rounded-lg px-2 cursor-pointer"
            >
              View Certificate
            </CustomLabel>
          </div>
          <div className="flex gap-4 pt-12 md:pt-0 mt-5">
            <button
              onClick={handlePrev}
              className="rounded-full bg-[#DAC5A7] flex items-center justify-center group/button px-4 text-xs font-display p-2"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="rounded-full bg-[#DAC5A7] flex items-center justify-center group/button px-4 text-xs font-display p-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
