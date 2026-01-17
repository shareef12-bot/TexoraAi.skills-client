// // src/pages/Landing/ExplorePrograms.jsx -
// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const tracks = [
//   {
//     name: "Product Management",
//     level: "Beginner–Intermediate",
//     points: [
//       "Build product roadmaps, prioritize features and manage stakeholders",
//       "Complete 2 real-world product case studies",
//       "Work with tools like Jira and Notion",
//     ],
//   },
//   {
//     name: "UI/UX Design",
//     level: "Beginner friendly",
//     points: [
//       "Learn user research, wireframes, prototypes and design systems",
//       "Create 2 portfolio-ready UI/UX case studies",
//       "Work with Figma, FigJam and basic design systems",
//     ],
//   },
//   {
//     name: "Growth & Marketing",
//     level: "Intermediate",
//     points: [
//       "Master performance marketing, funnels and analytics",
//       "Run experiments with real campaign examples",
//       "Learn GA4, Ads Manager and marketing automation basics",
//     ],
//   },
// ];

// const plans = [
//   {
//     name: "Starter",
//     price: "₹4,999",
//     duration: "4 weeks",
//     bestFor: "College students",
//     // badge: "Kickstart",
//     includesProjects: "1 guided project",
//     studyTime: "6–8 hrs/week",
//     features: [
//       "Live classes",
//       "Assignments",
//       "Completion certificate",
//       "Access to class recordings",
//     ],
//   },
//   {
//     name: "Pro",
//     price: "₹9,999",
//     duration: "8 weeks",
//     bestFor: "Working professionals",
//     highlight: true,
//     // badge: "Best value",
//     includesProjects: "3 industry projects",
//     studyTime: "8–10 hrs/week",
//     features: [
//       "Everything in Starter",
//       "1:1 mentorship",
//       "Interview preparation",
//       "Detailed project reviews",
//       "Private discussion group",
//     ],
//   },
//   {
//     name: "Elite",
//     price: "₹19,999",
//     duration: "12 weeks",
//     bestFor: "Career switchers",
//     // badge: "Intensive",
//     includesProjects: "5+ advanced projects",
//     studyTime: "10–12 hrs/week",
//     features: [
//       "Everything in Pro",
//       "Job referral support",
//       "Portfolio building support",
//       "Lifetime community access",
//       "Dedicated placement mentor",
//     ],
//   },
// ];

// const faqs = [
//   {
//     q: "When does the next batch start?",
//     a: "A new cohort starts every month. After you enroll, you will receive the full schedule on email.",
//   },
//   {
//     q: "Are the classes live or recorded?",
//     a: "Core sessions are live, and all recordings stay available on your dashboard with long-term access.",
//   },
//   {
//     q: "Is there a job guarantee?",
//     a: "There is no job guarantee, but you get dedicated placement support, mock interviews and referral opportunities.",
//   },
//   {
//     q: "Do you offer installments / EMI?",
//     a: "Yes, 3–6 month no-cost EMI options are available through selected payment partners.",
//   },
// ];

// const ExplorePrograms = ({ theme, toggleTheme }) => {
//   const isDark = theme === "dark";
//   const navigate = useNavigate();

//   const cardBg = isDark
//     ? "bg-slate-900/70 border-slate-800"
//     : "bg-white border-slate-200 shadow-sm";
//   const bodyMuted = isDark ? "text-slate-300" : "text-slate-600";
//   const bodyStrong = isDark ? "text-slate-50" : "text-slate-900";

//   const handleSyllabusClick = () => {
//     navigate("/syllabus");
//   };

//   return (
//     <div
//       className={`min-h-screen ${
//         isDark
//           ? "bg-gradient-to-br from-slate-950 via-black to-slate-900"
//           : "bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50"
//       }`}
//     >
//       {/* TOP BAR */}
//       <header
//         className={`flex items-center justify-between px-8 py-4 border-b ${
//           isDark
//             ? "border-slate-800/70 bg-black/80 backdrop-blur-lg"
//             : "border-slate-200/50 bg-white/80 backdrop-blur-lg"
//         }`}
//       >
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => window.history.back()}
//             className={`p-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-1 font-medium ${
//               isDark
//                 ? "bg-gradient-to-r from-slate-800/30 to-slate-700/30 text-slate-200 hover:from-blue-600/20 hover:to-emerald-600/20 hover:text-white border border-slate-700/50"
//                 : "bg-gradient-to-r from-slate-50/70 to-slate-100/70 text-slate-700 hover:from-blue-600/10 hover:to-emerald-600/10 hover:text-slate-900 hover:shadow-lg hover:shadow-blue-500/20 border border-slate-200/50"
//             }`}
//           >
//             ← Back
//           </button>
//           <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
//             TexoraAi.skills – Programs
//           </h1>
//         </div>
//         <button
//           onClick={toggleTheme}
//           className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition border ${
//             isDark
//               ? "border-slate-700 hover:bg-slate-800/60"
//               : "border-slate-300 bg-white hover:bg-slate-100 shadow-sm"
//           }`}
//         >
//           <span
//             className={`h-4 w-4 rounded-full ${
//               isDark ? "bg-yellow-400" : "bg-slate-300"
//             }`}
//           />
//           <span>{isDark ? "Dark" : "Light"} mode</span>
//         </button>
//       </header>

//       <main className="px-8 py-10 max-w-6xl mx-auto space-y-16">
//         {/* Hero */}
//         <section className="space-y-6">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent mb-3">
//               Explore Our Programs
//             </h2>
//             <p className={`max-w-2xl ${bodyMuted}`}>
//               Discover structured tracks in Product, Design, Growth and
//               Marketing designed with real projects and mentor support so you
//               can learn by building.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-4">
//             <button
//               onClick={handleSyllabusClick}
//               className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 shadow-lg ${
//                 isDark
//                   ? "bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border border-blue-500/30 hover:from-blue-600/40 hover:to-emerald-600/40 text-slate-100 hover:text-white hover:shadow-xl hover:shadow-blue-500/30"
//                   : "bg-gradient-to-r from-blue-600/10 to-emerald-600/10 border border-blue-500/20 hover:from-blue-600/20 hover:to-emerald-600/20 text-slate-900 hover:shadow-xl hover:shadow-blue-500/20"
//               }`}
//             >
//               📥 Download detailed syllabus
//             </button>
//           </div>
//         </section>

//         {/* Tracks - EXACT CONTENT */}
//         <section className="grid gap-6 md:grid-cols-3">
//           {tracks.map((track, index) => (
//             <div
//               key={track.name}
//               className={`rounded-2xl p-6 flex flex-col justify-between border ${cardBg} hover:shadow-xl hover:shadow-blue-500/10 transition-all`}
//             >
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
//                     {track.name}
//                   </h3>
//                   <span
//                     className={`text-xs px-3 py-1 rounded-full font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-600 dark:text-cyan-400`}
//                   >
//                     {track.level}
//                   </span>
//                 </div>
//                 <ul className={`mt-4 space-y-3 text-sm ${bodyMuted}`}>
//                   {track.points.map((p, i) => (
//                     <li key={i} className="flex gap-3">
//                       <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex-shrink-0" />
//                       <span>{p}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <button className="mt-6 text-sm font-medium bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent hover:shadow-lg hover:shadow-blue-500/25 px-4 py-2 rounded-lg transition-all">
//                 View detailed curriculum →
//               </button>
//             </div>
//           ))}
//         </section>

//         {/* Trust strip - EXACT CONTENT */}
//         <section
//           className={`grid gap-6 md:grid-cols-3 rounded-3xl border p-8 ${cardBg} bg-gradient-to-br from-blue-50/30 to-emerald-50/30 dark:from-blue-950/20 dark:to-emerald-950/20`}
//         >
//           <div className="text-center">
//             <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
//               10,000+
//             </p>
//             <p className={`text-sm mt-2 ${bodyMuted}`}>
//               Learners from different backgrounds have moved into tech and
//               product roles through similar programs.
//             </p>
//           </div>
//           <div className="text-center">
//             <p className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
//               50+
//             </p>
//             <p className={`text-sm mt-2 ${bodyMuted}`}>
//               Referral-based hiring network with product companies and fast
//               growing startups.
//             </p>
//           </div>
//           <div className="text-center">
//             <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
//               4.8/5
//             </p>
//             <p className={`text-sm mt-2 ${bodyMuted}`}>
//               Strong learner feedback across past cohorts on content and
//               outcomes.
//             </p>
//           </div>
//         </section>

//         {/* Pricing plans - EXACT CONTENT */}
//         <section>
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
//               Choose your learning plan
//             </h2>
//             <div
//               className={`flex items-center text-xs gap-2 rounded-full px-3 py-1.5 border font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-400/30`}
//             >
//               <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold">
//                 One-time
//               </span>
//               <span
//                 className={`${isDark ? "text-slate-400" : "text-slate-500"}`}
//               >
//                 EMI coming soon
//               </span>
//             </div>
//           </div>
//           <p className={`text-lg mb-8 max-w-2xl ${bodyMuted} leading-relaxed`}>
//             Every plan includes a structured curriculum, live doubt-solving and
//             placement assistance so you can focus on learning.
//           </p>

//           <div className="grid gap-6 md:grid-cols-3">
//             {plans.map((plan) => {
//               const isHighlight = plan.highlight;
//               const planBg = isHighlight
//                 ? isDark
//                   ? "border-cyan-400/50 shadow-[0_0_40px_rgba(34,211,238,0.4)] bg-gradient-to-br from-slate-900/90 to-slate-800/90"
//                   : "border-blue-400/50 bg-gradient-to-br from-blue-50/80 to-emerald-50/80 shadow-2xl"
//                 : cardBg;

//               return (
//                 <div
//                   key={plan.name}
//                   className={`rounded-3xl border p-8 flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/20 transition-all ${planBg}`}
//                 >
//                   {plan.badge && (
//                     <div className="absolute top-4 right-4">
//                       <span className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white border border-emerald-400/50 font-bold shadow-lg">
//                         {plan.badge}
//                       </span>
//                     </div>
//                   )}

//                   <div className="flex items-start justify-between mb-6">
//                     <div>
//                       <h3 className={`${bodyStrong} text-xl font-bold`}>
//                         {plan.name}
//                       </h3>
//                       <p
//                         className={`text-sm ${
//                           isDark ? "text-slate-400" : "text-slate-500"
//                         } mt-1`}
//                       >
//                         {plan.duration}
//                       </p>
//                     </div>
//                     <span
//                       className={`text-xs font-medium px-3 py-1 rounded-full ${
//                         isDark
//                           ? "bg-gradient-to-r from-slate-800/50 to-slate-700/50 text-slate-300 border border-slate-600/50"
//                           : "bg-gradient-to-r from-slate-100/70 to-slate-200/70 text-slate-700 border border-slate-200/50"
//                       }`}
//                     >
//                       Best for {plan.bestFor}
//                     </span>
//                   </div>

//                   <div className="flex-1 mb-8">
//                     <p className="text-4xl font-black bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent mb-2">
//                       {plan.price}
//                     </p>
//                     <p
//                       className={`text-sm ${
//                         isDark ? "text-slate-400" : "text-slate-500"
//                       } mb-6`}
//                     >
//                       {plan.includesProjects} · Avg {plan.studyTime}
//                     </p>

//                     <ul className="space-y-3">
//                       {plan.features.map((f, i) => (
//                         <li key={i} className="flex items-start gap-3">
//                           <span className="mt-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex-shrink-0 shadow-sm" />
//                           <span
//                             className={`${
//                               isDark ? "text-slate-200" : "text-slate-800"
//                             } text-sm leading-relaxed`}
//                           >
//                             {f}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <button
//                     className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all hover:shadow-2xl hover:shadow-blue-500/40 ${
//                       isHighlight
//                         ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-700 hover:to-emerald-700"
//                         : isDark
//                         ? "bg-gradient-to-r from-slate-800/60 to-slate-700/60 text-slate-50 hover:from-slate-700 hover:to-slate-600 border border-slate-600/50"
//                         : "bg-gradient-to-r from-blue-600/80 to-emerald-600/80 text-white hover:from-blue-700/90 hover:to-emerald-700/90 shadow-lg"
//                     }`}
//                   >
//                     Enroll in {plan.name}
//                   </button>

//                   <button
//                     className={`mt-4 w-full py-3 text-sm font-medium rounded-xl transition-all border ${
//                       isDark
//                         ? "border-slate-700/50 text-slate-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-emerald-600/20 hover:text-white hover:border-blue-500/50"
//                         : "border-slate-300/50 text-slate-700 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-emerald-600/10 hover:text-slate-900 hover:border-blue-500/30 hover:shadow-md"
//                     }`}
//                   >
//                     Talk to a counsellor about {plan.name}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* FAQs - EXACT CONTENT */}
//         <section>
//           <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent mb-8">
//             Frequently asked questions
//           </h2>
//           <div className="space-y-4 max-w-3xl">
//             {faqs.map((item, index) => (
//               <details
//                 key={index}
//                 className={`group rounded-2xl border p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all ${
//                   isDark
//                     ? "border-slate-800/70 bg-slate-900/50 backdrop-blur-sm"
//                     : "border-slate-200/50 bg-white/80 backdrop-blur-sm shadow-sm"
//                 }`}
//               >
//                 <summary className="flex cursor-pointer list-none items-center justify-between font-semibold group-open:font-bold transition-all">
//                   <span
//                     className={`${bodyStrong} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-2`}
//                   >
//                     {item.q}
//                   </span>
//                   <span
//                     className={`text-2xl font-bold transition-transform group-open:rotate-180 ${
//                       isDark ? "text-slate-500" : "text-slate-500"
//                     }`}
//                   >
//                     +
//                   </span>
//                 </summary>
//                 <p
//                   className={`mt-4 text-sm leading-relaxed ${bodyMuted} pl-6 border-l-4 border-blue-500/30 dark:border-emerald-500/30`}
//                 >
//                   {item.a}
//                 </p>
//               </details>
//             ))}
//           </div>

//           <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-emerald-500/10 border border-blue-500/20 text-center">
//             <p className={`text-lg font-medium mb-4 ${bodyStrong}`}>
//               Still confused about which plan is right for you?
//             </p>
//             <p className={`${bodyMuted} mb-6 max-w-xl mx-auto`}>
//               Connect with a counsellor on WhatsApp👉
//             </p>
//           </div>
//         </section>
//       </main>

//       {/* WhatsApp */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <a
//           href="https://api.whatsapp.com/send?phone=919210970334&text=Hi!%20I'm%20interested%20in%20TexoraAi.skills%20programs.%20Can%20you%20help%20me%20choose%20the%20right%20plan?"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/50 transition-all duration-300 group hover:scale-110 hover:rotate-3 ${
//             isDark
//               ? "bg-gradient-to-br from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"
//               : "bg-gradient-to-br from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
//           }`}
//           aria-label="Chat on WhatsApp"
//         >
//           <FaWhatsapp className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ExplorePrograms;

import {
  ChevronRight,
  Clock,
  Code,
  GraduationCap,
  Palette,
  Play,
  Rocket,
  Star,
  TrendingUp,
  Users,
  Moon,
  Sun,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ExploreFreeServices = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const navigate = useNavigate();

  // ✅ Apply dark class to <html> same as LMSHomepage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const categories = [
    { id: "all", name: "All Programs", icon: GraduationCap },
    { id: "product", name: "Product Management", icon: Rocket },
    { id: "design", name: "Design", icon: Palette },
    { id: "growth", name: "Growth & Marketing", icon: TrendingUp },
    { id: "tech", name: "Technology", icon: Code },
  ];

  const services = [
    {
      id: 1,
      category: "product",
      title: "Build An Agentic AI Product End to End, No Code",
      instructors: [
        "Tyler Fisk: Co-Founder AI Build Lab",
        "Sara Davison: Co-Founder AI Build Lab",
      ],
      students: "10,477 students",
      rating: 4.9,
      duration: "6 weeks",
      level: "Beginner",
      featured: true,
      status: "ON DEMAND",
      topics: ["AI Product Development", "No-Code Tools", "Product Strategy"],
    },
    {
      id: 2,
      category: "product",
      title: "AI Prototyping for Product Managers in 2025",
      instructors: ["Colin Matthews: Sold my first SaaS in 2021"],
      students: "8,456 students",
      rating: 4.8,
      duration: "4 weeks",
      level: "Intermediate",
      status: "ON DEMAND",
      topics: ["AI/ML", "Prototyping", "Product Design"],
    },
    {
      id: 3,
      category: "product",
      title: "How top companies evaluate PM candidates in 2025",
      instructors: [
        "Ben Erez: Former Meta PM",
        "Nickey Skarstad: Director of Product",
      ],
      students: "7,849 students",
      rating: 4.7,
      duration: "3 weeks",
      level: "All Levels",
      status: "ON DEMAND",
      topics: ["Interview Prep", "PM Skills", "Career Growth"],
    },
    {
      id: 4,
      category: "design",
      title: "Create AI-Powered Prototypes as a Product Designer",
      instructors: ["Xinran Ma: Founder of Design with AI"],
      students: "6,809 students",
      rating: 4.9,
      duration: "5 weeks",
      level: "Intermediate",
      status: "ON DEMAND",
      topics: ["AI Design Tools", "Figma", "Prototyping"],
    },
    {
      id: 5,
      category: "tech",
      title: "Building Agentic AI Applications in 2025",
      instructors: [
        "Aishwarya Naresh Reganti: Tech Lead AI",
        "Sai Kirti Badam: Founding Engineer",
      ],
      students: "6,490 students",
      rating: 4.8,
      duration: "8 weeks",
      level: "Advanced",
      status: "ON DEMAND",
      topics: ["AI/ML", "Python", "LLMs"],
    },
    {
      id: 6,
      category: "tech",
      title: "Build AI product sense: vibe code your personal OS",
      instructors: [
        "Aman Khan: AI Product leader at Arize AI",
        "Tai Raviv: Gen AI PM",
      ],
      students: "5,691 students",
      rating: 4.7,
      duration: "6 weeks",
      level: "Intermediate",
      status: "ON DEMAND",
      topics: ["AI Development", "Product Thinking", "Coding"],
    },
    {
      id: 7,
      category: "growth",
      title: "Growth Marketing Strategies for Startups",
      instructors: [
        "Sarah Johnson: Former Growth Lead Meta",
        "Mike Chen: Ex-Marketing Director Amazon",
      ],
      students: "9,234 students",
      rating: 4.8,
      duration: "5 weeks",
      level: "Intermediate",
      status: "ON DEMAND",
      topics: ["Growth Hacking", "Analytics", "User Acquisition"],
    },
    {
      id: 8,
      category: "growth",
      title: "Data-Driven Marketing in 2025",
      instructors: ["David Smith: Marketing Analytics Expert Google"],
      students: "7,123 students",
      rating: 4.6,
      duration: "4 weeks",
      level: "Beginner",
      status: "ON DEMAND",
      topics: ["Analytics", "A/B Testing", "Marketing ROI"],
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const stats = [
    { value: "50K+", label: "Active Learners" },
    { value: "95%", label: "Success Rate" },
    { value: "100+", label: "Expert Mentors" },
    { value: "4.9", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-black dark:via-slate-950 dark:to-slate-900 text-black dark:text-white">
      {/* Header */}
      <header className="bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              TexoraAi.skills
            </span>
          </div>
          <nav className="flex items-center gap-8">
            {/* Theme toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
              aria-label="Toggle theme"
            >
              {dark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-900" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full mb-6 text-sm font-medium">
            🎓 Advanced TexoraAi.skills for Modern Education
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Free Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Access world-class courses from industry experts at Google, Amazon,
            Meta & top startups. Start learning today with our comprehensive
            programs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-md hover:shadow-lg"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-black rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-800 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/40 px-3 py-1 rounded-full">
                    {service.status}
                  </span>
                  {service.featured && (
                    <span className="flex items-center gap-1 text-xs font-bold text-yellow-600">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 transition-colors overflow-hidden max-h-12 line-clamp-2">
                  {service.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.topics.slice(0, 2).map((topic, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mb-4">
                  {service.instructors.map((instructor, idx) => {
                    const name = instructor.split(":")[0].trim();
                    const initials = name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2);

                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {initials}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                          {instructor}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {service.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {service.rating}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <span className="bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium">
                    {service.level}
                  </span>
                </div>

                <button
                  onClick={() => navigate("/watch-demo")}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all group-hover:scale-105"
                >
                  <Play className="w-4 h-4" />
                  Watch Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Become the Top 1%?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners who are mastering Product, Design, Growth
            & Technology
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
              Start Learning Free
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-blue-600 via-emerald-600 to-teal-600 dark:from-blue-900 dark:via-emerald-900 dark:to-teal-900 border-t border-blue-500/30 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Brand + description */}
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent mb-4">
              TexoraAi.skills
            </p>
            <p className="text-blue-100 dark:text-blue-200 text-sm">
              Modern learning platform for ambitious professionals who want to
              break into product, design and growth roles.
            </p>
          </div>

          {/* Contact */}
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

          {/* Social + year */}
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
};

export default ExploreFreeServices;
