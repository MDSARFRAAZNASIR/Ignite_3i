


import React from "react";
import dig from "../images/dig.jpg";
import { motion} from "framer-motion";


import {
  ArrowRight,

  BriefcaseBusiness,
  Lightbulb,
  Boxes,
  Zap,
} from "lucide-react";
import MovingRoleCards from "./MovingRoleCards";
import Footer from "../footer/Footer";
import ContactUsPage from "../ContactUsPage";




const whyChooseCards = [
  {
    title: "Specialized Talent Acquisition",
    desc: "Our Staffing solutions focus on sourcing highly skilled professionals adept in Content Creation, Advertising Solutions, and Social Media Management.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Innovative Technologies",
    desc: "Leveraging cutting-edge tools and strategies, we amplify creative campaigns and elevate brand visibility.",
    icon: Lightbulb,
  },
  {
    title: "Strategic Insights & Analytics",
    desc: "Our research-oriented approach provides actionable insights for user-centered design and content creation, enhancing audience targeting.",
    icon: Boxes,
  },
  {
    title: "Collaborative Partnership",
    desc: "We collaborate closely with partners to not only deliver exceptional talent but also to align creative strategies with business objectives effectively.",
    icon: Zap,
  },
  
];

export default function  DigitalCreative() {

  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={dig}
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
            Marketing & Creative
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[28px] text-white font-light tracking-wide mb-2 py-2"
            >
Empower Your Digital Vision with Ignite3i
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
             
   to-transparent py-10 px-10 mt-10 max-w-6xl mx-auto">
              {/* <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[28px] lg:text-[46px] tracking-wide"> */}
              <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[28px] lg:text-[32px] tracking-wide">
                At Ignite<span className="text-red-500">3i</span>, we recognize that digital presence is essential for businesses seeking to thrive in today’s competitive landscape. Our Staffing Service Provider Staffing Solutions offer comprehensive support in fulfilling your Digital & Creative resource needs.
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
              <p className="text-center text-[18px] lg:text-[22px] leading-[1.5] font-light ">
               We understand that an exceptional user experience (UX) and captivating digital content are pivotal for your brand’s success. A great UX will effectively escalate conversion, promote loyalty and is, in essence, a hallmark of companies with loyal customers leading towards strong profits.
              </p>

              <p className="text-center text-[18px] lg:text-[22px] leading-[1.5] font-light ">
In the digital realm, where innovation drives success, businesses require seamless access to a diverse set of creative talents and digital expertise. Ignite<span className="text-red-500">3i</span> provides unparalleled Creative Services and Digital Marketing Solutions to empower your brand’s journey towards excellence.
              </p>
              <p className="text-center text-[18px] lg:text-[22px] leading-[1.5] font-light ">

              Our commitment lies in leveraging cutting-edge Marketing Technology (MarTech) and Advertising Solutions to craft compelling narratives and visually striking Graphic Design Services. From strategic Content Creation to managing Social Media campaigns and fostering Creative Campaigns, we empower businesses to captivate audiences and drive engagement.
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
              Our mission at Ignite<span className="text-red-500">3i</span> is centered around sourcing, vetting, and
              placing talent in diverse roles.
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
              <h2 className="text-[25px] lg:text-[45px] leading-[1.05] font-sans text-white">
                Why Choose
                <br />
                Ignite<span className="text-red-500" >3i</span>?
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