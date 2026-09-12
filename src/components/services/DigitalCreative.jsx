import React, { useState } from "react";
import digital from "../images/digtal.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaWordpress,  FaHtml5, FaInvision, FaFigma} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandWebflow, TbBrandAdobeIndesign  } from "react-icons/tb";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { PiSketchLogoLight } from "react-icons/pi";


import {
  SiBootstrap ,
  SiMarvelapp
  
} from "react-icons/si";

import {
  ArrowRight,
  Radar,
  Eye,
  ScanSearch,
  BriefcaseBusiness,
  Lightbulb,
  Boxes,
  Search,
  Users,
  ClipboardCheck,
  FileText,
  Layout,
  Code,
  Smartphone
  
} from "lucide-react";
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
  Bootstrap:"#7952b3",
  WordPress:"#0073aa",
  "HTML 5":"#F16529",
  "CSS 3":"#0000FF ",
  Invision:" #ff3366",
  Webflow:"#146EF5",
  Indesign:"#E749A0",
  Illustrator:"#DC6920",
  Sketch:"#FB941c",
  Marvel:"#A259FF",
  Figma:"#0ACF83",
  Photoshop:"#31A8FF"

};

const techStackData = {
  platforms: [

    {name:"Bootstrap", icon: SiBootstrap },
    {name:"WordPress", icon:  FaWordpress},
    {name:"HTML 5", icon: FaHtml5},
    {name:"CSS 3", icon:FaCss3Alt},
    {name:"Invision", icon:FaInvision},
    {name:"Webflow", icon:TbBrandWebflow},
    {name:"Indesign", icon:TbBrandAdobeIndesign },
    {name:"Illustrator", icon:DiIllustrator},
    {name:"Sketch", icon:PiSketchLogoLight},
    {name:"Marvel", icon:SiMarvelapp},
    {name:"Figma", icon:FaFigma},
    {name:"Photoshop", icon: DiPhotoshop}

  ],
};

const serviceCards = [
  {
    title: "Websites that resonate with people",
    desc: "Craft robust and scalable web applications that cater specifically to your business needs.",
    icon: Radar,
  },
  {
    title: "Connect with customers",
    desc: "Develop high-performance and feature-rich mobile apps using .NET, ensuring a seamless user experience.",
    icon: Eye,
  },
  {
    title: "Be found on Google",
    desc: "Build custom software solutions that address your unique business challenges, enhancing efficiency.",
    icon: ScanSearch,
  },
];

const whyChooseCards = [
  {
    title: "Creative Copy to Build trust​",
    desc: "Today’s consumers are looking for answers to their problems and they need to know that your business will give them what they need.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Connect and convert with powerful copy​",
    desc: "In today’s fast-paced world, consumers seek rapid solutions. Powerful copy is the difference between sending your audience to sleep vs engaging them.",
    icon: Lightbulb,
  },
  {
    title: "Compelling Copy",
    desc: "Share your message effectively and maintain customer engagement through creative copy that captivates and sustains their interest.",
    icon: Boxes,
  },

];

const processData = [
  {
   id: 1,
    number: "01",
    title: "Discover",
    icon: Search,
    description: "Thorough research on user information, technical constraints, client goals, and requirements. User and stakeholder interviews, content and site audits, task analysis, and ecosystem mapping.",
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400"
  },
  {
    id: 2,
    number: "02",
    title: "Research",
    icon: Users,
    description: "In-depth user research to gather expectations and preferences. Creation of user profiles and journeys to enhance workflow optimization.",
    color: "from-purple-600 to-purple-800",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400"
  },
  {
    id: 3,
    number: "03",
    title: "Audit",
    icon: ClipboardCheck,
    description: "Ensure easy accessibility to user-specific activities, actions, and navigation elements. Empirical methods for enhanced conversions and data-driven improvements.",
    color: "from-cyan-600 to-cyan-800",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400"
  },
  {
    id: 4,
    number: "04",
    title: "Requirements",
    icon: FileText,
    description: "Comprehensive understanding of project and client needs. Creation of a detailed requirement definition document for project management.",
    color: "from-emerald-600 to-emerald-800",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400"
  },
  {
    id: 5,
    number: "05",
    title: "Wireframes",
    icon: Layout,
    description: "Structured flow creation for app or website. Content block design for organized content presentation.",
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-400"
  },
  {
    id: 6,
    number: "06",
    title: "Prototype",
    icon: Code,
    description: "Crafting an interactive simulation of the final product. Detailed review and refinement for visualization and usability.",
    color: "from-rose-600 to-rose-800",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-400"
  },
  {
    id: 7,
    number: "07",
    title: "Testing",
    icon: Smartphone,
    description: "Rigorous post-deployment testing to ensure seamless functionality.",
    color: "from-indigo-600 to-indigo-800",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-400"
  }
];

export default function DigitalCreative() {
  const [activeTab] = useState("platforms");

  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={digital}
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
              Digital & Creative
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[28px] font-light tracking-wide text-white mb-2 py-2"
            >
             Maximize your website to Convert browsers into buyers
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
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-7 h-12 rounded-full border border-white/40 flex justify-center">
            <div className="w-1.5 h-3 rounded-full bg-white mt-2"></div>
          </div>
        </motion.div> */}
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
              <h2 className="max-w-6xl mx-auto text-center italic leading-relaxed font-extralight text-white text-[28px] lg:text-[32px] tracking-wide">
Netpace’s Digital and Creative unit houses a skilled team focused on delivering high-impact digital solutions to boost your brand’s online visibility. Our commitment to innovative design strategies guarantees a seamless digital presence with an impressive visual appeal.
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
             

              <p className="text-center text-[18px] lg:text-[22px] leading-[1.8]  font-light text-slate-100">
With designs that deeply engage your audience, Netpace specializes in creating immersive digital experiences, compelling storytelling, and visually arresting aesthetics. At Netpace, our drive is to elevate your brand through inventive, user-centric digital solutions, catapulting your online presence to unparalleled success.
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
            <h2 className="text-[30px] lg:text-[35px] font-extralight  text-yellow-400">
Elevate User Experience Through Innovative Design
            </h2>

            <p className="mt-8 text-[18px] leading-[1.8] lg:text-[22px]  font-light text-[#F3F4F6]">
            The Netpace philosophy revolves around design thinking, emphasizing innovative solutions that aim to boost your ROI.
            </p>
            <h2 className="text-[40px] lg:text-[42px] font-extralight tracking-wide text-white mt-12">
             Websites and SEO
            </h2>

             <p className="mt-8 text-[18px] leading-[1.8] lg:text-[22px] font-light text-[#F3F4F6]">
            Your website needs to be more than just a beautiful website. With Netpace’s Design & Creative at the helm turn your website into a customer generating powerhouse. After all, your company’s website is the most valuable online tool you have.
            </p>
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
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Heading */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-[48px] lg:text-[50px]  font-light text-white tracking-wide italic">
              Copywriting and Blogs ​
              </h2>

                <p className="mt-6 text-[22px]  font-light text-[#F3F4F6]">
Let Netpace creative help you write the copy to win hearts and engage minds. Find your customers and lead them to the what they need and get them to take action.
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

      {/* SECTION 5: TECHNOLOGIES WE USE */}

      <section className="bg-[#171B36] py-24">
        <div className="max-w-7xl mx-auto items-center">
          {/* Heading */}

          <div className="text-center">
            <h2 className=" text-5xl font-light tracking-wide text-white">
            Our Design process
            </h2>

              <p className="mt-6 text-[22px]  lg:text-[33px] font-light italic text-yellow-500 underline decoration-indigo-500 decoration-2 underline-offset-4 hover:decoration-indigo-700">
We design experiences and engineer platforms that define tomorrow

            </p>

            <p className="mt-6 text-[22px] font-light text-white px-10 ">
Embracing a human-centered approach, we ensure every interaction delivers meaningful and impactful customer experiences. Our design experts meticulously craft user-centered designs from detailed wireframing to extensive prototyping – we provide lasting value for your business.

            </p>
            <p className="mt-4 text-[22px] font-light text-white px-10 ">
Dive into our world of transformative design and discover how we redefine user experiences.

            </p>
          </div>

          {/* add */}


          


    <div className="relative overflow-hidden  py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
    

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processData.map((item, index) => {
            const Icon = item.icon;
            // const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className={`group relative bg-[#1A1F3A] rounded-xl p-6 border ${item.borderColor} hover:shadow-2xl hover:shadow-${item.color.split('-')[1]}-500/20 transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Number Badge */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full ${item.bgColor} flex items-center justify-center text-sm font-light text-white/70`}>
                  {item.id}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={48} className={`text-${item.color.split('-')[1]}-400`} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className={` text-[27px] font-light leading-[1.1] text-white mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white font-light leading-relaxed">
                  {item.description}
                </p>

  
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </div>
          {/* end */}
        </div>
      </section>

{/* SECTION 5: TECHNOLOGIES WE USE */}
      <section className="bg-[#171B36] ">
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
                      size={60}
                      className="mx-auto text-white transition duration-300 hover:text-[#3B8395]"
                      style={{ color: color }}
                    />
                    <h3 className="mt-5 text-[25px] font-light text-white">
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