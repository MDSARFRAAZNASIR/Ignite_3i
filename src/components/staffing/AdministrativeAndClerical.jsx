import React from "react";
import add1 from "../images/add1.jpg";
import { motion } from "framer-motion";

import {
  ArrowRight,
  BriefcaseBusiness,
  Lightbulb,
  Boxes,
  Zap,
  Mic,
} from "lucide-react";
import MovingRoleCards from "./MovingRoleCards";
import Footer from "../footer/Footer";
import ContactUsPage from "../ContactUsPage";

const whyChooseCards = [
  {
    title: "Diverse Talent Pool",
    desc: "Access a diverse pool of skilled professionals, ensuring that your Administrative & Clerical team is comprised of individuals with the right expertise for each role.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Seamless onboarding",
    desc: "We handle the administrative burden, ensuring a smooth integration for both you and your new hire..",
    icon: Lightbulb,
  },
  {
    title: "Compliance expertise",
    desc: "We stay current on labor laws and regulations, ensuring you avoid any compliance issues.",
    icon: Boxes,
  },
  {
    title: "Efficient Recruitment Process",
    desc: "Our streamlined recruitment process ensures swift and efficient placements, minimizing downtime and optimizing productivity for your Administrative & Clerical functions..",
    icon: Zap,
  },
  {
    title: "Proven Track Record",
    desc: "With a track record of successful placements, Ignite3i has the experience and expertise to ensure that your Administrative & Clerical team is staffed with the best talent availablew.",
    icon: Mic,
  },
];

export default function AdministrativeAndClerical() {
  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={add1}
          alt="Enterprise Development"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Left Gradient Only */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/75 via-35% to-transparent"></div>

        {/* Animated Glow */}
        <div className="absolute left-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse"></div>

        {/* Floating Grid */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div> */}

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
              className="text-[50] lg:text-[55px] leading-[1.1] font-extralight text-white tracking-tight"
            >
              Top-Tier Administrative & Clerical Staffing Solutions
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[28px] text-white font-light tracking-wide mb-2 py-2"
            >
              We Build Dream Teams
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
      {/* SECTION 2 : ENTERPRISE CONTENT */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1733] via-[#0d1b38] to-[#111827] text-white">
        {/* Background Glow */}
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="relative z-10">
          {/* Quote Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl mx-auto"
          >
            {/* <div className="bg-gradient-to-r from-white/10 via-white/5 to-transparent py-20 px-8">
             */}
            <div className="bg-gradient-to-br
              from-cyan-400/50
             via-cyan-950
             
 to-transparent  py-10 px-10 mt-10 max-w-6xl mx-auto">
              {/* <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[28px] lg:text-[46px] tracking-wide"> */}
              <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[28px] lg:text-[32px] tracking-wide">
                In today’s dynamic business world, efficient and organized
                administrative support is no longer a luxury, it’s a necessity.
                At Ignite<span className="text-red-500">3i</span>, we understand the crucial role well-rounded
                Administrative & Clerical professionals play in propelling your
                business forward. That’s why we offer comprehensive staffing
                solutions designed to match your unique needs and empower your
                operations.
              </h2>
            </div>
          </motion.div>

          {/* Description */}
          <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-14"
            >
              <p className="text-center text-[18px] lg:text-[22px] leading-[1.5] font-light text-slate-100 ">
                In the ever-evolving business landscape, the backbone of
                operational efficiency often lies in the Administrative &
                Clerical teams. Netpace specializes in providing personalized
                staffing solutions for various Administrative & Clerical roles.
                From finding Administrative Assistants to meticulous Data Entry
                Specialists, we ensure your team is equipped with professionals
                with the necessary skills and attention to detail necessary to
                drive administrative excellence.
              </p>
              <p className=" mt-3 text-center text-[18px] lg:text-[22px] leading-[1.5] font-light text-slate-100">
                Our comprehensive staffing solutions are tailored to meet the
                specific needs of companies seeking reliable, skilled, and
                dedicated professionals to fortify their Administrative &
                Clerical departments.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex justify-center pt-4"
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-cyan-400 shadow-xl shadow-cyan-500/30"
                >
                  Discover Our Services
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}

      <section className="bg-[#171B36] py-15">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto text-center mb-20"
          >
            <h2 className="text-[40px] lg:text-[42px] font-extralight tracking-wide text-yellow-400">
              We have successfully fulfilled the following roles
            </h2>

            <p className="mt-6 text-[22px] leading-[1.8] font-light text-[#F3F4F6]">
              Our expert recruiters assess your requirements, industry
              specifics, and company culture to curate a talent pool of highly
              qualified candidates.
            </p>
            {/* <h2 className="text-[40px] lg:text-[42px] font-extralight tracking-wide text-white mt-12">
              AI Capabilities
            </h2> */}
          </motion.div>

          <MovingRoleCards />
        </div>
      </section>

      {/* ================= WHY CHOOSE IGNITE3i 4 ================= */}

      <section className="relative overflow-hidden bg-[#0F1D49] py-15">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-20">
            {/* Left Heading */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className=" py-12 text-[25px] lg:text-[45px] leading-[1.05] font-sans text-white">
                Why Choose
                <br />
                Ignite3i?
              </h2>
            </motion.div>

            {/* Right Features */}

            <div className="lg:col-span-2 py-12">
              <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
                {whyChooseCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ x: 8 }}
                      className="flex gap-6"
                    >
                      {/* Icon */}

                      <div className="flex-shrink-0 mt-1">
                        <Icon
                          size={48}
                          strokeWidth={1.4}
                          className="text-white"
                        />
                      </div>

                      {/* Text */}

                      <div>
                        <h3 className="text-[27px] leading-[1.1] font-extralight text-[#E5BC82]">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-[18px] leading-tight font-light text-white/95">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
     <ContactUsPage/>

     <Footer/>
    </div>
  );
}
