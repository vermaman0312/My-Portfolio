import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TimelineEntry } from "../../mock-data/preoject-list";
import { Link } from "react-router-dom";

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-display flex flex-col items-center justify-start"
      ref={containerRef}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-lg md:text-4xl mb-4 text-[#DAC5A7] max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-[#DAC5A7] text-opacity-60 text-xs text-center p-2 md:p-0">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-transparent flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#DAC5A7] border border-[#DAC5A7] p-2" />
              </div>
              <div className="flex items-center">
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#DAC5A7]">
                  {index + 1}
                </h3>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#DAC5A7]">
                  {item.projectTitle}
                </h3>
              </div>
            </div>

            <div className="relative md:ml-44 pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#DAC5A7]">
                {item.projectTitle}
              </h3>
              <div>
                <div>
                  <p className="text-xs font-display text-[#DAC5A7] text-opacity-60">
                    {item.ProjectDescription}
                  </p>
                </div>
                <div className="mt-5 flex items-center flex-wrap justify-start gap-2">
                  {item.projectTechnology.map((tech, index) => {
                    return (
                      <button className="border-2 border-[#DAC5A7] border-opacity-60 p-2 text-xs rounded-lg text-[#DAC5A7] font-display">
                        {tech}
                      </button>
                    );
                  })}
                </div>
                {item.projectContent.length > 0 && (
                  <div className="mt-5 flex flex-wrap items-center justify-start gap-2">
                    {item.projectContent.map((content, index) => {
                      return (
                        <img
                          src={content}
                          alt=""
                          className="w-56 rounded-lg cursor-pointer"
                        />
                      );
                    })}
                  </div>
                )}
                {item.projectURL[0].toLowerCase().includes("figma") && (
                  <div className="mt-5 flex flex-wrap items-center justify-start gap-2">
                    <iframe
                      style={{
                        border: "none",
                        width: "100%",
                        height: "100%",
                      }}
                      src={item.projectURL[0]}
                      allowFullScreen
                      title="Figma Project Embed"
                    />
                  </div>
                )}
                <div className="mt-5 flex flex-col gap-2">
                  {item.projectURL.map((url, index) => {
                    return (
                      <Link
                        to={url}
                        className="text-xs font-display text-[#DAC5A7] underline"
                        target="_, blank"
                      >
                        {`URL ${index + 1}: ${url}`}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-blue-500 to-red-500 to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
