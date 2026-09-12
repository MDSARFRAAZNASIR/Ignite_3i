
import React from "react";
import about from "../images/about.jpg";
import { motion } from "framer-motion";

import CoreValues from "./CoreValues";
import AboutIgn from "./AboutIgn";

import { VscRocket } from "react-icons/vsc";
import { FaLowVision } from "react-icons/fa";
import Footer from "../footer/Footer";

export default function AboutUs() {

  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={about}
          alt="Enterprise Development"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Left Gradient Only */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/75 via-35% to-transparent"></div>

        {/* Animated Glow */}
        <div className="absolute left-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse"></div>

        {/* Floating Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[50px] lg:text-[55px] leading-[1.1] font-extralight text-white tracking-tight"
            >
         About Us
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[28px] text-white font-light tracking-tight mb-2 py-2"
            >
Our singular mission is to build highly scalable, forward-compatible architectures that enable enterprise businesses to grow rapidly
            </motion.p>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[18px] lg:text-[20px] text-white font-semibold"
            >
              Data is to business as water is to life..<sup>™</sup>
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex gap-5 flex-wrap"
            >
              <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white hover:bg-cyan-400 transition duration-300 hover:scale-105">
                Get Started
              </button>

              <button className="rounded-full border border-white/30 backdrop-blur-md px-8 py-4 text-white hover:bg-white/10 transition duration-300">
                View Services
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-7 h-12 rounded-full border border-white/40 flex justify-center">
            <div className="w-1.5 h-3 rounded-full bg-white mt-2"></div>
          </div>
        </motion.div>
      </section>
      <CoreValues/>
      <AboutIgn/>
      <section className="w-full min-h-screen bg-[#071a45] text-white px-5 sm:px-8 lg:px-16 py-12 lg:py-16">

  {/* Heading */}
  <div className="text-center max-w-5xl mx-auto">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">
      Why Ignite<span className="text-red-500">3i</span>?
    </h2>

    <p className="mt-8 text-[22px] sm:text-xl lg:text-[29px] font-light leading-tight">
      Providing transformative solutions that accelerate your success
      in the digital landscape
    </p>
  </div>

  {/* Mission */}
  <div className="max-w-6xl mx-auto mt-16 lg:mt-24">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

      {/* Rocket */}
      <div className="flex justify-center items-center order-1 lg:order-1">
        <VscRocket
          size="250px"
          border="40px"
        color="#ADD8E6"
          
        
        />
      </div>

      {/* Mission Content */}
      <div className="order-2 lg:order-2">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#ffbd9e] font-light">
          Ignite<span className="text-red-500">3i</span> Mission
        </h3>

        <div className="mt-6 space-y-5 text-base sm:text-lg leading-tight sm:leading-6">
          <p>
            Our overarching mission at Netpace is to catalyze transformative
            change through innovative, scalable tech solutions. We aim to
            streamline operations, enhance efficiency, and drive growth for
            our clients through personalized strategies and cutting-edge
            technology.
          </p>

          <p>
            Our commitment is to forge enduring, trusted partnerships,
            nurturing an environment where success flourishes and
            possibilities abound.
          </p>
        </div>
      </div>
    </div>


    {/* Vision */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mt-20 lg:mt-28">

      {/* Vision Icon */}
      <div className="flex justify-center items-center order-1 lg:order-1">
        <FaLowVision
          size="250px"
          border="40px"
        color="#ADD8E6"
          
        />
      </div>

      {/* Vision Content */}
      <div className="order-2 lg:order-2">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#ffbd9e] font-light">
          Ignite<span className="text-red-500">3i</span> Vision
        </h3>

        <div className="mt-6 space-y-5 text-base sm:text-lg leading-tight sm:leading-6">
          <p>
            Netpace strives to be at the forefront of a future where
            technology seamlessly integrates into every aspect of businesses,
            enabling unparalleled efficiency and innovation. Our vision is to
            be the catalyst for industry-wide advancement, empowering
            businesses of all sizes to thrive in an increasingly digital
            world.
          </p>

          <p>
            We know that the success of businesses today largely depends
            upon the diverse body of talent and innovative thinking.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

<Footer/>
   
      
    </div>
  );
}