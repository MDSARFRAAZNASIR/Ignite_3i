import React from "react";
import offshore from "../images/offshore.jpg";
import { motion} from "framer-motion";


import {
  
  Check,
  Radar,
  Eye,
  ScanSearch,
  Speech,
 
} from "lucide-react";
import Footer from "../footer/Footer";
import ContactUsPage from "../ContactUsPage";
const serviceCarding = [
  {
    title: "Cost-Effective Solutions",
    desc: "Hiring offshore talent with Ignite3i allows you to significantly reduce operational expenses without compromising on quality. Our offshore teams provide high-end solutions at a fraction of the cost, enabling you to reinvest savings into core business areas. Enjoy the benefits of lower labor costs, reduced overheads, and access to cutting-edge technology and resources.",
    icon: Radar,
  },
  {
    title: "Enhanced Productivity and Efficiency",
    desc: "Our offshore teams work around the clock to ensure your projects are completed on time and to the highest standards. With a time-zone advantage, your business can achieve faster turnaround times, increased productivity, and seamless project execution.",
    icon: Eye,
  },
]



const serviceCards = [
  {
    title: "Web development for e-commerce platforms",
    desc: "We have built scalable and secure e-commerce websites that enhance user experience, streamline operations, and drive sales. Our solutions include custom shopping carts, payment gateways, and inventory management systems.",
    icon: Radar,
  },
  {
    title: "Mobile App Development for iOS and Android",
    desc: "Our team has developed user-friendly and feature-rich mobile apps that cater to various industries. From concept to deployment, we handle the entire app development lifecycle, ensuring a smooth and engaging user experience.",
    icon: Eye,
  },
  {
    title: "Building Complex Applications for Enterprise Solutions",
    desc: "We specialize in creating sophisticated applications that support critical business processes. Our solutions are designed to integrate with existing systems, automate workflows, and provide valuable insights through advanced analytics.",
    icon: ScanSearch,
  },
  {
    title: "Developing Comprehensive Marketing Strategies and Collateral",
    desc: "Our marketing experts have crafted effective strategies that increase brand visibility and engagement. We produce high-quality marketing collateral, including brochures, whitepapers, and digital content, that resonates with your target audience.",
    icon: Speech,
  },
    {
    title: "Website Design, Development, Update, and Maintenance",
    desc: "We design and develop visually appealing and functional websites that reflect your brand identity. Our ongoing maintenance services ensure your website remains up-to-date, secure, and optimized for performance.",
    icon: Speech,
  },
    {
    title: "Technical Writing and Documentation",
    desc: "Our team has created extensive technical documentation for various projects, ensuring that end-users and developers have clear and concise guides, manuals, and API documentation to refer to.",
    icon: Speech,
  },
];

const workforceData = [
  {
    title: "Application Development and Maintenance:",
    description:
      "Creating robust and scalable applications tailored to your business needs. Our teams excel in developing custom applications, ensuring seamless integration with your existing systems, and providing ongoing maintenance to keep your applications running smoothly.",
  },
  {
    title: "Software Development:",
    description:
      "Developing innovative software solutions that drive business growth. We utilize the latest technologies and methodologies to deliver software that meets your unique requirements, enhances operational efficiency, and provides a competitive edge.",
  },
  {
    title: "Quality Assurance:",
    description:
      "Ensuring the highest quality standards for your software products. Our QA experts conduct rigorous testing to identify and resolve issues early, ensuring your software is reliable, secure, and performs optimally.",
  },
  {
    title: "Technical Writing:",
    description:
      "Providing clear and concise technical documentation. Our technical writers create comprehensive documentation, including user manuals, system guides, and API documentation, to support your products and enhance user experience.",
  },
  {
    title: "Graphics Design and Brand Development:",
    description:
      "Delivering creative and impactful design solutions that enhance your brand’s visual identity. Our graphic design team produces high-quality visuals for digital and print media, helping you communicate your brand message effectively.",
  },
  {
    title: "Customer Support:",
    description:
      "Offering exceptional customer service to support your operations. Our dedicated support teams are available 24/7 to assist your customers, resolve issues promptly, and ensure customer satisfaction.",
  },
];








export default function Offshore() {
  
  

  return (
    /* MAIN PARENT CONTAINER - LIGHT BLACK BACKGROUND */
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* SECTION 1: HERO WITH FULL-COVER BACKGROUND PHOTO */}
      <section className="relative min-h-screen  pt-25 h-[88vh] w-full overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={offshore}
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
              Enhance Productivity with Remote <br />
              High-Performing Teams
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[16px] lg:text-[20px] text-white font-light tracking-wide mb-2 py-2"
            >
              Unlock Cost Savings, Drive Innovation and Efficiency with Top Tier
              Talent
            </motion.p>
            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-3 text-[18px] lg:text-[20px] text-white font-semibold"
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
              <h2 className="max-w-6xl mx-auto text-center italic font-extralight text-white leading-relaxed text-[25px] lg:text-[28px] tracking-wide">
                In today’s global marketplace, leveraging offshore talent has
                become a strategic advantage for businesses seeking to enhance
                their capabilities while managing costs effectively. By
                partnering with Ignite<span className="text-red-500">3i</span>, you gain access to a vast pool of
                highly skilled professionals who are experts in their respective
                fields.
              </h2>
            </div>
          </motion.div>

          {/* Description */}
          <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 "></div>
        </div>
      </section>

      {/* start */}

      <section className="bg-[#171B36] pb-12 ">
        <div className="max-w-7xl mx-auto px-6">
          {/* Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 px-9">
            {serviceCarding.map((service, idx) => {
              const Icon = service.icon;

              const bg =
                idx % 2 === 0
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

      {/* SECTION 4: Why choose Us */}

      {/* end */}

      <section className="relative w-full overflow-hidden bg-[#06163d] px-6  text-white md:px-10 lg:px-12 lg:py-20 pt-10">
        {" "}
        {/* Background gradient */}{" "}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(35,175,194,0.38),transparent_38%),linear-gradient(100deg,#0c4560_0%,#0a2b4c_45%,#06163d_80%)]" />{" "}
        <div className="relative mx-auto max-w-[1800px]">
          {" "}
          {/* ================= TOP CONTENT ================= */}{" "}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {" "}
            {/* Left */}{" "}
            <div>
              {" "}
              <h2 className="text-[30px] font-light leading-[1.15] text-white md:text-[50px] lg:text-[51px]">
                {" "}
                Our Skilled Workforce{" "}
              </h2>{" "}
              <h3 className="mt-7 max-w-[700px] text-[24px] font-normal leading-[1.35] text-[#18d2df] md:text-[30px] lg:text-[30px]">
                {" "}
                Tech-Related Expertise and Completed Projects{" "}
              </h3>{" "}
            </div>{" "}
            {/* Right */}{" "}
            <div className="lg:pt-0">
              {" "}
              <p className="max-w-[780px] text-[17px] font-normal leading-[1.55] text-white md:text-[18px] lg:text-[22px]">
                {" "}
                At Ignite3i, we pride ourselves on our diverse and highly
                qualified offshore team. We specialize in a wide range of
                tech-related services, ensuring that your business stays ahead
                of the competition. Our expertise includes:{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* ================= EXPERTISE CARDS ================= */}{" "}
          <div className="mt-28 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {workforceData.map((item, index) => (
              <div
                key={item.title}
                className="min-h-[420px] bg-[rgba(3,24,52,0.38)] px-10 py-14 backdrop-blur-[1px] transition-all duration-300 hover:bg-[rgba(5,32,62,0.65)]"
              >
                {" "}
                {/* Check icon */}{" "}
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#20cad8]">
                  {" "}
                  <Check
                    className="h-11 w-11 text-[#07314c]"
                    strokeWidth={3}
                  />{" "}
                </div>{" "}
                {/* Title */}{" "}
                <h4 className="mt-5 text-[24px] font-light leading-[1.1] text-[#f0b48e] md:text-[25px]">
                  {" "}
                  {item.title}{" "}
                </h4>{" "}
                {/* Description */}{" "}
                <p className="mt-1 text-[17px] leading-[1.55] text-white md:text-[18px] font-extralight">
                  {" "}
                  {item.description}{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>


        {/* ================= SECTION 3 ================= */}
      
            <section className="bg-[#305262] py-15">
            {/* #21473d */}
              <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
      
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-6xl mx-auto text-center mb-20"
                >
                  <h2 className="pt-12 pb-4 text-[40px] lg:text-[42px] font-light tracking-wide text-white">
                    Completed Projects
                  </h2>
                   <p className="text-[30px] leading-8 font-light text-cyan-400">
                         We have completed a variety of projects, including:
                        </p>
                </motion.div>
      
                {/* Cards */}
      
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 px-8">
                  {serviceCards.map((service, idx) => {
                    const Icon = service.icon;
      
                    const bg =
                      idx % 3 === 0
                        ? // ? "bg-[#4E7883]" // teal
                          // : "bg-[#645955]"; // warm grey
                          // "bg-gradient-to-b from-[#4E7883] to-[#1D2F34]" // Teal gradient
                          "bg-[#0f3f4f]"
                        // : "bg-gradient-to-b from-[#645955] to-[#252120]"; // Warm grey gradient
                        :"bg-[#124d61]"
      
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
                          <h3 className="text-[25px] leading-tight font-extralight text-white">
                            {service.title}
                          </h3>
                        </div>
      
                        <p className="px-12 mt-6 text-[17px] leading-[1.8] font-light text-slate-100">
                          {service.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>
            <ContactUsPage/>
            <Footer/>
    </div>
  );
}
