// import { Bell, Search } from "lucide-react";
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

// const DashboardLayout = ({ children, SidebarComponent, label = "Dashboard" }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // "/student/..." -> "/student", "/trainer/..." -> "/trainer", etc.
//   const base = "/" + location.pathname.split("/")[1];

//   // UI state for header search
//   const [query, setQuery] = useState("");

//   // Role-wise placeholder text
//   const placeholder =
//     base === "/student"
//       ? "Search in your courses, assessments, documents..."
//       : base === "/trainer"
//       ? "Search batches, students, videos, documents..."
//       : base === "/business"
//       ? "Search leads, enrollments, invoices, campaigns..."
//       : "Search users, courses, payments, logs...";

//   // UI handler – yahin se backend dev API call karega
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     // TODO (backend dev): yahan debounced API call add kare:
//     // /api/search?role=student|trainer|business|admin&q=value
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 text-slate-100">
//       {/* Top global navbar */}
//       <Navbar label={label} />

//       <div className="flex">
//         {/* Left sidebar */}
//         <aside className="hidden md:flex md:w-60 flex-col border-r bg-slate-950 border-slate-800">
//           {SidebarComponent && <SidebarComponent />}
//         </aside>

//         {/* Main area */}
//         <main className="flex-1 p-6">
//           {/* Top bar: header search + notification + profile */}
//           <div className="flex items-center justify-between mb-6">
//             {/* Header search bar */}
//             <div className="flex-1 max-w-xl">
//               <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-slate-700 bg-slate-900/90">
//                 <Search size={18} className="text-slate-500" />
//                 <input
//                   type="text"
//                   value={query}
//                   onChange={handleSearchChange}
//                   placeholder={placeholder}
//                   className="flex-1 bg-transparent outline-none text-sm text-slate-100 placeholder:text-slate-500"
//                 />
//               </div>
//             </div>

//             {/* Right side: notification + profile */}
//             <div className="flex items-center gap-4 ml-4">
//               {/* Notifications */}
//               <button
//                 onClick={() => navigate(`${base}/notifications`)}
//                 className="relative bg-slate-900 border rounded-full p-2 hover:bg-slate-800 border-slate-700"
//               >
//                 <Bell size={18} className="text-slate-100" />
//                 <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2" />
//               </button>

//               {/* Profile */}
//               <button
//                 onClick={() => navigate(`${base}/profile`)}
//                 className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-semibold"
//               >
//                 S
//               </button>
//             </div>
//           </div>

//           {/* Page content */}
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// import { Bell, Search } from "lucide-react";
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar"; //  REMOVED

// const DashboardLayout = ({
//   children,
//   SidebarComponent,
//   label = "Dashboard",
// }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // "/student/..." -> "/student", "/trainer/..." -> "/trainer", etc.
//   const base = "/" + location.pathname.split("/")[1];

//   // UI state for header search
//   const [query, setQuery] = useState("");

//   // Role-wise placeholder text
//   const placeholder =
//     base === "/student"
//       ? "Search in your courses, assessments, documents..."
//       : base === "/trainer"
//       ? "Search batches, students, videos, documents..."
//       : base === "/business"
//       ? "Search leads, enrollments, invoices, campaigns..."
//       : "Search users, courses, payments, logs...";

//   // UI handler – yahan se backend dev API call karega
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     // TODO (backend dev): yahan debounced API call add kare:
//     // /api/search?role=student|trainer|business|admin&q=value
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 text-slate-100">
//       {/*  NAVBAR REMOVED - No more TexoraAi.skills header */}

//       <div className="flex h-screen">
//         {" "}
//         {/* Full height */}
//         {/* Left sidebar */}
//         <aside className="hidden md:flex md:w-60 flex-col border-r bg-slate-950 border-slate-800">
//           {SidebarComponent && <SidebarComponent />}
//         </aside>
//         {/* Main area */}
//         <div className="flex-1 flex flex-col overflow-hidden">
//           {/* Top bar: search + notifications + profile ONLY */}
//           <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
//             {/* Header search bar */}
//             <div className="flex-1 max-w-xl">
//               <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-slate-700 bg-slate-900/90">
//                 <Search size={18} className="text-slate-500" />
//                 <input
//                   type="text"
//                   value={query}
//                   onChange={handleSearchChange}
//                   placeholder={placeholder}
//                   className="flex-1 bg-transparent outline-none text-sm text-slate-100 placeholder:text-slate-500"
//                 />
//               </div>
//             </div>

//             {/* Right side: notification + profile */}
//             <div className="flex items-center gap-4 ml-4">
//               {/* Notifications */}
//               <button
//                 onClick={() => navigate(`${base}/notifications`)}
//                 className="relative bg-slate-900 border rounded-full p-2 hover:bg-slate-800 border-slate-700 transition-colors"
//               >
//                 <Bell size={18} className="text-slate-100" />
//                 <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3" />
//               </button>

//               {/* Profile */}
//               <button
//                 onClick={() => navigate(`${base}/profile`)}
//                 className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all"
//               >
//                 S
//               </button>
//             </div>
//           </div>

//           {/* Scrollable Page content */}
//           <main className="flex-1 overflow-auto p-6">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// import { Bell, Search } from "lucide-react";
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const DashboardLayout = ({
//   children,
//   SidebarComponent,
//   label = "Dashboard",
// }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // "/student/..." -> "/student", "/trainer/..." -> "/trainer"
//   const base = "/" + location.pathname.split("/")[1];

//   // UI state for header search
//   const [query, setQuery] = useState("");

//   // Role-wise placeholder text
//   const placeholder =
//     base === "/student"
//       ? "Search in your courses, assessments, documents..."
//       : base === "/trainer"
//       ? "Search batches, students, videos, documents..."
//       : base === "/business"
//       ? "Search leads, enrollments, invoices, campaigns..."
//       : "Search users, courses, payments, logs...";

//   // input change (UI only)
//   const handleSearchChange = (e) => {
//     setQuery(e.target.value);
//   };

//   // 🔥 THIS WAS MISSING
//   const handleSearchKeyDown = (e) => {
//     if (e.key === "Enter" && query.trim()) {
//       navigate(`${base}/search?q=${encodeURIComponent(query.trim())}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 text-slate-100">
//       <div className="flex h-screen">
//         {/* Sidebar */}
//         <aside className="hidden md:flex md:w-60 flex-col border-r bg-slate-950 border-slate-800">
//           {SidebarComponent && <SidebarComponent />}
//         </aside>

//         {/* Main */}
//         <div className="flex-1 flex flex-col overflow-hidden">
//           {/* Top bar */}
//           <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
//             {/* Search */}
//             <div className="flex-1 max-w-xl">
//               <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-slate-700 bg-slate-900/90">
//                 <Search size={18} className="text-slate-500" />
//                 <input
//                   type="text"
//                   value={query}
//                   onChange={handleSearchChange}
//                   onKeyDown={handleSearchKeyDown}
//                   placeholder={placeholder}
//                   className="flex-1 bg-transparent outline-none text-sm text-slate-100 placeholder:text-slate-500"
//                 />
//               </div>
//             </div>

//             {/* Right side */}
//             <div className="flex items-center gap-4 ml-4">
//               <button
//                 onClick={() => navigate(`${base}/notifications`)}
//                 className="relative bg-slate-900 border rounded-full p-2 hover:bg-slate-800 border-slate-700 transition-colors"
//               >
//                 <Bell size={18} className="text-slate-100" />
//                 <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3" />
//               </button>

//               <button
//                 onClick={() => navigate(`${base}/profile`)}
//                 className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all"
//               >
//                 S
//               </button>
//             </div>
//           </div>

//           {/* Page content */}
//           <main className="flex-1 overflow-auto p-6">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { Bell, Search } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DashboardLayout = ({
  children,
  SidebarComponent,
  label = "Dashboard",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // "/student/..." -> "/student"
  const base = "/" + location.pathname.split("/")[1];

  // UI state
  const [query, setQuery] = useState("");

  // Role-wise placeholder
  const placeholder =
    base === "/student"
      ? "Search in your courses, assessments, documents..."
      : base === "/trainer"
      ? "Search batches, students, videos, documents..."
      : base === "/business"
      ? "Search leads, enrollments, invoices, campaigns..."
      : "Search users, courses, payments, logs...";

  // 🔹 INPUT CHANGE
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // 🔹 ENTER KEY HANDLER (THIS WAS MISSING / MISPLACED)
  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`${base}/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="hidden md:flex md:w-60 flex-col border-r bg-slate-950 border-slate-800">
          {SidebarComponent && <SidebarComponent />}
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
            {/* Search */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-slate-700 bg-slate-900/90">
                <Search size={18} className="text-slate-500" />
                <input
                  type="text"
                  value={query}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                  placeholder={placeholder}
                  className="flex-1 bg-transparent outline-none text-sm text-slate-100 placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4 ml-4">
              <button
                onClick={() => navigate(`${base}/notifications`)}
                className="relative bg-slate-900 border rounded-full p-2 hover:bg-slate-800 border-slate-700 transition-colors"
              >
                <Bell size={18} className="text-slate-100" />
                <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3" />
              </button>

              <button
                onClick={() => navigate(`${base}/profile`)}
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all"
              >
                S
              </button>
            </div>
          </div>

          {/* Page content */}
          <main className="flex-1 overflow-auto p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
