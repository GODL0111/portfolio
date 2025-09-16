import React from "react";
import { Hero } from "../components/hero";
import { motion } from "framer-motion";

// Import profile image from assets
import profileImage from "../assets/images/profile-pic.jpg";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="container pt-20 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Hero />
          </div>
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-highlight/20 blur-md"></div>
              <img 
                src={profileImage} 
                alt="Arin Karmakar" 
                className="rounded-full border-4 border-highlight/30 w-64 h-64 object-cover relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}