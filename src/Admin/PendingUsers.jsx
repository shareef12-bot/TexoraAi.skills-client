// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API_BASE_URL =
//   import.meta.env.VITE_API_BASE_URL || "http://localhost:9000";

// const roleConfig = {
//   STUDENT: {
//     label: "Students",
//     pendingUrl: "/api/admin/approval/students/pending",
//     approveUrl: (id) => `/api/admin/approval/students/approve/${id}`,
//     rejectUrl: (id) => `/api/admin/approval/students/reject/${id}`,
//   },
//   TRAINER: {
//     label: "Trainers",
//     pendingUrl: "/api/admin/approval/trainers/pending",
//     approveUrl: (id) => `/api/admin/approval/trainers/approve/${id}`,
//     rejectUrl: (id) => `/api/admin/approval/trainers/reject/${id}`,
//   },
//   BUSINESS: {
//     label: "Business Team",
//     pendingUrl: "/api/admin/approval/business/pending",
//     approveUrl: (id) => `/api/admin/approval/business/approve/${id}`,
//     rejectUrl: (id) => `/api/admin/approval/business/reject/${id}`,
//   },
//   ADMIN: {
//     label: "Admins",
//     pendingUrl: "/api/admin/approval/admins/pending",
//     approveUrl: (id) => `/api/admin/approval/admins/approve/${id}`,
//     rejectUrl: (id) => `/api/admin/approval/admins/reject/${id}`,
//   },
// };

// export default function PendingUsers() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [selectedRole, setSelectedRole] = useState("STUDENT");

//   const fetchPending = async () => {
//     try {
//       setLoading(true);

//       const config = roleConfig[selectedRole];
//       const res = await axios.get(`${API_BASE_URL}${config.pendingUrl}`);

//       setUsers(res.data || []);
//     } catch (err) {
//       console.error(err);
//       alert("❌ Failed to load pending list");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPending();
//   }, [selectedRole]);

//   const approveUser = async (id) => {
//     try {
//       const config = roleConfig[selectedRole];
//       await axios.put(`${API_BASE_URL}${config.approveUrl(id)}`);
//       alert(`✅ ${selectedRole} approved`);
//       fetchPending();
//     } catch (err) {
//       console.error(err);
//       alert("❌ Approve failed");
//     }
//   };

//   const rejectUser = async (id) => {
//     try {
//       const config = roleConfig[selectedRole];
//       await axios.delete(`${API_BASE_URL}${config.rejectUrl(id)}`);
//       alert(`❌ ${selectedRole} rejected`);
//       fetchPending();
//     } catch (err) {
//       console.error(err);
//       alert("❌ Reject failed");
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex items-center justify-between gap-3 mb-4">
//         <h1 className="text-2xl font-bold">Pending Approvals</h1>

//         <select
//           value={selectedRole}
//           onChange={(e) => setSelectedRole(e.target.value)}
//           className="border px-3 py-2 rounded-lg"
//         >
//           {Object.keys(roleConfig).map((role) => (
//             <option key={role} value={role}>
//               {roleConfig[role].label}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loading && <p>Loading...</p>}

//       {!loading && users.length === 0 && (
//         <p className="text-gray-500">
//           No pending {roleConfig[selectedRole].label} 🎉
//         </p>
//       )}

//       <div className="space-y-3">
//         {users.map((u) => (
//           <div
//             key={u.id}
//             className="flex items-center justify-between border p-4 rounded-lg bg-white shadow"
//           >
//             <div>
//               <p className="font-semibold">{u.name || "No Name"}</p>
//               <p className="text-sm text-gray-600">{u.email}</p>
//               <p className="text-xs text-gray-500 mt-1">
//                 Role: <b>{selectedRole}</b>
//               </p>
//             </div>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => approveUser(u.id)}
//                 className="px-4 py-2 bg-green-600 text-white rounded"
//               >
//                 Approve
//               </button>
//               <button
//                 onClick={() => rejectUser(u.id)}
//                 className="px-4 py-2 bg-red-600 text-white rounded"
//               >
//                 Reject
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import authService from "../services/authService"; // ✅ import this

// const API_BASE_URL =
//   import.meta.env.VITE_API_BASE_URL || "http://localhost:9000";

// export default function PendingUsers() {
//   const [students, setStudents] = useState([]);
//   const [trainers, setTrainers] = useState([]);
//   const [business, setBusiness] = useState([]);
//   const [admins, setAdmins] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchPending = async () => {
//     try {
//       setLoading(true);

//       const token = authService.getToken(); // ✅ gets lms_token

//       if (!token) {
//         alert("❌ Token missing. Please login again.");
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`, // ✅ REQUIRED
//         },
//       };

//       const [sRes, tRes, bRes, aRes] = await Promise.all([
//         axios.get(
//           `${API_BASE_URL}/api/admin/approval/students/pending`,
//           config,
//         ),
//         axios.get(
//           `${API_BASE_URL}/api/admin/approval/trainers/pending`,
//           config,
//         ),
//         axios.get(
//           `${API_BASE_URL}/api/admin/approval/business/pending`,
//           config,
//         ),
//         axios.get(`${API_BASE_URL}/api/admin/approval/admins/pending`, config),
//       ]);

//       setStudents(sRes.data || []);
//       setTrainers(tRes.data || []);
//       setBusiness(bRes.data || []);
//       setAdmins(aRes.data || []);
//     } catch (err) {
//       console.error("fetchPending error:", err);
//       alert("❌ Unauthorized (401). Please login again as ADMIN.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPending();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Pending Users</h1>

//       {loading && <p>Loading...</p>}

//       {!loading && (
//         <>
//           <h2 className="text-lg font-semibold mt-4">Pending Students</h2>
//           {students.length === 0 ? (
//             <p className="text-gray-500">No pending students 🎉</p>
//           ) : (
//             students.map((u) => (
//               <div key={u.userId} className="border p-3 rounded mb-2 bg-white">
//                 <p className="font-semibold">{u.name}</p>
//                 <p className="text-sm text-gray-600">{u.email}</p>
//               </div>
//             ))
//           )}

//           <h2 className="text-lg font-semibold mt-4">Pending Trainers</h2>
//           {trainers.length === 0 ? (
//             <p className="text-gray-500">No pending trainers 🎉</p>
//           ) : (
//             trainers.map((u) => (
//               <div key={u.userId} className="border p-3 rounded mb-2 bg-white">
//                 <p className="font-semibold">{u.name}</p>
//                 <p className="text-sm text-gray-600">{u.email}</p>
//               </div>
//             ))
//           )}

//           <h2 className="text-lg font-semibold mt-4">Pending Business</h2>
//           {business.length === 0 ? (
//             <p className="text-gray-500">No pending business 🎉</p>
//           ) : (
//             business.map((u) => (
//               <div key={u.userId} className="border p-3 rounded mb-2 bg-white">
//                 <p className="font-semibold">{u.name}</p>
//                 <p className="text-sm text-gray-600">{u.email}</p>
//               </div>
//             ))
//           )}

//           <h2 className="text-lg font-semibold mt-4">Pending Admins</h2>
//           {admins.length === 0 ? (
//             <p className="text-gray-500">No pending admins 🎉</p>
//           ) : (
//             admins.map((u) => (
//               <div key={u.userId} className="border p-3 rounded mb-2 bg-white">
//                 <p className="font-semibold">{u.name}</p>
//                 <p className="text-sm text-gray-600">{u.email}</p>
//               </div>
//             ))
//           )}
//         </>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import authService from "../services/authService";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:9000";

export default function PendingUsers() {
  const [selectedRole, setSelectedRole] = useState("students"); // students/trainers/business/admins
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ role wise endpoint map
  const endpointMap = {
    students: "/api/admin/approval/students/pending",
    trainers: "/api/admin/approval/trainers/pending",
    business: "/api/admin/approval/business/pending",
    admins: "/api/admin/approval/admins/pending",
  };

  const approveMap = {
    students: "/api/admin/approval/students/approve",
    trainers: "/api/admin/approval/trainers/approve",
    business: "/api/admin/approval/business/approve",
    admins: "/api/admin/approval/admins/approve",
  };

  const rejectMap = {
    students: "/api/admin/approval/students/reject",
    trainers: "/api/admin/approval/trainers/reject",
    business: "/api/admin/approval/business/reject",
    admins: "/api/admin/approval/admins/reject",
  };

  const fetchPending = async (roleKey) => {
    try {
      setLoading(true);

      const token = authService.getToken();

      const res = await axios.get(`${API_BASE_URL}${endpointMap[roleKey]}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(res.data || []);
    } catch (err) {
      console.error("❌ fetchPending error:", err);
      alert("❌ Failed to load pending approvals");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPending(selectedRole);
  }, [selectedRole]);

  const approveUser = async (id) => {
    try {
      const token = authService.getToken();

      await axios.put(
        `${API_BASE_URL}${approveMap[selectedRole]}/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("✅ Approved Successfully");
      fetchPending(selectedRole);
    } catch (err) {
      console.error("❌ approveUser error:", err);
      alert("❌ Approve failed");
    }
  };

  const rejectUser = async (id) => {
    try {
      const token = authService.getToken();

      await axios.delete(`${API_BASE_URL}${rejectMap[selectedRole]}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("❌ Rejected Successfully");
      fetchPending(selectedRole);
    } catch (err) {
      console.error("❌ rejectUser error:", err);
      alert("❌ Reject failed");
    }
  };

  const titleMap = {
    students: "Students",
    trainers: "Trainers",
    business: "Business Team",
    admins: "Admins",
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-bold text-white">Pending Approvals</h1>
          <p className="text-sm text-gray-400">
            Approve or reject pending users
          </p>
        </div>

        {/* DROPDOWN */}
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-600 bg-white text-black"
        >
          <option value="students">Students</option>
          <option value="trainers">Trainers</option>
          <option value="business">Business Team</option>
          <option value="admins">Admins</option>
        </select>
      </div>

      {/* LOADING */}
      {loading && <p className="text-gray-300">Loading...</p>}

      {/* EMPTY */}
      {!loading && users.length === 0 && (
        <p className="text-gray-400">No pending {titleMap[selectedRole]} 🎉</p>
      )}

      {/* LIST */}
      <div className="space-y-3">
        {users.map((u) => (
          <div
            key={u.userId || u.id}
            className="flex items-center justify-between border border-gray-700 p-4 rounded-lg bg-white shadow"
          >
            <div>
              <p className="font-semibold text-black">{u.name}</p>
              <p className="text-sm text-gray-600">{u.email}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => approveUser(u.userId || u.id)}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Approve
              </button>
              <button
                onClick={() => rejectUser(u.userId || u.id)}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
