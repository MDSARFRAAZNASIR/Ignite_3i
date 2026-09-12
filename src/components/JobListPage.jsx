import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  Upload,
  X,
  CheckCircle,
  FileText,
  ChevronDown,
} from "lucide-react";

export default function JobsListPage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  // State to handle pagination/clipping limit
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetch("https://ignite3i-backend.vercel.app/joblist")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Job data loaded:", data);
        setJobs(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Handle Form Input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle File Input drops/changes
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("jobId", selectedJob._id);
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("resume", formData.resume);

    try {
      const API_BASE =
        window.location.hostname === "localhost"
          ? "http://localhost:4500"
          : "https://ignite3i-backend.vercel.app";

      const response = await fetch(`${API_BASE}/jobapply`, {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", resume: null });
      } else {
        alert(
          `Submission failure: ${data.error || "Unknown server validation error"}`,
        );
      }
    } catch (err) {
      console.error("Networking connection error dispatching data:", err);
      alert("Could not talk securely with backend architecture layer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setSubmitSuccess(false);
    setFormData({ name: "", email: "", resume: null });
  };

  // 🌟 FILTER: Show only active/open positions to users
  // (Change 'job.status === "active"' or 'job.status === "open"' depending on your DB field)
  const activeJobs = jobs.filter((job) =>
    job.status
      ? job.status.toLowerCase() === "active" ||
        job.status.toLowerCase() === "open"
      : true,
  );

  // Extract exactly the slice we want to render safely
  const slicedJobs = activeJobs.slice(0, visibleCount);

  return (
    <div
      id="jobs"
      className="bg-[#04048177] min-h-screen text-white px-6 md:px-8 py-28 relative overflow-hidden selection:bg-blue-500/30"
    >
      {/* Background Ambient Spotlight Blobs */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/60 border border-slate-800 rounded-full text-xs font-semibold text-blue-400 tracking-wider uppercase backdrop-blur-md">
            Join Our Global Engineering Team
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Open{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Positions
            </span>
          </h1>
          <p className="text-slate-100 text-base">
            Explore active career paths and technical disciplines at Ignite3i.
            Shape the future of automation, AI infrastructure, and software
            services.
          </p>
        </header>

        {/* Dynamic Jobs Listing Grid */}
        {activeJobs.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl bg-slate-900/10">
            <Briefcase className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-100 font-medium">
              No open positions available at the moment.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* The main grid system renders only the sliced view */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {slicedJobs.map((job, index) => (
                  <motion.div
                    key={job._id || index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    layout
                    className="bg-cyan-800 backdrop-blur-sm border border-slate-900 hover:border-cyan-950 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:bg-sky-800 shadow-xl"
                  >
                    <div>
                      {/* Card Title Block */}
                      <h2 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-200 mb-1.5">
                        {job.job_title}
                      </h2>
                      <div className="text-sm font-medium text-slate-100 mb-4">
                        {job.company_name}
                      </div>

                      {/* Metadata Indicators */}
                      <div className="space-y-2 mb-5">
                        <div className="flex items-center gap-2 text-xm text-slate-100">
                          <MapPin className="w-3.5 h-3.5 text-slate-100 shrink-0" />
                          <span>
                            {job.location?.city || "Remote"},{" "}
                            {job.location?.country || "Global"} (
                            {job.location?.remote_status || "Hybrid"})
                          </span>
                        </div>
                        {job.experience_level && (
                          <div className="flex items-center gap-2 text-xm text-slate-100">
                            <Calendar className="w-3.5 h-3.5 text-slate-100 shrink-0" />
                            <span>{job.experience_level}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-slate-100 text-sm leading-relaxed line-clamp-3 mb-6">
                        {job.description}
                      </p>
                    </div>

                    <div>
                      {/* Skill Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {job.required_skills?.slice(0, 3).map((skill, i) => (
                          <span
                            key={i}
                            className="bg-slate-900 border border-slate-100 text-slate-300 text-[11px] font-medium px-2.5 py-1 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Operational Action Button */}
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="w-full text-center py-2.5 px-4 bg-slate-900/80 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-md cursor-pointer"
                      >
                        View Details & Apply
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Micro-Interaction Animation Action for Load More */}
            {activeJobs.length > visibleCount && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center pt-6"
              >
                <motion.button
                  whileHover={{ y: 2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setVisibleCount(activeJobs.length)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-950 border border-slate-900 hover:border-slate-800 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 group cursor-pointer shadow-lg shadow-black/40"
                >
                  <span>
                    Explore More Openings ({activeJobs.length - visibleCount}{" "}
                    left)
                  </span>
                  <ChevronDown
                    size={16}
                    className="text-slate-500 group-hover:text-blue-400 transition-colors group-hover:animate-bounce"
                  />
                </motion.button>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Dynamic Detail Overlay & Resume Submission Box Container */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0b0f19] border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative grid md:grid-cols-12"
            >
              {/* Escape Toggle Control */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-slate-900/60 rounded-xl border border-slate-800 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X size={18} />
              </button>

              {/* Left Grid Panel: Complete Job Spec */}
              <div className="p-6 md:p-8 md:col-span-7 border-b md:border-b-0 md:border-r border-slate-800 overflow-y-auto">
                <div className="space-y-4">
                  <span className="inline-block px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold rounded-md">
                    {selectedJob.location?.remote_status || "Full-Time"}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {selectedJob.job_title}
                  </h2>
                  <p className="text-slate-400 text-sm font-medium">
                    {selectedJob.company_name}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 bg-slate-900/40 border border-slate-900 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>
                        {selectedJob.location?.city || "Remote"},{" "}
                        {selectedJob.location?.country}
                      </span>
                    </div>
                    {selectedJob.experience_level && (
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                        <span>{selectedJob.experience_level}</span>
                      </div>
                    
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Position Overview
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                      {selectedJob.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Required Skill Set
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedJob.required_skills?.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-slate-900 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Grid Panel: Submission Form Pipeline */}
              <div className="p-6 md:p-8 md:col-span-5 bg-slate-900/10 flex flex-col justify-center relative">
                {submitSuccess ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center space-y-3 py-8"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center bg-emerald-500/10 text-emerald-400 justify-center mx-auto border border-emerald-500/20 shadow-lg">
                      <CheckCircle size={26} />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Application Received
                    </h4>
                    <p className="text-xs text-slate-400">
                      Your profile information has been routed to our
                      recruitment pipeline.
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        Apply Now
                      </h3>
                      <p className="text-xs text-slate-400">
                        Complete the form below to initiate review cycles.
                      </p>
                    </div>

                    <form onSubmit={handleApplySubmit} className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                          placeholder="johndoe@example.com"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                          Resume File
                        </label>
                        <div className="relative border border-dashed border-slate-800 hover:border-slate-700 bg-slate-900/30 rounded-xl transition-colors duration-200">
                          <input
                            type="file"
                            accept=".pdf,.docx"
                            required
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div className="p-4 text-center space-y-1.5">
                            <Upload className="w-5 h-5 text-slate-500 mx-auto" />
                            {formData.resume ? (
                              <div className="justify-center flex items-center gap-1.5 text-xs text-blue-400 font-medium max-w-[200px] mx-auto truncate">
                                <FileText size={14} className="shrink-0" />
                                <span className="truncate">
                                  {formData.resume.name}
                                </span>
                              </div>
                            ) : (
                              <>
                                <div className="text-xs text-slate-300 font-medium">
                                  Upload PDF or DOCX
                                </div>
                                <div className="text-[10px] text-slate-500">
                                  Max sizing threshold 10MB
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 mt-2 flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-slate-800 disabled:to-slate-800 text-white font-semibold text-sm rounded-xl transition-all duration-300 justify-center shadow-lg shadow-blue-500/10 cursor-pointer"
                      >
                        {isSubmitting
                          ? "Processing Application..."
                          : "Submit Application"}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
