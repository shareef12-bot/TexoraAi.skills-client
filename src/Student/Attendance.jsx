// import { Calendar, CheckCircle, XCircle } from "lucide-react";
// import React, { useState } from "react";

// const Attendance = () => {
// const [month, setMonth] = useState("January");

// const attendanceData = [
//     { date: "2025-01-01", status: "Present" },
//     { date: "2025-01-02", status: "Absent" },
//     { date: "2025-01-03", status: "Present" },
//     { date: "2025-01-04", status: "Present" },
//     { date: "2025-01-05", status: "Absent" },
//     { date: "2025-01-06", status: "Present" },
// ];

// const statusColor = (status) => {
//     if (status === "Present") return "text-green-600";
//     return "text-red-600";
// };

// const statusIcon = (status) => {
//     if (status === "Present") return <CheckCircle className="text-green-600" />;
//     return <XCircle className="text-red-600" />;
// };

// return (
//     <div className="p-6 space-y-6">

//       {/* Header */}
//     <div className="flex items-center gap-3">
//         <Calendar size={28} className="text-blue-600" />
//         <h1 className="text-2xl font-bold">Attendance</h1>
//     </div>

//       {/* Month Select */}
//     <div>
//         <label className="text-gray-600 font-medium">Select Month:</label>
//         <select
//         value={month}
//         onChange={(e) => setMonth(e.target.value)}
//         className="ml-3 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
//         >
//         <option>January</option>
//         <option>February</option>
//         <option>March</option>
//         <option>April</option>
//         </select>
//     </div>

//       {/* Attendance Table */}
//     <div className="overflow-x-auto">
//         <table className="w-full bg-white shadow rounded-xl overflow-hidden border-collapse">
//         <thead className="bg-gray-100">
//             <tr>
//             <th className="p-4 text-left">Date</th>
//             <th className="p-4 text-left">Status</th>
//             <th className="p-4 text-left">Icon</th>
//             </tr>
//         </thead>

//         <tbody>
//             {attendanceData.map((att, idx) => (
//             <tr key={idx} className="border-t hover:bg-gray-50 transition">
//                 <td className="p-4">{att.date}</td>

//                 <td className={`p-4 font-semibold ${statusColor(att.status)}`}>
//                 {att.status}
//                 </td>

//                 <td className="p-4">{statusIcon(att.status)}</td>
//             </tr>
//             ))}
//         </tbody>
//         </table>
//     </div>
//     </div>
// );
// };

// export default Attendance;

import { Calendar, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import attendanceService from "../services/attendanceService";

const monthMap = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const Attendance = () => {
  const [month, setMonth] = useState("January");
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);

  const year = new Date().getFullYear();
  // later you can make this dynamic

  // ================= LOAD ATTENDANCE =================
  useEffect(() => {
    loadAttendance();
  }, [month]);

  const loadAttendance = async () => {
    setLoading(true);
    try {
      const res = await attendanceService.getMonthlyAttendance(
        year,
        monthMap[month]
      );

      // Convert backend enum to UI format
      const formatted = res.data.map((a) => ({
        date: a.date,
        status:
          a.status === "PRESENT"
            ? "Present"
            : a.status === "ABSENT"
            ? "Absent"
            : "Late",
      }));

      setAttendanceData(formatted);
    } catch (err) {
      console.error("Failed to load attendance", err);
      setAttendanceData([]);
    } finally {
      setLoading(false);
    }
  };

  // ================= UI HELPERS =================
  const statusColor = (status) => {
    if (status === "Present") return "text-green-600";
    if (status === "Late") return "text-yellow-600";
    return "text-red-600";
  };

  const statusIcon = (status) => {
    if (status === "Present") return <CheckCircle className="text-green-600" />;
    if (status === "Late") return <AlertCircle className="text-yellow-600" />;
    return <XCircle className="text-red-600" />;
  };

  return (
    <div className="p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3">
        <Calendar size={28} className="text-blue-600" />
        <h1 className="text-2xl font-bold">Attendance</h1>
      </div>

      {/* ================= MONTH SELECT ================= */}
      <div>
        <label className="text-gray-600 font-medium">Select Month:</label>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="ml-3 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          {Object.keys(monthMap).map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded-xl overflow-hidden border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Icon</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-500">
                  Loading attendance...
                </td>
              </tr>
            )}

            {!loading && attendanceData.length === 0 && (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-500">
                  No attendance records found
                </td>
              </tr>
            )}

            {!loading &&
              attendanceData.map((att, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50 transition">
                  <td className="p-4">{att.date}</td>
                  <td
                    className={`p-4 font-semibold ${statusColor(att.status)}`}
                  >
                    {att.status}
                  </td>
                  <td className="p-4">{statusIcon(att.status)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
