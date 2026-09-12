import React, { useState } from "react";
import data4 from "../images/data4.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaAws, FaJava, FaSwift } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { CiApple } from "react-icons/ci";
import { RiSvelteFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
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
  Lightbulb,
  Layers,
  ShieldCheck,
  ArrowRight,
  GitBranch,
  Workflow,
  FileCode,
  Shield,
  Zap,
  Server,
  Box,
  GitMerge,
  Settings,
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
    { name: "Angular", icon: SiAngular },
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
    title: "Data Visualization and Reporting",
    // subtitle: "Streamlined Operations",
    desc: "Transform your raw data into insightful visuals and reports. Netpace employs cutting-edge tools and techniques to create intuitive dashboards that facilitate better understanding and interpretation of your data.",
    icon: Workflow,
  },

  {
    title: "Predictive Analytics",
    // subtitle: "Accelerated Development",
    desc: "Stay ahead of the curve with predictive analytics. Ignite3i leverages advanced algorithms and models to forecast trends, identify opportunities, and mitigate risks, enabling proactive decision-making.",
    icon: GitBranch,
  },
  {
    title: "Big Data Analytics",
    // subtitle: "Platform-Native Excellence",
    desc: "Efficiently handle large volumes of data with our Big Data Analytics services. Netpace helps you derive meaningful insights from massive datasets, ensuring scalability and performance.",
    icon: FileCode,
  },

  {
    title: "Business Intelligence Solutions",
    // subtitle: "Accelerated Deployment",
    desc: "Empower your business with actionable intelligence. Netpace develops Business Intelligence solutions that enable real-time monitoring, reporting, and analysis, driving data-driven decision-making.",
    icon: Server,
  },

  {
    title: "Cloud Solutions for SaaS Data Analyticss",
    subtitle: "System Reliability",
    desc: "Netpace assists you in developing Software as a Service (SaaS) data analytics products with cloud-based deployment models. This approach not only reduces costs but also facilitates the seamless integration of your data streams on the cloud, providing unprecedented organization, storage, manipulation, and leveraging of data.",
    icon: Shield,
  },

  {
    title: "Customized Real-Time Analytics Platform",
    // subtitle: "Operational Harmony",
    desc: "Our real-time analytics platforms are designed to capture live data, offering business users the ability to visualize information instantly. This empowers your organization to make data-driven decisions in real-time.",
    icon: Box,
  },
  {
    title: "Master Data Management",
    // subtitle: "Streamlined Infrastructure",
    desc: "We enable universal data definition across domains, ensuring a unified view of customers, products, suppliers, services, and employees. Our Master Data Management solutions facilitate a cohesive understanding of data captured across various domains, enhancing overall operational efficiency.",
    icon: Settings,
  },
];

const whyChooseCards = [
  {
    title: "Simple, Scalable, and Integrated Analytics",
    desc: "At Netpace, our specialization lies in providing analytics solutions that are simple, scalable, and seamlessly integrated into your operations. We craft unique analytics solutions by focusing on developing best-in-class products that cater to the specific needs of our clients.",
    icon: GitMerge,
  },
  {
    title: "Proven Expertise in Analytics Solutions",
    desc: "Netpace has a track record of delivering robust analytics solutions, positioning our clients for success in their respective industries..",
    icon: Layers,
  },
  {
    title: "Proven Track Record",
    desc: "Netpace has a proven track record of delivering successful data analytics solutions to clients across various industries. Our results-driven approach ensures that you not only meet but exceed your business goals.",
    icon: Zap,
  },
  {
    title: "Focus on Best-in-Class Products",
    desc: "Our commitment to developing best-in-class products sets us apart, allowing us to craft analytics solutions that meet the highest standards of quality and functionality.",
    icon: Lightbulb,
  },
  {
    title: "Tailored Big Data Solutions",
    desc: "Your business is unique, and so are your data needs. We provide customized big data solutions, ensuring that our analytics services align perfectly with your operational requirements.",
    icon: ShieldCheck,
  },
];

export default function DataAnalytics() {
  const [activeTab, setActiveTab] = useState("backend");

  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={data4}
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
              Data Analytics Services
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[28px] text-white font-light tracking-wide mb-2 py-2"
            >
              Preferred Technology Stack + Digestible Data Insights = Increased
              Efficiency
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
            {/* <div className="bg-gradient-to-r from-white/10 via-white/5 to-transparent py-20 px-8"> */}
            {/* <div className="bg-gradient-to-r from-yellow-800 via-gray-600 to-transparent py-10 px-10 mt-10"> */}
            <div className="bg-gradient-to-r from-yellow-800 via-gray-600 to-transparent py-10 px-10 mt-10 max-w-6xl mx-auto">
              <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[28px] lg:text-[30px] tracking-wide">
                In the fast-evolving landscape of business, where data reigns
                supreme, Ignite<span className="text-red-500">3i</span> stands as your strategic partner for
                cutting-edge Data Analytics Services. We bring a wealth of
                expertise, delivering simple, scalable, and integrated analytics
                solutions tailored to elevate your decision-making processes.
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
                In the data-driven landscape of the modern business world,
                harnessing the power of data analytics is paramount for
                organizations striving to make informed decisions and gain a
                competitive edge. At Netpace, we offer comprehensive Data
                Analytics Services designed to unlock actionable insights from
                your data, fueling innovation, and driving business success.
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

          <div className=" px-9 grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
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
            <h2 className="text-[25px] lg:text-[45px] leading-[1.05] font-sans text-white  text-center">
              Why Choose Ignite<span className="text-red-500">3i</span>?
            </h2>
          </motion.div>

          {/* Right Features */}

          <div className="lg:col-span-2 mt-10">
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
          {/* </div> */}
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
