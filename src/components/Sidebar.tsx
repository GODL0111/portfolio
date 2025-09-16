import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  // Animation variants
  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  // Get current location
  const location = useLocation();
  
  // Navigation links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - closes sidebar when clicked */}
          <motion.div
            className="fixed inset-0 bg-navy/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 left-0 w-64 h-full bg-background z-50 shadow-xl border-r border-border/50"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Close button */}
            <div className="flex justify-end p-5">
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-navy/10 transition-colors"
                aria-label="Close sidebar menu"
              >
                <X className="text-navy" size={20} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center mb-10">
              <span className="text-highlight font-bold text-2xl">AK</span>
              <span className="font-semibold text-xl ml-2">ARIN</span>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col px-6">
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  className="py-4 border-b border-border/30 font-mono relative group"
                  variants={linkVariants}
                >
                  <Link
                    to={link.to}
                    className={`flex items-center text-navy hover:text-highlight transition-colors duration-200 ${
                      location.pathname === link.to ? 'text-highlight' : ''
                    }`}
                    onClick={onClose} // Close sidebar when a link is clicked
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-[1px] bg-highlight transition-all duration-300 ${
                      location.pathname === link.to ? 'w-[70%]' : 'w-0 group-hover:w-[70%]'
                    }`}></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Social links */}
            <div className="absolute bottom-8 px-6 w-full">
              <p className="text-navy-light text-sm mb-4">
                Get in touch
              </p>
              <div className="flex flex-col space-y-2">
                <a
                  href="mailto:arinkarmakar3@gmail.com"
                  className="text-highlight hover:underline"
                >
                  arinkarmakar3@gmail.com
                </a>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/GODL0111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-highlight transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arin-karmakar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-highlight transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}