import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { PiShoppingBagOpen } from "react-icons/pi";
import ignite_logo_small_v1 from "../components/images/ignite_logo_small_v1.png";

import {
  ChevronDown,
  Menu,
  X,
  Building2,
  Infinity as DevOpsIcon,
  Smartphone,
  BarChart3,
  Cloud,
  Palette,
  Globe2,
  Sparkles,
  CloudLightning,
  Layers,
  HelpCircle,
  Code2,
  Layout,
  // Icons for Staffing Services
  Laptop,
  FlaskConical,
  Briefcase,
  PenTool,
  Calculator,
  ClipboardList,
  HeartPulse,
  Wrench,
  Landmark,
  Building,
} from "lucide-react";

// IT Consulting Sub-items configuration
const consultingItems = [
  {
    name: "Enterprise App Development",
    icon: Building2,
    path: "/it-consulting-service/enterprise-app",
  },

  {
    name: "Artificial Intelligence",
    icon: Sparkles,
    path: "/it-consulting-service/artificialIntelligence ",
  },
  {
    name: "DevOps Services",
    icon: DevOpsIcon,
    path: "/it-consulting-service/devops",
  },
  {
    name: "Mobile App Development",
    icon: Smartphone,
    path: "/it-consulting-service/mobile-app-development",
  },
  {
    name: "Data Analytics",
    icon: BarChart3,
    path: "/it-consulting-service/data-analytics",
  },
  {
    name: "Cloud Enablement",
    icon: Cloud,
    path: "/it-consulting-service/cloud-enablement",
  },
  {
    name: "Digital & Creative",
    icon: Palette,
    path: "/it-consulting-service/digital-creative",
  },
  {
    name: "Offshore Development",
    icon: Globe2,
    path: "/it-consulting-service/offshore-services",
  },
  {
    name: "AWS Solutions",
    icon: CloudLightning,
    path: "/it-consulting-service/aws-solution",
  },
  {
    name: "NetSuite ERP",
    icon: Layers,
    path: "/it-consulting-service/netsuit-erp",
  },
  {
    name: "Zendesk Integration",
    icon: HelpCircle,
    path: "/it-consulting-service/zendesk-integration",
  },
  {
    name: ".NET Development",
    icon: Code2,
    path: "/it-consulting-service/dotnet-development",
  },
  {
    name: "UI/UX Design",
    icon: Layout,
    path: "/it-consulting-service/ui-ux-design",
  },
];

// 🚀 Staffing Services & Solutions Sub-items configuration
const staffingCategories = [
  {
    title: "Staffing Services & Solutions",
    subtitle:
      "Simplify talent acquisition, get expert staffing services to elevate your business",
    items: [
      {
        name: "Information Technology",
        icon: Laptop,
        path: "/staffing-services/itstafing-services",
      },
      {
        name: "Accounting & Finance",
        icon: Calculator,
        path: "/staffing-services/accounting-finance",
      },
      {
        name: "Clinical & Scientific",
        icon: FlaskConical,
        path: "/staffing-services/clinical-scientific",
      },
      {
        name: "Business Professional",
        icon: Briefcase,
        path: "/staffing-services/business-professional",
      },
      {
        name: "Digital Creative",
        icon: PenTool,
        path: "/staffing-services/digital-creative",
      },
      {
        name: "Administrative & Clerical",
        icon: ClipboardList,
        path: "/staffing-services/administrative-clerical",
      },
      {
        name: "Healthcare",
        icon: HeartPulse,
        path: "/staffing-service/healthcare",
      },
      {
        name: "Engineering",
        icon: Wrench,
        path: "/staffing-services/engineering-staffing-solution",
      },
    ],
  },
  {
    title: "Recruitment Services",
    subtitle:
      "Complete staffing and direct hiring services for federal agencies and businesses throughout the U.S.",
    items: [
      {
        name: "Government Agencies",
        icon: Landmark,
        path: "/staffing-services/recruitment-services/government",
      },
      {
        name: "Commercial Sectors",
        icon: Building,
        path: "/staffing-services/recruitment-services/government",
      },
    ],
  },
];

// Insight Sub-items configuration
const insights = [
  { name: "Industries", icon: Building2, path: "/insights/industries" },
  { name: "Blogs", icon: DevOpsIcon, path: "/services/blog" },
  { name: "Case Study", icon: Smartphone, path: "/services/case-study" },
];

// IT Consulting Sub-items configuration

const about = [
  {
    name: "Diversity & Inclusion",
    icon: Building2,
    path: "/diversity-inclusion",
  },

  { name: "About Ignite3i", icon: DevOpsIcon, path: "/about-ignite3i" },
  { name: "Careers", icon: PiShoppingBagOpen, path: "/career-at-ignite3i" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dropdown States
  const [consultingOpen, setConsultingOpen] = useState(false);
  const [staffingOpen, setStaffingOpen] = useState(false);
  const [insightOpen, setInsightOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Mobile Collapsible Accordion States
  const [mobileConsultingOpen, setMobileConsultingOpen] = useState(false);
  const [mobileStaffingOpen, setMobileStaffingOpen] = useState(false);
  const [mobileInsightOpen, setMobileInsightOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);


  

  // const navLinks = [
  //   { name: "Home", id: "home" },
  //   { name: "What We Do", id: "services" },
  //   { name: "Methodologies", id: "methodologies" },
  //   { name: "Team", id: "team" },
  //   { name: "Why Choose Us", id: "choose-us" },
  //   { name: "Careers", id: "jobs" },
  //   { name: "Connect Us", id: "connect" },
  // ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);

  //   if (section) {
  //     const navbarHeight = 90;

  //     const y =
  //       section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

  //     window.scrollTo({
  //       top: y,
  //       behavior: "smooth",
  //     });

  //     setOpen(false);
  //     setConsultingOpen(false);
  //     setStaffingOpen(false);
  //     setAboutOpen(false)
  //     setInsightOpen(false)
  //   }
  // };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/90 backdrop-blur-md border-b border-slate-900 shadow-xl py-2"
            : "bg-transparent py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center relative">
          {/* Logo & Brand Button */}

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-3 cursor-pointer group"
            >
              {/* Increased logo size from w-15 h-15 to w-20 h-20 */}
              <img
                src={ignite_logo_small_v1}
                alt="Company Logo"
                className="w-20 h-20 object-contain transition-transform duration-200 group-hover:scale-105"
              />

              {/* AI Powered Tag */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-400 bg-blue-950/50 border border-blue-500/30 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                AI POWERED
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex pr-100 space-x-1 text-sm font-medium">
            {/* 💻 IT Consulting Services Dropdown Item */}
            <li
              className="relative items-center"
              onMouseEnter={() => setConsultingOpen(true)}
              onMouseLeave={() => setConsultingOpen(false)}
            >
              <button
                onClick={() => {
                  window.location.href = "/it-consulting";
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition cursor-pointer ${
                  consultingOpen
                    ? "text-blue-400 bg-slate-900/60"
                    : "text-slate-100 hover:text-white hover:bg-slate-900/40"
                }`}
              >
                <span className="text-xl">IT Consulting</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${consultingOpen ? "rotate-180 text-blue-400" : "text-slate-100"}`}
                />
              </button>

              {/* IT Consulting Mega Dropdown Panel - Full Width */}
              <AnimatePresence>
                {consultingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 w-full mt-1 rounded-2xl border border-slate-800 bg-[linear-gradient(135deg,#214F50_0%,#1C3E56_50%,#1B2345_100%)] p-5 shadow-2xl z-50 backdrop-blur-xl"
                    style={{ top: scrolled ? "68px" : "76px" }}
                  >
                    <div className="max-w-7xl mx-auto px-6 md:px-8">
                      <div className="flex justify-between">
                        <div className="w-1/4">
                          <span className=" text-xs font-bold text-blue-400 tracking-wider uppercase ">
                            IT Consulting Capabilities
                          </span>
                          <p className=" mt-4 text-[15px] leading-[1.6] font-light text-[#F3F4F6]">
                            We partner with seasoned business leaders and
                            entrepreneurs to build and transform businesses
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-20">
                          {consultingItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={idx}
                                href={item.path}
                                className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition-all group"
                              >
                                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-600 text-blue-400 group-hover:text-white transition-colors shrink-0">
                                  <Icon size={25} />
                                </div>
                                <span className="text-xm font-medium">
                                  {item.name}
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* 👥 Staffing Services & Solutions Dropdown Item */}
            <li
              className="relative"
              onMouseEnter={() => setStaffingOpen(true)}
              onMouseLeave={() => setStaffingOpen(false)}
            >
              <button
                onClick={() => {
                  window.location.href = "/staffing";
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition cursor-pointer ${
                  staffingOpen
                    ? "text-blue-400 bg-slate-900/60"
                    : "text-slate-100 hover:text-white hover:bg-slate-900/40"
                }`}
              >
                <span className="text-xl">Staffing</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${staffingOpen ? "rotate-180 text-blue-400" : "text-slate-100"}`}
                />
              </button>

              {/* Staffing Mega Dropdown Panel - Full Width */}
              <AnimatePresence>
                {staffingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 w-full mt-1 rounded-2xl border border-slate-800 bg-[linear-gradient(135deg,#1B2345_0%,#1C3E56_50%,#214F50_100%)] p-6 shadow-2xl z-50 backdrop-blur-xl"
                    style={{ top: scrolled ? "68px" : "76px" }}
                  >
                    <div className="max-w-7xl mx-auto px-6 md:px-8">
                      <div className="grid grid-cols-13 gap-3">
                        {/* Left Side: Staffing Services & Solutions */}
                        <div className="col-span-8 border-r border-slate-800/80 pr-5">
                          <div className="mb-3 border-b border-slate-800/80 pb-2">
                            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                              {staffingCategories[0].title}
                            </h4>
                            <p className="text-[15px] text-white mt-0.5 font-extralight">
                              {/* {staffingCategories[0].subtitle} */}
                              Simplify talent acquisition, get expert staffing
                              services to elevate your business
                            </p>
                          </div>

                          <div className="grid grid-cols-3 gap-x-20">
                            {staffingCategories[0].items.map((item, idx) => {
                              const Icon = item.icon;
                              return (
                                <a
                                  key={idx}
                                  href={item.path}
                                  className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-900/80 text-slate-300 hover:text-white transition-all group"
                                >
                                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-600 text-blue-400 group-hover:text-white transition-colors shrink-0">
                                    <Icon size={25} />
                                  </div>
                                  <span className="text-xm font-medium">
                                    {item.name}
                                  </span>
                                </a>
                              );
                            })}
                          </div>
                        </div>

                        {/* Right Side: Recruitment Services */}
                        <div className="col-span-4 flex flex-col justify-between">
                          <div>
                            <div className="mb-3 border-b border-slate-800/80 pb-2">
                              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                                {staffingCategories[1].title}
                              </h4>
                              <p className="text-[15px] text-white mt-0.5 font-extralight ">
                                {/* {staffingCategories[0].subtitle} */}
                                Complete staffing and direct hiring services for
                                federal agencies and businesses throughout the
                                U.S
                              </p>
                            </div>

                            <div className="space-y-1">
                              {staffingCategories[1].items.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                  <a
                                    key={idx}
                                    href={item.path}
                                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-900/80 text-slate-300 hover:text-white transition-all group"
                                  >
                                    <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-600 text-blue-400 group-hover:text-white transition-colors shrink-0">
                                      <Icon size={25} />
                                    </div>
                                    <span className="text-xs font-medium">
                                      {item.name}
                                    </span>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* 💻 Insight Services Dropdown Item */}
            <li
              className="relative"
              onMouseEnter={() => setInsightOpen(true)}
              onMouseLeave={() => setInsightOpen(false)}
            >
              <button
                onClick={() => {
                  window.location.href = "/insight";
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition cursor-pointer ${
                  insightOpen
                    ? "text-blue-400 bg-slate-900/60"
                    : "text-slate-100 hover:text-white hover:bg-slate-900/40"
                }`}
              >
                <span className="text-xl">Insight</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${insightOpen ? "rotate-180 text-blue-400" : "text-slate-100"}`}
                />
              </button>

              {/* Insight Mega Dropdown Panel - Full Width */}
              <AnimatePresence>
                {insightOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 w-full mt-1 rounded-2xl border border-slate-800 bg-[linear-gradient(135deg,#214F50_0%,#1C3E56_50%,#1B2345_100%)] p-5 shadow-2xl z-50 backdrop-blur-xl"
                    style={{ top: scrolled ? "68px" : "76px" }}
                  >
                    <div className="max-w-7xl mx-auto px-6 md:px-8">
                      <div className="flex justify-between">
                        <div className="w-1/4 px-2">
                          <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                            INSIGHTS
                          </span>

                          <p className=" mt-4 text-[15px] leading-[1.6] font-light text-[#F3F4F6]">
                            Industry insights, case studies & the latest trends
                            & technologies
                          </p>
                        </div>

                        <div className="grid grid-cols-2 w-1/2 gap-2">
                          {insights.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={idx}
                                href={item.path}
                                className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition-all group"
                              >
                                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-600 text-blue-400 group-hover:text-white transition-colors shrink-0">
                                  <Icon size={25} />
                                </div>
                                <span className="text-xm font-medium">
                                  {item.name}
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* 💻 About Services Dropdown Item */}
            <li
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                onClick={() => {
                  window.location.href = "/about";
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition cursor-pointer ${
                  aboutOpen
                    ? "text-blue-400 bg-slate-900/60"
                    : "text-slate-100 hover:text-white hover:bg-slate-900/40"
                }`}
              >
                <span className="text-xl">About Us</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${aboutOpen ? "rotate-180 text-blue-400" : "text-slate-100"}`}
                />
              </button>

              {/* About Mega Dropdown Panel - Full Width */}
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 w-full mt-1 rounded-2xl border border-slate-800 bg-[linear-gradient(135deg,#214F50_0%,#1C3E56_50%,#1B2345_100%)] p-5 shadow-2xl z-50 backdrop-blur-xl"
                    style={{ top: scrolled ? "68px" : "76px" }}
                  >
                    <div className="max-w-7xl mx-auto px-6 md:px-8">
                      <div className="flex justify-between">
                        <div className="w-1/4 px-2">
                          <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                            ABOUT US
                          </span>
                          <p className=" mt-4 text-[15px] leading-[1.6] font-light text-[#F3F4F6]">
                            Your digital growth partner and trusted custom
                            software development and global provider of
                            workforce solutions
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 w-1/2">
                          {about.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={idx}
                                href={item.path}
                                className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-white transition-all group"
                              >
                                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-600 text-blue-400 group-hover:text-white transition-colors shrink-0">
                                  <Icon size={25} />
                                </div>
                                <span className="text-xm font-medium">
                                  {item.name}
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Contact Us - No Dropdown */}
            <li>
              <button
                onClick={() => {
                  window.location.href = "/contactnow";
                }}
                className="px-3 py-2 text-slate-100 hover:text-slate-200 rounded-lg hover:bg-slate-900/40 transition cursor-pointer"
              >
                <span className="text-xl">Contact Us</span>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            className="xl:hidden p-2 text-slate-400 hover:text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-[#030712] border-t border-slate-900 overflow-hidden"
            >
              <ul className="py-5 px-6 space-y-1">
                {/* Mobile Standard Links (Home, What We Do) */}
                {/* {navLinks.slice(0, 2).map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="block w-full text-left py-2.5 px-4 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/40 transition"
                    >
                      {link.name}
                    </button>
                  </li>
                ))} */}

                {/* Mobile IT Consulting Collapsible Accordion */}
                <li>
                  <button
                    onClick={() =>
                      setMobileConsultingOpen(!mobileConsultingOpen)
                    }
                    className="flex items-center justify-between w-full text-left py-2.5 px-4 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/40 transition"
                  >
                    <span>IT Consulting Services</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileConsultingOpen ? "rotate-180 text-blue-400" : ""}`}
                    />
                  </button>

                  {mobileConsultingOpen && (
                    <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-950/50 rounded-lg my-1 border border-slate-900">
                      {consultingItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.path}
                          onClick={() => setOpen(false)}
                          className="block py-2 px-3 text-xs text-slate-400 hover:text-blue-400 hover:bg-slate-900 rounded-md transition"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>

                {/* Mobile Staffing Services Collapsible Accordion */}
                <li>
                  <button
                    onClick={() => setMobileStaffingOpen(!mobileStaffingOpen)}
                    className="flex items-center justify-between w-full text-left py-2.5 px-4 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/40 transition"
                  >
                    <span>Staffing Services</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileStaffingOpen ? "rotate-180 text-blue-400" : ""}`}
                    />
                  </button>

                  {mobileStaffingOpen && (
                    <div className="pl-6 pr-2 py-2 space-y-3 bg-slate-950/50 rounded-lg my-1 border border-slate-900">
                      {staffingCategories.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-1">
                          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-wider px-3 pt-1">
                            {group.title}
                          </p>
                          {group.items.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.path}
                              onClick={() => setOpen(false)}
                              className="block py-1.5 px-3 text-xs text-slate-400 hover:text-blue-400 hover:bg-slate-900 rounded-md transition"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>

                 {/* Mobile insight Services Collapsible Accordion */}
<li>
  <button
    onClick={() => setMobileInsightOpen(!mobileInsightOpen)}
    className="flex items-center justify-between w-full text-left py-2.5 px-4 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/40 transition"
  >
    <span>insights</span>
    <ChevronDown
      size={16}
      className={`transition-transform ${mobileInsightOpen ? "rotate-180 text-blue-400" : ""}`}
    />
  </button>

  {mobileInsightOpen && (
    <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-950/50 rounded-lg my-1 border border-slate-900">
      {about.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <a
            key={idx}
            href={item.path}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 py-1.5 px-3 text-xs text-slate-400 hover:text-blue-400 hover:bg-slate-900 rounded-md transition"
          >
            {IconComponent && <IconComponent size={14} className="shrink-0" />}
            <span>{item.name}</span>
          </a>
        );
      })}
    </div>
  )}
</li>

                 {/* Mobile about Services Collapsible Accordion */}

              

{/* Mobile about Services Collapsible Accordion */}
<li>
  <button
    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
    className="flex items-center justify-between w-full text-left py-2.5 px-4 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/40 transition"
  >
    <span>About</span>
    <ChevronDown
      size={16}
      className={`transition-transform ${mobileAboutOpen ? "rotate-180 text-blue-400" : ""}`}
    />
  </button>

  {mobileAboutOpen && (
    <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-950/50 rounded-lg my-1 border border-slate-900">
      {about.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <a
            key={idx}
            href={item.path}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 py-1.5 px-3 text-xs text-slate-400 hover:text-blue-400 hover:bg-slate-900 rounded-md transition"
          >
            {IconComponent && <IconComponent size={14} className="shrink-0" />}
            <span>{item.name}</span>
          </a>
        );
      })}
    </div>
  )}
</li>
                {/* Mobile Remaining Links */}
                {/* {navLinks.slice(2).map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="block w-full text-left py-2.5 px-4 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/40 transition"
                    >
                      {link.name}
                    </button>
                  </li>
                ))} */}
              </ul>

            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
