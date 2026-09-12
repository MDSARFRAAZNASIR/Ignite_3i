import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Target,  Infinity } from "lucide-react";
import { SiEnterprisedb } from "react-icons/si";
import { VscOrganization } from "react-icons/vsc";
import { MdOutlineEngineering } from "react-icons/md";

const WhyChooseUsPage = () => {
  // Key value points dataset
  const valueProps = [
    {
    title: "Small Medium Enterprises",
    icon: <SiEnterprisedb className="w-12 h-12 text-emerald-400" />,
    description: "Tailored digital solutions engineered to streamline operations, reduce overhead, and accelerate digital transformation without enterprise bloat.",
    glorify: "Maximum Efficiency"
  },
  {
    title: "Enterprises Organizations",
    icon: <VscOrganization className="w-12 h-12 text-indigo-400" />,
    description: "Robust, enterprise-grade architectures with strict compliance, high availability, and seamless integration into complex legacy ecosystems.",
    glorify: "Uncompromising Scale"
  },
  {
    title: "Startup & Entrepreneurs",
    icon: <MdOutlineEngineering className="w-12 h-12 text-purple-400" />,
    description: "Rapid MVP development and scalable infrastructure designed to validate concepts quickly, iterate fast, and capture market opportunities.",
    glorify: "Rapid Time-to-Market"
  },
    
     {
      title: "Production-Grade Engineering",
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      description: "We don't build prototypes that break under weight. We deploy rock-solid, production-ready full-stack architectures designed to scale infinitely.",
      glorify: "Zero Technical Debt"
    },
    {
      title: "Blazing Execution Speed",
      icon: <Zap className="w-12 h-12 text-amber-400" />,
      description: "Our engineered software stacks use streamlined asynchronous logic and optimized DB query paths to achieve lightning-fast response times.",
      glorify: "Sub-100ms Responses"
    },
    {
      title: "Precision Product Focus",
      icon: <Target className="w-12 h-12 text-rose-400" />,
      description: "We dive deep into your target workflows. Every routing setup, operational pipeline, and checkout gateway is built specifically for your end business model.",
      glorify: "100% Customized"
    },
    {
      title: "Seamless API Integration",
      icon: <Infinity className="w-12 h-12 text-purple-400" />,
      description: "From custom delivery area validations to robust Multi-tier Razorpay payment integrations, your third-party software connects without friction.",
      glorify: "Robust Connectivity"
    }
  ];

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
   
 
    <div id="choose-us" className="bg-gradient-to-br from-[#0b1733] via-[#0d1b38] to-[#111827] min-h-screen text-white pt-28 pb-20 px-6 md:px-8 overflow-hidden relative">
   
      
      {/* Decorative Animated Atmospheric Background Glowing Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none content-['']" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none content-['']" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Animated Main Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full inline-block"
          >
            The Ignite3i Advantage
          </motion.span>
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500"
          >
            Why Industry Leaders Choose Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-slate-100 leading-relaxed"
          >
            We don't just write code — we build competitive technical leverage. Here is how we help modern projects outperform the market.
          </motion.p>
        </div>

        {/* Dynamic Metric Grid Board */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-2xl bg-gradient-to-r from-yellow-800 via-gray-600 to-transparent border border-slate-900/80 text-center shadow-inner"
        >
          {[
            { value: "99.9%", label: "System Uptime" },
            { value: "24/7", label: "Active Monitoring" },
            { value: "2x", label: "Deployment Speed" },
            { value: "50+", label: "Launches Completed" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1 p-2">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono">
                {stat.value}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-100">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* 3D-Hover Value Props Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {valueProps.map((prop, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ 
                y: -8, 
                borderColor: "rgba(139, 92, 246, 0.4)",
                boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.15)"
              }}
              className="bg-gradient-to-r from-yellow-800 via-gray-600 to-transparent backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-900/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Card Gradient Glow */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {prop.icon}
                </div>
                
                <h3 className="text-2xl font-bold tracking-wide text-white group-hover:text-blue-400 transition-colors">
                  {prop.title}
                </h3>
                
                <p className="text-slate-100 text-2sm leading-relaxed">
                  {prop.description}
                </p>
              </div>

              {/* Functional Bottom Tag */}
              <div className="mt-6 pt-4 border-t border-slate-900/40 flex justify-between items-center text-xm font-semibold">
                <span className="text-slate-100 font-mono text-xs">Standard Metric</span>
                <span className="text-purple-400/80 bg-purple-950/30 border border-purple-900/40 px-2 py-0.5 rounded">
                  {prop.glorify}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
 
 

  );
};

export default WhyChooseUsPage;