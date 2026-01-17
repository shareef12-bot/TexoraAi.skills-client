// // src/Admin/StudentsAdmin.jsx
// import React from "react";

// const StudentsAdmin = () => {
//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-xl font-semibold text-slate-100">Students</h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Manage student enrollments, access and course progress.
//         </p>
//       </div>

//       {/* Actions row */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//         <input
//           type="text"
//           placeholder="Search students..."
//           className="w-full md:w-72 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
//         />
//         <button className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500">
//           + Add student
//         </button>
//       </div>

//       {/* Table placeholder */}
//       <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
//         <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
//           <div className="w-2/6">Name</div>
//           <div className="w-1/6">Email</div>
//           <div className="w-1/6">Enrolled courses</div>
//           <div className="w-1/6">Status</div>
//           <div className="w-1/6 text-right">Actions</div>
//         </div>

//         <p className="text-sm text-slate-400">

//         </p>
//       </div>
//     </div>
//   );
// };

// export default StudentsAdmin;

// src/Admin/StudentsAdmin.jsx
//

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API_BASE = "http://localhost:9000/api/students";

// // ✅ FIXED: use correct token key
// const authHeaders = () => ({
//   Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
// });

// const StudentsAdmin = () => {
//   const [students, setStudents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [userId, setUserId] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ================= LOAD STUDENTS =================
//   const loadStudents = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(API_BASE, {
//         headers: authHeaders(),
//       });

//       console.log("STUDENTS API RESPONSE:", res.data);
//       setStudents(res.data);
//     } catch (err) {
//       console.error(
//         "STUDENTS API ERROR:",
//         err.response?.status,
//         err.response?.data || err.message
//       );

//       if (err.response?.status === 401) {
//         alert("Unauthorized. Please login again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadStudents();
//   }, []);

//   // ================= ADD STUDENT =================
//   const addStudent = async () => {
//     if (!userId) {
//       alert("Enter User ID");
//       return;
//     }

//     try {
//       await axios.post(
//         API_BASE,
//         { userId: Number(userId) },
//         { headers: authHeaders() }
//       );

//       console.log("Student added:", userId);
//       setUserId("");
//       loadStudents();
//     } catch (err) {
//       console.error(
//         "ADD STUDENT ERROR:",
//         err.response?.status,
//         err.response?.data || err.message
//       );

//       if (err.response?.status === 401) {
//         alert("Unauthorized. Please login again.");
//       } else {
//         alert("Student already exists or error occurred");
//       }
//     }
//   };

//   // ================= TOGGLE STATUS =================
//   const toggleStatus = async (id, status) => {
//     const next = status === "ACTIVE" ? "BLOCKED" : "ACTIVE";

//     try {
//       await axios.put(`${API_BASE}/${id}/status`, null, {
//         params: { status: next },
//         headers: authHeaders(),
//       });
//       loadStudents();
//     } catch (err) {
//       console.error(
//         "TOGGLE STATUS ERROR:",
//         err.response?.status,
//         err.response?.data || err.message
//       );
//       alert("Failed to update status");
//     }
//   };

//   // ================= DELETE STUDENT =================
//   const deleteStudent = async (id) => {
//     if (!window.confirm("Delete this student?")) return;

//     try {
//       await axios.delete(`${API_BASE}/${id}`, {
//         headers: authHeaders(),
//       });
//       loadStudents();
//     } catch (err) {
//       console.error(
//         "DELETE STUDENT ERROR:",
//         err.response?.status,
//         err.response?.data || err.message
//       );
//       alert("Failed to delete student");
//     }
//   };

//   const filtered = students.filter((s) => s.userId.toString().includes(search));

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-xl font-semibold text-slate-100">Students</h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Manage student enrollments, access and course progress.
//         </p>
//       </div>

//       {/* Actions */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//         <input
//           type="text"
//           placeholder="Search students by userId..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full md:w-72 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//         />

//         <div className="flex gap-2">
//           <input
//             type="number"
//             placeholder="User ID"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//             className="w-32 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           />
//           <button
//             onClick={addStudent}
//             className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500"
//           >
//             + Add student
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
//         <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
//           <div className="w-2/6">User ID</div>
//           <div className="w-1/6">Joined</div>
//           <div className="w-1/6">Last Active</div>
//           <div className="w-1/6">Status</div>
//           <div className="w-1/6 text-right">Actions</div>
//         </div>

//         {loading && <p className="text-sm text-slate-400">Loading...</p>}

//         {!loading && filtered.length === 0 && (
//           <p className="text-sm text-slate-400">No students found</p>
//         )}

//         {filtered.map((s) => (
//           <div
//             key={s.id}
//             className="flex items-center text-sm text-slate-200 py-2 border-b border-slate-800 last:border-0"
//           >
//             <div className="w-2/6">{s.userId}</div>
//             <div className="w-1/6">
//               {new Date(s.joinedAt).toLocaleDateString()}
//             </div>
//             <div className="w-1/6">
//               {s.lastActiveAt
//                 ? new Date(s.lastActiveAt).toLocaleDateString()
//                 : "—"}
//             </div>
//             <div className="w-1/6">
//               <span
//                 className={
//                   s.status === "ACTIVE" ? "text-green-400" : "text-red-400"
//                 }
//               >
//                 {s.status}
//               </span>
//             </div>
//             <div className="w-1/6 flex justify-end gap-3">
//               <button
//                 onClick={() => toggleStatus(s.id, s.status)}
//                 className="text-violet-400 hover:text-violet-300"
//               >
//                 Toggle
//               </button>
//               <button
//                 onClick={() => deleteStudent(s.id)}
//                 className="text-red-400 hover:text-red-300"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StudentsAdmin;

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:9000/api/students";

// ✅ FIXED: use correct token key
const authHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
});

const StudentsAdmin = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState(""); // ✅ NEW (email state)
  const [loading, setLoading] = useState(false);

  // ================= LOAD STUDENTS =================
  const loadStudents = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_BASE, {
        headers: authHeaders(),
      });

      console.log("STUDENTS API RESPONSE:", res.data);
      setStudents(res.data);
    } catch (err) {
      console.error(
        "STUDENTS API ERROR:",
        err.response?.status,
        err.response?.data || err.message
      );

      if (err.response?.status === 401) {
        alert("Unauthorized. Please login again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // ================= ADD STUDENT =================
  const addStudent = async () => {
    if (!userId || !email) {
      alert("Enter User ID and Email");
      return;
    }

    try {
      await axios.post(
        API_BASE,
        {
          userId: Number(userId),
          email, // ✅ EMAIL ADDED (ONLY CHANGE)
        },
        { headers: authHeaders() }
      );

      console.log("Student added:", userId, email);
      setUserId("");
      setEmail(""); // ✅ clear email
      loadStudents();
    } catch (err) {
      console.error(
        "ADD STUDENT ERROR:",
        err.response?.status,
        err.response?.data || err.message
      );

      if (err.response?.status === 401) {
        alert("Unauthorized. Please login again.");
      } else {
        alert("Student already exists or error occurred");
      }
    }
  };

  // ================= TOGGLE STATUS =================
  const toggleStatus = async (id, status) => {
    const next = status === "ACTIVE" ? "BLOCKED" : "ACTIVE";

    try {
      await axios.put(`${API_BASE}/${id}/status`, null, {
        params: { status: next },
        headers: authHeaders(),
      });
      loadStudents();
    } catch (err) {
      console.error(
        "TOGGLE STATUS ERROR:",
        err.response?.status,
        err.response?.data || err.message
      );
      alert("Failed to update status");
    }
  };

  // ================= DELETE STUDENT =================
  const deleteStudent = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    try {
      await axios.delete(`${API_BASE}/${id}`, {
        headers: authHeaders(),
      });
      loadStudents();
    } catch (err) {
      console.error(
        "DELETE STUDENT ERROR:",
        err.response?.status,
        err.response?.data || err.message
      );
      alert("Failed to delete student");
    }
  };

  const filtered = students.filter((s) => s.userId.toString().includes(search));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">Students</h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage student enrollments, access and course progress.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <input
          type="text"
          placeholder="Search students by userId..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-72 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />

        <div className="flex gap-2">
          <input
            type="number"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-32 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-56 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />

          <button
            onClick={addStudent}
            className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500"
          >
            + Add student
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
          <div className="w-2/6">User ID</div>
          <div className="w-2/6">Email</div> {/* ✅ NEW COLUMN */}
          <div className="w-1/6">Joined</div>
          <div className="w-1/6">Last Active</div>
          <div className="w-1/6">Status</div>
          <div className="w-1/6 text-right">Actions</div>
        </div>

        {loading && <p className="text-sm text-slate-400">Loading...</p>}

        {!loading && filtered.length === 0 && (
          <p className="text-sm text-slate-400">No students found</p>
        )}

        {filtered.map((s) => (
          <div
            key={s.id}
            className="flex items-center text-sm text-slate-200 py-2 border-b border-slate-800 last:border-0"
          >
            <div className="w-2/6">{s.userId}</div>
            <div className="w-2/6">{s.email}</div> {/* ✅ SHOW EMAIL */}
            <div className="w-1/6">
              {new Date(s.joinedAt).toLocaleDateString()}
            </div>
            <div className="w-1/6">
              {s.lastActiveAt
                ? new Date(s.lastActiveAt).toLocaleDateString()
                : "—"}
            </div>
            <div className="w-1/6">
              <span
                className={
                  s.status === "ACTIVE" ? "text-green-400" : "text-red-400"
                }
              >
                {s.status}
              </span>
            </div>
            <div className="w-1/6 flex justify-end gap-3">
              <button
                onClick={() => toggleStatus(s.id, s.status)}
                className="text-violet-400 hover:text-violet-300"
              >
                Toggle
              </button>
              <button
                onClick={() => deleteStudent(s.id)}
                className="text-red-400 hover:text-red-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsAdmin;
