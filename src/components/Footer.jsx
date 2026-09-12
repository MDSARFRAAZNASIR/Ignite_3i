// import React from "react";
// import { Link } from "react-router-dom";
// import { Github, Linkedin, Twitter, ArrowUpRight, Code2 } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  

//   const footerLinks = {
//     platform: [
//       { name: "Home", path: "/home" },
//       { name: "About Us", path: "/about" },
//       { name: "What We Do", path: "/services" },
//       { name: "Our Expertise", path: "/expertise" },
//     ],
//     company: [
//       { name: "Why Choose Us", path: "/choose-us" },
//       { name: "Our Clients", path: "/clients" },
//       { name: "Careers", path: "/jobs" },
//       { name: "Contact Hub", path: "/contact" },
//     ],
//     socials: [
//       {
//         name: "LinkedIn",
//         href: "https://www.linkedin.com/company/ignite3i/?originalSubdomain=in",
//         icon: <Linkedin size={16} />,
//       },
//       { name: "GitHub", href: "https://github.c", icon: <Github size={16} /> },
//       {
//         name: "Twitter / X",
//         href: "https://twitter.",
//         icon: <Twitter size={16} />,
//       },
//     ],
//   };

//   return (
//     <footer className="bg-[#02040a] border-t border-slate-900/80 text-slate-400 relative overflow-x-hidden">
//       {/* Subtle Background Glow Vector */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-8 relative z-10 space-y-12">
//         {/* Top Segment: Brand & Navigation Columns */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
//           {/* Brand Presentation Panel (5 Columns) */}
//           <div className="lg:col-span-5 space-y-4">
//             <Link to="/home" className="flex items-center gap-2 group w-fit">
//               <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
//                 <span className="font-black text-white text-base">i</span>
//               </div>
//               <h2 className="text-xl font-bold tracking-wider text-white">
//                 Ignite<span className="text-blue-500">3i</span>
//               </h2>
//             </Link>
//             <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
//               Engineering high-performance software systems and data analytics
//               structures. Transforming complex operations into modular
//               architectures.
//             </p>
//             <div className="flex items-center gap-2.5 text-xs text-blue-500/80 bg-blue-950/20 border border-blue-900/30 px-3 py-1.5 rounded-xl w-fit font-medium">
//               <Code2 size={14} /> Built with MERN Stack Architecture
//             </div>
//           </div>

//           {/* Navigation Matrix Column 1 (3 Columns) */}
//           <div className="lg:col-span-2 space-y-3">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//               Core System
//             </h4>
//             <ul className="space-y-2 text-sm">
//               {footerLinks.platform.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 block py-0.5"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Navigation Matrix Column 2 (3 Columns) */}
//           <div className="lg:col-span-2 space-y-3">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//               Company
//             </h4>
//             <ul className="space-y-2 text-sm">
//               {footerLinks.company.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 block py-0.5"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Connect Networks Column (2 Columns) */}
//           <div className="lg:col-span-2 space-y-3">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//               Networks
//             </h4>
//             <ul className="space-y-2 text-sm">
//               {footerLinks.socials.map((link, i) => (
//                 <li key={i}>
//                   <a
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-white transition-colors duration-200 flex items-center gap-2 group py-0.5"
//                   >
//                     <span className="text-slate-600 group-hover:text-blue-400 transition-colors">
//                       {link.icon}
//                     </span>
//                     <span>{link.name}</span>
//                     <ArrowUpRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-500"
//                     />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Divider Bar */}
//         <hr className="border-slate-900/60" />

//         {/* Bottom Segment: Copyrights & System Disclaimers */}
//         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
//           <p>
//             © {currentYear} Ignite3i Software Technologies. All rights reserved.
//           </p>
//           <div className="flex items-center gap-6">
//             <span className="hover:text-slate-400 cursor-pointer transition-colors">
//               Privacy Policy
//             </span>
//             <span className="hover:text-slate-400 cursor-pointer transition-colors">
//               Terms of Operations
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Github, Linkedin, Twitter, ArrowUpRight, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll handler for single-page sections
  const scrollToSection = (sectionId) => {
    // If user is not on homepage, navigate home first then scroll
    if (location.pathname !== "/" && location.pathname !== "/home") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const footerLinks = {
    platform: [
      { name: "Home", sectionId: "home" },
      { name: "About Us", sectionId: "home" },
      { name: "What We Do", sectionId: "services" },
      { name: "Our Expertise", sectionId: "team" },
    ],
    company: [
      { name: "Why Choose Us", sectionId: "choose-us" },
      { name: "Deliver Methods", sectionId: "methodologies" },
      { name: "Careers", sectionId: "jobs" }, // Keeping route for full pages like Careers
      { name: "Contact Hub", sectionId: "connect" },
    ],
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/ignite3i/?originalSubdomain=in",
        icon: <Linkedin size={16} />,
      },
      { name: "GitHub", href: "https://github.com", icon: <Github size={16} /> },
      {
        name: "Twitter / X",
        href: "https://twitter.com",
        icon: <Twitter size={16} />,
      },
    ],
  };

  return (
    <footer className="bg-[#02040a] border-t border-slate-900/80 text-slate-400 relative overflow-x-hidden">
      {/* Subtle Background Glow Vector */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-8 relative z-10 space-y-12">
        {/* Top Segment: Brand & Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Presentation Panel (5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 group w-fit cursor-pointer text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                <span className="font-black text-white text-base">i</span>
              </div>
              <h2 className="text-xl font-bold tracking-wider text-white">
                Ignite<span className="text-blue-500">3i</span>
              </h2>
            </button>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Engineering high-performance software systems and data analytics
              structures. Transforming complex operations into modular
              architectures.
            </p>
            <div className="flex items-center gap-2.5 text-xs text-blue-500/80 bg-blue-950/20 border border-blue-900/30 px-3 py-1.5 rounded-xl w-fit font-medium">
              <Code2 size={14} /> Built with MERN Stack Architecture
            </div>
          </div>

          {/* Navigation Matrix Column 1 (3 Columns) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core System
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.platform.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="hover:text-white transition-colors duration-200 block py-0.5 cursor-pointer text-left w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Matrix Column 2 (3 Columns) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  {link.sectionId ? (
                    <button
                      onClick={() => scrollToSection(link.sectionId)}
                      className="hover:text-white transition-colors duration-200 block py-0.5 cursor-pointer text-left w-full"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className="hover:text-white transition-colors duration-200 block py-0.5"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Networks Column (2 Columns) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Networks
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.socials.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200 flex items-center gap-2 group py-0.5"
                  >
                    <span className="text-slate-600 group-hover:text-blue-400 transition-colors">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-500"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider Bar */}
        <hr className="border-slate-900/60" />

        {/* Bottom Segment: Copyrights & System Disclaimers */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>
            © {currentYear} Ignite3I Software Development And Services Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Terms of Operations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
