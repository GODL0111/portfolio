import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "../shared/theme/ThemeToggle";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);
  const height = useTransform(scrollY, [0, 100], [92, 64]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 10);
    });
    
    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Spacer for fixed header */}
      <div className="h-[92px]" />
      
      {/* Fixed header with glass effect on scroll */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled ? "backdrop-blur-md bg-background/80" : ""
        }`}
        style={{ height }}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          {/* Hamburger Menu Button */}
          <motion.button
            className="relative p-2 rounded-full hover:bg-navy/10 transition-colors z-50"
            onClick={toggleSidebar}
            aria-label="Toggle navigation menu"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Menu className="text-navy" size={24} />
          </motion.button>
          
          {/* Logo - centered */}
          <motion.div 
            className="flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2 sm:block hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-highlight font-bold text-2xl">AK</span>
            <span className="font-semibold text-xl ml-1">ARIN KARMAKAR</span>
          </motion.div>
          
          {/* Mobile logo - smaller, only name initials */}
          <motion.div 
            className="flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2 sm:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-highlight font-bold text-2xl">AK</span>
          </motion.div>

          {/* Theme toggle */}
          <div className="flex items-center space-x-4 z-10">
            <ThemeToggle />
          </div>
        </div>
        
        {/* Header border on scroll */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-border"
          style={{ opacity }}
        />
      </motion.header>
    </>
  );
}