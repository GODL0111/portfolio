import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, ThemeSwitchProvider } from "./shared/theme/ThemeProvider";
import { ThemeEffect } from "./shared/theme/ThemeEffect";
import { Header } from "./components/header";
import { SmoothScroll } from "./shared/animations/SmoothScroll";
import { ScrollIndicator } from "./shared/animations/ScrollIndicator";
import { ToastProvider } from "./shared/ui/Toast";
import { useTheme } from "next-themes";
import { 
  HomePage,
  AboutPage,
  ProjectsPage,
  ExperiencePage,
  ContactPage
} from "./pages";

import { useForceTheme } from "./shared/hooks/use-force-theme";

// Wrapper component that forces re-render on theme change
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  // This hook forces CSS class application and returns the current theme
  const resolvedTheme = useForceTheme();
  
  // Re-render entire subtree when theme changes using the key prop
  return <div key={resolvedTheme || "initial"}>{children}</div>;
};

export default function App() {
  // Initialize the app
  useEffect(() => {
    // Apply smooth scrolling to html element
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <ThemeSwitchProvider>
          <ToastProvider>
            <ThemeEffect />
            <ThemeWrapper>
              <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
                {/* Scroll progress indicator */}
                <ScrollIndicator />
                
                {/* Header */}
                <Header />
              
              {/* Main content with smooth scrolling */}
              <SmoothScroll>
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </main>
                
                {/* Footer */}
                <footer className="py-6 border-t border-border">
                  <div className="container text-center text-navy-light text-sm">
                    <p>© {new Date().getFullYear()} ARIN KARMAKAR. All rights reserved.</p>
                    <p className="mt-2">
                      Built with React, TypeScript, and Framer Motion.
                      <a href="#" className="text-highlight hover:underline ml-1">Source Code</a>
                    </p>
                  </div>
                </footer>
              </SmoothScroll>
              </div>
            </ThemeWrapper>
          </ToastProvider>
        </ThemeSwitchProvider>
      </ThemeProvider>
    </Router>
  );
}