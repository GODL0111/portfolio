import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../shared/hooks/use-in-view";

export function ExperiencePage() {
  const { ref, inView: isInView } = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen pt-24">
      <section className="section bg-background py-24" id="experience">
        <div className="container" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading text-2xl md:text-3xl mb-4 flex items-center justify-center">
              <span className="text-highlight font-mono mr-2">03.</span>
              Work Experience
            </h2>
            <p className="text-navy-light max-w-xl mx-auto">
              My professional journey and the roles where I've made an impact.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* Tata Power Experience */}
            <motion.div
              className="bg-navy/5 rounded-lg p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-navy">Field Engineer</h3>
                  <p className="text-highlight font-medium">Tata Power</p>
                </div>
                <p className="text-navy-light font-mono mt-2 md:mt-0">2021 - 2023</p>
              </div>

              <ul className="space-y-3 text-navy-light">
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Boiler Engineer: Managed 1070MW (525MW*2) plant.</span>
                </li>
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Contributed to AOH, also taken part as a safety team.</span>
                </li>
                <li className="flex">
                  <span className="text-highlight mr-2">▹</span>
                  <span>Proactively monitored and maintained plant systems to increase efficiency and reduce leakages.</span>
                </li>
              </ul>
            </motion.div>

            {/* Leadership Experience */}
            <motion.div
              className="bg-navy/5 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-navy mb-4">Leadership Positions</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <p className="font-medium">Chairperson of GeeksForGeeks Student Chapter</p>
                    <p className="text-navy-light font-mono">2024-25</p>
                  </div>
                  <p className="text-navy-light mt-2">
                    Leading tech initiatives and coordinating programming workshops for students.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <p className="font-medium">Captain of PeerHub Student Chapter</p>
                    <p className="text-navy-light font-mono">2025</p>
                  </div>
                  <p className="text-navy-light mt-2">
                    Facilitating peer-to-peer learning and mentorship programs.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <p className="font-medium">Google Student Ambassador</p>
                    <p className="text-navy-light font-mono">2025</p>
                  </div>
                  <p className="text-navy-light mt-2">
                    Representing Google on campus and organizing tech events and workshops.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}