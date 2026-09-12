import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
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
  ChevronDown 
} from 'lucide-react';

// Organized sub-categories with icons & descriptions
const consultingCategories = [
  {
    category: "Core Engineering & Solutions",
    items: [
      { name: "Enterprise App Development", desc: "Scalable business applications", icon: Building2, path: "/services/enterprise-app" },
      { name: "DevOps Services", desc: "Automated CI/CD & cloud workflows", icon: DevOpsIcon, path: "/services/devops" },
      { name: "Mobile App Development", desc: "Native & cross-platform apps", icon: Smartphone, path: "/services/mobile-app" },
      { name: "Data Analytics", desc: "Business intelligence & insights", icon: BarChart3, path: "/services/data-analytics" },
      { name: "Cloud Enablement", desc: "Migration & cloud-native setups", icon: Cloud, path: "/services/cloud-enablement" },
      { name: "Digital & Creative", desc: "Branding & digital transformations", icon: Palette, path: "/services/digital-creative" },
      { name: "Offshore Development", desc: "Dedicated tech teams & pods", icon: Globe2, path: "/services/offshore" },
      { name: "Artificial Intelligence", desc: "Custom AI & machine learning", icon: Sparkles, path: "/services/ai" },
    ]
  },
  {
    category: "Platforms & Tech Stack",
    items: [
      { name: "AWS Services", desc: "Cloud infrastructure setup", icon: CloudLightning, path: "/platforms/aws" },
      { name: "NetSuite ERP", desc: "Enterprise cloud ERP management", icon: Layers, path: "/platforms/netsuite" },
      { name: "Zendesk Integration", desc: "Customer service platforms", icon: HelpCircle, path: "/platforms/zendesk" },
      { name: ".NET Development", desc: "Enterprise .NET solutions", icon: Code2, path: "/platforms/dotnet" },
      { name: "UI/UX Design", desc: "User-centric interface design", icon: Layout, path: "/services/ui-ux" },
    ]
  }
];

export default function ITConsultingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div 
    id="consulting"
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Navbar Tab Link */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-sm transition-all cursor-pointer ${
          isOpen ? 'text-blue-600 bg-sky-100/80' : 'text-slate-700 hover:text-blue-600 hover:bg-sky-50'
        }`}
      >
        <span>IT Consulting Services</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
      </button>

      {/* Mega Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-[820px] bg-white border border-sky-200/80 rounded-2xl shadow-xl shadow-sky-900/10 p-6 z-50 backdrop-blur-lg"
          >
            <div className="grid grid-cols-2 gap-8">
              {consultingCategories.map((group, groupIdx) => (
                <div key={groupIdx} className="space-y-3">
                  <h4 className="text-xs font-bold text-sky-800 uppercase tracking-wider px-2 border-b border-sky-100 pb-2">
                    {group.category}
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {group.items.map((item, itemIdx) => {
                      const ItemIcon = item.icon;
                      return (
                        <a
                          key={itemIdx}
                          href={item.path}
                          className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-sky-50 transition-all group"
                        >
                          <div className="p-2 rounded-lg bg-sky-100/70 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-all shrink-0 mt-0.5">
                            <ItemIcon size={18} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Banner inside Dropdown */}
            <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between bg-gradient-to-r from-sky-50 to-blue-50/50 p-3.5 rounded-xl">
              <span className="text-xs text-slate-600 font-medium">
                Looking for customized business technology solutions?
              </span>
              <a href="/contact" className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline">
                Talk to our consultants &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}