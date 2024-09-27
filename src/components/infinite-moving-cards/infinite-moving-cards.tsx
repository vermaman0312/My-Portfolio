// import { workDataType } from "../../mock-data/services-data";
// import { cn } from "../../utils/lib-framer-motion/cn";
// import React, { useCallback, useEffect, useState } from "react";
// import { CustomLabel } from "../custom-label/page.component";

// export const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }: {
//   items: Array<workDataType>;
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }) => {
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const scrollerRef = React.useRef<HTMLUListElement>(null);
//   const [start, setStart] = useState(false);

//   const getDirection = useCallback(() => {
//     if (containerRef.current) {
//       if (direction === "left") {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "forwards"
//         );
//       } else {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "reverse"
//         );
//       }
//     }
//   }, [direction]);

//   const getSpeed = useCallback(() => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   }, [speed]);

//   const addAnimation = useCallback(() => {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }, [getDirection, getSpeed]);

//   useEffect(() => {
//     addAnimation();
//   }, [addAnimation]);

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
//         className
//       )}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           " flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap",
//           start && "animate-scroll ",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item, idx) => (
//           <div className="border-2 border-[#DAC5A7] border-opacity-15 bg-[#DAC5A7] bg-opacity-5 rounded-lg p-10 animate-slideUp select-none cursor-pointer">
//             <div className="w-full">
//               <CustomLabel className="text-xs font-display text-[#DAC5A7] font-light uppercase">
//                 {item.type}
//               </CustomLabel>
//             </div>
//             <div className="w-full mt-5">
//               <CustomLabel className="text-2xl font-display text-[#DAC5A7] font-normal">
//                 {item.title}
//               </CustomLabel>
//             </div>
//             <div className="mt-10 w-full h-64 flex items-center justify-center">
//               <img src={item.urlImage} alt="" className="object-fit h-full" />
//             </div>
//             <div className="mt-10 flex items-center justify-center">
//               <CustomLabel className="text-xs font-display text-[#DAC5A7] font-light text-center break-normal md:w-[50rem] ">
//                 {item.description}
//               </CustomLabel>
//             </div>

//             <div className="mt-5 pl-3">
//               <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DAC5A7] pb-5">
//                 <CustomLabel className="text-[#DAC5A7] font-display text-xs">
//                   Concept
//                 </CustomLabel>
//                 <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
//                   {item.concept}
//                 </CustomLabel>
//               </div>
//               <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DAC5A7] pb-5 mt-5">
//                 <CustomLabel className="text-[#DAC5A7] font-display text-xs">
//                   Design
//                 </CustomLabel>
//                 <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
//                   {item.desgin}
//                 </CustomLabel>
//               </div>
//               <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DAC5A7] pb-5 mt-5">
//                 <CustomLabel className="text-[#DAC5A7] font-display text-xs">
//                   Prototype
//                 </CustomLabel>
//                 <CustomLabel className="text-[#DAC5A7] text-opacity-60 text-xs font-display font-light md:w-[30rem]">
//                   {item.protoType}
//                 </CustomLabel>
//               </div>
//             </div>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

export {};
