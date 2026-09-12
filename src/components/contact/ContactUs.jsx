
import React from "react";
import cnc from "../images/cnc.jpg";
import { motion } from "framer-motion";
import Footer from "../footer/Footer";
import ContactUsPage from "../ContactUsPage";


export default function ContactUs() {
  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={cnc}
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
             Contact Us
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[28px] text-white font-light tracking-wide mb-2 py-2"
            >
            Find more about how Netpace can help your business!
            </motion.p>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[18px] lg:text-[20px] text-white font-semibold"
            >
              Data is to business as water is to life.<sup>™</sup>
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

     

 
    <section className="min-h-screen bg-gradient-to-br from-[#123f55] via-[#17284d] to-[#263b59] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-16 text-center text-3xl font-normal md:text-4xl">
          We'll Assist Your Business In Reaching New Heights
        </h2>

        {/* Contact Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Netpace Inc. */}
          <div className="bg-white/10 p-8 backdrop-blur-sm md:p-10">
            <h3 className="mb-2 text-3xl font-normal text-[#ffc19f]">
              Ignite<span className="text-red-500">3i</span>, Inc.
            </h3>

            <h4 className="mb-5 text-2xl font-normal">
              Headquarters
            </h4>

            <p className="mb-8 text-base leading-6">
              2603 Camino Ramon, Suite 200
              <br />
              San Ramon, CA 94583
            </p>

            <p className="mb-10 text-base">
              ✉️{" "}
              <span className="ml-1">
                support@netpace.com
              </span>
            </p>

            <h4 className="mb-5 text-2xl font-normal">
              East Coast
            </h4>

            <p className="mb-10 text-base leading-6">
              Five Greentree Centre 525 Route 73 North STE 104
              <br />
              Marlton, NJ 08053
            </p>

            <h4 className="mb-5 text-2xl font-normal">
              Canada
            </h4>

            <p className="text-base leading-6">
              1235 Old Zeller Drive, Kitchener, ON
              <br />
              N2A0A3, Canada
            </p>
          </div>

          {/* Global Delivery Partners */}
          <div className="bg-white/10 p-8 backdrop-blur-sm md:p-10">
            <h3 className="mb-2 text-3xl font-normal text-[#ffc19f]">
              Global Delivery Partners
            </h3>

            <h4 className="mb-5 text-2xl font-normal">
              Ignite<span className="text-red-500">3i</span> Technology Solutions
            </h4>

            <p className="mb-8 text-base leading-6">
              Sigma Tech Park, Gamma 6th Floor, Phase 2, White Field,
              <br />
              Bangalore-560066.
            </p>

            <p className="mb-12 text-base">
              📞 <span className="ml-1">080-43534633</span>
            </p>

            <div className="mb-12 h-px bg-white/30" />

            <h4 className="mb-5 text-2xl font-normal">
              Ignite<span className="text-red-500">3i</span> Technologies
            </h4>

            <p className="mb-8 text-base leading-6">
              Suite 1003-4, 10th Floor, Park Avenue, 24A
              <br />
              Shahrah-e-Faisal, Block 6, PECHS, Karachi 75400,
              <br />
              Pakistan.
            </p>

            <p className="text-base">
              📞{" "}
              <span className="ml-1">
                +92 21 34313715,6,7
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <ContactUsPage/>
    <Footer/>
    </div>
  );
}
