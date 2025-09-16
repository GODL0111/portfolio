import { useTheme } from "next-themes";
import { useEffect } from "react";

/**
 * Hook to force CSS class application when theme changes
 * This helps ensure theme changes are immediately visible
 */
export function useForceTheme() {
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    if (!resolvedTheme) return;
    
    // Force theme application by manipulating classList directly
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(resolvedTheme);
    
    // Also update body for good measure
    document.body.classList.remove("light", "dark");
    document.body.classList.add(resolvedTheme);
    
  }, [resolvedTheme]);
  
  return resolvedTheme;
}