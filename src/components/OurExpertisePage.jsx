import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Code, BarChart3, Layers } from "lucide-react";

const OurExpertisePage = () => {
  // Core Technical Capabilities
  const coreCompetencies = [
    {
      title: "Full-Stack Engineering",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      description: "Robust MERN stack architectures built for high availability, microservices coordination, and clean API integration patterns."
    },
    {
      title: "Data Analytics & Insights",
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      description: "Advanced analytics processing large-scale operational streams into structured visualization metrics and intelligence tools."
    },
    {
      title: "Logistics & Transaction Engines",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      description: "Custom geo-fencing route logic and reliable multi-channel payment ecosystems, including seamless Razorpay setups."
    }
  ];

  // Team Profiles & Roles Dataset
  const teamRoles = [
    {
      role: "Founder & CEO",
      name: "Executive Leadership",
      focus: "Corporate Strategy & Architecture Alignment",
      icon: <ShieldCheck className="w-5 h-5 text-yellow-400" />,
      gradient: "from-amber-500/20 to-yellow-600/5",
      borderColor: "border-amber-500/20",
      description: "Steering the overarching product vision at Ignite3i. Bridging corporate strategy with bleeding-edge engineering concepts to drive modern industry solutions."
    },
    {
      role: "Data Analytics Team",
      name: "Data Scientists & Analysts",
      focus: "Statistical Modeling & Predictive Pipeline Systems",
      icon: <BarChart3 className="w-5 h-5 text-purple-400" />,
      gradient: "from-purple-500/20 to-indigo-600/5",
      borderColor: "border-purple-500/20",
      description: "Transforming telemetry and application usage flows into strategic enterprise layers. Specializing in pipeline integrity and real-time behavioral insights."
    },
    {
      role: "Software Engineering Division",
      name: "MERN Full-Stack Engineers",
      focus: "Distributed Systems & Reactive Interfaces",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      gradient: "from-blue-500/20 to-cyan-600/5",
      borderColor: "border-blue-500/20",
      description: "The technical force delivering modular, reactive codebases. Focused on writing low-latency backends, fluid UI state-machines, and clean structural deployments."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
   

    <div id="team" className="bg-black min-h-screen text-white pt-28 pb-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Main Header */}
        <div className="max-w-3xl space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold uppercase tracking-widest bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full"
          >
            Capabilities & Leadership
          </motion.span>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400"
          >
            Our Expertise & Talent
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Meet the driving intelligence behind Ignite3i. Our multidisciplinary squads integrate product vision, mathematical analytics, and raw software capability to build clean products.
          </motion.p>
        </div>

        {/* Section 1: Capabilities Overview */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-wider text-slate-300 uppercase text-xs">Core Proficiencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreCompetencies.map((comp, idx) => (
              <div key={idx} className="bg-[#0b0f19]/40 p-6 rounded-2xl border border-slate-900/60 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900/80 flex items-center justify-center border border-slate-800">
                  {comp.icon}
                </div>
                <h3 className="text-lg font-bold text-white mt-2">{comp.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{comp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-900" />

        {/* Section 2: Leadership & Department Structure Breakdown */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-wider text-slate-300 uppercase text-xs">Organizational Roles</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6"
          >
            {teamRoles.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ borderColor: "rgba(147, 51, 234, 0.25)" }}
                className={`bg-gradient-to-br ${member.gradient} p-6 sm:p-8 rounded-2xl border ${member.borderColor} transition-all duration-300 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center`}
              >
                {/* Information Segment */}
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1 rounded bg-slate-950/80 border border-slate-800 inline-block">
                      {member.icon}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-400">{member.role}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold tracking-tight text-white">{member.name}</h3>
                  <p className="text-xs font-semibold text-purple-400 tracking-wide uppercase">{member.focus}</p>
                  
                  <p className="text-slate-400 text-sm leading-relaxed pt-1">
                    {member.description}
                  </p>
                </div>

                {/* Status Indicator Stamp */}
                <div className="w-full md:w-auto text-right bg-slate-950/40 px-4 py-2 rounded-xl border border-slate-900/80 text-xs text-slate-500 whitespace-nowrap self-stretch md:self-auto flex md:flex-col justify-between items-center md:justify-center gap-1">
                  <span className="text-slate-400 font-medium">Department Cluster</span>
                  <span className="text-purple-400/80 font-mono">Ignite3i • Core</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>


  );
};

export default OurExpertisePage;