import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const ContactUsPage = () => {
  // Form input states (Matching ideal schema fields later)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validation, tracking, and response UI states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Realistic contact details layout data
  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      title: "Email Engineering Support",
      value: "solutions@ignite3i.com",
      link: "mailto:solutions@ignite3i.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      title: "Direct Corporate Line",
      value: "+91 (98) 8612-4000",
      link: "tel:+919886124000",
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-400" />,
      title: "Innovation Hub HQ",
      value: "60 Feet Rd, opposite to florence english high school, Amarjyothi Layout, Postal Colony, Sanjayanagara, Bengaluru, Karnataka, India",
      link: "https://www.google.com/maps/dir//Ignite3i,+2HRC%2B3FW,+60+Feet+Rd,+opposite+to+florence+english+high+school,+Amarjyothi+Layout,+Postal+Colony,+Sanjayanagara,+Bengaluru,+Karnataka+560094/@12.954955,77.6706752,5125m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bae17e9081c38b1:0xfc85b308cdc6e60f!2m2!1d77.5712014!2d13.0402486!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  // Robust front-end client-side validation logic
  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim())
      tempErrors.subject = "Subject title is required.";
    if (!formData.message.trim()) {
      tempErrors.message = "Message content cannot be blank.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Real-time error removal as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Replace your existing handleSubmit inside ContactUsPage.jsx with this:
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Mimicking standard server processing delay
      await new Promise((resolve) => setTimeout(resolve, 1800));
      // Dynamically checks environment state to use your local development port or live server path
      const API_BASE =
        window.location.hostname === "localhost"
          ? "http://localhost:4500"
          : "https://ignite3i-backend.vercel.app"; // Replace with your backend URL

      const response = await fetch(`${API_BASE}/contactcreate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Resets input fields
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Network interface error connecting to cluster:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    //  <section >

    <div
      id="connect"
      className="bg-[#0F1D49] min-h-screen text-white pt-28 pb-20 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Ambience Background Blur Elements */}
      <div className="absolute top-1/3 right-[-10%] w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Left Side Header Text & Cards (5 Columns) */}
        <div className="lg:col-span-5 space-y-8 self-center">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xs font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 inline-block"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400"
            >
              Let's Build Together
            </motion.h1>
            <motion.p className="text-slate-100 leading-relaxed text-base">
              Have a complex MERN infrastructure concept, database pipelining
              inquiry, or transactional integration goal? Drop our core
              engineering cluster a line.
            </motion.p>
          </div>

          {/* Quick Contact Info Items */}
          <div className="space-y-4 pt-4">
            {contactDetails.map((item, idx) => (
              <motion.a
                href={item.link}
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}

                className=" gap-4 p-4 rounded-xl    border flex items-center border-slate-900/60 hover:border-slate-800 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950      flex items-center justify-center border border-slate-900 shadow-inner group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Side Validation Contact Form Block (7 Columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7  backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-slate-900/80 shadow-2xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input Row */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-100 uppercase tracking-wider block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Maya Callie"
                className={`w-full bg-slate-400 border ${errors.name ? "border-rose-500/50 focus:border-rose-500" : "border-slate-900 focus:border-blue-500/50"} px-4 py-3 rounded-xl text-white text-sm outline-none transition-all placeholder:text-slate-700`}
              />
              {errors.name && (
                <p className="text-xs text-rose-500  gap-1 mt-1 flex items-center font-medium">
                  <AlertCircle size={12} /> {errors.name}
                </p>
              )}
            </div>

            {/* Email Input Row */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-100 uppercase tracking-wider block">
                Email Address
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="callie@company.com"
                className={`w-full bg-slate-400 border ${errors.email ? "border-rose-500/50 focus:border-rose-500" : "border-slate-900 focus:border-blue-500/50"} px-4 py-3 rounded-xl text-white text-sm outline-none transition-all placeholder:text-slate-700`}
              />
              {errors.email && (
                <p className="text-xs text-rose-500 flex items-center gap-1 mt-1  font-medium">
                  <AlertCircle size={12} /> {errors.email}
                </p>
              )}
            </div>

            {/* Subject Input Row */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-100 uppercase tracking-wider block">
                Project Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="MERN Stack Scalability Inquiry"
                className={`w-full bg-slate-400 border ${errors.subject ? "border-rose-500/50 focus:border-rose-500" : "border-slate-900 focus:border-blue-500/50"} px-4 py-3 rounded-xl text-white text-sm outline-none transition-all placeholder:text-slate-700`}
              />
              {errors.subject && (
                <p className="text-xs text-rose-500 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle size={12} /> {errors.subject}
                </p>
              )}
            </div>

            {/* Message Text Area Row
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Detailed Requirements<span className="text-red-400">Max 50 words</span>
              </label>
              <textarea
                name="message"
                rows="5"
                maxLength={50}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your architecture requirements, timeline scope, or transactional parameters...Max 50 words"
                className={`w-full bg-slate-950/60 border ${errors.message ? "border-rose-500/50 focus:border-rose-500" : "border-slate-900 focus:border-blue-500/50"} px-4 py-3 rounded-xl text-white text-sm outline-none transition-all placeholder:text-slate-700 resize-none`}
              />
              {errors.message && (
                <p className="text-xs text-rose-500 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle size={12} /> {errors.message}
                </p>
              )}
            </div> */}


            {/* Message Text Area Row */}
<div className="space-y-2">
  <div className="flex justify-between items-center">
    <label className="text-xs font-bold text-slate-100 uppercase tracking-wider block">
      Detailed Requirements
    </label>
    {/* Dynamic Word Limit Message */}
    <span className={`text-[11px] font-medium ${
      (formData.message?.trim().split(/\s+/).filter(Boolean).length || 0) >= 50 
        ? "text-rose-500 font-bold" 
        : "text-slate-500"
    }`}>
      {formData.message?.trim().split(/\s+/).filter(Boolean).length || 0}/50 words
    </span>
  </div>

  <textarea
    name="message"
    rows="5"
    value={formData.message}
    onChange={(e) => {
      const words = e.target.value.trim().split(/\s+/).filter(Boolean);
      // Prevent typing beyond 50 words
      if (words.length <= 50 || e.target.value.length < formData.message.length) {
        handleChange(e);
      }
    }}
    placeholder="Describe your architecture requirements, timeline scope, or transactional parameters..."
    className={`w-full bg-slate-400 border ${
      errors.message ? "border-rose-500/50 focus:border-rose-500" : "border-slate-900 focus:border-blue-500/50"
    } px-4 py-3 rounded-xl text-white text-sm outline-none transition-all placeholder:text-slate-700 resize-none`}
  />

  {errors.message && (
    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1 font-medium">
      <AlertCircle size={12} /> {errors.message}
    </p>
  )}
</div>

            {/* Interactive Dynamic Form Actions Bar */}
            <div className="pt-2  flex-col sm:flex-row  flex items-center gap-4 justify-between">
              {/* Dynamic Notification Center banners */}
              <div className="w-full sm:w-auto">
                <AnimatePresence mode="wait">
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-xs font-medium flex items-center text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-3 py-2 rounded-lg  gap-2"
                    >
                      <CheckCircle2 size={14} /> Transmission dispatched
                      successfully!
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-xs font-medium flex items-center text-rose-400 bg-rose-950/30 border border-rose-900/40 px-3 py-2 rounded-lg gap-2"
                    >
                      <AlertCircle size={14} /> Pipeline submission error.
                      Please retry.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dynamic Submit Button Hook with Spring micro-interactions */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto ml-auto  flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 disabled:opacity-40 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-150  justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer min-w-[140px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsPage;
