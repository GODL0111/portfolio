import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useThemeSwitchContext } from "./ThemeProvider";

export function ThemeEffect() {
  const { resolvedTheme } = useTheme();
  const { isAnimating } = useThemeSwitchContext();
  const [showEffect, setShowEffect] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined);
  const [mounted, setMounted] = useState(false);
  
  // Set mounted state to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Track theme changes to trigger animations
  useEffect(() => {
    if (!mounted) return;
    
    if (resolvedTheme && currentTheme && resolvedTheme !== currentTheme) {
      // Theme has changed - show animation
      setShowEffect(true);
    }
    
    // Update current theme
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme, currentTheme, mounted]);
  
  // Show effect when theme is changing - reduced to 400ms
  useEffect(() => {
    if (isAnimating || showEffect) {
      const timer = setTimeout(() => setShowEffect(false), 400);
      
      // Failsafe: ensure effect is hidden even if animation gets stuck
      const failsafe = setTimeout(() => {
        if (showEffect) setShowEffect(false);
      }, 800);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(failsafe);
      };
    }
  }, [isAnimating, showEffect]);

  if (!showEffect) return null;

  return (
    <AnimatePresence>
      {showEffect && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className={`absolute inset-0 ${
                resolvedTheme === "dark" ? "bg-navy" : "bg-background"
              }`}
              initial={{ scale: 0, borderRadius: "100%" }}
              animate={{ scale: 2, borderRadius: "0%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* Simplified particles effect during transition */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full ${
                    resolvedTheme === "dark" ? "bg-highlight/40" : "bg-highlight/40"
                  }`}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 0 
                  }}
                  animate={{ 
                    x: Math.sin(i * 45 * Math.PI / 180) * 80, 
                    y: Math.cos(i * 45 * Math.PI / 180) * 80, 
                    opacity: [0, 1, 0] 
                  }}
                  transition={{ 
                    duration: 0.3, 
                    times: [0, 0.5, 1]
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}