
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Cpu, Rocket } from "lucide-react";

const slides = [
    
  {
    step: "01",
    tag: "INSPIRE",
    title: "Sparking Vision",
    subtitle: "Uncovering Business Challenges",
    description:
      "We collaborate closely with your leadership team to align on bold goals, identify operational bottlenecks, and discover high-value digital opportunities.",
    icon: Lightbulb,
    badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    badgeBgtext:"text-amber-400",
    accentGlow: "from-amber-500/20 via-orange-500/5 to-transparent",
    iconContainer: "bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-amber-500/20",
    dotColor: "bg-amber-400",
  },
  {
    step: "02",
    tag: "IDEATE",
    title: "Architecting Tech",
    subtitle: "Custom Engineering & Architecture",
    description:
      "We translate vision into actionable blueprints — designing intuitive UI/UX, scalable database schemas, and modern tech architectures (MERN, Cloud, AI).",
    icon: Cpu,
    badgeBg: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    badgeBgtext: "text-blue-400",

    accentGlow: "from-blue-500/20 via-indigo-500/5 to-transparent",
    iconContainer: "bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-blue-500/20",
    dotColor: "bg-blue-400",
  },
  {
    step: "03",
    tag: "IMPLEMENT",
    title: "Building & Launching",
    subtitle: "Development, QA & Deployment",
    description:
      "Our full-stack engineers transform blueprints into production-ready software — executing clean code, automated test pipelines, and cloud deployments.",
    icon: Rocket,
    badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    badgeBgtext:"text-emerald-400",
    accentGlow: "from-emerald-500/20 via-teal-500/5 to-transparent",
    iconContainer: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-emerald-500/20",
    dotColor: "bg-emerald-400",
  },
];

export default function FrameworkHeroBanner() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const IconComponent = slide.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="md:col-span-5 lg:col-span-6 flex justify-center items-center relative w-full"
    >
      {/* Background Ambient Glow (Elevates contrast against #030712) */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-3xl rounded-3xl pointer-events-none opacity-70" />

      {/* Floating Canvas Wrapper - Keeps float decoupled from content height to prevent vibration */}
      <motion.div
        animate={{ y: [0, 0, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full max-w-[540px]"
      >
        {/* Card Frame Container */}
        <div className="relative border border-slate-700/60 rounded-3xl bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-blue-950/50 overflow-hidden min-h-[420px] flex flex-col justify-between">
          
          {/* Dynamic Background Gradient Glow according to active step */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.accentGlow} transition-all duration-700 pointer-events-none`} />

          {/* Top Bar: Brand & Step Indicator */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800/80">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider border ${slide.badgeBg}`}>
              THE 3i FRAMEWORK • {slide.step}
            </span>
            <span className="text-xm font-mono font-semibold tracking-widest text-slate-200 uppercase">
              IGNITE3i ECOSYSTEM
            </span>
          </div>

          {/* Slide Content Area */}
          <div className="relative z-10 my-auto py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.tag}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-4"
              >
                {/* Header Group with Icon */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    <span className={`  ${slide.badgeBgtext}`}>{slide.tag[0]}</span>{slide.tag.slice(1)}: <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">{slide.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className={`p-3.5 rounded-2xl border ${slide.iconContainer} shrink-0 shadow-lg`}>
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>

                {/* Body Text */}
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Bar: Indicators & Manual Navigation */}
          <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            {/* Step Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === idx
                      ? `w-8 ${item.dotColor}`
                      : "w-2 bg-slate-700 hover:bg-slate-600"
                  }`}
                  aria-label={`Go to ${item.tag}`}
                />
              ))}
            </div>

            {/* Step Label Tracker */}
            <div className="text-xs font-mono text-slate-400">
              0{current + 1} / 0{slides.length}
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}