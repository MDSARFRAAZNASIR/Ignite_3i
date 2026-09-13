

import React, { useState } from "react";
import it from "../images/it.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaAws, FaJava, FaSwift, FaAngular } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { CiApple } from "react-icons/ci";
import { RiSvelteFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiLaravel,
  SiSpringboot, // ✅ Fixed from SiSpring
  SiPython,
  SiPhp,
  SiDotnet, // ✅ Double check: Ensure your react-icons package is updated for this to resolve
  SiFlutter,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiFirebase,
  SiKotlin,
  SiAnsible,
  SiTerraform,
} from "react-icons/si";

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



// Color mapping for each technology
const techColors = {
  // Backend
  Java: "#007396",
  ".NET": "#512BD4",
  PHP: "#777BB4",
  "Node.js": "#339933",
  Laravel: "#FF2D20",
  Spring: "#6DB33F",
  Python: "#3776AB",

  // Frontend
  React: "#61DAFB",
  "Next.js": "#000000",
  Angular: "#DD0031",
  Vue: "#4FC08D",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Svelte: "#FF2D20",

  // Mobile
  Flutter: "#02569B",
  Swift: "#F05138",
  ReactNative: "#0081A3",
  Kotlin: " #00AFFF",
  "Objective-C": "#F7DF1E",

  // Platforms
  AWS: "#FF9900",
  Azure: "#0078D4",
  "Google Cloud": "#4285F4",
  Firebase: "#FFCA28",

  // DevOps
  Docker: "#2496ED",
  Ansible: "#EE0000 ",
  Kubernetes: "#326CE5",
  Terraform: "#7B42BC",
};

const techStackData = {
  backend: [
    { name: "Java", icon: FaJava },
    { name: ".NET", icon: SiDotnet },
    { name: "PHP", icon: SiPhp },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Laravel", icon: SiLaravel },
    { name: "Spring", icon: SiSpringboot }, // ✅ Fixed from SiSpring
    { name: "Python", icon: SiPython },
  ],
  frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Angular", icon: FaAngular },
    { name: "Vue", icon: SiVuedotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Svelte", icon: RiSvelteFill },
  ],
  mobile: [
    { name: "Flutter", icon: SiFlutter },
    { name: "Java", icon: FaJava },
    { name: "Swift", icon: FaSwift },

    { name: "ReactNative", icon: TbBrandReactNative },

    { name: "Kotlin", icon: SiKotlin },
    { name: "Objective-C", icon: CiApple },
  ],
  platforms: [
    { name: "AWS", icon: FaAws },
    { name: "Azure", icon: VscAzure },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "Firebase", icon: SiFirebase },
  ],
  devops: [
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "AWS", icon: FaAws },

    { name: "Azure", icon: VscAzure },
    { name: "Terraform", icon: SiTerraform },

    { name: "Docker", icon: SiDocker },
    { name: "Ansible", icon: SiAnsible },

    { name: "Kubernetes", icon: SiKubernetes },
  ],
};



const whyChooseCards = [
  {
    title: "Global Talent Access",
    desc: "Leverage our extensive global network to access top-tier talent, ensuring that your IT team is equipped with the best professionals in the industry.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Tailored IT Staffing Solutions:",
    desc: "Ignite3i offers customized IT staffing solutions, ensuring that your specific needs are met with precision and efficiency.",
    icon: Lightbulb,
  },
  {
    title: "Diverse Role Coverage",
    desc: "From Java Developers to Data Scientists, Ignite3i covers a broad spectrum of IT roles, providing a comprehensive solution for all your staffing needs.",
    icon: Boxes,
  },
  {
    title: "Efficient Recruitment Process:",
    desc: "Our streamlined recruitment process ensures a swift and efficient experience, saving you time and resources in building a high-performing IT team.",
    icon: Zap,
  },
  {
    title: "Expertise and Agility",
    desc: "Our decades long industry expertise enables us to find talent that aligns with evolving trends and demands, boosting your firm’s agility in the face of technological changes.",
    icon: Mic,
  },
];

export default function ItStaffing() {
  const [activeTab, setActiveTab] = useState("backend");

  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={it}
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
              className="text-[50] lg:text-[55px] leading-[1.1] font-extralight text-white tracking-tight"
            >
            Tailored IT Staffing Solutions
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[28px] text-white font-light mb-2 py-2"
            >
Global Reach, Swift Solutions
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
In today’s fast-paced IT landscape, the reliance on advanced technology is integral to seamless operations. At Ignite<span className="text-red-500">3i</span> Inc., we offer comprehensive IT staffing services tailored specifically for firms seeking reliable IT Support and Managed IT Services. Our specialized solutions cater to the unique demands of engineering firms, providing Co-managed IT options that ensure uninterrupted technological support.
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
              <p className="text-center text-[18px] lg:text-[20px] leading-[1.8] font-light ">
             For IT firms, any downtime is more than an inconvenience—it hampers productivity, threatens success, and undermines innovation. Our IT staffing services and solutions are meticulously designed to provide you with the best talent that helps mitigate such risks and bolster your tech capabilities. Whether you’re looking to fill that PHP position or an expert Java developer – by entrusting your IT staffing needs to Netpace, you unlock a world where you will have access to top tier, best-in-class talent that will help you
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
            <h2 className="text-[35px] lg:text-[42px] font-extralight tracking-tight text-yellow-400">
We have successfully fulfilled the following roles
            </h2>

            <p className="mt-8 text-[18px] lg:text-[22px] leading-[1.8] font-light text-[#F3F4F6]">
             Ignite<span className="text-red-500">3i</span> fulfills vital roles crucial for IT firms, ensuring a seamless technological infrastructure. Our expertise extends beyond these roles, covering a wide range of IT roles comprehensively.
            </p>
           
          </motion.div>

        
          <MovingRoleCards/>


        </div>
      </section>

      {/* ================= WHY CHOOSE IGNITE3i 4 ================= */}

      <section className="relative overflow-hidden bg-[#0F1D49] py-24">
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
              <h2 className="text-[48px] lg:text-[64px] leading-[1.05] font-extralight text-white tracking-wide">
                Why Choose
                <br />
                Ignite<span className="text-red-500">3i</span>?
              </h2>
            </motion.div>

            {/* Right Features */}

            <div className="lg:col-span-2">
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
                        <h3 className="text-[34px] leading-tight font-extralight text-[#E5BC82]">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-[18px] leading-9 font-light text-white/95">
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
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          <div className="text-center">
            <h2 className="text-5xl font-light uppercase tracking-wide text-white">
              Technology We Use
            </h2>
          </div>

          {/* Tabs */}

          <div className="mt-16 bg-[#32354B] flex flex-wrap justify-center">
            {[
              { key: "backend", label: "BACKEND" },
              { key: "frontend", label: "FRONTEND" },
              { key: "mobile", label: "MOBILE" },
              { key: "platforms", label: "PLATFORMS" },
              { key: "devops", label: "DEVOPS/INFRASTRUCTURE" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-14 py-8 text-2xl font-light transition-all

          ${
            activeTab === tab.key
              ? "bg-[#3B8395] text-white"
              : "text-white hover:bg-[#3B8395]/40"
          }
          `}
              >
                {tab.label}
              </button>
            ))}
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
              {techStackData[activeTab].map((tech, index) => {
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

