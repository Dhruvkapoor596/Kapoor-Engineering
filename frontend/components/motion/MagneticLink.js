"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * <MagneticLink> — A Link/anchor that subtly follows the cursor on hover.
 * Use for hero CTAs. Falls back to a normal Link if reduced-motion is on.
 */
export default function MagneticLink({
  href,
  external = false,
  className = "",
  children,
  strength = 0.25,
  ...rest
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e) => {
    if (!ref.current || reduce) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = external ? motion.a : motion(Link);
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { x: springX, y: springY }}
      className="inline-block"
    >
      <Tag className={className} {...linkProps} {...rest}>
        {children}
      </Tag>
    </motion.div>
  );
}
