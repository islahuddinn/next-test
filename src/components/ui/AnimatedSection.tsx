"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getAnimationVariant = () => {
    switch (direction) {
      case "left":
        return fadeInLeft;
      case "right":
        return fadeInRight;
      case "scale":
        return scaleIn;
      default:
        return fadeInUp;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={getAnimationVariant()}
      transition={{ delay }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={staggerContainer}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
