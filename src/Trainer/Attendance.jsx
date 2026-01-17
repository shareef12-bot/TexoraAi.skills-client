// import React from "react";

// const today = "20 Dec 2025";

// const students = [
//   { id: "STU-101", name: "Aman Kumar", batch: "Full Stack Web Dev - Morning", status: "Present" },
//   { id: "STU-102", name: "Priya Singh", batch: "Full Stack Web Dev - Morning", status: "Absent" },
//   { id: "STU-103", name: "Rahul Verma", batch: "React JS Evening Batch", status: "Late" },
// ];

// const statusClasses = {
//   Present: "bg-emerald-500/15 text-emerald-400",
//   Absent: "bg-rose-500/15 text-rose-400",
//   Late: "bg-amber-500/15 text-amber-400",
// };

// const Attendance = () => {
//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
//           Attendance
//         </p>
//         <h1 className="text-2xl font-semibold text-slate-100">
//           Attendance Tracking
//         </h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Mark and review student attendance for each batch.
//         </p>
//       </div>

//       {/* Today summary + filters placeholder */}
//       <section className="rounded-2xl bg-slate-900 border border-slate-700 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//         <div>
//           <p className="text-xs font-medium text-slate-400">Today</p>
//           <p className="text-sm font-semibold text-slate-100">{today}</p>
//           <p className="mt-1 text-xs text-slate-400">
//             Sample data: 3 students across 2 batches.
//           </p>
//         </div>

//         <div className="flex items-center gap-3">
//           <button className="px-3 py-1.5 text-xs rounded-lg border border-slate-600 text-slate-100 hover:bg-slate-800 transition-colors">
//             Select batch
//           </button>
//           <button className="px-3 py-1.5 text-xs rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
//             Mark attendance
//           </button>
//         </div>
//       </section>

//       {/* Today attendance table */}
//       <section className="rounded-2xl bg-slate-900 border border-slate-700 p-5">
//         <h2 className="text-base font-semibold text-slate-100 mb-3">
//           Today&apos;s attendance (demo)
//         </h2>

//         <div className="overflow-x-auto">
//           <table className="min-w-full text-sm">
//             <thead>
//               <tr className="text-xs text-slate-400 border-b border-slate-700">
//                 <th className="py-2 pr-4 text-left">Student ID</th>
//                 <th className="py-2 pr-4 text-left">Name</th>
//                 <th className="py-2 pr-4 text-left">Batch</th>
//                 <th className="py-2 pr-4 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((s) => (
//                 <tr
//                   key={s.id}
//                   className="border-b last:border-b-0 border-slate-800 hover:bg-slate-800/80 transition-colors"
//                 >
//                   <td className="py-3 pr-4 text-slate-200 font-medium">
//                     {s.id}
//                   </td>
//                   <td className="py-3 pr-4 text-slate-200">{s.name}</td>
//                   <td className="py-3 pr-4 text-slate-400">{s.batch}</td>
//                   <td className="py-3 pr-4">
//                     <span
//                       className={
//                         "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold " +
//                         statusClasses[s.status]
//                       }
//                     >
//                       {s.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <p className="mt-3 text-xs text-slate-500">

//         </p>
//       </section>
//     </div>
//   );
// };

// export default Attendance;

// import React, { useEffect, useState } from "react";
// import attendanceService from "../services/attendanceService";

// // ===== Date helpers =====
// const today = new Date();
// const todayISO = today.toISOString().split("T")[0];
// const todayLabel = today.toLocaleDateString("en-IN", {
//   day: "2-digit",
//   month: "short",
//   year: "numeric",
// });

// // ===== Status styles =====
// const statusClasses = {
//   PRESENT: "bg-emerald-500/15 text-emerald-400",
//   ABSENT: "bg-rose-500/15 text-rose-400",
//   LATE: "bg-amber-500/15 text-amber-400",
// };

// const Attendance = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // =========================================================
//   // TEMP DATA (replace later with student-service API)
//   // =========================================================
//   useEffect(() => {
//     setStudents([
//       {
//         id: "STU-101",
//         name: "Aman Kumar",
//         email: "student1@lms.com",
//         batchId: 101,
//         batch: "Full Stack Web Dev - Morning",
//         status: "PRESENT",
//       },
//       {
//         id: "STU-102",
//         name: "Priya Singh",
//         email: "student2@lms.com",
//         batchId: 101,
//         batch: "Full Stack Web Dev - Morning",
//         status: "ABSENT",
//       },
//       {
//         id: "STU-103",
//         name: "Rahul Verma",
//         email: "student3@lms.com",
//         batchId: 102,
//         batch: "React JS Evening Batch",
//         status: "LATE",
//       },
//     ]);
//   }, []);

//   // =========================================================
//   // Update status locally
//   // =========================================================
//   const updateStatus = (index, newStatus) => {
//     const copy = [...students];
//     copy[index].status = newStatus;
//     setStudents(copy);
//   };

//   // =========================================================
//   // Send attendance to backend
//   // =========================================================
//   const markAttendance = async () => {
//     setLoading(true);

//     try {
//       for (const s of students) {
//         await attendanceService.markAttendance({
//           studentEmail: s.email,
//           batchId: s.batchId,
//           status: s.status,
//           date: todayISO,
//         });
//       }

//       alert("Attendance marked successfully ✅");
//     } catch (error) {
//       console.error("Attendance error:", error);
//       alert("Failed to mark attendance ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* ================= HEADER ================= */}
//       <div>
//         <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
//           Attendance
//         </p>
//         <h1 className="text-2xl font-semibold text-slate-100">
//           Attendance Tracking
//         </h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Mark and review student attendance for each batch.
//         </p>
//       </div>

//       {/* ================= SUMMARY ================= */}
//       <section className="rounded-2xl bg-slate-900 border border-slate-700 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//         <div>
//           <p className="text-xs font-medium text-slate-400">Today</p>
//           <p className="text-sm font-semibold text-slate-100">{todayLabel}</p>
//           <p className="mt-1 text-xs text-slate-400">
//             {students.length} students loaded.
//           </p>
//         </div>

//         <div className="flex items-center gap-3">
//           <button
//             disabled={loading}
//             onClick={markAttendance}
//             className="px-3 py-1.5 text-xs rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors disabled:opacity-50"
//           >
//             {loading ? "Saving..." : "Mark attendance"}
//           </button>
//         </div>
//       </section>

//       {/* ================= TABLE ================= */}
//       <section className="rounded-2xl bg-slate-900 border border-slate-700 p-5">
//         <h2 className="text-base font-semibold text-slate-100 mb-3">
//           Today&apos;s attendance
//         </h2>

//         <div className="overflow-x-auto">
//           <table className="min-w-full text-sm">
//             <thead>
//               <tr className="text-xs text-slate-400 border-b border-slate-700">
//                 <th className="py-2 pr-4 text-left">Student ID</th>
//                 <th className="py-2 pr-4 text-left">Name</th>
//                 <th className="py-2 pr-4 text-left">Batch</th>
//                 <th className="py-2 pr-4 text-left">Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {students.map((s, index) => (
//                 <tr
//                   key={s.id}
//                   className="border-b last:border-b-0 border-slate-800 hover:bg-slate-800/80 transition-colors"
//                 >
//                   <td className="py-3 pr-4 text-slate-200 font-medium">
//                     {s.id}
//                   </td>
//                   <td className="py-3 pr-4 text-slate-200">{s.name}</td>
//                   <td className="py-3 pr-4 text-slate-400">{s.batch}</td>
//                   <td className="py-3 pr-4">
//                     <select
//                       value={s.status}
//                       onChange={(e) => updateStatus(index, e.target.value)}
//                       className={
//                         "rounded-lg px-2 py-1 text-xs bg-slate-800 border border-slate-700 focus:outline-none " +
//                         statusClasses[s.status]
//                       }
//                     >
//                       <option value="PRESENT">Present</option>
//                       <option value="ABSENT">Absent</option>
//                       <option value="LATE">Late</option>
//                     </select>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Attendance;

import React, { useEffect, useState } from "react";
import axios from "axios";
import attendanceService from "../services/attendanceService";

const API_STUDENTS = "http://localhost:9000/api/students";

// ===== Date helpers =====
const today = new Date();
const todayISO = today.toISOString().split("T")[0];
const todayLabel = today.toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

// ===== Status styles =====
const statusClasses = {
  PRESENT: "bg-emerald-500/15 text-emerald-400",
  ABSENT: "bg-rose-500/15 text-rose-400",
  LATE: "bg-amber-500/15 text-amber-400",
};

// 🔐 auth header
const authHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
});

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // =========================================================
  // LOAD REAL STUDENTS (REPLACED DEMO DATA)
  // =========================================================
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const res = await axios.get(API_STUDENTS, {
        headers: authHeaders(),
      });

      // Map backend → UI format (NO UI CHANGE)
      const mapped = res.data.map((s) => ({
        id: s.id,
        name: s.email.split("@")[0], // temporary display name
        email: s.email,
        batchId: 1, // keep constant for now
        batch: "Assigned Batch",
        status: "PRESENT", // default
      }));

      setStudents(mapped);
    } catch (err) {
      console.error("Failed to load students", err);
      alert("Failed to load students");
    }
  };

  // =========================================================
  // Update status locally
  // =========================================================
  const updateStatus = (index, newStatus) => {
    const copy = [...students];
    copy[index].status = newStatus;
    setStudents(copy);
  };

  // =========================================================
  // Send attendance to backend
  // =========================================================
  const markAttendance = async () => {
    setLoading(true);

    try {
      for (const s of students) {
        await attendanceService.markAttendance({
          studentEmail: s.email,
          batchId: s.batchId,
          status: s.status,
          date: todayISO,
        });
      }

      alert("Attendance marked successfully ✅");
    } catch (error) {
      console.error("Attendance error:", error);
      alert("Failed to mark attendance ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Attendance
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Attendance Tracking
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Mark and review student attendance for each batch.
        </p>
      </div>

      {/* ================= SUMMARY ================= */}
      <section className="rounded-2xl bg-slate-900 border border-slate-700 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-slate-400">Today</p>
          <p className="text-sm font-semibold text-slate-100">{todayLabel}</p>
          <p className="mt-1 text-xs text-slate-400">
            {students.length} students loaded.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            disabled={loading}
            onClick={markAttendance}
            className="px-3 py-1.5 text-xs rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {loading ? "Saving..." : "Mark attendance"}
          </button>
        </div>
      </section>

      {/* ================= TABLE ================= */}
      <section className="rounded-2xl bg-slate-900 border border-slate-700 p-5">
        <h2 className="text-base font-semibold text-slate-100 mb-3">
          Today&apos;s attendance
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-xs text-slate-400 border-b border-slate-700">
                <th className="py-2 pr-4 text-left">Student</th>
                <th className="py-2 pr-4 text-left">Email</th>
                <th className="py-2 pr-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {students.map((s, index) => (
                <tr
                  key={s.id}
                  className="border-b last:border-b-0 border-slate-800 hover:bg-slate-800/80 transition-colors"
                >
                  <td className="py-3 pr-4 text-slate-200">{s.name}</td>
                  <td className="py-3 pr-4 text-slate-400">{s.email}</td>
                  <td className="py-3 pr-4">
                    <select
                      value={s.status}
                      onChange={(e) => updateStatus(index, e.target.value)}
                      className={
                        "rounded-lg px-2 py-1 text-xs bg-slate-800 border border-slate-700 " +
                        statusClasses[s.status]
                      }
                    >
                      <option value="PRESENT">Present</option>
                      <option value="ABSENT">Absent</option>
                      <option value="LATE">Late</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Attendance;
