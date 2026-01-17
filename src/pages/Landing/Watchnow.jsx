// import React, { useState, useEffect } from "react";
// import {
//   FaWhatsapp,
//   FaUpload,
//   FaVideo,
//   FaDownload,
//   FaPlay,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const demoChapters = [
//   {
//     title: "Inside TexoraAi.skills platform",
//     duration: "6:32 min",
//     desc: "Quick tour of the dashboard, live classes and assignments workflow.",
//   },
//   {
//     title: "How mentorship works",
//     duration: "4:18 min",
//     desc: "See how 1:1 mentorship, feedback loops and projects are handled.",
//   },
//   {
//     title: "Outcomes & placements",
//     duration: "5:05 min",
//     desc: "Real examples of portfolios, referrals and interview prep support.",
//   },
// ];

// const WatchDemo = () => {
//   const navigate = useNavigate();

//   // ✅ SELF-CONTAINED THEME (Same as before)
//   const [isDark, setIsDark] = useState(false);

//   // ✅ ROLE LOGIC (localStorage - Same as SyllabusPage)
//   const role = localStorage.getItem("role") || "guest";
//   const isStudent = role === "student";
//   const canUpload = role === "admin" || role === "trainer";

//   // ✅ VIDEO STATES
//   const [demoVideos, setDemoVideos] = useState([]);
//   const [uploadFile, setUploadFile] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   // Load theme
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setIsDark(savedTheme === "dark");
//     document.documentElement.classList.toggle("dark", savedTheme === "dark");
//   }, []);

//   // Load uploaded videos from localStorage
//   useEffect(() => {
//     const videos = JSON.parse(localStorage.getItem("demoVideos") || "[]");
//     setDemoVideos(videos);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDark ? "light" : "dark";
//     setIsDark(!isDark);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   // ✅ STUDENT: Download Video
//   const handleDownload = (video) => {
//     const a = document.createElement("a");
//     a.href = video.url;
//     a.download = video.name;
//     a.click();
//     alert(`📥 Video downloaded: ${video.name}`);
//   };

//   // ✅ ADMIN/TRAINER: Upload Video
//   const handleUpload = () => {
//     if (!uploadFile) return;

//     setUploading(true);

//     // Create video preview URL
//     const videoUrl = URL.createObjectURL(uploadFile);

//     // Store in localStorage
//     const newVideo = {
//       id: Date.now(),
//       name: uploadFile.name,
//       url: videoUrl,
//       uploadedBy: role.toUpperCase(),
//       size: `${(uploadFile.size / 1024 / 1024).toFixed(1)} MB`,
//       date: new Date().toLocaleString(),
//     };

//     const updatedVideos = [newVideo, ...demoVideos].slice(0, 10); // Max 10 videos
//     localStorage.setItem("demoVideos", JSON.stringify(updatedVideos));
//     setDemoVideos(updatedVideos);

//     setUploadFile(null);
//     setUploading(false);
//     alert(`✅ Video "${uploadFile.name}" uploaded by ${role.toUpperCase()}!`);
//   };

//   return (
//     <div
//       className={`min-h-screen transition-all duration-300 ${
//         isDark
//           ? "bg-gradient-to-br from-slate-950 via-black to-slate-900 text-slate-50"
//           : "bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50 text-slate-900"
//       }`}
//     >
//       {/* Header - SAME */}
//       <header
//         className={`flex items-center justify-between px-6 md:px-8 py-4 border-b backdrop-blur-xl transition-all duration-300 ${
//           isDark
//             ? "border-slate-800/50 bg-black/80"
//             : "border-slate-200/50 bg-white/80 shadow-sm"
//         }`}
//       >
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => navigate(-1)}
//             className={`group flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 ${
//               isDark
//                 ? "bg-gradient-to-r from-slate-800/30 to-slate-700/30 text-slate-200 hover:from-blue-600/20 hover:to-emerald-600/20 hover:text-white border border-slate-700/50"
//                 : "bg-gradient-to-r from-slate-50/70 to-slate-100/70 text-slate-700 hover:from-blue-600/10 hover:to-emerald-600/10 hover:text-slate-900 border border-slate-200/50"
//             }`}
//           >
//             ← Back
//           </button>
//           <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
//             TexoraAi.skills – Demo Videos
//           </h1>
//         </div>

//         <button
//           onClick={toggleTheme}
//           className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border hover:scale-105 shadow-md ${
//             isDark
//               ? "border-slate-700/50 bg-slate-800/70 hover:bg-slate-700/80 text-slate-200 hover:text-slate-100 shadow-slate-700/30 hover:shadow-slate-600/40"
//               : "border-slate-300/50 bg-white/80 hover:bg-slate-100 shadow-sm hover:shadow-md text-slate-900"
//           }`}
//           title="Toggle theme"
//         >
//           <span
//             className={`h-5 w-5 rounded-full transition-all duration-300 flex items-center justify-center font-bold ${
//               isDark
//                 ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/50"
//                 : "bg-slate-700 text-white"
//             }`}
//           >
//             {isDark ? "☀️" : "🌙"}
//           </span>
//           <span className="hidden sm:inline font-medium">
//             {isDark ? "Light" : "Dark"} mode
//           </span>
//         </button>
//       </header>

//       <main className="max-w-6xl mx-auto px-6 md:px-8 py-10 space-y-12">
//         {/* ✅ ROLE BADGE */}
//         <div className="text-center mb-8">
//           <span
//             className={`px-6 py-3 rounded-2xl text-sm font-bold shadow-lg transition-all duration-300 ${
//               isStudent
//                 ? "bg-gradient-to-r from-blue-500/20 to-emerald-500/20 text-blue-300 border-2 border-blue-500/40 shadow-blue-500/20"
//                 : canUpload
//                 ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-2 border-emerald-500/40 shadow-emerald-500/20"
//                 : "bg-gradient-to-r from-slate-500/20 to-slate-700/20 text-slate-300 border-2 border-slate-500/40 shadow-slate-500/20"
//             }`}
//           >
//             🎥{" "}
//             {isStudent
//               ? "Student - Download Videos"
//               : canUpload
//               ? `${role.toUpperCase()} - Upload Videos`
//               : "👤 Guest - Login Required"}
//           </span>
//         </div>

//         {/* Video Player + Upload */}
//         <section className="grid gap-8 md:grid-cols-[2fr,1.3fr] items-start">
//           {/* Video Player */}
//           <div
//             className={`rounded-3xl p-8 border backdrop-blur-xl shadow-2xl transition-all duration-300 ${
//               isDark
//                 ? "bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-slate-800/50"
//                 : "bg-gradient-to-br from-blue-50/80 to-emerald-50/80 border-blue-200/50"
//             }`}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent mb-6">
//               Latest Demo Video
//             </h2>

//             {/* ✅ VIDEO PLAYER */}
//             <div
//               className={`relative aspect-video rounded-2xl overflow-hidden shadow-3xl border-4 transition-all duration-300 ${
//                 isDark
//                   ? "border-slate-700/50 bg-slate-900/70"
//                   : "border-blue-200/50 bg-white/80"
//               }`}
//             >
//               {demoVideos.length > 0 ? (
//                 <>
//                   <video
//                     controls
//                     className="w-full h-full rounded-2xl"
//                     src={demoVideos[0].url}
//                     poster="https://via.placeholder.com/1280x720/1e293b/64748b?text=TexoraAi.skills+Demo"
//                   >
//                     Your browser doesn't support video.
//                   </video>

//                   {/* ✅ STUDENT DOWNLOAD BUTTON */}
//                   {isStudent && (
//                     <button
//                       onClick={() => handleDownload(demoVideos[0])}
//                       className="absolute top-4 right-4 group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white p-3 rounded-2xl shadow-2xl hover:shadow-3xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 flex items-center gap-2 border-2 border-white/20 backdrop-blur-sm"
//                     >
//                       <FaDownload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
//                       <span className="text-sm font-bold hidden md:inline">
//                         Download
//                       </span>
//                     </button>
//                   )}
//                 </>
//               ) : (
//                 <div className="flex flex-col items-center justify-center h-full text-center p-12 bg-gradient-to-br from-slate-100/50 to-slate-200/50 rounded-2xl">
//                   <FaVideo className="w-24 h-24 text-slate-400 mb-6 opacity-60" />
//                   <h3
//                     className={`text-2xl font-bold mb-2 ${
//                       isDark ? "text-slate-300" : "text-slate-700"
//                     }`}
//                   >
//                     No videos yet
//                   </h3>
//                   <p
//                     className={`text-lg mb-4 ${
//                       isDark ? "text-slate-500" : "text-slate-600"
//                     }`}
//                   >
//                     {canUpload
//                       ? "Upload first video!"
//                       : "Wait for admin upload"}
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* Chapters - SAME */}
//             <h3 className="text-xl font-bold mt-8 mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
//               Chapters Preview:
//             </h3>
//             <div className="grid md:grid-cols-2 gap-4">
//               {demoChapters.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer ${
//                     isDark
//                       ? "border-slate-800/50 bg-slate-900/50 hover:bg-slate-900/70 hover:border-blue-500/40"
//                       : "border-slate-200/50 bg-white/70 hover:bg-white shadow-lg hover:border-blue-500/30"
//                   }`}
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg mt-0.5">
//                       {idx + 1}
//                     </div>
//                     <div className="flex-1">
//                       <p
//                         className={`font-bold text-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-cyan-500 group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${
//                           isDark ? "text-slate-200" : "text-slate-900"
//                         }`}
//                       >
//                         {item.title}
//                       </p>
//                       <p
//                         className={`text-sm mt-1 ${
//                           isDark ? "text-slate-400" : "text-slate-600"
//                         }`}
//                       >
//                         {item.desc}
//                       </p>
//                     </div>
//                     <span
//                       className={`px-4 py-2 rounded-lg backdrop-blur-sm text-xs font-bold ${
//                         isDark
//                           ? "bg-slate-800/70 text-slate-200 border-slate-600/50"
//                           : "bg-slate-100 text-slate-800 border-slate-200/50"
//                       }`}
//                     >
//                       {item.duration}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ✅ UPLOAD SECTION (Admin/Trainer ONLY) */}
//           {canUpload && (
//             <div
//               className={`rounded-3xl p-8 border backdrop-blur-xl shadow-2xl transition-all duration-300 ${
//                 isDark
//                   ? "bg-gradient-to-br from-emerald-900/70 to-blue-900/70 border-emerald-500/40 shadow-emerald-500/20"
//                   : "bg-gradient-to-br from-emerald-50/80 to-blue-50/80 border-emerald-300/50 shadow-emerald-200/30"
//               }`}
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
//                   <FaUpload className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
//                   Upload New Demo
//                 </h3>
//               </div>

//               <p
//                 className={`text-sm mb-6 text-center ${
//                   isDark ? "text-emerald-300" : "text-emerald-700"
//                 }`}
//               >
//                 {role.toUpperCase()} privileges active ✅
//               </p>

//               {/* File Input */}
//               <div className="space-y-4 mb-6">
//                 <input
//                   type="file"
//                   accept="video/*"
//                   onChange={(e) => setUploadFile(e.target.files[0])}
//                   className={`w-full px-6 py-4 rounded-2xl border-2 border-dashed text-sm font-medium transition-all duration-300 cursor-pointer file:mr-6 file:py-3 file:px-6 file:rounded-xl file:border-0 file:font-bold file:text-sm hover:file:shadow-lg ${
//                     isDark
//                       ? "bg-slate-900/50 border-slate-700/50 text-slate-300 file:bg-gradient-to-r file:from-emerald-600 file:to-teal-600 file:text-white hover:border-emerald-500/50 hover:file:from-emerald-700 hover:file:to-teal-700"
//                       : "bg-white/50 border-slate-200/50 text-slate-700 shadow-sm file:bg-gradient-to-r file:from-emerald-500 file:to-teal-500 file:text-white hover:border-emerald-400/50 hover:shadow-md hover:file:from-emerald-600 hover:file:to-teal-600"
//                   }`}
//                 />

//                 {uploadFile && (
//                   <div
//                     className={`p-4 rounded-2xl border shadow-lg transition-all duration-300 ${
//                       isDark
//                         ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-200 shadow-emerald-500/20"
//                         : "bg-emerald-100/80 border-emerald-300/50 text-emerald-800 shadow-emerald-200/30"
//                     }`}
//                   >
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="font-bold text-sm">
//                           ✅ {uploadFile.name}
//                         </p>
//                         <p className="text-xs opacity-90">
//                           Size: {(uploadFile.size / 1024 / 1024).toFixed(1)} MB
//                         </p>
//                       </div>
//                       <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Upload Button */}
//               <button
//                 onClick={handleUpload}
//                 disabled={!uploadFile || uploading}
//                 className={`w-full px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
//                   uploading
//                     ? "bg-gradient-to-r from-slate-600 to-slate-700 border-slate-500/50"
//                     : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 border-emerald-500/50 shadow-emerald-500/25 hover:shadow-emerald-600/40"
//                 } text-white border-2`}
//               >
//                 {uploading ? (
//                   <>⏳ Uploading...</>
//                 ) : (
//                   <>
//                     <FaUpload className="w-5 h-5 animate-bounce" />
//                     Upload Video
//                   </>
//                 )}
//               </button>

//               {/* Uploaded Videos List */}
//               {demoVideos.length > 0 && (
//                 <div className="mt-8 pt-6 border-t border-emerald-500/20">
//                   <p
//                     className={`text-xs font-bold uppercase tracking-wider mb-4 ${
//                       isDark ? "text-emerald-400" : "text-emerald-700"
//                     }`}
//                   >
//                     📁 Recent Uploads ({demoVideos.length})
//                   </p>
//                   <div className="space-y-2 max-h-48 overflow-y-auto">
//                     {demoVideos.slice(0, 5).map((video) => (
//                       <div
//                         key={video.id}
//                         className={`group p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/70 border transition-all duration-300 flex items-center justify-between gap-3 text-xs cursor-pointer ${
//                           isDark
//                             ? "border-slate-600/50 hover:border-emerald-500/50"
//                             : "border-slate-300/30 hover:border-emerald-400/50"
//                         }`}
//                       >
//                         <div className="flex items-center gap-2 truncate flex-1">
//                           <FaVideo className="w-4 h-4 text-emerald-400 flex-shrink-0" />
//                           <span className="truncate font-medium">
//                             {video.name}
//                           </span>
//                         </div>
//                         <div className="text-right">
//                           <div
//                             className={`text-[10px] ${
//                               isDark ? "text-slate-500" : "text-slate-600"
//                             }`}
//                           >
//                             {video.size}
//                           </div>
//                           <div
//                             className={`text-[10px] font-bold ${
//                               isDark ? "text-emerald-400" : "text-emerald-600"
//                             }`}
//                           >
//                             {video.uploadedBy}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* No Upload Rights */}
//           {!canUpload && (
//             <div
//               className={`rounded-3xl p-8 border backdrop-blur-xl shadow-2xl text-center transition-all duration-300 ${
//                 isDark
//                   ? "bg-gradient-to-br from-slate-900/70 to-slate-800/70 border-slate-700/50 shadow-slate-700/20"
//                   : "bg-gradient-to-br from-slate-100/70 to-slate-200/70 border-slate-300/50 shadow-slate-200/20"
//               }`}
//             >
//               <FaVideo className="w-20 h-20 text-slate-400 mx-auto mb-6 opacity-60" />
//               <h3
//                 className={`text-xl font-bold mb-4 ${
//                   isDark ? "text-slate-200" : "text-slate-800"
//                 }`}
//               >
//                 Video Management
//               </h3>
//               <p
//                 className={`text-sm ${
//                   isDark ? "text-slate-400" : "text-slate-600"
//                 }`}
//               >
//                 {isStudent
//                   ? "👤 Download available videos above"
//                   : "🔐 Login as Admin/Trainer to upload"}
//               </p>
//             </div>
//           )}
//         </section>

//         {/* CTA - SAME */}
//         <section
//           className={`rounded-3xl p-8 border backdrop-blur-xl shadow-2xl text-center transition-all duration-300 ${
//             isDark
//               ? "bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 border-slate-800/50"
//               : "bg-gradient-to-r from-blue-50/80 via-emerald-50/80 to-blue-50/80 border-blue-200/50"
//           }`}
//         >
//           <div className="max-w-2xl mx-auto space-y-6">
//             <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
//               Ready to join?
//             </h3>
//             <p
//               className={`text-xl leading-relaxed transition-colors duration-300 ${
//                 isDark ? "text-slate-300" : "text-slate-700"
//               }`}
//             >
//               Talk to counsellor for personalized demo access.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
//               <a
//                 href="https://api.whatsapp.com/send?phone=919210970334&text=Hi!%20I'm%20interested%20in%20TexoraAi.skills%20demo.%20Can%20you%20help%20me%20book%20a%20free%20call?"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex-1 max-w-md"
//               >
//                 <FaWhatsapp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//                 Chat on WhatsApp
//               </a>
//               <button
//                 onClick={() => navigate("/explore-programs")}
//                 className="px-10 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 hover:from-blue-700 hover:via-cyan-600 hover:to-emerald-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0 flex-1 max-w-md"
//               >
//                 Explore Programs
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Floating WhatsApp */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <a
//           href="https://api.whatsapp.com/send?phone=919210970334&text=Hi!%20I'm%20interested%20in%20TexoraAi.skills%20demo.%20Can%20you%20help%20me%20book%20a%20free%20call?"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/50 transition-all duration-300 group hover:scale-110 hover:rotate-3 ${
//             isDark
//               ? "bg-gradient-to-br from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"
//               : "bg-gradient-to-br from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
//           }`}
//           aria-label="Chat on WhatsApp"
//         >
//           <FaWhatsapp className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default WatchDemo;

import React, { useState, useEffect } from "react";
import {
  PlayCircle,
  Users,
  Play,
  Pause,
  Volume2,
  Maximize,
  Sparkles,
  Sun,
  Moon,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const colors = {
  primary: "from-blue-600 to-emerald-600",
  primarySolid: "bg-blue-600",
  accent: "from-yellow-400 to-orange-500",
  muted: "text-gray-600 dark:text-gray-400",
  surface: "bg-white dark:bg-black",
};

export default function TexoraAISkills() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-slate-900 text-black dark:text-white">
      {/* Header */}
      <header
        className={`bg-gradient-to-r ${colors.primary} text-white py-4 px-6 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8" />
            <span className="text-2xl font-bold">TexoraAI.skills</span>
          </div>
          <nav className="flex gap-4 items-center">
            {/* <button className="hover:text-yellow-300 transition-colors">Courses</button> */}
            <button
              onClick={() => setDark(!dark)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 bg-white/10 hover:bg-white/20 transition"
              aria-label="Toggle theme"
            >
              {dark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Sub Navigation */}
      <div
        className={`bg-gradient-to-r ${colors.primary} text-white py-4 px-6 border-t border-white/20`}
      ></div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div
          className={`mb-4 flex items-center gap-2 text-sm ${colors.muted} font-semibold`}
        >
          <span
            className={`bg-gradient-to-r ${colors.accent} text-transparent bg-clip-text`}
          >
            ⚡
          </span>
          <span
            className={`bg-gradient-to-r ${colors.accent} text-transparent bg-clip-text`}
          >
            Featured Course
          </span>
        </div>

        <h1
          className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text mb-4`}
        >
          System Design for Velocity Coders
        </h1>

        <p className={`text-lg ${colors.muted} mb-8`}>
          Hosted by{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            Arjay McCandless
          </span>
        </p>

        {/* Video Section */}
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600/20">
          <div className="aspect-video relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-950 flex">
              <div className="flex-1 flex items-center justify-center relative">
                <div className="text-white text-left px-12 max-w-4xl">
                  <h2
                    className={`text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r ${colors.accent} text-transparent bg-clip-text`}
                  >
                    You will learn my best practices for:
                  </h2>
                  <div className="space-y-4 text-xl md:text-2xl">
                    <div className="hover:translate-x-2 transition-transform">
                      <span
                        className={`bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text font-bold`}
                      >
                        1.
                      </span>{" "}
                      Designing Systems with AI
                    </div>
                    <div className="hover:translate-x-2 transition-transform">
                      <span
                        className={`bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text font-bold`}
                      >
                        2.
                      </span>{" "}
                      Avoiding common pitfalls
                    </div>
                    <div className="hover:translate-x-2 transition-transform">
                      <span
                        className={`bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text font-bold`}
                      >
                        3.
                      </span>{" "}
                      Good tools / frameworks to consider
                    </div>
                    <div className="hover:translate-x-2 transition-transform">
                      <span
                        className={`bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text font-bold`}
                      >
                        4.
                      </span>{" "}
                      Not comprehensive
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`absolute top-4 right-4 w-32 h-32 bg-gradient-to-br ${colors.primary} rounded-lg overflow-hidden border-2 border-yellow-400 shadow-lg`}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-xs text-gray-300 font-semibold">
                    Instructor Live
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4">
              <div className="flex items-center gap-4 mb-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`${colors.primarySolid} hover:bg-blue-700 text-white p-2 rounded-full transition-all`}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>

                <div className="flex items-center gap-2 text-white text-sm font-mono">
                  <span>3:37</span>
                  <span>/</span>
                  <span>45:36</span>
                </div>

                <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full w-1/12 bg-gradient-to-r ${colors.accent} rounded-full`}
                  ></div>
                </div>

                <button className="text-white hover:text-yellow-400 transition-colors">
                  <Volume2 className="w-5 h-5" />
                </button>

                <button className="text-white hover:text-yellow-400 text-sm font-semibold px-2 py-1 bg-gray-800 rounded transition-colors">
                  1x
                </button>

                <button className="text-white hover:text-yellow-400 transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
              IN THIS VIDEO
            </h3>
          </div>
          <div className="flex items-center gap-6">
            <button
              className={`${colors.primarySolid} hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all`}
            >
              SHARE THIS LESSON
            </button>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <div className={`bg-gradient-to-r ${colors.accent} p-1 rounded`}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">1,473 students</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div
            className={`${colors.surface} p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800`}
          >
            <h3
              className={`text-2xl font-bold mb-4 bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text`}
            >
              About this Course
            </h3>
            <p className={`${colors.muted} leading-relaxed mb-4`}>
              Learn essential system design principles tailored for developers
              who need to move fast. This course covers practical patterns,
              scalability considerations, and real-world trade-offs that will
              help you design better systems from day one.
            </p>
            <p className={`${colors.muted} leading-relaxed`}>
              Arjay McCandless, a Software Engineer with years of experience in
              building scalable systems, shares his best practices for designing
              systems with AI, avoiding common pitfalls, and choosing the right
              tools and frameworks.
            </p>
          </div>

          <div
            className={`${colors.surface} p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800`}
          >
            <h3
              className={`text-2xl font-bold mb-4 bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text`}
            >
              What you&apos;ll learn
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-200">
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                <span
                  className={`bg-gradient-to-r ${colors.accent} text-white font-bold text-lg p-1 rounded`}
                >
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Designing Systems with AI</p>
                  <p className={`text-sm ${colors.muted}`}>
                    Leverage AI tools and patterns for system architecture
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                <span
                  className={`bg-gradient-to-r ${colors.accent} text-white font-bold text-lg p-1 rounded`}
                >
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Avoiding Common Pitfalls</p>
                  <p className={`text-sm ${colors.muted}`}>
                    Learn from mistakes others have made in system design
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                <span
                  className={`bg-gradient-to-r ${colors.accent} text-white font-bold text-lg p-1 rounded`}
                >
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Tools & Frameworks</p>
                  <p className={`text-sm ${colors.muted}`}>
                    Discover the best tools and frameworks to consider
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                <span
                  className={`bg-gradient-to-r ${colors.accent} text-white font-bold text-lg p-1 rounded`}
                >
                  ✓
                </span>
                <div>
                  <p className="font-semibold">Practical Approach</p>
                  <p className={`text-sm ${colors.muted}`}>
                    Quick, actionable insights - not comprehensive theory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 ${colors.surface} rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800`}
        >
          <h3
            className={`text-2xl font-bold mb-6 bg-gradient-to-r ${colors.primary} text-transparent bg-clip-text`}
          >
            About the Instructor
          </h3>
          <div className="flex items-start gap-6">
            <div
              className={`w-24 h-24 bg-gradient-to-br ${colors.primary} rounded-full flex-shrink-0 shadow-lg`}
            ></div>
            <div>
              <h4 className="text-xl font-bold mb-2">Arjay McCandless</h4>
              <p className={`${colors.muted} mb-4`}>
                Software Engineer with extensive experience in building and
                scaling systems. Passionate about sharing practical knowledge
                and helping developers write better code faster.
              </p>
              <div className={`flex gap-4 text-sm ${colors.muted} flex-wrap`}>
                <span
                  className={`bg-gradient-to-r ${colors.primary} text-white px-3 py-1 rounded-full font-semibold`}
                >
                  10+ years experience
                </span>
                <span
                  className={`bg-gradient-to-r ${colors.accent} text-white px-3 py-1 rounded-full font-semibold`}
                >
                  1,473 students
                </span>
                <span
                  className={`${colors.primarySolid} text-white px-3 py-1 rounded-full font-semibold`}
                >
                  System Design Expert
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-blue-600 via-emerald-600 to-teal-600 dark:from-blue-900 dark:via-emerald-900 dark:to-teal-900 border-t border-blue-500/30 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent mb-4">
              TexoraAi.skills
            </p>
            <p className="text-blue-100 dark:text-blue-200 text-sm">
              Modern learning platform for ambitious professionals who want to
              break into product, design and growth roles.
            </p>
          </div>

          <div className="text-blue-100 dark:text-blue-200 text-sm space-y-3">
            <p className="font-semibold text-white mb-2">Contact</p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs">✉</span>
              </div>
              <a
                href="mailto:support@texoraai.skills"
                className="hover:text-white transition"
              >
                support@texoraai.skills
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs">📍</span>
              </div>
              <span>Skalholtsgatan 2, Kista, Stockholm, Sweden - 164 40</span>
            </div>
          </div>

          <div className="text-blue-100 dark:text-blue-200">
            <p className="font-semibold text-white mb-4">Connect</p>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.youtube.com/@Texoraai"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                <Youtube size={20} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/105596104"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=919210970334"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                <MessageCircle size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-200 dark:text-blue-300 text-sm">
            {new Date().getFullYear()} TexoraAi.skills. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
