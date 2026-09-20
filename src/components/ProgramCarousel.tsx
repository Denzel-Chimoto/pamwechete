import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { PROGRAMS } from '../data/programs';
import { ProgramCard } from './ProgramCard';

export function ProgramCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [horizontalDistance, setHorizontalDistance] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  /*
   * Measure how far the program track actually needs to travel.
   *
   * Example:
   * viewport = 1100px
   * track    = 2800px
   *
   * horizontalDistance = 1700px
   */
  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current || !trackRef.current) return;

      const distance = Math.max(
        0,
        trackRef.current.scrollWidth - viewportRef.current.clientWidth,
      );

      setHorizontalDistance(distance);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener('resize', measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  /*
   * Track the vertical progress through this section.
   *
   * 0 = horizontal carousel has not started
   * 1 = last program has reached the end
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  /*
   * Convert vertical page scrolling into horizontal movement.
   */
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -horizontalDistance],
  );

  /*
   * If the user has requested reduced motion, don't lock the
   * page into the vertical-to-horizontal animation.
   */
  if (shouldReduceMotion) {
    return (
      <div
        ref={viewportRef}
        className="overflow-x-auto overscroll-x-contain pb-4"
      >
        <div className="flex w-max gap-5 px-1">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="w-[min(82vw,360px)] shrink-0 sm:w-[360px]"
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        /*
         * The horizontal distance becomes the amount of additional
         * vertical scrolling required to move through the cards.
         */
        height: `calc(100svh + ${horizontalDistance}px)`,
      }}
    >
      <div
        ref={viewportRef}
        className="sticky top-0 flex h-svh w-full items-center overflow-hidden"
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max shrink-0 gap-5 px-1 will-change-transform sm:gap-6"
        >
          {PROGRAMS.map((program) => (
            <motion.div
              key={program.id}
              className="w-[min(82vw,360px)] shrink-0 sm:w-[360px]"
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <ProgramCard program={program} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}