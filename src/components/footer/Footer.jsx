import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-cyan-400"
        : "text-slate-300 hover:text-cyan-400"
    }`;

  return (
    <footer className="bg-[#111428] text-slate-300">
      {/* ================= TOP FOOTER ================= */}
      <div className="border-b border-slate-700/70">
        <div className="mx-auto max-w-[1800px] px-6 py-14 lg:px-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

            {/* ================= IT CONSULTING ================= */}
            <div>
              <h3 className="mb-8 text-2xl font-medium text-slate-200">
                IT CONSULTING
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <NavLink to="/services/web-development" className={linkClass}>
                    Web Development
                  </NavLink>

                  <NavLink to="/services/devops" className={linkClass}>
                    DevOps Services
                  </NavLink>

                  <NavLink
                    to="/services/mobile-app-development"
                    className={linkClass}
                  >
                    Mobile App Development
                  </NavLink>

                  <NavLink to="/services/data-analytics" className={linkClass}>
                    Data Analytics
                  </NavLink>

                  <NavLink
                    to="/services/cloud-enablement"
                    className={linkClass}
                  >
                    Cloud Enablement
                  </NavLink>

                  <NavLink
                    to="/services/digital-creative"
                    className={linkClass}
                  >
                    Digital & Creative
                  </NavLink>

                  <NavLink to="/services/ui-ux" className={linkClass}>
                    UI / UX
                  </NavLink>
                </div>

                <div className="flex flex-col gap-4">
                  <NavLink
                    to="/services/artificial-intelligence"
                    className={linkClass}
                  >
                    Artificial Intelligence
                  </NavLink>

                  <NavLink to="/services/aws" className={linkClass}>
                    AWS
                  </NavLink>

                  <NavLink to="/services/dotnet" className={linkClass}>
                    .Net
                  </NavLink>

                  <NavLink to="/services/netsuite" className={linkClass}>
                    NetSuite
                  </NavLink>

                  <NavLink
                    to="/services/zendesk-services"
                    className={linkClass}
                  >
                    Zendesk Services
                  </NavLink>

                  <NavLink to="/services/offshore" className={linkClass}>
                    Offshore
                  </NavLink>
                </div>
              </div>
            </div>

            {/* ================= STAFFING ================= */}
            <div>
              <h3 className="mb-8 text-2xl font-medium text-slate-200">
                STAFFING
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <NavLink
                    to="/staffing/it-staffing"
                    className={linkClass}
                  >
                    IT Staffing Solution
                  </NavLink>

                  <NavLink
                    to="/staffing/clinical-scientific"
                    className={linkClass}
                  >
                    Clinical & Scientific
                  </NavLink>

                  <NavLink
                    to="/staffing/business-professional"
                    className={linkClass}
                  >
                    Business Professional
                  </NavLink>

                  <NavLink
                    to="/staffing/marketing-creative"
                    className={linkClass}
                  >
                    Marketing & Creative
                  </NavLink>
                </div>

                {/* Healthcare intentionally excluded */}
                <div className="hidden md:block" />
              </div>
            </div>

            {/* ================= INSIGHTS ================= */}
            <div>
              <h3 className="mb-8 text-2xl font-medium text-slate-200">
                INSIGHTS
              </h3>

              <div className="flex flex-col gap-4">
                <NavLink to="/insights/industries" className={linkClass}>
                  Industries
                </NavLink>

                <NavLink to="/insights/case-studies" className={linkClass}>
                  Case Studies
                </NavLink>

                <NavLink to="/insights/blog" className={linkClass}>
                  Blog
                </NavLink>
              </div>
            </div>

            {/* ================= ABOUT US ================= */}
            <div>
              <h3 className="mb-8 text-2xl font-medium text-slate-200">
                ABOUT US
              </h3>

              <div className="flex flex-col gap-4">
                <NavLink
                  to="/about/diversity-inclusion"
                  className={linkClass}
                >
                  Diversity & Inclusion
                </NavLink>

                <NavLink to="/careers" className={linkClass}>
                  Careers
                </NavLink>

                <NavLink to="/about" className={linkClass}>
                  Netpace About
                </NavLink>

                <NavLink to="/contact" className={linkClass}>
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="mx-auto max-w-[1800px] px-6 py-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">

          {/* ================= LEFT ================= */}
          <div>
            {/* Logo */}
            <NavLink to="/" className="inline-flex items-center">
              <span className="text-4xl font-normal tracking-tight text-cyan-400">
                Ignite<span className="text-red-500">3i</span>
              </span>

              <span className="ml-3 text-lg font-medium tracking-wider text-slate-400">
                AI-POWERED
              </span>
            </NavLink>

            {/* Copyright */}
            <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-slate-400">
              <span>
                © 2026 Ignite<span className="text-red-500">3i</span>, Inc. All Rights Reserved
              </span>

              <NavLink
                to="/privacy-policy"
                className={linkClass}
              >
                Privacy Policy
              </NavLink>

              <NavLink
                to="/terms-and-conditions"
                className={linkClass}
              >
                Terms and Conditions
              </NavLink>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-5">
              {/* C icon */}
              <Link
                href="#"
                aria-label="Social Media"
                className="flex h-7 w-7 items-center justify-center rounded-sm bg-white transition hover:opacity-80"
              >
                <span className="text-lg font-bold text-[#111428]">
                  C
                </span>
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-sm bg-white text-[#111428] transition hover:opacity-80"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7 2 2 0 0 0 5.25 3ZM20.44 13.42c0-3.46-1.84-5.07-4.29-5.07-1.98 0-2.86 1.09-3.35 1.86V8.5H9.42V20h3.38v-6.4c0-1.69.32-3.33 2.42-3.33 2.07 0 2.1 1.94 2.1 3.44V20h3.38l-.26-6.58Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ================= NEWSLETTER ================= */}
          <div className="lg:pl-10">
            <h3 className="text-2xl font-medium text-slate-200">
              NEWSLETTER
            </h3>

            <p className="mt-2 max-w-2xl text-base leading-5 text-slate-300">
              Stay connected with Ignite<span className="text-red-500">3i</span> Inc. for exclusive insights,
              curated resources and expert guidance
            </p>

            <form className="mt-7 flex w-full max-w-2xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[60px] flex-1 border border-slate-500 bg-[#575a6b] px-5 text-white outline-none placeholder:text-slate-300 focus:border-cyan-400"
              />

              <button
                type="submit"
                className="h-[60px] bg-white px-8 font-semibold text-[#111428] transition hover:bg-cyan-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;