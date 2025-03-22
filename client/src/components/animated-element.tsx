import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: "fade-in" | "slide-in";
  delay?: number;
  className?: string;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation,
  delay = 0,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75, delay } },
  };

  const slideInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
  };

  const variants = animation === "fade-in" ? fadeInVariants : slideInVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
