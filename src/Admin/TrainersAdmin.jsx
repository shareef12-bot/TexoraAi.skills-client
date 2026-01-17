// // src/Admin/TrainersAdmin.jsx
// import React from "react";

// const TrainersAdmin = () => {
//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-xl font-semibold text-slate-100">Trainers</h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Add new trainers and control which courses and batches they handle.
//         </p>
//       </div>

//       {/* Actions row */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//         <input
//           type="text"
//           placeholder="Search trainers..."
//           className="w-full md:w-72 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
//         />
//         <button className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500">
//           + Add trainer
//         </button>
//       </div>

//       {/* Table placeholder */}
//       <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
//         <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
//           <div className="w-2/6">Name</div>
//           <div className="w-1/6">Email</div>
//           <div className="w-1/6">Expertise</div>
//           <div className="w-1/6">Assigned batches</div>
//           <div className="w-1/6 text-right">Actions</div>
//         </div>

//         <p className="text-sm text-slate-400">

//         </p>
//       </div>
//     </div>
//   );
// };

// export default TrainersAdmin;

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:9000/api/trainers";

// ✅ correct token
const authHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
});

const TrainersAdmin = () => {
  const [trainers, setTrainers] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    expertise: "",
  });
  const [loading, setLoading] = useState(false);

  // ================= LOAD TRAINERS =================
  const loadTrainers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_BASE, {
        headers: authHeaders(),
      });
      setTrainers(res.data);
    } catch (err) {
      console.error("TRAINER LOAD ERROR", err);
      if (err.response?.status === 401) {
        alert("Unauthorized. Please login again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrainers();
  }, []);

  // ================= ADD TRAINER =================
  const addTrainer = async () => {
    if (!form.name || !form.email || !form.expertise) {
      alert("Fill all fields");
      return;
    }

    try {
      await axios.post(API_BASE, form, {
        headers: authHeaders(),
      });

      setForm({ name: "", email: "", expertise: "" });
      loadTrainers();
    } catch (err) {
      console.error("ADD TRAINER ERROR", err);
      alert(err.response?.data?.message || "Failed to add trainer");
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
      loadTrainers();
    } catch (err) {
      console.error("STATUS ERROR", err);
      alert("Failed to update status");
    }
  };

  // ================= DELETE TRAINER =================
  const deleteTrainer = async (id) => {
    if (!window.confirm("Delete trainer?")) return;

    try {
      await axios.delete(`${API_BASE}/${id}`, {
        headers: authHeaders(),
      });
      loadTrainers();
    } catch (err) {
      console.error("DELETE ERROR", err);
      alert("Failed to delete trainer");
    }
  };

  const filtered = trainers.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-100">Trainers</h1>

      {/* Search + Add */}
      <div className="flex flex-wrap gap-2">
        <input
          placeholder="Search trainers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />

        <input
          placeholder="Expertise"
          value={form.expertise}
          onChange={(e) => setForm({ ...form, expertise: e.target.value })}
          className="rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />

        <button
          onClick={addTrainer}
          className="px-4 py-2 rounded-md bg-violet-600 text-white text-sm"
        >
          + Add trainer
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
        {loading && <p className="text-slate-400">Loading...</p>}

        {!loading && filtered.length === 0 && (
          <p className="text-slate-400">No trainers found</p>
        )}

        {filtered.map((t) => (
          <div
            key={t.id}
            className="flex text-sm text-slate-200 py-2 border-b border-slate-800 last:border-0"
          >
            <div className="w-2/6">{t.name}</div>
            <div className="w-2/6">{t.email}</div>
            <div className="w-1/6">{t.expertise}</div>
            <div className="w-1/6">
              <span
                className={
                  t.status === "ACTIVE" ? "text-green-400" : "text-red-400"
                }
              >
                {t.status}
              </span>
            </div>
            <div className="w-1/6 flex gap-3 justify-end">
              <button
                onClick={() => toggleStatus(t.id, t.status)}
                className="text-violet-400"
              >
                Toggle
              </button>
              <button
                onClick={() => deleteTrainer(t.id)}
                className="text-red-400"
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

export default TrainersAdmin;
