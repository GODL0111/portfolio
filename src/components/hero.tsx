import { motion } from "framer-motion";
import { useParallax } from "../shared/hooks/use-parallax";
import { useInView } from "../shared/hooks/use-in-view";
import { useEffect, useRef, useState } from "react";
import { ArrowDownIcon } from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const { transform: bgTransform } = useParallax({ speed: 0.15 });
  const { transform: textTransform } = useParallax({ speed: 0.08 });
  const { ref, inView: isInView } = useInView<HTMLDivElement>({ triggerOnce: true });
  
  // Particles animation
  const particlesRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // GSAP animation for particles
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const particles = particlesRef.current.children;
    const totalParticles = particles.length;
    
    // Initialize particles in random positions
    gsap.set(particles, {
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-200, 200),
      opacity: () => gsap.utils.random(0.1, 0.4),
      scale: () => gsap.utils.random(0.2, 1),
    });
    
    // Animate particles
    gsap.to(particles, {
      duration: 4,
      ease: "power1.inOut",
      x: () => gsap.utils.random(-300, 300),
      y: () => gsap.utils.random(-300, 300),
      opacity: () => gsap.utils.random(0.1, 0.6),
      scale: () => gsap.utils.random(0.2, 1),
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
    });
    
    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = particlesRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = clientX - rect.left - rect.width / 2;
      const y = clientY - rect.top - rect.height / 2;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Effect to move particles slightly toward mouse position
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const particles = particlesRef.current.children;
    const { x, y } = mousePosition;
    
    gsap.to(particles, {
      duration: 1.5,
      x: (i) => gsap.utils.random(-300, 300) + x * 0.02 * (i % 3 - 1),
      y: (i) => gsap.utils.random(-300, 300) + y * 0.02 * (i % 3 - 1),
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [mousePosition]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-highlight/20"
            style={{
              width: `${gsap.utils.random(4, 12)}px`,
              height: `${gsap.utils.random(4, 12)}px`,
            }}
          />
        ))}
      </div>
      
      {/* Decorative geometric shapes with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-[10%] w-60 h-60 rounded-full bg-highlight/5"
          style={{ transform: bgTransform }}
        />
        {/* Removed the circular element as requested */}
      </div>
      
      {/* Content container */}
      <div className="container relative z-10">
        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-highlight font-mono mb-5"
          >
            Hi, my name is
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ transform: textTransform }}
          >
            <span className="block">ARIN KARMAKAR</span>
            <span className="block text-navy-light mt-2 text-2xl md:text-3xl">
              Durgapur, West Bengal | Computer Science Student
            </span>
          </motion.h1>
          
          <motion.div
            className="text-navy-light text-lg mb-8 max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="mb-4">
              <span className="text-highlight">Contact:</span> 6294979223 | 9476476209 | arinkarmakar3@gmail.com
            </p>
            <p>
              A detail-oriented B.Tech graduate seeking to leverage a strong analytical mindset in the Sales Quality Analyst Intern role. 
              My goal is to help establish and maintain high-quality standards for sales interactions by analyzing call data to identify trends, 
              assisting in performance assessments, and supporting the continuous improvement of sales strategies.
            </p>
          </motion.div>
          
          {/* Removed navigation buttons as requested */}
        </div>
      </div>
      
      {/* Classified watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.1] select-none">
        <div className="transform rotate-30 scale-100">
          <div className="text-[100px] font-black tracking-wider text-highlight/50 relative text-stamp">
            CLASSIFIED
            <div className="absolute inset-0 blur-sm text-navy/70">CLASSIFIED</div>
          </div>
          <div className="text-center mt-[-30px] text-[40px] font-bold text-highlight/40 relative text-stamp">
            TOP SECRET
            <div className="absolute inset-0 blur-[1px] text-navy/60">TOP SECRET</div>
            <div className="border-t-2 border-b-2 border-highlight/30 w-[80%] mx-auto mt-2 py-1 text-sm">
              FEDERAL BUREAU OF INVESTIGATION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}