// import React, { useEffect, useState } from "react";
// import { getBranches, createBranch } from "../services/batchService";

// const Branches = () => {
//   const [branches, setBranches] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const [form, setForm] = useState({
//     name: "",
//     city: "",
//   });

//   /* ===============================
//      LOAD FROM BACKEND
//      =============================== */
//   useEffect(() => {
//     loadBranches();
//   }, []);

//   const loadBranches = async () => {
//     try {
//       const res = await getBranches();
//       setBranches(res.data);
//     } catch (err) {
//       console.error("Failed to load branches", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filteredBranches = branches.filter((b) =>
//     b.name.toLowerCase().includes(search.toLowerCase())
//   );

//   /* ===============================
//      FORM HANDLERS
//      =============================== */
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     if (!form.name.trim() || !form.city.trim()) return;

//     try {
//       await createBranch(form);
//       setForm({ name: "", city: "" });
//       setShowModal(false);
//       loadBranches(); // 🔥 reload from DB
//     } catch (err) {
//       console.error("Failed to create branch", err);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-xl font-semibold text-slate-100">Branches</h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Manage different branches / centres of your organisation.
//         </p>
//       </div>

//       {/* Actions */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//         <button
//           onClick={() => setShowModal(true)}
//           className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500"
//         >
//           + Add Branch
//         </button>

//         <input
//           type="text"
//           placeholder="Search branches..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full md:w-64 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//         />
//       </div>

//       {/* Table */}
//       <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
//         <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
//           <div className="w-2/6">Branch name</div>
//           <div className="w-2/6">City / location</div>
//           <div className="w-1/6">Students</div>
//           <div className="w-1/6 text-right">Actions</div>
//         </div>

//         {loading ? (
//           <p className="text-sm text-slate-400">Loading...</p>
//         ) : filteredBranches.length === 0 ? (
//           <p className="text-sm text-slate-400">No branches found.</p>
//         ) : (
//           filteredBranches.map((branch) => (
//             <div
//               key={branch.id}
//               className="flex items-center text-sm text-slate-200 py-2 border-b border-slate-800 last:border-0"
//             >
//               <div className="w-2/6">{branch.name}</div>
//               <div className="w-2/6">{branch.city}</div>
//               <div className="w-1/6">{branch.students ?? 0}</div>
//               <div className="w-1/6 text-right">
//                 <button className="text-xs px-3 py-1 rounded-md border border-slate-700 hover:bg-slate-800">
//                   Edit
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* ================= MODAL ================= */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="bg-slate-900 rounded-xl p-6 w-full max-w-md border border-slate-700">
//             <h2 className="text-lg font-semibold text-slate-100 mb-4">
//               Add Branch
//             </h2>

//             <div className="space-y-4">
//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Branch name"
//                 className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//               />

//               <input
//                 name="city"
//                 value={form.city}
//                 onChange={handleChange}
//                 placeholder="City / Location"
//                 className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//               />
//             </div>

//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 text-sm rounded-md border border-slate-600 text-slate-300 hover:bg-slate-800"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleSave}
//                 className="px-4 py-2 text-sm rounded-md bg-violet-600 text-white hover:bg-violet-500"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Branches;

import React, { useEffect, useState } from "react";
import {
  getBranches,
  createBranch,
  updateBranch,
} from "../services/batchService";

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🔥 NEW: track edit mode
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    city: "",
  });

  /* ===============================
     LOAD FROM BACKEND
     =============================== */
  useEffect(() => {
    loadBranches();
  }, []);

  const loadBranches = async () => {
    try {
      const res = await getBranches();
      setBranches(res.data);
    } catch (err) {
      console.error("Failed to load branches", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredBranches = branches.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  /* ===============================
     FORM HANDLERS
     =============================== */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 SAVE = CREATE or UPDATE (same modal)
  const handleSave = async () => {
    if (!form.name.trim() || !form.city.trim()) return;

    try {
      if (editingId) {
        // 🔥 EDIT
        await updateBranch(editingId, form);
      } else {
        // 🔥 CREATE
        await createBranch(form);
      }

      resetModal();
      loadBranches();
    } catch (err) {
      console.error("Failed to save branch", err);
    }
  };

  // 🔥 OPEN EDIT MODAL
  const handleEdit = (branch) => {
    setEditingId(branch.id);
    setForm({
      name: branch.name,
      city: branch.city,
    });
    setShowModal(true);
  };

  const resetModal = () => {
    setShowModal(false);
    setEditingId(null);
    setForm({ name: "", city: "" });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">Branches</h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage different branches / centres of your organisation.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <button
          onClick={() => {
            resetModal();
            setShowModal(true);
          }}
          className="px-4 py-2 rounded-md bg-violet-600 text-sm font-medium text-white hover:bg-violet-500"
        >
          + Add Branch
        </button>

        <input
          type="text"
          placeholder="Search branches..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex text-xs font-semibold text-slate-400 border-b border-slate-800 pb-2 mb-3">
          <div className="w-2/6">Branch name</div>
          <div className="w-2/6">City / location</div>
          <div className="w-1/6">Students</div>
          <div className="w-1/6 text-right">Actions</div>
        </div>

        {loading ? (
          <p className="text-sm text-slate-400">Loading...</p>
        ) : filteredBranches.length === 0 ? (
          <p className="text-sm text-slate-400">No branches found.</p>
        ) : (
          filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="flex items-center text-sm text-slate-200 py-2 border-b border-slate-800 last:border-0"
            >
              <div className="w-2/6">{branch.name}</div>
              <div className="w-2/6">{branch.city}</div>
              <div className="w-1/6">{branch.students ?? 0}</div>
              <div className="w-1/6 text-right">
                <button
                  onClick={() => handleEdit(branch)}
                  className="text-xs px-3 py-1 rounded-md border border-slate-700 hover:bg-slate-800"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-xl p-6 w-full max-w-md border border-slate-700">
            <h2 className="text-lg font-semibold text-slate-100 mb-4">
              {editingId ? "Edit Branch" : "Add Branch"}
            </h2>

            <div className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Branch name"
                className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
              />

              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City / Location"
                className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={resetModal}
                className="px-4 py-2 text-sm rounded-md border border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm rounded-md bg-violet-600 text-white hover:bg-violet-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Branches;
