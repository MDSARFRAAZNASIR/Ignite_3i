import React from "react";
import { motion } from "framer-motion";

import FrameworkHeroBanner from "./FrameworkHeroBanner";
import Methodologies from "./Methodologies";
import ServicesPage from "./ServicesPage";
import WhyChooseUsPage from "./WhyChooseUsPage";
import ServiceScrollingPage from "./addingpages/ServiceScrollingPage";
import ContactUsPage from "./ContactUsPage";
import Footer from "./footer/Footer";

const HomePage = () => {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 90;

      const y =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
<>
    <div
      id="home"
      className="relative w-full min-h-screen bg-[#071746] text-white flex items-center overflow-hidden selection:bg-blue-500/30"
    >
      {/* Background Radial Ambient Glows  */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

     
      {/* Hero Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-32 grid md:grid-cols-12 gap-12 items-center w-full">
        {/* Left Side: Interactive Text Content Block */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="show"
          className="md:col-span-7 lg:col-span-6 flex flex-col items-start"
        >
          <div className=" flex items-center gap-4">
            {/* Subtle Accent Pill 1 */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/60 border border-slate-800 rounded-full text-xs font-semibold text-blue-400 tracking-wider uppercase mb-6 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Empowering Digital Evolution
            </motion.div>

            {/* Subtle Accent Pill 2 */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/60 border border-slate-800 rounded-full text-xs font-semibold text-blue-400 tracking-wider uppercase mb-6 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Since Oct 2019
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              IGNITE3i
            </span>
          </motion.h1>

          {/* Body Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-100 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
          >
            Our singular mission is to build highly scalable, forward-compatible
            architectures that enable enterprise businesses to grow rapidly. We
            deliver cutting-edge, secure, and highly scalable software
            ecosystems. From customized automation workflows to AI-driven
            models, our technical talent transforms abstract concepts into
            production-grade platforms.
          </motion.p>

          {/* Actions Block */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection("connect")}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center w-full sm:w-auto"
            >
              Get Started
            </button>

            <button
              onClick={() => scrollToSection("methodologies")}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center w-full sm:w-auto"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>

<FrameworkHeroBanner/>

      </div>
    </div>
    <ServiceScrollingPage/>
    <Methodologies/>
    <ServicesPage/>
    <WhyChooseUsPage/>

    <ContactUsPage/>
    <Footer/>
    </>
  );
};

export default HomePage;
