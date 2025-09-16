import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Force client-side rendering for theme provider
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Set mounted state
    setMounted(true);
    
    // Force document class update on first load
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(savedTheme);
    }
  }, []);
  
  // Handle system preference changes while app is running
  useEffect(() => {
    if (!mounted) return;
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme === "system") {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(
          mediaQuery.matches ? "dark" : "light"
        );
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mounted]);
  
  // Use a wrapper div that re-renders when mounted changes
  return (
    <div key={mounted ? "mounted" : "not-mounted"}>
      <NextThemesProvider 
        attribute="class" 
        defaultTheme="system" 
        enableSystem 
        disableTransitionOnChange={true} // Disable default transition to use our custom one
        storageKey="portfolio-theme" // Use specific storage key for better caching
        enableColorScheme={true} // Better system integration
        forcedTheme={!mounted ? undefined : undefined} // Force rerender when mounted changes
      >
        {children}
      </NextThemesProvider>
    </div>
  );
}

// Create a context for theme switching animation
type ThemeSwitchContextType = {
  isAnimating: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
};

const ThemeSwitchContext = createContext<ThemeSwitchContextType | undefined>(undefined);

export function ThemeSwitchProvider({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <ThemeSwitchContext.Provider value={{ isAnimating, setIsAnimating }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
}

export const useThemeSwitchContext = () => {
  const context = useContext(ThemeSwitchContext);
  if (context === undefined) {
    throw new Error("useThemeSwitchContext must be used within a ThemeSwitchProvider");
  }
  return context;
};