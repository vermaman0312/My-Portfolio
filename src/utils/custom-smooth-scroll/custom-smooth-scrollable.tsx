import { useEffect, useRef } from "react";

export const CustomSmoothScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let isScrolling = false;

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const smoothScroll = (deltaY: number) => {
      const scrollMultiplier = 5;
      const targetScrollTop = container.scrollTop + deltaY * scrollMultiplier;
      const duration = 1000;
      const startPosition = container.scrollTop;
      const distance = targetScrollTop - startPosition;
      let startTime: number | null = null;

      const animationScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        container.scrollTop = run;
        if (timeElapsed < duration) {
          requestAnimationFrame(animationScroll);
        } else {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          isScrolling = false;
        }
      };

      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animationScroll);
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (!isScrolling) {
        isScrolling = true;
        smoothScroll(event.deltaY);
      }
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return scrollContainerRef;
};
