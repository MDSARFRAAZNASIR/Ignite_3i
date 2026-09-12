import React, { useState } from "react";
import ai from "../images/ai.jpg";
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
  Radar,
  Eye,
  ScanSearch,
  Speech,
  Bot,
  Hammer,
  BriefcaseBusiness,
  Lightbulb,
  Boxes,
  Zap,
  Mic,
} from "lucide-react";
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

const serviceCards = [
  {
    title: "Predictive Analytics & Forecasting",
    // subtitle: "Tailored to Enterprises",
    desc: "AI-powered predictive analytics has the potential to optimize operations, reduce risks, and support well-informed decision-making in diverse sectors can enhance operations.",
    icon: Radar,
  },
  {
    title: "Fraud Detection & Prevention",
    // subtitle: "High-Performance Systems",
    desc: "Machine Learning algos can sift through large datasets quickly making AI-powered fraud detection a vital in finance, insurance, cybersecurity, and ecommerce as well as other industries.",
    icon: Eye,
  },
  {
    title: "Image & Object Recognition",
    // subtitle: "Expertise in iOS & Android",
    desc: "From facial recognition for security and law enforcement to product recognition for ecommerce and retail, AI is used for both image and object recognition making it a vital tool.",
    icon: ScanSearch,
  },
  {
    title: "Natural Language Processing (NLP)",
    // subtitle: "Accelerated Launch pad",
    desc: "Learning from language data can be applied to various NLP tasks, such as speech recognition, sentiment analysis, machine translation, and text classification within a business context.",
    icon: Speech,
  },
  {
    title: "Chatbots & Virtual Assistants",
    // subtitle: "Predictive Intelligence",
    desc: "Harnessing the capabilities of AI-driven Natural Language Processing (NLP) models enhances search engine outcomes, elevates chatbot engagements, and automates content creation. This extends to various applications, leveraging tools like ChatGPT from OpenAI and other cutting-edge AI technologies.",
    icon: Bot,
  },
  {
    title: "Quality Control & Defect Detection",
    // subtitle: "Seamless Integration",
    desc: "Advanced AI algorithms possess the capability to scrutinize vast datasets, recognizing patterns that signal potential defects or quality concerns, including spotting anomalies in images or videos of products.",
    icon: Hammer,
  },
];

const whyChooseCards = [
  {
    title: "Strategic AI Solutions",
    desc: "We specialize in crafting tailored AI solutions for small and medium-sized businesses, providing them with the competitive edge needed to thrive in today’s market..",
    icon: BriefcaseBusiness,
  },
  {
    title: "Innovative Generative AI Services",
    desc: "Explore the limitless possibilities of AI creativity with our generative AI services, driving innovation and uniqueness in your products and services.",
    icon: Lightbulb,
  },
  {
    title: "Comprehensive AI Product Development",
    desc: "From ideation to deployment, we offer end-to-end AI product development services, ensuring your vision becomes a reality with cutting-edge technology.",
    icon: Boxes,
  },
  {
    title: "Efficient Business Pros Automation with AI",
    desc: "Optimize your workflows and enhance efficiency by integrating AI-driven automation into your business processes, reducing manual tasks and increasing productivity.",
    icon: Zap,
  },
  {
    title: "Tailored Chatbots and Voice Assistants Solutions",
    desc: "Engage your audience with personalized chatbots and voice assistants, creating seamless interactions and enhancing customer satisfaction.",
    icon: Mic,
  },
];

export default function ArtificialIntelligence() {
  const [activeTab, setActiveTab] = useState("backend");

  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={ai}
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
              Harness the Power of AI
              <br />
              Technology for Your Business
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5 my-2 text-[20px] lg:text-[28px] text-white font-extralight"
            >
              Unlock the Unattainable through the capabilities of AI
            </motion.p>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5 text-[18px] lg:text-[20px] text-white font-semibold"
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
            <div className="bg-gradient-to-r from-yellow-800 via-gray-600 to-transparent py-10 px-10 mt-10 max-w-6xl mx-auto">
              {/* <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[28px] lg:text-[46px] tracking-wide"> */}
              <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[28px] lg:text-[32px] tracking-wide">
                Curious about how Artificial Intelligence can transform your
                business? Netpace’s AI development solutions are purpose-built
                to enhance your business’s operational efficiency.
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
              <p className="text-center text-[18px] lg:text-[22px] leading-[1.8] font-light text-slate-100">
                We leverage AI technologies to take your company to the whole
                new level of intelligent automation. Our practical applications
                of AI create disruptive new products and enhance existing
                business systems.
              </p>
              <p className="text-center text-[18px] lg:text-[22px] leading-[1.8] font-light text-slate-100">
                At Netpace, we understand that successful AI initiatives require
                a diverse team with specialized skills. Our dedicated AI teams
                consist of professionals who play crucial roles in bringing AI
                projects to fruition. Explore AI solutions designed to expedite
                product launches and enhance productivity, customized for
                forward-thinking SMBs, Enterprises and Startups.
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
            <h2 className="text-[40px] lg:text-[42px] font-extralight tracking-wide text-white">
              Harness the Power of Machine Learning and Generative AI
            </h2>

            <p className="mt-8 text-center  lg:text-[22px] text-[18px] leading-[1.8] font-light text-slate-100">
              Generative AI facilitates advanced functionalities, empowering
              users to accomplish more, automate repetitive tasks, and save
              valuable time. Integrate specialized Machine Learning (ML)
              solutions and tools like ChatGPT to optimize your company’s
              expenditures, streamline internal processes, and gain a
              competitive advantage. Revolutionize your workflows and products
              with the capabilities of Large Language Models and Generative AI
              solutions.
            </p>
            <h2 className="text-[40px] lg:text-[42px] font-light tracking-wide text-white mt-12">
              AI Capabilities
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
          <div className="grid lg:grid-cols-3 gap-20">
            {/* Left Heading */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-[25px] lg:text-[45px] leading-[1.05] font-sans text-white">
                Why Choose
                <br />
                Ignite3i?
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
                        <h3 className="text-[27px] leading-[1.1] font-extralight text-[#E5BC82]">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-[18px] leading-light font-light text-white/95">
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
