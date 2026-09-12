import React from "react";
import { motion } from "framer-motion";

const OurClientsPage = () => {
  // Client database - easily modify or add items here
  const clients = [
    {
      name: "TechVanguard Solutions",
      industry: "Enterprise AI & FinTech",
      logoLetter: "T",
      gradient: "from-blue-600 to-indigo-600",
      description: "Partnered to deliver end-to-end MERN stack infrastructure, optimizing payment processing architecture and data pipelining.",
    },
    {
      name: "Apex Logistics Corp",
      industry: "Supply Chain & Retail",
      logoLetter: "A",
      gradient: "from-purple-600 to-pink-600",
      description: "Engineered scalable real-time routing engines and service-area validation frameworks to automate delivery logistics.",
    },
    {
      name: "Quantum Health systems",
      industry: "Healthcare Infrastructure",
      logoLetter: "Q",
      gradient: "from-emerald-600 to-teal-600",
      description: "Designed responsive dashboard systems providing secure, role-based medical portal synchronization.",
    },
    {
      name: "Stellar eCommerce",
      industry: "Digital Commerce",
      logoLetter: "S",
      gradient: "from-amber-500 to-orange-600",
      description: "Integrated secure Razorpay transaction structures along with high-conversion checkout flows handling high daily scale.",
    },
  ];

  // Animation variants matching your page entry styling
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    // Note the "pt-28" which ensures content begins safely below your fixed Navbar without blocking layouts
    <div className="bg-black min-h-screen text-white pt-28 pb-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title & Introduction Block */}
        <div className="max-w-3xl space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold uppercase tracking-widest bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full"
          >
            Trusted Alliances
          </motion.span>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400"
          >
            Powering Industry Leaders
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            We collaborate with companies ranging from ambitious tech startups to massive enterprises at Ignite3i, transforming complex ideas into elite software architectures.
          </motion.p>
        </div>

        {/* Clients Card Interactive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: "rgba(59, 130, 246, 0.4)" }}
              className="bg-[#0b0f19] p-6 sm:p-8 rounded-2xl border border-slate-900 shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Container inside Card */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${client.gradient} flex items-center justify-center shadow-lg font-black text-xl`}>
                    {client.logoLetter}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-wide text-white">{client.name}</h2>
                    <span className="text-sm font-medium text-blue-500/90">{client.industry}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed pt-2">
                  {client.description}
                </p>
              </div>

              {/* Decorative Subtle Footer */}
              <div className="mt-6 pt-4 border-t border-slate-900/60 flex justify-between items-center text-xs text-slate-500">
                <span>Enterprise Partnership</span>
                <span className="text-blue-500/40">✦ Verified Collaboration</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Impact Statement CTA banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-950/20 via-slate-900/40 to-purple-950/20 p-8 rounded-2xl border border-slate-900 text-center space-y-4"
        >
          <h3 className="text-xl font-bold">Ready to build something phenomenal?</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Let's design and launch your next high-performance software system. Contact our engineering team today.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-blue-500/10">
            Start Your Journey ↗
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default OurClientsPage;