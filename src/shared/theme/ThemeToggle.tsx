import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { SunIcon, MoonIcon } from "lucide-react";
import { useThemeSwitchContext } from "./ThemeProvider";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const { isAnimating, setIsAnimating } = useThemeSwitchContext();
  const [mounted, setMounted] = useState(false);

  // Make sure we're mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) {
      // Force reset animation state if it's stuck
      setIsAnimating(false);
      return;
    }
    
    setIsAnimating(true);
    
    // Use resolvedTheme to get the actual applied theme rather than the stored preference
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Force apply theme at DOM level for immediate visual feedback
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    
    // Store the user's choice for persistence
    localStorage.setItem("portfolio-theme", newTheme);
    
    // Reset animation state after transition completes - reduced to 400ms
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
    
    // Failsafe: ensure animation state is reset even if something goes wrong
    const failsafe = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    return () => clearTimeout(failsafe);
  };

  // Don't render icon until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={`relative h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/50 flex items-center justify-center hover:bg-accent/70 transition-colors duration-200 ${className}`}
      >
        <div className="h-5 w-5" />
      </button>
    );
  }
  
  // Use resolvedTheme to determine which icon to show
  const currentTheme = resolvedTheme || "light";
  
  return (
    <button
      aria-label="Toggle theme"
      className={`relative h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/50 flex items-center justify-center hover:bg-accent/70 transition-colors duration-200 ${className}`}
      onClick={toggleTheme}
      disabled={isAnimating}
      type="button" // Explicitly set button type
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentTheme}
          initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
          transition={{ duration: 0.2 }}
        >
          {currentTheme === "dark" ? (
            <MoonIcon className="h-5 w-5 text-highlight" />
          ) : (
            <SunIcon className="h-5 w-5 text-highlight" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}