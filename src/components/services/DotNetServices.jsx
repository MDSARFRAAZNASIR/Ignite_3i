import React, { useState } from "react";
import dot1 from "../images/dot1.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaAws } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloud, SiFirebase } from "react-icons/si";
import { ArrowRight, Radar, Eye, ScanSearch, Speech } from "lucide-react";

import { RiNumber1 , RiNumber2, RiNumber3, RiNumber4, RiNumber5, } from "react-icons/ri";
import Footer from "../footer/Footer";
import ContactUsPage from "../ContactUsPage";


// Color mapping for each technology
const techColors = {
  // Platforms
  AWS: "#FF9900",
  Azure: "#0078D4",
  "Google Cloud": "#4285F4",
  Firebase: "#FFCA28",
  Oracle: "#EE0000",
};

const techStackData = {
  platforms: [
    { name: "AWS", icon: FaAws },
    { name: "Azure", icon: VscAzure },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "Firebase", icon: SiFirebase },
    { name: "Oracle", icon: GrOracle },
  ],
};

const serviceCards = [
  {
    title: "Web Application Developmen",
    desc:"Craft robust and scalable web applications that cater specifically to your business needs.",
    icon: Radar,
  },
  {
    title: "Mobile Application Development",
    desc:"Develop high-performance and feature-rich mobile apps using .NET, ensuring a seamless user experience.",
    icon: Eye,
  },
  {
    title: "Custom Software Development",
    desc: "Build custom software solutions that address your unique business challenges, enhancing efficiency.",
    icon: ScanSearch,
  },
  {
    title: "Legacy System Migration",
    desc: "Seamlessly transition from legacy systems to modern .NET solutions, minimizing downtime and data loss.",
    icon: Speech,
  },
  {
    title: "API Integration",
    desc: "Connect and streamline your applications with our expert API integration services, facilitating data flow and business efficiency.",
    icon: Speech,
  },
   {
    title: "E-commerce Solutions",
    desc: "Enhance your online retail presence with our comprehensive e-commerce solutions, designed to boost sales and customer engagement.",
    icon: Speech,
  },
   {
    title: "Cloud-based Solutions",
    desc: "Leverage the power of the cloud with our scalable and flexible .NET-based cloud solutions, ensuring cost-effective and agile operations.",
    icon: Speech,
  },
];

const whyChooseCards = [
  {
    title: "Consultation & Planning",
    desc: "We kick-start our projects with in-depth consultations, understanding your specific business needs and objectives. This forms the foundation for a strategic plan, ensuring a successful .NET development project.",
    icon: RiNumber1,
  },
  {
    title: "Customization & Configuration",
    desc: "Our .NET experts meticulously tailor .NET modules, workflows, and features to align seamlessly with your business processes, enhancing functionality and efficiency.",
    icon: RiNumber2,
  },
  {
    title: "Data Migration",
    desc: "Transitioning to .NET is a breeze with Netpace. We specialize in secure and efficient data migration, ensuring data integrity and minimal disruptions throughout the process.",
    icon: RiNumber3,
  },
  {
    title: "Integration",
    desc: "Smooth data flow is key to operational efficiency. We seamlessly integrate .NET solutions with your existing software applications, facilitating data exchange across different platforms and improving overall efficiency.",
    icon: RiNumber4,
  },
  {
    title: "Training & Support",
    desc: "Our commitment doesn’t end with implementation. We offer comprehensive training to ensure your team can make the most of .NET’s features. Plus, we provide ongoing support to address any issues and optimize system performance post-implementation.",
    icon: RiNumber5,
  },
];

const DotNetServices = () => {
  const [activeTab] = useState("platforms");

  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={dot1}
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
              className=" text-[50px] lg:text-[55px] leading-[1.1] font-extralight text-white tracking-tight"
            >
             Expert .Net Development Services
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[28px] text-white font-extralight tracking-wide py-2 mb-2"
            >
              Custom .NET Development Excellence at Ignite<span className="text-red-500">3i</span>
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
            <div className="bg-gradient-to-r from-yellow-800 via-gray-600 to-transparent py-10 px-10 mt-10 max-w-6xl mx-auto">
              {/* <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[28px] lg:text-[46px] tracking-wide"> */}
              <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[28px] lg:text-[32px] tracking-wide">
               At Ignite<span className="text-red-500">3i</span> we specialize in delivering top-tier .NET development solutions, crafted to elevate your business success. Our experienced team of .net developers bring your visions to life with innovative, impactful solutions.


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
                 <p className="text-center text-[18px] lg:text-[22px] leading-[1.8] font-light ">
                Our Microsoft-certified professionals have strong experience in ASP.NET MVC, ASP.NET WebAPI, ASP.NET Core, and more! We understand the significance of .NET development in today’s tech landscape and are committed to helping you harness its full potential for your digital initiatives.
              </p>
              <h1 className="text-[25px] lg:text-[45px] font-extralight tracking-wide text-center text-white">
                Why Choose Ignite<span className="text-red-600">3i</span>?
              </h1>

              <p className="text-center text-[18px] lg:text-[22px] leading-[1.8] font-light ">
               At Ignite<span className="text-red-500">3i</span>, we excel in providing top-tier .NET development services tailored to your unique requirements. With an approach that encapsulates flexibility, efficiency, and involvement as our core characteristics, we offer a deep understanding of the challenges faced by businesses today, our .NET experts ensure that your projects are in safe hands. Our extensive experience serving a diverse range of businesses, from enterprises to SMBs, makes us the ideal choice for your .NET development needs.
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

     <section className="bg-[#171B36] py-24">
             <div className="max-w-7xl mx-auto px-6">
               {/* Heading */}
     
               <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="max-w-6xl mx-auto text-center mb-20"
               >
                 <h2 className="text-[35] lg:text-[45px] font-extralight tracking-wide text-white">
                   Our .NET Development Services
                 </h2>
               </motion.div>
     
               {/* Cards */}
     
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-9">
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

           
                 {/* ================= WHY CHOOSE IGNITE3i 4 ================= */}
           
                 <section className="relative overflow-hidden bg-[#0F1D49] py-24">
                   {/* Background Glow */}
                   <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[150px]" />
           
                   <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                     {/* <div className="grid lg:grid-cols-3 gap-20"> */}
                     {/* Left Heading */}
           
                     <motion.div
                       initial={{ opacity: 0, x: -40 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.7 }}
                     >
                       <h2 className="text-[48px] lg:text-[45px] leading-[1.05] font-extralight text-white tracking-wide text-center">
                         Our Proven Process
                       </h2>
                     </motion.div>
           
                     {/* Right Features */}
           
                     <div className="lg:col-span-2 mt-10">
                       <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 px-9">
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
           
                               <div className="flex-shrink-0 mt-1 h-15 w-15  bg-purple-500 rounded-full">
                                 <Icon
                                   size={35}
                                   
                                   strokeWidth={1.4}
                
                                   className="text-slate-400 "
                                 />
                               </div>
           
                               {/* Text */}
           
                               <div>
                                 <h3 className="text-[30px] leading-tight font-extralight ">
                                   {item.title}
                                 </h3>
           
                                 <p className="mt-4 text-[17px]  font-light text-white/95">
                                   {item.desc}
                                 </p>
                               </div>
                             </motion.div>
                           );
                         })}
                       </div>
                     </div>
                     {/* </div> */}
                   </div>
                 </section>

     

      {/* SECTION 5: TECHNOLOGIES WE USE */}
      <section className="bg-[#171B36] py-24">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-5xl font-light  tracking-wide text-white">
             Technologies & Platforms
            </h2>
          </div>

          {/* Technologies */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-20 gap-x-10 mt-20"
            >
              {/* Use optional chaining to prevent error */}
              {techStackData[activeTab]?.map((tech, index) => {
                const Icon = tech.icon;
                const color = techColors[tech.name] || "#FFFFFF";

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -10,
                      scale: 1.08,
                    }}
                    className="text-center cursor-pointer"
                  >
                    <Icon
                      size={92}
                      className="mx-auto text-white transition duration-300 hover:text-[#3B8395]"
                      style={{ color: color }}
                    />
                    <h3 className="mt-8 text-[30px] font-light text-white">
                      {tech.name}
                    </h3>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <ContactUsPage/>
      <Footer/>
    </div>
  );
}

 
export default DotNetServices