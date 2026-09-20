import { motion, useReducedMotion } from 'motion/react';
import { PARTNERS } from '../data/partners';

export function PartnerLogos() {
  const shouldReduceMotion = useReducedMotion();

  /*
   * Duplicate the partners so that when the first set moves out,
   * the second identical set is already entering the viewport.
   */
  const logos = [...PARTNERS, ...PARTNERS];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24"
        style={{
          background:
            'linear-gradient(to right, var(--color-surface), transparent)',
        }}
      />

      {/* Right fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24"
        style={{
          background:
            'linear-gradient(to left, var(--color-surface), transparent)',
        }}
      />

      <motion.div
        className="flex w-max gap-4 py-4"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ['0%', '-50%'],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 28,
                ease: 'linear',
                repeat: Infinity,
              }
        }
      >
        {logos.map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface px-6 py-7 grayscale transition duration-200 hover:grayscale-0 hover:opacity-100 dark:bg-surface-elevated"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-12 max-w-[150px] object-contain opacity-70 transition-opacity duration-200 hover:opacity-100"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}