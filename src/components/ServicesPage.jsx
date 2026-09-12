

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Lightweight version for faster loading

// High-fidelity custom SVG paths for a polished tech aesthetic
const services = [
  {
    title: "Artificial Intelligence",
    desc: "Building intelligent solutions with AI & ML models to automate workflows and enhance decision-making.",
    color: "from-blue-500 to-indigo-600",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.242c0 .289.234.523.523.523h3.454a.523.523 0 0 0 .523-.523V3.104M9 6h6m-6 3h6m-6 3h6m-6 3h6m-3 3v3m-6-6h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      </svg>
    ),
  },
  {
    title: "Cloud Engineering",
    desc: "Secure and scalable cloud solutions, enabling businesses to innovate and grow faster.",
    color: "from-cyan-500 to-blue-600",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Telecom & Networking",
    desc: "Advanced telecom and networking solutions to keep enterprises globally connected.",
    color: "from-purple-500 to-pink-600",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856a9 9 0 0113.788 0M1.924 8.674a12.75 12.75 0 0120.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    title: "Automation & Automotive",
    desc: "Smart automation and next-gen automotive software for modern industries.",
    color: "from-orange-500 to-amber-600",
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.68-.34-1.42-.5-2.16-.5s-1.48.17-2.16.5M12 6v12m0-12L8 10m4-4l4 4M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Consulting & Strategy",
    desc: "Helping enterprises with business development, consulting, and digital transformation.",
    color: "from-emerald-500 to-teal-600",
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5M3.75 3h16.5M21 3v11.25A2.25 2.25 0 0118.75 16.5H16.5M6 16.5v2.25A2.25 2.25 0 008.25 21h7.5A2.25 2.25 0 0018 18.75V16.5M6 16.5H16.5" />
      </svg>
    ),
  },
  {
    title: "Healthcare & Retail",
    desc: "Innovative IT solutions for healthcare, retail, banking, and hi-tech sectors.",
    color: "from-rose-500 to-red-600",
    icon: (
      <svg className="w-8 h-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const ServicesPage = () => {
  // Correctly initializes the particle engine bundle
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Stagger animation container variations
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
   

    <div id="services" className="relative w-full min-h-screen bg-[#2b2361] text-white px-6 py-24 overflow-hidden selection:bg-blue-500/30">
  
      
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Particle Canvas Layer */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: { distance: 180, links: { opacity: 0.3 } }
            }
          },
          particles: {
            color: { value: "#3b82f6" },
            links: {
              color: "#3b82f6",
              distance: 130,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: { enable: true, speed: 1.2, direction: "none", outModes: "out" },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Main Section Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
          >
            Our Core Ecosystem
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 origin-center"
          />
        </div>

        {/* Services Structural Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-[#065d62a6] backdrop-blur-md border border-slate-800 p-8 rounded-2xl flex flex-col items-start text-left overflow-hidden transition-all duration-300 hover:border-slate-700/60"
            >
              {/* Background gradient spotlight on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

              {/* Decorative dynamic neon linear edge */}
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${service.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out`} />

              {/* Icon Frame */}
              <div className="p-3 bg-[#111111e5] rounded-xl border border-slate-800/80 mb-6 group-hover:border-slate-700 transition-colors shadow-inner">
                {service.icon}
              </div>

              {/* Heading Text */}
              <h3 className="text-xl font-bold text-slate-100 mb-3 tracking-wide group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Body Text */}
              <p className="text-slate-200 text-sm leading-relaxed font-normal group-hover:text-slate-300 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

  );
};

export default ServicesPage;