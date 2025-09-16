import { motion } from "framer-motion";
import { useInView } from "../shared/hooks/use-in-view";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { useState } from "react";
import { projects } from "../data/projects";
import { 
  microcreditPlaceholder,
  creditAnalysisPlaceholder,
  webScrapePlaceholder,
  portfolioPlaceholder
} from "../assets/projects/placeholders";

export function Projects() {
  const { ref, inView: isInView } = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.1 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <section className="section py-24 bg-background" id="projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading text-2xl md:text-3xl mb-4 flex items-center justify-center">
            Projects I've Built
          </h2>
          <p className="text-navy-light max-w-xl mx-auto">
            A showcase of my technical skills and problem-solving abilities. These projects demonstrate my 
            experience in data analysis, web development, and financial technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="group relative rounded-lg overflow-hidden bg-muted/50 h-80">
                {/* Project image with matt finish */}
                <div className="absolute inset-0 z-0">
                  <div className="w-full h-full flex items-center justify-center bg-foreground/5">
                    {/* Use placeholder image based on project title */}
                    <img
                      src={
                        project.title === "Micro-Credit" ? microcreditPlaceholder :
                        project.title === "Credit Analysis" ? creditAnalysisPlaceholder :
                        project.title === "WebScrape" ? webScrapePlaceholder : portfolioPlaceholder
                      }
                      alt={project.title}
                      className="w-24 h-24 opacity-40 group-hover:opacity-70 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-navy/60 transition-opacity duration-500 
                    group-hover:bg-navy/40 backdrop-blur-[2px] group-hover:backdrop-blur-none"></div>
                </div>
                
                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <motion.div 
                    initial={{ y: 0 }}
                    animate={hoveredProject === index ? { y: -10 } : { y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-highlight transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Project description card */}
                    <motion.div 
                      className="bg-background/90 backdrop-blur-md p-4 rounded-md shadow-lg mb-4"
                      initial={{ opacity: 0.8, y: 10 }}
                      animate={hoveredProject === index ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm text-navy">
                        {project.description}
                      </p>
                    </motion.div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-highlight/20 text-highlight px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex space-x-3">
                      {project.links.github && (
                        <motion.a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-background/80 hover:bg-background rounded-full text-navy hover:text-highlight transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <GithubIcon size={20} />
                        </motion.a>
                      )}
                      
                      {project.links.live && (
                        <motion.a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-background/80 hover:bg-background rounded-full text-navy hover:text-highlight transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <ExternalLinkIcon size={20} />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="https://github.com/GODL0111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy-light hover:text-highlight transition-colors duration-300"
          >
            <span>Check out more of my work on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}