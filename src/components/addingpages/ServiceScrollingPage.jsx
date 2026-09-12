

import React from "react";
import { motion } from "framer-motion";

const ServiceScrollingPage = () => {
  // Define the text tracks to display in the marquee loop
  const services = [
    "TELECOM",
    "CLOUD",
    "APPLICATION",
    "OS",
    "AUTOMATION",
    "AI SOLUTIONS"
  ];

  // Loop configuration for infinite scroll animations
  const marqueeVariants = {
    animate: {
      x: [0, "-50%"], // Seamlessly shift halfway (since the list is duplicated)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 22, // Set scroll speed (lower number is faster)
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full bg-[#0a142f] py-14 overflow-hidden border-y border-slate-900/60 flex items-center relative select-none">
      
      {/* Dynamic Ambient Blur Glows (Left and Right edges) */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      {/* Infinite Motion Container */}
      <div className="flex w-max whitespace-nowrap">
        <motion.div
          variants={marqueeVariants}
          animate="animate"
          className="flex items-center gap-12 pr-12 text-6xl md:text-8xl font-black tracking-tighter"
        >
          {/* First Render Set */}
          {services.map((item, index) => (
            <React.Fragment key={`set1-${index}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 cursor-default">
                {item}
              </span>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] shrink-0" />
            </React.Fragment>
          ))}

          {/* Second Duplicate Set (Ensures seamless infinite loop transition) */}
          {services.map((item, index) => (
            <React.Fragment key={`set2-${index}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 cursor-default">
                {item}
              </span>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] shrink-0" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceScrollingPage;
