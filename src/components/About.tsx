import { motion } from "framer-motion";
import { useInView } from "../shared/hooks/use-in-view";
import portraitImage from "../assets/images/portrait.jpg";

const About = () => {
  const { ref, inView: isInView } = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section bg-navy/5 py-24" id="about">
      <div className="container">
        <div ref={ref} className="flex flex-col md:flex-row gap-16">
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading text-2xl md:text-3xl mb-6 flex items-center"
            >
              About Me
              <span className="ml-4 h-px bg-navy/20 w-32 hidden md:block"></span>
            </motion.h2>
            
            <div className="space-y-6 text-navy-light">
              {/* Education Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-3">Education</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <span className="font-medium">Techno Main Salt Lake</span>
                    <span>B.Tech (pursuing) | Major: Computer Science | Minor: Data Science | 2026</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Dr. B. C. Roy Polytechnic</span>
                    <span>Diploma | Major: Mechanical | 2021</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Experience Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-3">Experience</h3>
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-medium">Tata Power | Field Engineer</span>
                    <span className="text-sm">2021-2023</span>
                  </div>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Boiler Engineer: Managed 1070MW (525MW*2) plant.</li>
                    <li>Contributed to AOH, also taken part as a safety team.</li>
                    <li>Proactively monitored and maintained plant systems to increase efficiency and reduce leakages.</li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Leadership Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-3">Leadership & Responsibilities</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Chairperson of GeeksForGeeks Student Chapter (2024-25)</li>
                  <li>Captain of PeerHub Student Chapter (2025)</li>
                  <li>Google Student Ambassador (2025)</li>
                </ul>
              </motion.div>
              
              {/* Skills Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-3">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 mt-2">
                  {[
                    "Python", "CSS", "AI", "JavaScript", "HTML", "Node.js", 
                    "DSA", "DBMS", "RestAPI", "AWS", "Azure", "Team Management", 
                    "Leadership", "AgenticAI", "GCP", "GitHub", "SQL", "OOPs", 
                    "Data Analysis", "MySQL", "Neural Networks", "Docker", "Learning Experience Design"
                  ].map((skill, index) => (
                    <motion.div 
                      key={skill} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    >
                      <span className="text-highlight mr-2">▹</span> {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Certifications Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-3">Certifications</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Getting Started with Enterprise-Grade AI by IBM SkillsBuild</li>
                  <li>Journey to Cloud: Envisioning Your Solution by IBM SkillsBuild</li>
                  <li>Reverse Engineering & Malware Analysis in 21 Hours | REMAC+ from Udemy</li>
                  <li>HTML 5, Python, Django And Flask Framework Full-Stack Course from Udemy</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative group cursor-pointer">
              {/* Matt finish overlay - main image */}
              <div className="w-64 h-72 md:w-80 md:h-96 bg-navy/10 rounded-md relative z-10 overflow-hidden">
                <img 
                  src={portraitImage} 
                  alt="Arin Karmakar Portrait" 
                  className="w-full h-full object-cover matt-finish grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Custom matt finish overlay */}
                <div className="absolute inset-0 bg-highlight/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
                
                {/* Light reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>
              
              {/* Border frame with animation */}
              <motion.div 
                className="w-64 h-72 md:w-80 md:h-96 border-2 border-highlight rounded-md absolute top-4 left-4 z-0"
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 5, y: 5 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Subtle animated shadow */}
              <motion.div 
                className="absolute -inset-4 bg-highlight/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                animate={{ 
                  boxShadow: [
                    "0 0 0 rgba(59, 130, 246, 0.1)", 
                    "0 0 20px rgba(59, 130, 246, 0.2)", 
                    "0 0 0 rgba(59, 130, 246, 0.1)"
                  ] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;