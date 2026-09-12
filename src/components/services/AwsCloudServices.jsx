import React, { useState } from "react";
import awsimage from "../images/awsimage.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaAws } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloud, SiFirebase } from "react-icons/si";
import { ArrowRight, Radar, Eye, ScanSearch, Speech } from "lucide-react";
import Footer from "../footer/Footer";
import ContactUsPage from "../ContactUsPage";

// Color mapping for each technology
const techColors = {
  // Platforms
  AWS: "#FF9900",
  Azure: "#0078D4",
  "Google Cloud": "#4285F4",
  Firebase: "#FFCA28",
  GrOracle: "#EE0000",
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
    title: "AWS Consulting",
    // subtitle: "Tailored to Enterprises",
    desc: [
      "Our dedicated team of AWS experts excels at understanding your unique business needs and objectives. We go beyond surface-level analysis. We delve deep into your infrastructure, studying its intricacies and nuances. Through a meticulous assessment, we gain a profound understanding of your operational landscape.",
      "This comprehensive knowledge allows us to craft tailored recommendations for AWS services that align perfectly with your strategic goals. Whether you’re looking to enhance cost efficiency, improve performance, or ensure security and compliance, our AWS consulting services are your compass in the AWS ecosystem.",
    ],
    icon: Radar,
  },
  {
    title: "AWS Integration",
    // subtitle: "High-Performance Systems",
    desc: [
      "At Netpace, we don’t just integrate AWS with your existing systems; we engineer seamless harmony among your tools. As your trusted AWS partner, we approach integration as an art form, ensuring that data flows seamlessly and processes synchronize flawlessly.",

      "Our AWS integration services are the architects of connectivity, fostering an environment where AWS becomes an integral and synchronized component of your technology stack. We don’t just optimize your AWS environment; we orchestrate a symphony of efficiency and productivity, guaranteeing that your AWS setup operates in perfect concert with your business objectives.",
    ],
    icon: Eye,
  },
  {
    title: "Scaling",
    // subtitle: "Expertise in iOS & Android",
    desc: [
      "Business growth is exhilarating, and we firmly believe that technology should never stand in the way of your expansion. Netpace empowers your AWS infrastructure to scale effortlessly as your business takes flight. Whether its an influx of website visitors, a surge in transactional data, or the demand for additional computing power, rest assured that we’ve got you covered.",

      "We design your AWS environment with scalability in mind, allowing it to flex and adapt to the evolving needs of your enterprise. With Netpace, your AWS setup is your partner in growth, never a limiting factor.",
    ],
    icon: ScanSearch,
  },
  {
    title: "Development",
    // subtitle: "Accelerated Launch pad",
    desc: [
      "In the world of AWS, customization is key, and our AWS developers are your creative artisans. We don’t just tailor AWS to your specific needs; we sculpt it into a masterpiece that precisely fits your business’s unique requirements.",

      "From building custom applications that cater to niche functionalities to crafting integrations that seamlessly connect your ecosystem, we’re driven by a commitment to optimize your AWS environment for peak performance. Your vision becomes our blueprint as we collaborate to turn your AWS environment into a finely-tuned instrument, harmonizing technology with your business’s distinct melody.",
    ],
    icon: Speech,
  },
];

// Certification data array for easy updates
const certifications = [
  {
    id: 1,
    title: "Cloud Practitioner",
    level: "FOUNDATIONAL",
    // Gradient borders and shadows to mimic the glowing hexagon style
    borderColor: "border-slate-500 shadow-[0_0_15px_rgba(148,163,184,0.15)]",
    bgGradient: "from-slate-900 via-slate-800 to-slate-950",
    titleColor: "text-slate-100",
  },
  {
    id: 2,
    title: "Developer",
    level: "ASSOCIATE",
    borderColor: "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    bgGradient: "from-blue-950 via-slate-900 to-blue-950",
    titleColor: "text-blue-400",
  },
  {
    id: 3,
    title: "Advanced Networking",
    level: "SPECIALTY",
    borderColor: "border-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.3)]",
    bgGradient: "from-purple-950 via-slate-900 to-purple-950",
    titleColor: "text-purple-300",
  },
];

export default function AwsCloudServices() {
  const [activeTab] = useState("platforms");

  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={awsimage}
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
              Ignite<span className="text-red-500">3i</span>: Your Expert Partner for
              <br />
              Technology for Your Business
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[28px] text-white tracking-wide font-light mb-2 py-2"
            >
              Tailored AWS Consulting Solutions
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
                Whether streamlining costs, enhancing operational performance,
                or ensuring top-tier security measures, our tailored AWS
                solutions are designed to meet your specific needs and drive
                your business towards digital excellence.
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
              <h1 className="text-[25px] lg:text-[45px] leading-[1.05] font-sans text-center text-white">
                Why Choose Ignite<span className="text-red-600">3i</span>?
              </h1>

              <p className="text-center text-[18px] lg:text-[22px] leading-[1.8] font-light">
                Ignite<span className="text-red-500">3i</span>’s team of dedicated AWS experts go beyond surface-level
                analysis. We excel at understanding your unique business needs
                and objectives, and aim to delve deep into your infrastructure,
                studying its intricacies and nuances. By understanding your
                operational landscape we are able to craft tailored
                recommendations for AWS services that align with your strategic
                goals.
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
            <h2 className="text-[40px] lg:text-[56px] font-extralight tracking-wide text-white">
              AWS Solutions to Drive Success
            </h2>

            <p className="mt-5 text-[18px] lg:text-[22px] leading-[1.8] font-light text-[#F3F4F6]">
              As a leading expert in AWS solutions, our primary focus is to help
              your business harness the transformative capabilities and fully
              realize the potential of AWS.
            </p>
          </motion.div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 px-9">
            {serviceCards.map((service, idx) => {
              const Icon = service.icon;

              const bg =
                idx % 3 === 0
                  ? // ? "bg-[#4E7883]" // teal
                    // : "bg-[#645955]"; // warm grey
                    "bg-gradient-to-b from-[#4E7883] to-[#1D2F34]" // Teal gradient
                  : "bg-gradient-to-b from-[#645955] to-[#252120]"; // Warm grey gradient

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
                  <div className="mb-10 flex items-center">
                    <Icon
                      size={62}
                      strokeWidth={1.3}
                      className="text-white mr-4"
                    />
                    <h3 className="text-[30px] leading-tight font-extralight text-white">
                      {service.title}
                    </h3>
                  </div>

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

      <section className="w-full bg-gradient-to-b from-[#4E7883] to-[#1D2F34 text-white py-16 px-6 md:px-12 font-sans select-none">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16 gap-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-100">
              AWS Certifications
            </h2>
            {/* Mock AWS Logo */}
            <div className="flex flex-col items-center sm:items-end opacity-90">
              <span className="text-3xl font-bold tracking-tight lowercase">
                aws
              </span>
              <div className="w-12 h-2 bg-orange-500 rounded-full mt-[-2px] blur-[0.5px] clip-curve"></div>
            </div>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className={`w-64 h-64 border-2 ${cert.borderColor} bg-gradient-to-b ${cert.bgGradient} flex flex-col items-center justify-between p-6 text-center transition-transform duration-300 hover:scale-105`}
                style={{
                  // Creates the clean hexagonal shape natively via CSS clip-path
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                {/* Top: Brand Header */}
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-1 text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                    <span>aws</span>
                    <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                  </div>
                  <div className="text-[10px] tracking-widest text-gray-400 uppercase mt-0.5">
                    certified
                  </div>
                </div>

                {/* Middle: Certification Title */}
                <div className="px-2">
                  <div className="w-12 h-[1px] bg-gray-600 mx-auto mb-3 opacity-50"></div>
                  <h3
                    className={`text-xl font-bold leading-tight tracking-wide ${cert.titleColor}`}
                  >
                    {cert.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-gray-600 mx-auto mt-3 opacity-50"></div>
                </div>

                {/* Bottom: Certification Level */}
                <div className="mb-4 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                  {cert.level}
                </div>
              </div>
            ))}
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
