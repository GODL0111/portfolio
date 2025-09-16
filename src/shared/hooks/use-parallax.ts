import { useEffect, useState } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  reverse?: boolean;
}

export function useParallax({ 
  speed = 0.1, 
  direction = "up",
  reverse = false 
}: UseParallaxOptions = {}) {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset(scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Calculate transform value based on scroll position
  const getTransform = () => {
    const value = offset * speed * (reverse ? -1 : 1);
    
    switch (direction) {
      case "up":
        return `translateY(${-value}px)`;
      case "down":
        return `translateY(${value}px)`;
      case "left":
        return `translateX(${-value}px)`;
      case "right":
        return `translateX(${value}px)`;
      default:
        return `translateY(${-value}px)`;
    }
  };
  
  return { transform: getTransform(), offset };
}

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return { scrollY };
}