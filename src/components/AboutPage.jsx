


import React from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  CloudLightning, 
  Smartphone, 
  Cpu, 
  Network, 
  Layers, 
  Building2, 
  HeartPulse, 
  ShoppingBag, 
  Activity 
} from "lucide-react";

const AboutPage = () => {
  // Stagger configurations for entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const capabilities = [
    { name: "Artificial Intelligence", icon: <BrainCircuit className="w-5 h-5 text-blue-400" /> },
    { name: "Machine Learning", icon: <Activity className="w-5 h-5 text-purple-400" /> },
    { name: "Cloud Engineering", icon: <CloudLightning className="w-5 h-5 text-cyan-400" /> },
    { name: "Android Ecosystems", icon: <Smartphone className="w-5 h-5 text-emerald-400" /> },
    { name: "Telecom Networking", icon: <Network className="w-5 h-5 text-indigo-400" /> },
    { name: "Automotive Tech", icon: <Cpu className="w-5 h-5 text-pink-400" /> },
  ];

  const industries = [
    { name: "Healthcare", icon: <HeartPulse className="w-4 h-4" /> },
    { name: "Retail & Commerce", icon: <ShoppingBag className="w-4 h-4" /> },
    { name: "Telecom", icon: <Network className="w-4 h-4" /> },
    { name: "Hi-Tech", icon: <Layers className="w-4 h-4" /> },
    { name: "Banking & Finance", icon: <Building2 className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full min-h-screen bg-[#030712] text-white flex items-center justify-center px-6 md:px-8 py-24 relative overflow-hidden">
      
      {/* Background Ambient Spotlights */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10 w-full">
        
        {/* Left: Interactive Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-1 space-y-6"
        >
          {/* Subtle Accent Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/60 border border-slate-800 rounded-full text-xs font-semibold text-blue-400 tracking-wider uppercase backdrop-blur-md"
          >
            Since Oct 2019
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              IGNITE3i
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-lg leading-relaxed max-w-xl"
          >
            Formed in <span className="text-white font-semibold">October 2019</span>, our singular mission is to build highly scalable, forward-compatible architectures that enable enterprise businesses to grow rapidly.
          </motion.p>

          {/* Dynamic capabilities list */}
          <motion.div variants={itemVariants} className="space-y-4 pt-4">
            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">
              Emerging Technologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilities.map((cap, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 transition-colors duration-200"
                >
                  <div className="p-2 rounded-lg bg-slate-900/80">
                    {cap.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-300">{cap.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Target industry verticals */}
          <motion.div variants={itemVariants} className="space-y-3 pt-4">
            <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">
              Consulting Domains
            </h3>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind, i) => (
                <span 
                  key={i} 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/40 border border-slate-900 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-default"
                >
                  {ind.icon}
                  {ind.name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Modern Vector Graphic Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex-1 flex justify-center relative w-full"
        >
          {/* Backdrop Radial Glow */}
          <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="p-6 rounded-3xl bg-gradient-to-tr from-slate-900/40 to-slate-900/10 border border-slate-850 backdrop-blur-sm max-w-md w-full flex justify-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/9414/9414209.png"
              alt="Tech Ecosystem"
              className="w-72 md:w-[350px] object-contain filter drop-shadow-[0_10px_30px_rgba(59,130,246,0.15)] invert opacity-90 brightness-110"
            />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutPage;
