import { motion } from "framer-motion";
import { useInView } from "../hooks/use-in-view";
import React from "react";

type AnimationDirection = "up" | "down" | "left" | "right";
type AnimationVariant = "fade" | "slide" | "scale" | "none";

interface FadeInProps {
  children: React.ReactNode;
  direction?: AnimationDirection;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  distance?: number;
  scale?: number;
}

export function FadeIn({
  children,
  direction = "up",
  variant = "fade",
  delay = 0,
  duration = 0.5,
  className = "",
  threshold = 0.1,
  triggerOnce = true,
  distance = 20,
  scale = 0.95,
}: FadeInProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold,
    triggerOnce,
  });

  // Define initial animation values based on direction and variant
  const getInitialValues = () => {
    const initial: any = {};
    
    if (variant === "fade" || variant === "slide") {
      initial.opacity = 0;
    }
    
    if (variant === "slide" || direction) {
      switch (direction) {
        case "up":
          initial.y = distance;
          break;
        case "down":
          initial.y = -distance;
          break;
        case "left":
          initial.x = distance;
          break;
        case "right":
          initial.x = -distance;
          break;
      }
    }
    
    if (variant === "scale") {
      initial.scale = scale;
      initial.opacity = 0;
    }
    
    return initial;
  };
  
  // Define animation values when element is in view
  const getAnimateValues = () => {
    const animate: any = {};
    
    if (variant === "fade" || variant === "slide") {
      animate.opacity = 1;
    }
    
    if (variant === "slide" || direction) {
      animate.x = 0;
      animate.y = 0;
    }
    
    if (variant === "scale") {
      animate.scale = 1;
      animate.opacity = 1;
    }
    
    return animate;
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialValues()}
      animate={inView ? getAnimateValues() : getInitialValues()}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Presets for common animations
export function SlideUp({ children, ...props }: Omit<FadeInProps, "direction" | "variant">) {
  return (
    <FadeIn direction="up" variant="slide" {...props}>
      {children}
    </FadeIn>
  );
}

export function ScaleIn({ children, ...props }: Omit<FadeInProps, "variant">) {
  return (
    <FadeIn variant="scale" {...props}>
      {children}
    </FadeIn>
  );
}

export function FadeInStagger({
  children,
  staggerDelay = 0.1,
  ...props
}: FadeInProps & { staggerDelay?: number }) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <FadeIn key={index} delay={props.delay || 0 + index * staggerDelay} {...props}>
          {child}
        </FadeIn>
      ))}
    </>
  );
}