
import React from "react";
import crc from "../images/crc.jpg";
import { motion } from "framer-motion";

import JobsListPage from "../JobListPage";
import Footer from "../footer/Footer";

export default function Careers() {
  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={crc}
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
              className=" lg:text-[66px] leading-[1.1] font-extralight text-white tracking-tight"
            >
               Careers at Ignite<span className="text-red-500">3i</span>
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[28px] text-white font-light tracking-wide mb-2 py-2"
            >
              Take your career to the next level
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
      </section>

      <section className="w-full min-h-screen bg-[#071a45] text-white px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Intro */}
          <div className="text-center max-w-6xl mx-auto">
            <p
              className="
          text-xl
          sm:text-2xl
          md:text-3xl
          lg:text-3xl
          font-light
          leading-tight
          text-[#ffbd9e]
        "
            >
              Ignite<span className="text-red-500">3i</span> is a certified Minority Business Enterprise company. We
              have worked with a variety of Fortune 500 companies and have
              brought unique skills to our partner companies.
            </p>
          </div>

          {/* Content */}
          <div
            className="
        max-w-6xl
        mx-auto
        mt-10
        sm:mt-14
        lg:mt-16
        space-y-8
        sm:space-y-10
        lg:space-y-12
      "
          >
            {/* Paragraph 1 */}
            <p
              className="
          text-base
          sm:text-lg
          md:text-xl
          lg:text-2xl
          font-light
          leading-5
          sm:leading-5
          lg:leading-7
        "
            >
              Our people-driven approach, experience and expertise across
              multiple domains brings together a community of passionate,
              dedicated individuals. We believe in a value-driven culture, where
              we make a real and lasting difference to our employees’ lives and
              careers.
            </p>

            {/* Paragraph 2 */}
            <p
              className="
          text-base
          sm:text-lg
          md:text-xl
          lg:text-2xl
          font-light
          leading-5
          sm:leading-5
          lg:leading-7
        "
            >
              Being part of the Ignite<span className="text-red-500">3i</span> team involves creating significant
              positive changes and driving business transformation through
              innovative thinking. You’ll have the opportunity not only to
              expand your technological skills but also to apply hands-on
              experience in addressing tangible real-world challenges.
            </p>

            {/* Paragraph 3 */}
            <p
              className="
          text-base
          sm:text-lg
          md:text-xl
          lg:text-2xl
          font-light
          leading-5
          sm:leading-5
          lg:leading-7
        "
            >
              We are seeking visionary thinkers, problem solvers, and
              trailblazers who are eager to collaborate, innovate, and drive
              change. Whether you’re an experienced professional or a recent
              graduate, we encourage you to explore the current openings at
              Ignite<span className="text-red-500">3i</span>.
            </p>
          </div>
        </div>
      </section>
      <JobsListPage />
      <Footer/>
    </div>
  );
}
