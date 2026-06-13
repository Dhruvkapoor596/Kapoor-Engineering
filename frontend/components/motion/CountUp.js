"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";

/**
 * <CountUp> — Animates a number from 0 to `end` once it enters the viewport.
 * Used for the "15+ Years" / "19+ Years" stat blocks.
 */
export default function CountUp({
  end,
  duration = 1.6,
  className = "",
  suffix = "",
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const count = useMotionValue(reduce ? end : 0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (reduce) return;
    if (inView) {
      const controls = animate(count, end, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, end, duration, count, reduce]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
