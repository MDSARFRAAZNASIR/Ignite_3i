import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Methodologies = () => {
  const methodologies = [
    {
      id: 1,
      title: "Building Competence",
      subtitle: "Emerging Technologies",
      color: "from-blue-500 to-indigo-600",
      accentText: "text-blue-400",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v1.242c0 .289.234.523.523.523h3.454a.523.523 0 0 0 .523-.523V3.104M9 6h6m-6 3h6m-6 3h6m-6 3h6m-3 3v3m-6-6h18M12 21a9 9 0 100-18 9 9 0 000 18z"
          />
        </svg>
      ),
      desc: "Today’s businesses need to innovate with speed while reducing costs and managing the complexity of new and existing technologies. Virtusa combines engineering best practices and industry expertise to help clients drive digital transformation at scale, improve performance and stay ahead of the competition. \n \n Building for the future starts now. We harness the power of digital technologies and our engineering expertise to help companies continually innovate and drive maximum efficiencies. Accelerate transformation and growth by optimizing the latest tools, technologies and processes across the enterprise.",
    },
    {
      id: 2,
      title: "Team Managed Services",
      subtitle: "Enterprise Management",
      color: "from-cyan-500 to-blue-600",
      accentText: "text-cyan-400",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
      desc: (
        <div className="space-y-3">
          <p>
            <strong className="text-blue-400 font-semibold block mb-0.5">
              Application Support & Management:
            </strong>{" "}
            Innovate, evolve, and gain a competitive advantage by transforming
            your application performance. We help modernize your applications
            portfolio to reduce costs and improve business agility.
          </p>
          <p>
            <strong className="text-blue-400 font-semibold block mb-0.5">
              Application Development:
            </strong>{" "}
            Reduced cycle times, and project risks and costs while maintaining
            high-quality delivery.
          </p>
          <p>
            <strong className="text-blue-400 font-semibold block mb-0.5">
              Application Modernization:
            </strong>{" "}
            Enhance application flexibility, improve business alignment, and
            reduce TCO.
          </p>
          <p>
            <strong className="text-blue-400 font-semibold block mb-0.5">
              Application Support & Maintenance:
            </strong>{" "}
            Improve productivity, reduce maintenance costs, and maximize service
            levels.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Build Operate Transfer",
      subtitle: "Incubation Model",
      color: "from-purple-500 to-pink-600",
      accentText: "text-purple-400",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12a48.654 48.654 0 01.138-3.662M3 12l-3-3m3 3l3-3M9 19.5v3m0-3l-3-3m3 3l3-3M15 19.5v3m0-3l-3-3m3 3l3-3"
          />
        </svg>
      ),
      desc: "In the case of Build-Operate-Transfer Model, Ignite3i forms a dedicated incubation center facility for the customer which operates like an extension of the customer’s own facility during the initial stages. \n \n The dedicated facility leverages Ignite3i’s infrastructure and processes. Human resources can be existing team members, fresh joint recruits, or an optimized mix of both. Ignite3i has a well defined mechanism for smooth transition of the facility to the customer after a mutually agreed period. \n \n Advantages include: Lower Establishment Costs, Faster Time to Market, Strategic Flexibility, and Reduced Operational Risk.",
    },
    {
      id: 4,
      title: "Co Creations",
      subtitle: "Scaling Startups",
      color: "from-orange-500 to-amber-600",
      accentText: "text-orange-400",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 18.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
          />
        </svg>
      ),
      desc: "We help start-ups to evaluate new ideas and tech, create prototypes and build awesome products that scale. We accelerate your product roadmaps with our specialized engineering systems. \n \n We also help you to re-platform your existing products to latest architectures and frameworks. Our people co-create and co-develop your products to delight your customers.",
    },
    {
      id: 5,
      title: "Professional Services",
      subtitle: "Enterprise Operations",
      color: "from-emerald-500 to-teal-600",
      accentText: "text-emerald-400",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5M3.75 3h16.5M21 3v11.25A2.25 2.25 0 0118.75 16.5H16.5M6 16.5v2.25A2.25 2.25 0 008.25 21h7.5A2.25 2.25 0 0018 18.75V16.5M6 16.5H16.5"
          />
        </svg>
      ),
      desc: (
        <div className="space-y-3">
          <p className="text-slate-200 font-medium">
            An Overview of Our Key Solutions :
          </p>
          <p>
            <strong className="text-blue-400 font-semibold block mb-0.5">
              Service Enterprise Operations & Back Office Management:
            </strong>{" "}
            Transform operations, consolidate common services and improve back
            office efficiency.
          </p>
          <p>
            <strong className="text-blue-400 font-semibold block mb-0.5">
              IT Service Consolidation post M&A:
            </strong>{" "}
            Ensure timely completion of IT integration.
          </p>
          <p>
            <strong className="text-blue-400 font-semibold block mb-0.5">
              Service Workforce Management:
            </strong>{" "}
            Attract, recruit, develop, and retain a diverse body of talent.
          </p>
          <p>
            <strong className="text-blue-400 font-semibold block mb-0.5">
              Service Project Delivery:
            </strong>{" "}
            Deploy solutions and services to automate project workflows.
          </p>
          <p>
            <strong className="text-blue-400 font-semibold block mb-0.5">
              Service Delivery Assurance & Risk:
            </strong>{" "}
            Automate compliance processes using a risk-based approach.
          </p>
        </div>
      ),
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      id="methodologies"
      className="relative w-full min-h-screen  bg-[#070331] text-white px-6 py-24 overflow-hidden  selection:bg-sky-500 selection:text-white"
    >
      {/* Background Radial Ambient Glows (Matches Services Page) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#020817] via-[#020817]/75 via-35% to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96  bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Particle Background Layer */}

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
              grab: { distance: 180, links: { opacity: 0.3 } },
            },
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
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              outModes: "out",
            },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3"
          >
            How We Execute
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-100"
          >
            Our Methodologies
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 origin-center"
          />
        </div>

        {/* Structural Grid container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          {methodologies.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                layout="position"
                whileHover={{
                  y: isExpanded ? 0 : -6,
                  transition: { duration: 0.2 },
                }}
                className="group relative bg-gradient-to-b from-[#344D55] via-[#25343A] to-[#1A2327] backdrop-blur-md border border-slate-800 p-8 rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-slate-700/60 shadow-xl h-fit"
              >
                {/* Spotlight background highlight on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
                />

                {/* Decorative dynamic neon linear edge */}
                <div
                  className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${item.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out`}
                />

                <div>
                  {/* Header: Icon & Text Information */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 bg-blue-500 rounded-xl border border-slate-800/80 group-hover:border-slate-700 transition-colors ${item.accentText}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2lg font-bold text-slate-100 tracking-wide leading-snug group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs text-slate-100 tracking-wider uppercase font-semibold block mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Content Scope Wrapper */}
                  <div className="text-sm text-slate-100 leading-relaxed font-normal overflow-hidden">
                    <motion.div layout="position">
                      {!isExpanded ? (
                        <p className="line-clamp-3 group-hover:text-slate-300 transition-colors">
                          {typeof item.desc === "string"
                            ? item.desc
                            : item.title +
                              " scope and operational management layout."}
                        </p>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-slate-100 space-y-2 whitespace-pre-line"
                        >
                          {item.desc}
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Modern Interactive Trigger Button */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 w-full"
                >
                  <span>{isExpanded ? "Show Less" : "Read Full Scope"}</span>
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px]"
                  >
                    ▼
                  </motion.span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Methodologies;
