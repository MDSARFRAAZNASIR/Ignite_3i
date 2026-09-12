
import React, { useState } from "react";
import design from "../images/design.jpg";
import { motion} from "framer-motion";


import {
  Lightbulb,
  Layers,
  ArrowRight,
  
  Plus,
  Minus,
  Zap,
  
  GitMerge,
  Search,
  UserRound,
  CircleHelp,
  Check,
} from "lucide-react";
import Footer from "../footer/Footer";
import ContactUsPage from "../ContactUsPage";




const processData = [
  {
    id: 1,
    title: "Research And Discovery",
    icon: Search,
    description:
      "The first step in our UI/UX development process involves thorough research and discovery. We conduct in-depth user research to understand the needs, preferences, and pain points of your target audience. This phase includes:",
    points: [
      "User Interviews and Surveys",
      "Competitive Analysis",
      "Persona Development",
      "Journey Mapping",
    ],
  },
  {
    id: 2,
    title: "Personality And Culture Fit",
    icon: UserRound,
    description:
      "We focus on understanding your organization's personality, values, and culture to create a product experience that feels authentic and aligned with your brand.",
    points: [
      "Brand Personality",
      "Culture Analysis",
      "User Expectations",
      "Experience Alignment",
    ],
  },
  {
    id: 3,
    title: "Skills Assessment",
    icon: Lightbulb,
    description:
      "Our skills assessment phase helps us understand the technical and creative requirements needed to build an effective and scalable digital experience.",
    points: [
      "Technical Assessment",
      "Design Requirements",
      "Technology Selection",
      "Team Capability",
    ],
  },
  {
    id: 4,
    title: "Design And Development",
    icon: CircleHelp,
    description:
      "Once the research and assessment are complete, we transform the insights into intuitive designs and scalable digital experiences.",
    points: [
      "Wireframes",
      "UI Design",
      "Development",
      "Testing",
    ],
  },
];


const faqData = [
  {
    question: "Why is great UI/UX design so important?",
    answer:
      "Great UI/UX design is crucial because it enhances user satisfaction, drives engagement, and boosts conversion rates. A well-designed user experience can differentiate your brand and lead to long-term customer loyalty.",
  },
  {
    question: "What is Netpace's UI/UX design methodology?",
    answer:
      "Our UI/UX design methodology combines research, strategy, wireframing, visual design, prototyping, usability testing, and continuous improvement to create intuitive and engaging digital experiences.",
  },
  {
    question: "What deliverables will I get from Netpace's UI/UX design services?",
    answer:
      "Depending on your project requirements, deliverables may include user research, user personas, information architecture, wireframes, high-fidelity UI designs, interactive prototypes, design systems, and usability testing reports.",
  },
  {
    question: "How does Netpace ensure the usability of its designs?",
    answer:
      "We ensure usability through user research, usability testing, interactive prototypes, accessibility considerations, feedback cycles, and continuous design improvements based on real user behavior.",
  },
  {
    question:
      "Can Netpace's UI/UX design services help improve my business outcomes?",
    answer:
      "Yes. Effective UI/UX design can improve customer satisfaction, engagement, conversion rates, retention, and overall product usability while helping your business create a stronger digital presence.",
  },
];




const whyChooseCards = [
  {
    title: "Expertise:",
    desc: "Our team consists of seasoned professionals with extensive experience in UI/UX design.",
    icon: GitMerge,
  },
  {
    title: "Results-Driven:",
    desc: "Our focus is on driving real business outcomes, ensuring that your digital platform delivers measurable ROI.",
    icon: Layers,
  },
  {
    title: "Innovation:",
    desc: "We stay ahead of design trends to create modern, cutting-edge user experiences.",
    icon: Zap,
  },
  {
    title: "Client-Centric Approach:",
    desc: "We work closely with you to understand your goals and tailor our services to meet them.",
    icon: Lightbulb,
  },
 
];

export default function Design() {
   const [activeStep, setActiveStep] = useState(0);

  const activeItem = processData[activeStep];
   const [openIndex, setOpenIndex] = useState(0);
    const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };


  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={design}
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
           Comprehensive UI/UX <br/> Development Services
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[15px] lg:text-[23px] text-white font-light tracking-wide mb-2 py-2"
            >
From Concept to Completion: Solutions Tailored to Your Needs

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
              <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[28px] lg:text-[32px] tracking-wide">
            At Ignite<span className="text-red-500">3i</span>, we understand that great design is more than just aesthetics; it’s about creating user experiences that drive engagement and business growth. Our team of experts uses the latest UX design methods to ensure every aspect of the user experience is optimized for maximum impact. By combining deep insights into user behavior with the latest design trends, we create user experiences that drive retention and satisfaction.
              </h2>
            </div>
          </motion.div>

          {/* Description */}
          <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24">
           
              

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
            <h2 className="text-[25px] lg:text-[45px] leading-[1.05] font-sans  text-white text-center">
             Why Choose Ignite<span className="text-red-500">3i</span> for Your UI/UX Goals?
            </h2>
             <p className="mt-7 text-[18px] lg:text-[20px] leading-[1.05] font-extralight text-white tracking-wide text-center">
            Ignite<span className="text-red-500">3i</span> is your ideal partner for UI/UX development due to our dedication to delivering tailored design solutions that meet the unique needs of your business and its users. Here’s why you should choose us:
            </p>
          </motion.div>

          {/* Right Features */}

          <div className="lg:col-span-2 mt-8">
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
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
                      <h3 className="text-[25px] italic leading-tight font-extralight text-[#E5BC82]">
                        

                        {item.title}
                      </h3>

                      <p className="text-[18px]  font-light text-white/95">
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
      {/* start */}
      <section className="relative min-h-screen overflow-hidden bg-[#10162b] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#12182e_0%,#263d4e_48%,#11172d_100%)]" />


      {/* Subtle top/right overlay */}
      <div className="absolute right-0 top-0 h-[50px] w-[57%] bg-[linear-gradient(100deg,#121a2a_0%,#162235_100%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1800px]">
        {/* ================= LEFT PROCESS NAVIGATION ================= */}
        <div className="relative w-[43.3%] shrink-0 px-5 py-20 md:px-8 lg:px-12">
          {/* Vertical line */}
          <div className="absolute left-[101px] top-[170px] bottom-0 hidden w-px bg-white/10 lg:block" />

          <div className="flex flex-col gap-8">
            {processData.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={item.id}
                  className="relative flex min-h-[145px] items-center"
                >
                  {/* Large left icon */}
                  <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block">
                    <Icon
                      strokeWidth={1.7}
                      className={`h-[92px] w-[92px] transition-all duration-300 ${
                        isActive ? "text-white" : "text-white"
                      }`}
                    />
                  </div>

                  {/* Number */}
                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`absolute left-[58px] top-1/2 z-20 flex h-[72px] w-[72px] -translate-y-1/2 items-center justify-center rounded-full text-[32px] font-light transition-all duration-300 lg:left-[58px] ${
                      isActive
                        ? "bg-white text-[#0096a7]"
                        : "bg-[#0099a8] text-white"
                    }`}
                  >
                    {item.id}
                  </button>

                  {/* Process title card */}
                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`ml-[115px] flex h-[114px] w-[calc(100%-115px)] items-center rounded-r-[14px] rounded-l-[14px] px-8 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-[linear-gradient(100deg,#208b98_0%,#214c60_100%)] shadow-lg"
                        : "bg-[linear-gradient(100deg,#121a2a_0%,#162235_100%)]"
                    }`}
                  >
                    <span className="text-[22px] font-normal leading-tight text-white lg:text-[26px]">
                      {item.title}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="relative flex-1 px-6 py-12 md:px-10 lg:px-16">
          {/* Content panel */}
          <div className="relative min-h-[680px] overflow-hidden bg-[linear-gradient(180deg,rgba(72,124,130,0.55)_0%,rgba(36,56,72,0.75)_58%,rgba(18,27,48,0.92)_100%)] px-8 py-12 md:px-12 lg:px-16">
            {/* Large number */}
            <div className="mb-8 flex h-[128px] w-[128px] items-center justify-center rounded-full bg-[#19343c] text-[56px] font-light">
              {activeItem.id}
            </div>

            {/* Heading */}
            <h2 className="mb-5 text-[38px] font-semibold leading-tight text-[#ffb89b] md:text-[44px] lg:text-[48px]">
              {activeItem.title}
            </h2>

            {/* Description */}
            <p className="max-w-[760px] text-[20px] leading-[1.7] text-white md:text-[22px] lg:text-[24px]">
              {activeItem.description}
            </p>

            {/* Points */}
            <div className="mt-8 space-y-5">
              {activeItem.points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 text-[20px] md:text-[22px]"
                >
                  <Check
                    className="h-6 w-6 shrink-0 text-[#19d2dc]"
                    strokeWidth={3}
                  />

                  <span className="text-white">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


      

      {/* end */}

      {/* start */}
      <section className="w-full bg-[#11152b] px-5 py-10 text-white md:px-8 lg:px-12">
        <h2 className="text-[48px] lg:text-[45px]  font-light text-white text-center">
            Frequently asked questions
            </h2>
      <div className="mx-auto w-full max-w-[1800px]">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="border-b border-white/70"
            >
              {/* Question */}
              <button
                type="button"
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-8 text-left md:py-9 lg:py-10"
              >
                <h3
                  className={`max-w-[1450px] text-[28px] font-light leading-[1.25] transition-colors duration-300 md:text-[36px] lg:text-[42px] ${
                    isOpen
                      ? "text-[#ffc39f]"
                      : "text-[#c9956b]"
                  }`}
                >
                  {faq.question}
                </h3>

                {/* Plus / Minus button */}
                <span
                  className={`flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full transition-all duration-300 md:h-[66px] md:w-[66px] ${
                    isOpen
                      ? "bg-[#575353]"
                      : "bg-[#376b7c]"
                  }`}
                >
                  {isOpen ? (
                    <Minus
                      className="h-7 w-7 text-white md:h-8 md:w-8"
                      strokeWidth={2}
                    />
                  ) : (
                    <Plus
                      className="h-7 w-7 text-white md:h-8 md:w-8"
                      strokeWidth={2}
                    />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[1500px] pb-8 pr-16 text-[18px] leading-[1.7] text-white md:pb-10 md:text-[21px] lg:text-[24px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    <ContactUsPage/>
      <Footer/>

      
    </div>
  );
}
