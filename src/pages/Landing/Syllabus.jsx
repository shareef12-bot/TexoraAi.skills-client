// import React, { useState } from "react";
// import {
//   FaBox,
//   FaBookOpen,
//   FaBullseye,
//   FaTools,
//   FaWhatsapp,
//   FaUpload, // ✅ NEW for upload
// } from "react-icons/fa";
// import { MdDesignServices } from "react-icons/md";
// import { HiTrendingUp } from "react-icons/hi";
// import { FiClock, FiDownload } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// /* -------------------- UPDATED SYLLABUS DATA (Enhanced content) -------------------- */
// const syllabusData = {
//   "Product Management": {
//     title: "Product Management Syllabus",
//     duration: "8 weeks • 6-10 hrs/week",
//     modules: [
//       "Week 1: Product Fundamentals & Market Research",
//       "Week 2: User Research & Problem Discovery",
//       "Week 3: Product Roadmaps & Prioritization",
//       "Week 4: Stakeholder Management & Communication",
//       "Week 5: Metrics & Analytics Setup",
//       "Week 6: Feature Specification & Design Handoffs",
//       "Week 7: Launch Planning & Go-to-Market",
//       "Week 8: Capstone Project & Portfolio Building",
//     ],
//     projects: [
//       "E-commerce Product Roadmap (Jira)",
//       "SaaS Feature Prioritization Case Study",
//     ],
//     tools: ["Jira", "Notion", "Miro", "Google Analytics", "Figma"],
//     icon: <FaBox className="w-4 h-4 flex-shrink-0" />,
//   },
//   "UI/UX Design": {
//     title: "UI/UX Design Syllabus",
//     duration: "8 weeks • 8-12 hrs/week",
//     modules: [
//       "Week 1: Design Fundamentals & Research Methods",
//       "Week 2: User Personas & Journey Mapping",
//       "Week 3: Wireframing & Information Architecture",
//       "Week 4: High-Fidelity Prototyping (Figma)",
//       "Week 5: Design Systems & Component Libraries",
//       "Week 6: Usability Testing & Iteration",
//       "Week 7: Motion Design & Micro-interactions",
//       "Week 8: Portfolio Case Studies & Handoffs",
//     ],
//     projects: ["Fintech Mobile App Redesign", "E-learning Platform Dashboard"],
//     tools: ["Figma", "FigJam", "Miro", "Adobe XD", "Maze"],
//     icon: <MdDesignServices className="w-4 h-4 flex-shrink-0" />,
//   },
//   "Growth & Marketing": {
//     title: "Growth & Marketing Syllabus",
//     duration: "8 weeks • 7-11 hrs/week",
//     modules: [
//       "Week 1: Growth Frameworks & Funnel Analysis",
//       "Week 2: Customer Acquisition Channels",
//       "Week 3: Performance Marketing Fundamentals",
//       "Week 4: Google Ads & Meta Ads Mastery",
//       "Week 5: Analytics & Attribution Modeling",
//       "Week 6: A/B Testing & Experimentation",
//       "Week 7: Retention & Lifecycle Marketing",
//       "Week 8: Growth Case Studies & Portfolio",
//     ],
//     projects: [
//       "Paid Acquisition Campaign Optimization",
//       "Cohort Analysis Dashboard",
//     ],
//     tools: ["GA4", "Google Ads", "Meta Ads Manager", "Mixpanel", "Hotjar"],
//     icon: <HiTrendingUp className="w-4 h-4 flex-shrink-0" />,
//   },
// };

// /* -------------------- MAIN COMPONENT -------------------- */
// const SyllabusPage = ({ theme, toggleTheme }) => {
//   const navigate = useNavigate();
//   const isDark = theme === "dark";

//   /* ---------- ORIGINAL ROLE LOGIC (KEEPS WORKING) ---------- */
//   const role = localStorage.getItem("role") || "guest"; // ✅ Added 'guest' fallback
//   const isStudent = role === "student";
//   const canUpload = role === "admin" || role === "trainer";

//   const [selectedTrack, setSelectedTrack] =
//     React.useState("Product Management");
//   const [uploadedFile, setUploadedFile] = useState(null); // ✅ Track uploaded file
//   const currentSyllabus = syllabusData[selectedTrack];

//   /* ---------- ENHANCED HANDLERS ---------- */
//   const handleDownload = () => {
//     // ✅ Frontend PDF generation (jsPDF) or backend call
//     const content = `📚 ${selectedTrack} Syllabus\n\n${
//       currentSyllabus.duration
//     }\n\nModules:\n${currentSyllabus.modules.join(
//       "\n"
//     )}\n\nProjects:\n${currentSyllabus.projects.join("\n")}`;

//     const blob = new Blob([content], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `${selectedTrack.replace(/ & /g, "_")}_Syllabus.txt`;
//     a.click();
//     URL.revokeObjectURL(url);
//     alert("📥 Syllabus downloaded successfully!");
//   };

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file || !file.type.includes("pdf")) {
//       alert("❌ Please select a valid PDF file");
//       return;
//     }
//     setUploadedFile(file.name);
//     alert(
//       `✅ PDF uploaded by ${role.toUpperCase()}: ${
//         file.name
//       }\n(Stored locally - Backend ready)`
//     );
//     // TODO: Backend upload to Java/Google Cloud
//   };

//   /* -------------------- PREMIUM UI (New Design) -------------------- */
//   return (
//     <div
//       className={`min-h-screen ${
//         isDark
//           ? "bg-gradient-to-br from-slate-950 via-black to-slate-900"
//           : "bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50"
//       }`}
//     >
//       {/* ========== HEADER ========== */}
//       <header
//         className={`relative z-20 flex items-center justify-between px-4 md:px-8 py-4 border-b backdrop-blur-xl ${
//           isDark
//             ? "border-slate-800/50 bg-black/80"
//             : "border-slate-200/50 bg-white/80 shadow-sm"
//         }`}
//       >
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => navigate(-1)}
//             className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md hover:shadow-blue-500/25 ${
//               isDark
//                 ? "bg-gradient-to-r from-slate-800/30 to-slate-700/30 text-slate-200 hover:from-blue-600/20 hover:to-emerald-600/20 hover:text-white border border-slate-700/50"
//                 : "bg-gradient-to-r from-slate-50/70 to-slate-100/70 text-slate-700 hover:from-blue-600/10 hover:to-emerald-600/10 hover:text-slate-900 border border-slate-200/50"
//             }`}
//           >
//             <span className="transform group-hover:-translate-x-1 transition-transform text-lg">
//               ←
//             </span>
//             <span className="hidden sm:inline">Back</span>
//           </button>
//           <div className="flex items-center gap-2">
//             {currentSyllabus.icon}
//             <div>
//               <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
//                 {selectedTrack}
//               </h1>
//               <p
//                 className={`text-xs ${
//                   isDark ? "text-slate-400" : "text-slate-600"
//                 }`}
//               >
//                 Course Syllabus
//               </p>
//             </div>
//           </div>
//         </div>
//         <button
//           onClick={toggleTheme}
//           className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-all duration-300 border hover:scale-105 rounded-lg ${
//             isDark
//               ? "border-slate-700 hover:bg-slate-800/60"
//               : "border-slate-300 bg-white hover:bg-slate-100 shadow-sm"
//           }`}
//         >
//           <span
//             className={`h-4 w-4 rounded-full ${
//               isDark ? "bg-yellow-400" : "bg-slate-700"
//             }`}
//           />
//           <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
//         </button>
//       </header>

//       <main className="relative z-10 px-4 md:px-8 py-8 max-w-6xl mx-auto space-y-8">
//         {/* ========== TRACK SWITCH (Premium Style) ========== */}
//         <div
//           className={`p-2 rounded-2xl border backdrop-blur-xl shadow-lg ${
//             isDark
//               ? "bg-slate-900/40 border-slate-800/50"
//               : "bg-white/70 border-slate-200/50"
//           }`}
//         >
//           <div className="flex flex-wrap gap-2 p-2">
//             {Object.keys(syllabusData).map((track) => {
//               const trackData = syllabusData[track];
//               return (
//                 <button
//                   key={track}
//                   onClick={() => setSelectedTrack(track)}
//                   className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 ${
//                     selectedTrack === track
//                       ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 text-white shadow-xl"
//                       : isDark
//                       ? "text-slate-300 hover:bg-slate-800/60 hover:scale-[1.02] border border-slate-700/50 hover:border-blue-500/50"
//                       : "text-slate-700 hover:bg-slate-100 hover:scale-[1.02] border border-slate-300/50 hover:border-blue-500/30"
//                   }`}
//                 >
//                   {trackData.icon}
//                   <span>{track}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* ========== HERO SECTION (Role-based Actions) ========== */}
//         <div
//           className={`relative overflow-hidden rounded-2xl p-6 md:p-8 border backdrop-blur-xl shadow-xl ${
//             isDark
//               ? "bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-slate-700/50"
//               : "bg-gradient-to-br from-white to-slate-50 border-slate-200"
//           }`}
//         >
//           <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
//             <div className="flex-1">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-14 h-14 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-xl">
//                   {React.cloneElement(currentSyllabus.icon, {
//                     className: "w-6 h-6 text-white",
//                   })}
//                 </div>
//                 <div>
//                   <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent mb-2">
//                     {selectedTrack}
//                   </h2>
//                   <p
//                     className={`text-lg font-medium flex items-center gap-2 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-emerald-600/20 px-4 py-2 rounded-xl border border-blue-500/30 ${
//                       isDark ? "text-slate-200" : "text-slate-800"
//                     }`}
//                   >
//                     <FiClock className="w-4 h-4" />
//                     {currentSyllabus.duration}
//                   </p>
//                 </div>
//               </div>
//               <div
//                 className={`grid grid-cols-3 gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/10 border border-blue-500/20`}
//               >
//                 <div className="text-center">
//                   <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent block">
//                     {currentSyllabus.modules.length}
//                   </span>
//                   <span
//                     className={`text-xs ${
//                       isDark ? "text-slate-400" : "text-slate-600"
//                     }`}
//                   >
//                     Weeks
//                   </span>
//                 </div>
//                 <div className="text-center">
//                   <span className="text-2xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent block">
//                     {currentSyllabus.projects.length}
//                   </span>
//                   <span
//                     className={`text-xs ${
//                       isDark ? "text-slate-400" : "text-slate-600"
//                     }`}
//                   >
//                     Projects
//                   </span>
//                 </div>
//                 <div className="text-center">
//                   <span className="text-2xl font-black bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent block">
//                     {currentSyllabus.tools.length}
//                   </span>
//                   <span
//                     className={`text-xs ${
//                       isDark ? "text-slate-400" : "text-slate-600"
//                     }`}
//                   >
//                     Tools
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* ========== ROLE-BASED ACTION BUTTONS ========== */}
//             <div className="flex flex-col sm:flex-row gap-3 min-w-[200px]">
//               {/* ✅ STUDENT ONLY: Download */}
//               {isStudent && (
//                 <button
//                   onClick={handleDownload}
//                   className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-[1.02] whitespace-nowrap border-0 flex-1 text-sm"
//                 >
//                   <FiDownload className="w-4 h-4 group-hover:rotate-[-180deg] transition-transform duration-500" />
//                   Download PDF
//                 </button>
//               )}

//               {/* ✅ ADMIN/TRAINER ONLY: Upload */}
//               {canUpload && (
//                 <label className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer whitespace-nowrap border-0 flex-1 text-sm">
//                   <FaUpload className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" />
//                   Upload PDF
//                   <input
//                     type="file"
//                     accept="application/pdf"
//                     hidden
//                     onChange={handleUpload}
//                   />
//                 </label>
//               )}

//               {/* ✅ UPLOAD CONFIRMATION */}
//               {uploadedFile && (
//                 <div
//                   className={`text-xs px-3 py-2 rounded-lg font-medium flex items-center gap-1 ${
//                     isDark
//                       ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
//                       : "bg-emerald-100 text-emerald-800 border border-emerald-300"
//                   }`}
//                 >
//                   ✅ {uploadedFile}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* ✅ ROLE INFO */}
//           <p
//             className={`text-sm mt-4 p-3 rounded-xl backdrop-blur-sm ${
//               isDark
//                 ? "bg-slate-800/50 text-slate-400 border border-slate-700/50"
//                 : "bg-slate-100/50 text-slate-600 border border-slate-200/50"
//             }`}
//           >
//             Logged in as:{" "}
//             <span className="font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
//               {role.toUpperCase()}
//             </span>
//             {role === "guest" && " 👤 Login to access Download/Upload"}
//           </p>
//         </div>

//         {/* ========== WEEKLY MODULES + PROJECTS & TOOLS ========== */}
//         <div className="grid lg:grid-cols-3 gap-6">
//           {/* Weekly Curriculum */}
//           <div className="lg:col-span-2">
//             <div
//               className={`rounded-2xl p-6 border backdrop-blur-xl shadow-xl ${
//                 isDark
//                   ? "bg-slate-900/60 border-slate-800/50"
//                   : "bg-white border-slate-200"
//               }`}
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
//                   <FaBookOpen className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
//                   Weekly Curriculum
//                 </h3>
//               </div>
//               <div className="space-y-3">
//                 {currentSyllabus.modules.map((module, idx) => (
//                   <div
//                     key={idx}
//                     className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer ${
//                       isDark
//                         ? "border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 hover:border-blue-500/40"
//                         : "border-slate-200/50 shadow-md hover:shadow-lg hover:border-blue-500/30"
//                     }`}
//                   >
//                     <div className="flex items-start gap-3">
//                       <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 flex items-center justify-center text-white font-bold text-base shadow-lg group-hover:scale-105 transition-transform">
//                         {idx + 1}
//                       </div>
//                       <p
//                         className={`font-semibold text-base leading-relaxed group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-cyan-500 group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${
//                           isDark ? "text-slate-200" : "text-slate-900"
//                         }`}
//                       >
//                         {module}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Projects */}
//           <div>
//             <div
//               className={`rounded-2xl p-6 border backdrop-blur-xl shadow-xl ${
//                 isDark
//                   ? "bg-slate-900/60 border-slate-800/50"
//                   : "bg-white border-slate-200"
//               }`}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
//                   <FaBullseye className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
//                   Projects
//                 </h3>
//               </div>
//               <div className="space-y-3">
//                 {currentSyllabus.projects.map((project, idx) => (
//                   <div
//                     key={idx}
//                     className={`group p-4 rounded-xl border transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer ${
//                       isDark
//                         ? "bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-400/40"
//                         : "bg-emerald-50/50 border-emerald-200/50 hover:border-emerald-400/50 shadow-md"
//                     }`}
//                   >
//                     <div className="flex items-start gap-3">
//                       <span className="text-emerald-500 text-xl mt-0.5 flex-shrink-0">
//                         ✦
//                       </span>
//                       <p
//                         className={`font-semibold text-sm leading-relaxed group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${
//                           isDark ? "text-slate-200" : "text-slate-900"
//                         }`}
//                       >
//                         {project}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Tools */}
//             <div
//               className={`rounded-2xl p-6 border backdrop-blur-xl shadow-xl ${
//                 isDark
//                   ? "bg-slate-900/60 border-slate-800/50"
//                   : "bg-white border-slate-200"
//               }`}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
//                   <FaTools className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
//                   Tools You'll Master
//                 </h3>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {currentSyllabus.tools.map((tool, idx) => (
//                   <span
//                     key={idx}
//                     className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer border ${
//                       isDark
//                         ? "bg-slate-800/50 text-slate-200 border-slate-700 hover:border-orange-400/50"
//                         : "bg-slate-100/50 text-slate-900 border-slate-300/50 hover:border-orange-400 shadow-sm"
//                     }`}
//                   >
//                     {tool}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ========== CTA ========== */}
//         <div
//           className={`relative overflow-hidden rounded-2xl p-8 border backdrop-blur-xl shadow-xl ${
//             isDark
//               ? "bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 border-slate-700/50"
//               : "bg-gradient-to-r from-white/80 via-slate-50/80 to-white/80 border-slate-200"
//           }`}
//         >
//           <div className="relative z-10 text-center space-y-6">
//             <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
//               Ready to Launch Your Career? 🚀
//             </h3>
//             <p
//               className={`text-lg max-w-2xl mx-auto leading-relaxed ${
//                 isDark ? "text-slate-300" : "text-slate-700"
//               }`}
//             >
//               Join thousands of students who have transformed their careers
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center pt-4">
//               <a
//                 href={`https://api.whatsapp.com/send?phone=919210970334&text=Hi!%20I%20checked%20the%20${encodeURIComponent(
//                   selectedTrack
//                 )}%20syllabus.%20Ready%20to%20start!`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-[1.02] text-sm"
//               >
//                 <FaWhatsapp className="w-4 h-4" />
//                 Chat on WhatsApp
//               </a>
//               <button
//                 className={`px-8 py-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 hover:from-blue-700 hover:via-cyan-600 hover:to-emerald-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-[1.02] text-sm border-0`}
//               >
//                 🎓 Enroll Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SyllabusPage;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  FileText,
  Target,
  Sun,
  Moon,
  Calendar,
  Clock,
} from "lucide-react";

export default function SyllabusPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const courseData = location.state?.course;

  const [expandedWeek, setExpandedWeek] = useState(null);
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    if (!courseData) {
      navigate("/courses");
    }
  }, [courseData, navigate]);

  if (!courseData) return null;

  const syllabus = [
    {
      week: "Week 1",
      dates: "Jan 6 — Jan 11",
      title: "Product Foundations & Capstone Kickoff",
      items: 15,
      sessions: [
        {
          type: "live",
          title: "[Capstone] Project Walkthrough and Kick-off",
          date: "FRI 1/9",
          time: "11:30 PM—12:30 AM (GMT+5:30)",
        },
        {
          type: "live",
          title: "Orientation Session [optional]",
          date: "FRI 1/9",
          time: "11:00 PM—11:30 PM (GMT+5:30)",
        },
      ],
      phase: {
        title: "Phase 1: Building Products 101",
        items: 15,
        description:
          "Master the fundamentals of product development and management",
      },
    },
    {
      week: "Week 2",
      dates: "Jan 12 — Jan 18",
      title: "Deep Dive into Product Development",
      items: 13,
      phase: {
        title: "Phase 1: Technical Deep Dive",
        items: 13,
        description:
          "Technical knowledge required for effective product management. Learn algorithms, best practices, and frameworks.",
      },
      sessions: [
        {
          type: "lesson",
          title: "Understanding Core Product Concepts",
          duration: "45 min",
        },
        {
          type: "lesson",
          title: "User-Centric Product Thinking",
          duration: "60 min",
        },
        {
          type: "live",
          title: "Guest Session: Industry Expert",
          date: "WED 1/14",
          time: "10:00 PM—11:30 PM (GMT+5:30)",
        },
      ],
    },
    {
      week: "Week 3",
      dates: "Jan 19 — Jan 25",
      title: "Strategy & XFN Collaboration",
      items: 12,
      phase: {
        title: "Phase 2: Strategic Product Management",
        items: 12,
        description:
          "Learn how to develop product strategy, work with cross-functional teams, and drive alignment.",
      },
      sessions: [
        {
          type: "lesson",
          title: "Product Strategy Frameworks",
          duration: "50 min",
        },
        {
          type: "lesson",
          title: "Working with Engineering Teams",
          duration: "40 min",
        },
        {
          type: "live",
          title: "XFN Collaboration Workshop",
          date: "THU 1/22",
          time: "9:00 PM—10:30 PM (GMT+5:30)",
        },
      ],
    },
    {
      week: "Week 4",
      dates: "Jan 26 — Feb 1",
      title: "PRDs, User Stories & Planning",
      items: 14,
      phase: {
        title: "Phase 2: Execution Excellence",
        items: 14,
        description:
          "Master the art of product documentation, user story writing, and sprint planning.",
      },
      sessions: [
        {
          type: "lesson",
          title: "Writing Effective PRDs",
          duration: "55 min",
        },
        {
          type: "lesson",
          title: "User Story Mapping",
          duration: "45 min",
        },
        {
          type: "project",
          title: "PRD Assignment",
          deadline: "SUN 2/1",
        },
      ],
    },
    {
      week: "Week 5",
      dates: "Feb 2 — Feb 8",
      title: "Data & Metrics",
      items: 16,
      phase: {
        title: "Phase 3: Data-Driven Decisions",
        items: 16,
        description:
          "Learn to define metrics, analyze data, and make data-informed decisions.",
      },
      sessions: [
        {
          type: "lesson",
          title: "Defining Success Metrics",
          duration: "50 min",
        },
        {
          type: "lesson",
          title: "A/B Testing & Experimentation",
          duration: "60 min",
        },
        {
          type: "live",
          title: "Analytics Deep Dive",
          date: "TUE 2/4",
          time: "10:00 PM—11:30 PM (GMT+5:30)",
        },
      ],
    },
    {
      week: "Week 6",
      dates: "Feb 9 — Feb 15",
      title: "Go-to-Market & Launch",
      items: 11,
      phase: {
        title: "Phase 3: Product Launch",
        items: 11,
        description:
          "Master go-to-market strategy, launch planning, and post-launch optimization.",
      },
      sessions: [
        {
          type: "lesson",
          title: "GTM Strategy Development",
          duration: "45 min",
        },
        {
          type: "lesson",
          title: "Launch Planning & Execution",
          duration: "50 min",
        },
        {
          type: "project",
          title: "Launch Plan Presentation",
          deadline: "SAT 2/14",
        },
      ],
    },
    {
      week: "Week 7-8",
      dates: "Feb 16 — Feb 22",
      title: "Capstone & Final Projects",
      items: 5,
      sessions: [
        {
          type: "live",
          title: "Final Capstone Presentations",
          date: "WED 2/18",
          time: "9:00 PM—11:00 PM (GMT+5:30)",
        },
        {
          type: "live",
          title: "Graduation & Networking",
          date: "THU 2/19",
          time: "10:00 PM—11:00 PM (GMT+5:30)",
        },
      ],
    },
  ];

  const toggleWeek = (index) => {
    setExpandedWeek(expandedWeek === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <div className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>

            <button
              onClick={() => {
                const next = !dark;
                setDark(next);
                localStorage.setItem("theme", next ? "dark" : "light");
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            >
              {dark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {courseData.title} - Course Syllabus
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{courseData.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>
                  {courseData.liveSessions} live sessions •{" "}
                  {courseData.totalLessons} lessons
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            This comprehensive syllabus covers all aspects of{" "}
            {courseData.title.toLowerCase()}. Each week includes live sessions,
            self-paced lessons, and hands-on projects to ensure you master the
            material.
          </p>
        </div>

        <div className="space-y-3">
          {syllabus.map((week, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-900"
            >
              <button
                onClick={() => toggleWeek(index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-lg text-gray-900 dark:text-white">
                      {week.week}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {week.dates}
                    </p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                      {week.title}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {week.items} items
                  </span>
                  {expandedWeek === index ? (
                    <ChevronUp className="text-gray-400" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </div>
              </button>

              {expandedWeek === index && (
                <div className="p-6 space-y-4 bg-white dark:bg-zinc-900">
                  {week.phase && (
                    <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 rounded-xl p-4 border border-blue-200/50 dark:border-blue-800/50">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                            {week.phase.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {week.phase.description}
                          </p>
                        </div>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full whitespace-nowrap">
                          {week.phase.items} items
                        </span>
                      </div>
                    </div>
                  )}

                  {week.sessions &&
                    week.sessions.map((session, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-zinc-800 rounded-xl hover:shadow-md transition"
                      >
                        {session.type === "live" ? (
                          <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <PlayCircle size={20} className="text-white" />
                          </div>
                        ) : session.type === "project" ? (
                          <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Target size={20} className="text-white" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <FileText size={20} className="text-white" />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">
                            {session.title}
                          </p>
                          {session.date && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {session.date} • {session.time}
                            </p>
                          )}
                          {session.duration && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Duration: {session.duration}
                            </p>
                          )}
                          {session.deadline && (
                            <p className="text-sm text-red-600 dark:text-red-400 font-medium mt-1">
                              Due: {session.deadline}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
            Ready to Start Learning?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Join {courseData.students} students who are already mastering{" "}
            {courseData.title.toLowerCase()}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition"
          >
            Enroll Now • {courseData.price}
          </button>
        </div>
      </div>
    </div>
  );
}
