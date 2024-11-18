import { cn } from "../../../utils/lib-framer-motion/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TUserWorkExperienceType } from "../../../types/portfolio.type";
import { imageMap } from "../../../portfolio/all-images";

export const HoverEffect = ({
  items,
  className,
}: {
  items: TUserWorkExperienceType[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.companyURL as string}
          key={item?.companyURL}
          target="_blank"
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#DAC5A7] bg-opacity-5 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="w-full flex items-center justify-between p-4">
              <CardTitle className="text-xs font-display font-normal">
                {item.companyName}
              </CardTitle>
              {item.companyLogo && (
                <img
                  src={imageMap[item.companyLogo as keyof typeof imageMap]}
                  alt=""
                  className="w-6 h-6"
                />
              )}
            </div>
            <CardTitle className="text-md font-display font-normal pl-4">
              {item.designation}
            </CardTitle>
            <CardDescription className="text-xs font-display font-normal pl-4 mt-1">
              {item.companyDescription}
            </CardDescription>
            <CardTitle className="text-xs font-display font-normal pl-4 mt-3 mb-5">
              {`${item.yearOfJoining} to ${item.yearOfLeaving}`}
            </CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl md:h-[18rem] md:w-[25rem] overflow-hidden bg-[#DAC5A7] bg-opacity-5 border-2 border-[#DAC5A7] border-opacity-60 group-hover:[#DAC5A7] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-[#DAC5A7] text-2xl font-normal font-display",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-[#DAC5A7] text-opacity-60 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
