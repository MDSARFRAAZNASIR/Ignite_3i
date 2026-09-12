import React, { useState } from "react";
import mobile2 from "../images/mobile2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaAws, FaJava, FaSwift } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { DiHeroku, DiDjango } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaCcStripe } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import {
  SiNodedotjs,
  SiLaravel,
  SiPython,
  SiPhp,
  SiFlutter,
  SiGooglecloud,
  SiFirebase,
  SiKotlin,
  SiServerless,
  SiExpress,
  SiFastapi,
  SiGoogleassistant,
  SiRazorpay,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

import {
  Smartphone,
  ArrowRight,
  Apple,
  Monitor,
  FileCode,
  Server,
} from "lucide-react";
import Footer from "../footer/Footer";
import ContactUsPage from "../ContactUsPage";

// Color mapping for each technology
const techColors = {
  // Backend
  Java: "#007396",
  ".NET": "#512BD4",
  Express: "#F7DF1E",
  PHP: "#777BB4",
  "Node.js": "#339933",
  Laravel: "#FF2D20",
  "Spring Boot": "#6DB33F",
  Python: "#3776AB",
  Django: "#339933",
  Php: "#7B42BC",
  FastApi: "#88E788",

  // Frontend
  Stripe: "#635BFF",
  Square: "#009E4F",
  "Authorize.net": "#DD0031",
  Razorpay: "#0D94FB ",

  // Mobile
  Flutter: "#02569B",
  Swift: "#F05138",
  ReactNative: "#0081A3",
  Kotlin: " #00AFFF",

  // Platforms
  AWS: "#FF9900",
  Azure: "#0078D4",
  "Google Cloud": "#4285F4",
  Firebase: "#FFCA28",
  Serverless: "#EE0000",
  Heroku: "#7B42BC",

  // DevOps
  MySQL: "#F29111",
  MongoDB: "#00ED64",
  PostgresQL: "#008bb9",

  Terraform: "#7B42BC",
};

const techStackData = {
  backend: [
    { name: "Java", icon: FaJava },
    { name: "Php", icon: SiPhp },

    { name: "Express", icon: SiExpress },
    { name: "Django", icon: DiDjango },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Laravel", icon: SiLaravel },
    { name: "Spring Boot", icon: BiLogoSpringBoot }, // ✅ Fixed from SiSpring
    { name: "Python", icon: SiPython },
    { name: "FastApi", icon: SiFastapi },
  ],

  language: [
    { name: "Flutter", icon: SiFlutter },
    { name: "Java", icon: FaJava },
    { name: "Swift", icon: FaSwift },
    { name: "ReactNative", icon: TbBrandReactNative },
    { name: "Kotlin", icon: SiKotlin },
  ],
  infrastacture: [
    { name: "AWS", icon: FaAws },
    { name: "Azure", icon: VscAzure },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "Firebase", icon: SiFirebase },
    { name: "Heroku", icon: DiHeroku },
    { name: "Serverless", icon: SiServerless },
  ],
  payment: [
    { name: "Razorpay", icon: SiRazorpay },
    { name: "Stripe", icon: FaCcStripe },
    { name: "Square", icon: CiSquareCheck },
    { name: "Authorize.net", icon: SiGoogleassistant },
  ],
  database: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "AWS", icon: FaAws },

    { name: "PostgresQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
  ],
};

const serviceCards = [
  {
    title: "Native App Development",
    desc: "Leveraging platform-specific technologies to create high-performance applications tailored for specific operating systems like iOS or Android. Keeping performance optimization and user-centric design at the helm, we craft apps that are functional and align with your brand identity.",
    icon: Monitor,
  },

  {
    title: "Hybrid App Mobile Development",
    desc: "Excelling in Hybrid App Mobile Development, we harness technologies like HTML, CSS, and JavaScript. By striking the right balance between native and web technologies, we deliver cost-effective solutions that maintain uniformity in user experience across various devices and operating systems..",
    icon: Smartphone,
  },
  {
    title: "React Native App Development",
    desc: "By utilizing a single codebase, we create mobile apps that perform exceptionally well on both iOS and Android platforms. Our team emphasizes reusable components and rapid development cycles, ensuring quicker time-to-market without compromising on the quality or user experience.",
    icon: FileCode,
  },

  {
    title: "Android App Development",
    desc: "Netpace offers specialized Android App Development services. From conceptualization to deployment, we ensure every aspect aligns with Google Play Store guidelines, delivering robust and engaging apps that stand out in the marketplace.",
    icon: Server,
  },

  {
    title: "iOS App Development",
    desc: "Netpace provides comprehensive iOS App Development services. Our skilled developers craft iOS apps that meet Apple’s stringent standards while delivering an immersive user experience. We leverage the latest iOS technologies and best practices to create secure, high-performance applications.",
    icon: Apple,
  },
];

export default function MobileAppDevelopment() {
  const [activeTab, setActiveTab] = useState("backend");

  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center ">
        {/* Background */}
        <img
          src={mobile2}
          alt="Enterprise Development"
          className="absolute inset-0 w-full h-200px object-cover object-center"
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
              We Make Your Great Idea a Successful App
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className=" text-[20px] lg:text-[28px] text-white tracking-wide mb-2 py-2 font-light"
            >
              We design, develop, test and grow native mobile app solutions
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

        <h2 className="text-[25px] lg:text-[45px] font-semibold font-sans leading-[1.05] text-white text-center mt-12">
          Why choose Ignite<span className="text-red-500">3i</span> ?
        </h2>
        {/* Description */}
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-14"
          >
            <p className="text-center text-[18px] lg:text-[22px]  font-light text-slate-100">
              Netpace’s mobile application development service team, comprises
              of designers, engineers, project managers, and testers – bringing
              with them unparalleled expertise. We blend cutting-edge design and
              technology to transform innovative ideas into dynamic digital
              experiences making us the ideal partner for startups and
              enterprises alike. We collaborate with our clients through an
              agile process grounded by regular checkpoints and iterative
              delivery to ensure alignment of expectations for timeline and
              budget...
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
        {/* </div> */}
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
            <h2 className="text-[35px] lg:text-[50px] font-extralight text-white tracking-wide">
              Expert Mobile Application development Service
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
              { key: "language", label: "LANGUAGE" },
              { key: "backend", label: "Backend" },
              { key: "database", label: "DATABASE" },
              { key: "payment", label: "PAYMENT SERVICES" },

              { key: "infrastacture", label: "INFRASTRUCTURE" },
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
