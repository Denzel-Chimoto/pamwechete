import { motion, useReducedMotion } from 'motion/react';

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function Typewriter({
  text,
  className = '',
  delay = 0.4,
  speed = 0.065,
}: TypewriterProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <h1 className={className}>{text}</h1>;
  }

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: speed,
          },
        },
      }}
    >
      {[...text].map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 8,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.15,
                ease: 'easeOut',
              },
            },
          }}
        >
          {character === ' ' ? '\u00A0' : character}
        </motion.span>
      ))}
    </motion.h1>
  );
}