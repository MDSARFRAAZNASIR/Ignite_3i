import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const JobDetailsPage = () => {
  const { id } = useParams(); // Grabs the job ID from the routing URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        // Fetching from your Ignite3i backend endpoint structure
        const res = await fetch(`https://ignite3i-backend.vercel.app/jobs/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await res.json();
        setJob(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-white flex justify-center items-center">
        <div className="text-xl animate-pulse text-yellow-400">Loading job details...</div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="bg-black min-h-screen text-white flex flex-col justify-center items-center space-y-4">
        <div className="text-xl text-red-500">❌ {error || "Job not found"}</div>
        <Link to="/jobs" className="text-yellow-400 hover:underline">Back to Job Board</Link>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Back Button */}
        <Link to="/jobs" className="inline-flex items-center text-sm text-gray-400 hover:text-yellow-400 transition-colors">
          ← Back to All Jobs
        </Link>

        {/* Main Header Card */}
        <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full">
              {job.job_type || "Full-time"}
            </span>
            <h1 className="text-3xl font-bold text-white mt-3">{job.job_title}</h1>
            <p className="text-lg text-gray-400 mt-1">
              {job.company_name || "Ignite3i"} • <span className="text-yellow-400/90">{job.department || "Engineering"}</span>
            </p>
            <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-400">
              <span>📍 {job.location?.city}, {job.location?.state_province} ({job.location?.country})</span>
              <span>•</span>
              <span className="capitalize font-medium text-gray-300">{job.location?.remote_status}</span>
            </div>
          </div>

          {/* Core CTA Button */}
          <a
            href={job.application_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/10 whitespace-nowrap"
          >
            Apply for this Job
          </a>
        </div>

        {/* Details Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Column: Job Description & Specifications */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Description Section */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-3">
              <h2 className="text-xl font-semibold text-yellow-400">Job Description</h2>
              <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Required & Preferred Skills Section */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-4">
              <div>
                <h3 className="text-base font-semibold text-gray-200 mb-2">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.required_skills?.map((skill, index) => (
                    <span key={index} className="bg-gray-800 text-yellow-400 text-sm px-3 py-1 rounded-lg border border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {job.preferred_skills && job.preferred_skills.length > 0 && job.preferred_skills[0] !== "" && (
                <div>
                  <h3 className="text-base font-semibold text-gray-400 mb-2">Preferred Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.preferred_skills.map((skill, index) => (
                      <span key={index} className="bg-gray-800/50 text-gray-300 text-sm px-3 py-1 rounded-lg border border-gray-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Benefits Section */}
            {job.benefits && job.benefits.length > 0 && job.benefits[0] !== "" && (
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-3">
                <h2 className="text-xl font-semibold text-yellow-400">Perks & Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300 text-sm">
                      <span className="text-yellow-400 mr-2">✦</span> {benefit}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Fast-Facts Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">Job Overview</h3>
              
              {/* Salary Info */}
              <div>
                <span className="text-xs text-gray-500 uppercase block tracking-wider">Salary Offered</span>
                <span className="text-base font-medium text-gray-200">
                  {job.salary_range?.min && job.salary_range?.max 
                    ? `${Number(job.salary_range.min).toLocaleString()} - ${Number(job.salary_range.max).toLocaleString()} ${job.salary_range.currency}`
                    : "Competitive / Disclosed on request"}
                </span>
              </div>

              {/* Experience Info */}
              <div>
                <span className="text-xs text-gray-500 uppercase block tracking-wider">Experience Level</span>
                <span className="text-base font-medium text-gray-200 capitalize">
                  {job.experience_level || "Not specified"}
                </span>
              </div>

              {/* Education Info */}
              {job.education_requirement && (
                <div>
                  <span className="text-xs text-gray-500 uppercase block tracking-wider">Education Requirement</span>
                  <span className="text-base font-medium text-gray-200">
                    {job.education_requirement}
                  </span>
                </div>
              )}

              {/* Work Policy */}
              <div>
                <span className="text-xs text-gray-500 uppercase block tracking-wider">Location Status</span>
                <span className="text-base font-medium text-gray-200 capitalize">
                  {job.location?.remote_status || "On-site"}
                </span>
              </div>
            </div>
            
            {/* Quick Apply Panel */}
            <div className="bg-gray-900/40 p-4 rounded-2xl border border-gray-800 text-center">
              <p className="text-xs text-gray-400 mb-3">Ready to join the team at Ignite3i?</p>
              <a
                href={job.application_link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-800 text-yellow-400 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors border border-yellow-400/20"
              >
                Launch Application Form ↗
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default JobDetailsPage;