"use client";
import { motion, useReducedMotion } from "framer-motion";

/**
 * <Reveal>
 * Subtle fade + slide-up entry once the element scrolls into view.
 * Respects user's prefers-reduced-motion setting.
 *
 * Props:
 *  - delay: number  (seconds, default 0)
 *  - y:     number  (initial offset px, default 24)
 *  - once:  boolean (animate once, default true)
 *  - as:    string  (element tag, default 'div')
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className = "",
  as = "div",
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1], // expo-out
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * <Stagger>
 * Parent container that staggers its direct children when they
 * scroll into view. Use with <StaggerItem> children.
 */
export function Stagger({
  children,
  className = "",
  delayChildren = 0.05,
  staggerChildren = 0.08,
  once = true,
  ...rest
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren, delayChildren },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", y = 24, ...rest }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
