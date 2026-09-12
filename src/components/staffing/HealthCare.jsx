import React from "react";
import health from "../images/health.jpg";
import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa";
import { SiConvertio } from "react-icons/si";
import { HiOutlineClipboardCopy } from "react-icons/hi";

import {
  ArrowRight,
} from "lucide-react";
import MovingRoleCards from "./MovingRoleCards";

// React Icons

// Lucide React Icons - Only import what exists
import { GitBranch, FileCode,Server } from "lucide-react";
import Footer from "../footer/Footer";
import ContactUsPage from "../ContactUsPage";

const whyChooseCards = [
  {
    title: "Nurse Staffing Solutions",
    desc: "Our specialized Nurse Staffing Solutions cater to short-term, long-term, travel nursing, and permanent placements. We understand the criticality of maintaining optimal nursing levels to meet patient demands, ensuring seamless care delivery.",
    icon: FaCopy,
  },
  {
    title: "Specialized Allied Health Professionals​",
    desc: "Our services cover a wide array of allied health roles, including physical therapists, medical laboratory technicians, radiologic technologists, and more. We prioritize matching skilled professionals to meet the specific needs of diverse healthcare environments.",
    icon: SiConvertio,
  },
  {
    title: "Workforce Technology in Healthcare",
    desc: "Embracing cutting-edge workforce technology in healthcare, Netpace integrates innovative solutions that streamline staffing processes. Our adept utilization of technology optimizes staffing management, enhancing operational efficiency for healthcare institutions.",
    icon: HiOutlineClipboardCopy,
  },
];

const serviceCards = [
  {
    title: "We're the Healthcare Staffing Services Partner for You",
    desc: "We offer a comprehensive solution for all your crucial healthcare staffing requirements, from temporary short-term and long-term personnel needs to permanent and international placement.",
    icon:GitBranch,
  },

  {
    title: "A Nationwide Leader in Staffing Services & Solutions",
    desc: "We’re an award-winning, endorsed affiliate partner recognized for our excellence in healthcare staffing services.",
    icon: GitBranch,
  },
  {
    title: "Proven Reputation & Healthcare Experience",
    desc: "With 8 years of experience in staffing, we understand your organization inside and out, which allows us to deliver personalized service.",
    icon: FileCode,
  },

  {
    title: "Continuum of Healthcare Staffing Services",
    desc: "Whether your organization requires short-term or long-term travel nursing, long-term temporary staffing, or permanent international or allied placement, we can fulfill your needs.",
    icon: Server,
  },

];

export default function HealthCare() {
  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={health}
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
              Business Professional
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[18px] lg:text-[28px] text-white font-light tracking-wide mb-2 py-2"
            >
              Empowering Our Partners with Swift, Scalable Strategies
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
          {/* Description */}
          <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-14"
            >
              <p className="text-center text-[18px] lg:text-[22px] leading-[1.5] font-light ">
                As a leading{" "}
                <span className="text-cyan-300">
                  {" "}
                  healthcare staffing services provider{" "}
                </span>
                , Ignite<span className="text-red-500">3i</span> offers comprehensive healthcare staffing and placement
                solutions that provide your organization with complete vendor
                management, personalized service, and the proven results you
                deserve from an healthcare staffing services partner.
              </p>
              <p className="mt-1 text-center text-[18px] lg:text-[22px] leading-[1.5] font-light ">
                Our team of established staffing experts have the key to your
                most pressing short-term, long-term, and permanent healthcare
                staffing and workforce optimization needs.
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
              {/* Cards */}
          
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 px-16">
                      {serviceCards.map((service, idx) => {
                        const Icon = service.icon;
          
                        const bg =
                          idx % 2 === 0
                            ? "bg-gradient-to-b from-[#4E7883] to-[#1D2F34]" // teal
                            : "bg-gradient-to-b from-[#645955] to-[#252120]"; // warm grey
          
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{
                              y: -10,
                              transition: { duration: 0.25 },
                            }}
                            className={`${bg}
                      min-h-[380px]
                      p-10
                      rounded-lg
                      transition-all
                      duration-300
                      hover:shadow-2xl
                      hover:shadow-cyan-900/30
                      cursor-pointer`}
                          >
                            <div className="mb-10">
                              <Icon size={62} strokeWidth={1.3} className="text-white" />
                            </div>
          
                            <h3 className="text-[30px] leading-tight font-extralight text-white">
                              {service.title}
                            </h3>
          
                            {service.subtitle && (
                              <p className="mt-3 text-lg text-slate-100 font-light">
                                {service.subtitle}
                              </p>
                            )}
          
                            <p className="mt-6 text-[17px] leading-8 font-light text-slate-100">
                              {service.desc}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}

      <section className="bg-[#171B36] py-20">
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
              Our mission at Netpace is centered around sourcing, vetting, and
              placing talent in diverse roles.
            </p>
            {/* <h2 className="text-[40px] lg:text-[42px] font-extralight tracking-wide text-white mt-12">
              AI Capabilities
            </h2> */}
          </motion.div>

          <MovingRoleCards />
        </div>
      </section>

      {/* ================= WHY CHOOSE IGNITE3i 4 ================= */}

     <section className="relative overflow-hidden bg-[#0F1D49] py-24">
             {/* Background Glow */}
             <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[150px]" />
     
             <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
               <div className="grid lg:grid-cols-2 gap-20">
                 {/* Left Heading */}
     
                 <motion.div
                   initial={{ opacity: 0, x: -40 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.7 }}
                 >
                   <h2 className="text-[48px] lg:text-[50px]  font-light text-white tracking-wide italic">
                   Healthcare Roles Fulfilled by Ignite<span className="text-red-500">3i</span>
                   </h2>
     
                     <p className="mt-6 text-[22px]  font-light text-[#F3F4F6]">
Ignite<span className="text-red-500">3i</span> plays a pivotal role in fulfilling various key positions within healthcare organizations, catering to the critical needs with precision and expertise. Check out more at www.netpacehealth.com.
                 </p>
                 </motion.div>
     
                 {/* Right Features */}
     
                 <div className="lg:col-span-1">
                   <div className="grid md:grid-cols-1 gap-x-20 gap-y-16">
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
     
                             <p className="mt-3 text-[18px]  font-light text-white/95">
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
