import React from "react";
import zen4 from "../images/zen4.jpg";
import { motion } from "framer-motion";

import {
  BarChart3,
  ArrowRight,
  Database,
  Shield,
  TrendingUp,
  Users,
  Share2,
  Phone,
  MessageSquare,
} from "lucide-react";
import Footer from "../footer/Footer";
import ContactUsPage from "../ContactUsPage";
const featuresData = [
  {
    title: "The Suite",
    subtitle:
      "Everything you need to be everywhere your customers are, wrapped up in one pretty package",
    description:
      "Call center software that allows for more personal and productive phone support conversations",
    icon: Phone,
    bgColor: "bg-gradient-to-br from-blue-900/30 to-purple-900/30",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Talk",
    subtitle: "Explore everywhere your customers are",
    description:
      "Analytics to help measure and understand the entire customer experience",
    icon: BarChart3,
    bgColor: "bg-gradient-to-br from-emerald-900/30 to-teal-900/30",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    title: "Guide",
    subtitle: "Seamless data flow is the key to enhancing overall efficiency",
    description:
      "We seamlessly integrate NetSuite with your existing software applications, enabling data flow across different platforms and boosting your business's efficiency.",
    icon: Share2,
    bgColor: "bg-gradient-to-br from-amber-900/30 to-orange-900/30",
    borderColor: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    title: "Chat",
    subtitle: "Our services don't stop at implementation",
    description:
      "We offer comprehensive training to ensure your team can make the most of NetSuite's features. Moreover, we provide ongoing support to address any issues and optimize system performance post-implementation.",
    icon: MessageSquare,
    bgColor: "bg-gradient-to-br from-cyan-900/30 to-blue-900/30",
    borderColor: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    title: "Connect",
    subtitle: "Manage proactive customer communication across channels",
    description:
      "Deliver better customer experiences at scale with integrated communication solutions.",
    icon: Users,
    bgColor: "bg-gradient-to-br from-violet-900/30 to-purple-900/30",
    borderColor: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    title: "Sell",
    subtitle: "Salesforce automation software to enhance productivity",
    description:
      "Improve processes and pipeline visibility with powerful sales automation tools.",
    icon: TrendingUp,
    bgColor: "bg-gradient-to-br from-rose-900/30 to-pink-900/30",
    borderColor: "border-rose-500/20",
    iconColor: "text-rose-400",
  },
  {
    title: "Sunshine",
    subtitle: "Freedom to build whatever you want",
    description:
      "Zendesk's open, flexible CRM platform. Seamlessly connect and understand all your customer data—wherever it lives.",
    icon: Database,
    bgColor: "bg-gradient-to-br from-indigo-900/30 to-blue-900/30",
    borderColor: "border-indigo-500/20",
    iconColor: "text-indigo-400",
  },
  {
    title: "Manage Consent",
    subtitle: "Control and manage user permissions",
    description:
      "Ensure compliance and build trust with transparent consent management solutions.",
    icon: Shield,
    bgColor: "bg-gradient-to-br from-green-900/30 to-emerald-900/30",
    borderColor: "border-green-500/20",
    iconColor: "text-green-400",
  },
];

export default function ZendeskServices() {
  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={zen4}
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
            {/* Small Heading */}
            {/* <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[20px] lg:text-[28px] text-white font-light tracking-wide mb-6"
            >
              Idea-To-App Development Services
            </motion.p> */}

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[50px] lg:text-[55px] leading-[1.1] font-extralight text-white tracking-tight"
            >
              Zendesk: Customer Service Software & Sales CRM
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[28px] text-white tracking-wide mb-2 my-2 font-light"
            >
              Experts in Zendesk implementation, optimization, and CX consulting
            </motion.p>
            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className=" text-[18px] lg:text-[20px] text-white font-semibold"
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
            <h2 className=" mt-10 text-[25px] lg:text-[45px] leading-[1.05] font-sans text-white  text-center">
              Why Choose Ignite<span className="text-red-500">3i</span>?
            </h2>

            <p className=" mt-12 px-10 text-center text-[18px] lg:text-[22px]  font-light text-slate-100">
              At Netpace we design, customize, and implement customer service
              tools that reflect your processes and the satisfaction your
              clients deserve. We have helped businesses implement scalable,
              efficient customer service solutions.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex justify-center pt-4"
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-cyan-400 shadow-xl shadow-cyan-500/30 mt-12"
              >
                Discover Our Services
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-2 "
                />
              </a>
            </motion.div>
            {/* <div className="bg-gradient-to-r from-white/10 via-white/5 to-transparent py-20 px-8"> */}
            {/* <div className="bg-gradient-to-r from-yellow-800 via-gray-600 to-transparent py-10 px-10 mt-10"> */}

            <div className=" mt-14 bg-gradient-to-r from-yellow-800 via-gray-600 to-transparent py-10 px-10  max-w-6xl mx-auto">
              <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[28px] lg:text-[32px] tracking-wide">
                Proud to be a Trusted Zendesk partner, we leverage Zendesk
                products and combine them with our leading practice process
                consultants to deliver tailored consulting services that align
                with your unique needs and goals.
              </h2>
            </div>

            <h2 className=" mt-12 text-[48px] lg:text-[45px] leading-[1.05] font-extralight text-white tracking-wide text-center">
              Zendesk Services
            </h2>
            <h3 className=" mt-5 text-[48px] lg:text-[30px] leading-[1.05] font-extralight text-white tracking-wide text-center">
              Helping You Become Champions of Customer Service
            </h3>

            <p className=" mt-12 px-10 text-center text-[18px] lg:text-[22px] leading-[1.8] font-light text-slate-100">
              Zendesk offers a suite of powerful and flexible tools designed to
              help businesses of all sizes streamline their operations and
              enhance their customer experiences. From support ticket tracking
              to CRM and analytics, Zendesk’s suite of products is powerful and
              flexible, allowing businesses to meet the ever-evolving needs of
              their customers.
              <br />
              <br />
              Zendesk Professional Services core products offer everything you
              need to deliver amazing customer support experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* new card */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1733] via-[#0d1b38] to-[#111827] py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

        {/* Animated background dots */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-extralight text-white tracking-wide">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-xl text-white font-light">
              Comprehensive solutions for modern business challenges
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className={`${feature.bgColor} ${feature.borderColor} border rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-${feature.iconColor.split("-")[1]}-500/20 group cursor-pointer backdrop-blur-sm`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      size={48}
                      className={`${feature.iconColor}`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[30px] font-light text-white mb-2">
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[18px] text-white leading-tight font-light mb-3">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-base text-white leading-tight font-light">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="mt-4 flex items-center text-sm text-white/60 group-hover:text-white transition-colors duration-300"
                  >
                    <span className="mr-2">Learn More</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE IGNITE3i 4 ================= */}

      <section className="relative overflow-hidden bg-[#0F1D49] py-24">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#0b1733] via-[#0d1b38] to-[#111827] blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* <div className="grid lg:grid-cols-3 gap-20"> */}
          {/* Left Heading */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className=" px-12 lg:text-[35px] leading-[1.2] font-light  text-yellow-300 text-center">
              Netpace Can Help You Deliver A Great Customer Experience With
              Zendesk
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="mt-4  text-[18px] lg:text-[22px] leading-[1.8] text-white font-light">
              When you choose Ignite<span className="text-red-500">3i</span> Zendesk CRM consultants, you are teaming
              up with experts who excel in customer engagement and satisfaction.
              We don’t just bring industry knowledge to the table; we’re all
              about client-focused approach that crafts tailored strategies to
              supercharge your use of Zendesk CRM and take your customer
              relationship management to the next level.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className=" px-12 lg:text-[35px] leading-[1.2] font-light  text-yellow-300 text-center">
              The Best Customer Experiences Are Built With Zendesk
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="mt-4 text-[18px] lg:text-[22px] text-white font-light leading-[1.2]">
              Ready to take your customer experience to the next level with
              Zendesk? Contact our consultants today for a personalized
              consultation and discover how Netpace can help you elevate your
              customer experiences
            </p>
          </motion.div>
        </div>
      </section>
      <ContactUsPage/>
      <Footer/>
    </div>
  );
}
