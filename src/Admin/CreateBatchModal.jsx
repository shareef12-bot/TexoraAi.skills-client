// import React, { useEffect, useState } from "react";
// import { createBatch, getBranches } from "../services/batchService";

// const CreateBatchModal = ({ onClose, onSuccess }) => {
//   const [loading, setLoading] = useState(false);
//   const [branches, setBranches] = useState([]);

//   const [form, setForm] = useState({
//     name: "",
//     branchId: "",
//     startDate: "",
//     endDate: "",
//   });

//   useEffect(() => {
//     loadBranches();
//   }, []);

//   const loadBranches = async () => {
//     try {
//       const res = await getBranches();
//       setBranches(res.data || []);
//     } catch (err) {
//       console.error("Failed to load branches", err);
//     }
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (!form.name || !form.branchId) return;

//     try {
//       setLoading(true);
//       await createBatch({
//         name: form.name,
//         branchId: form.branchId,
//         startDate: form.startDate,
//         endDate: form.endDate,
//       });

//       onSuccess(); // refresh batch list
//       onClose(); // close modal
//     } catch (err) {
//       console.error("Failed to create batch", err);
//       alert("Batch creation failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-full max-w-md">
//         <h2 className="text-lg font-semibold text-slate-100 mb-4">
//           Create Batch
//         </h2>

//         <div className="space-y-4">
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Batch name"
//             className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           />

//           <select
//             name="branchId"
//             value={form.branchId}
//             onChange={handleChange}
//             className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           >
//             <option value="">Select branch</option>
//             {branches.map((b) => (
//               <option key={b.id} value={b.id}>
//                 {b.name}
//               </option>
//             ))}
//           </select>

//           <input
//             type="date"
//             name="startDate"
//             value={form.startDate}
//             onChange={handleChange}
//             className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           />

//           <input
//             type="date"
//             name="endDate"
//             value={form.endDate}
//             onChange={handleChange}
//             className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           />
//         </div>

//         <div className="flex justify-end gap-3 mt-6">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm rounded-md border border-slate-600 text-slate-300 hover:bg-slate-800"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="px-4 py-2 text-sm rounded-md bg-violet-600 text-white hover:bg-violet-500"
//           >
//             {loading ? "Creating..." : "Create"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateBatchModal;

// import React, { useEffect, useState } from "react";
// import { createBatch, getBranches } from "../services/batchService";

// const CreateBatchModal = ({ onClose, onSuccess }) => {
//   const [loading, setLoading] = useState(false);
//   const [branches, setBranches] = useState([]);

//   const [form, setForm] = useState({
//     name: "",
//     branchId: "",
//     courseId: "", // ✅ ADDED
//     trainerId: "", // ✅ ADDED
//     startDate: "",
//     endDate: "",
//   });

//   useEffect(() => {
//     loadBranches();
//   }, []);

//   const loadBranches = async () => {
//     try {
//       const res = await getBranches();
//       setBranches(res.data || []);
//     } catch (err) {
//       console.error("Failed to load branches", err);
//     }
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (!form.name || !form.branchId || !form.courseId || !form.trainerId)
//       return;

//     try {
//       setLoading(true);
//       await createBatch({
//         name: form.name,
//         branchId: form.branchId,
//         courseId: form.courseId, // ✅ ADDED
//         trainerId: form.trainerId, // ✅ ADDED
//         startDate: form.startDate,
//         endDate: form.endDate,
//       });

//       onSuccess();
//       onClose();
//     } catch (err) {
//       console.error("Failed to create batch", err);
//       alert("Batch creation failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-full max-w-md">
//         <h2 className="text-lg font-semibold text-slate-100 mb-4">
//           Create Batch
//         </h2>

//         <div className="space-y-4">
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Batch name"
//             className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           />

//           <select
//             name="branchId"
//             value={form.branchId}
//             onChange={handleChange}
//             className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           >
//             <option value="">Select branch</option>
//             {branches.map((b) => (
//               <option key={b.id} value={b.id}>
//                 {b.name}
//               </option>
//             ))}
//           </select>

//           {/* ✅ ADDED – Course ID */}
//           <input
//             name="courseId"
//             value={form.courseId}
//             onChange={handleChange}
//             placeholder="Course ID"
//             className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           />

//           {/* ✅ ADDED – Trainer ID */}
//           <input
//             name="trainerId"
//             value={form.trainerId}
//             onChange={handleChange}
//             placeholder="Trainer ID"
//             className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           />

//           <input
//             type="date"
//             name="startDate"
//             value={form.startDate}
//             onChange={handleChange}
//             className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           />

//           <input
//             type="date"
//             name="endDate"
//             value={form.endDate}
//             onChange={handleChange}
//             className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           />
//         </div>

//         <div className="flex justify-end gap-3 mt-6">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm rounded-md border border-slate-600 text-slate-300 hover:bg-slate-800"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="px-4 py-2 text-sm rounded-md bg-violet-600 text-white hover:bg-violet-500"
//           >
//             {loading ? "Creating..." : "Create"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateBatchModal;

import React, { useEffect, useState } from "react";
import {
  createBatch,
  updateBatch, // ✅ ADDED
  getBranches,
} from "../services/batchService";

const CreateBatchModal = ({
  onClose,
  onSuccess,
  isEdit = false, // ✅ ADDED
  initialData = null, // ✅ ADDED
}) => {
  const [loading, setLoading] = useState(false);
  const [branches, setBranches] = useState([]);

  const [form, setForm] = useState({
    name: "",
    branchId: "",
    courseId: "",
    trainerId: "",
    startDate: "",
    endDate: "",
  });

  /* ===============================
     LOAD BRANCHES
     =============================== */
  useEffect(() => {
    loadBranches();
  }, []);

  /* ===============================
     PREFILL FORM FOR EDIT
     =============================== */
  useEffect(() => {
    if (isEdit && initialData) {
      setForm({
        name: initialData.name || "",
        branchId: initialData.branchId || "",
        courseId: initialData.courseId || "",
        trainerId: initialData.trainerId || "",
        startDate: initialData.startDate || "",
        endDate: initialData.endDate || "",
      });
    }
  }, [isEdit, initialData]);

  const loadBranches = async () => {
    try {
      const res = await getBranches();
      setBranches(res.data || []);
    } catch (err) {
      console.error("Failed to load branches", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ===============================
     CREATE / UPDATE HANDLER
     =============================== */
  const handleSubmit = async () => {
    if (!form.name || !form.branchId || !form.courseId || !form.trainerId)
      return;

    try {
      setLoading(true);

      if (isEdit && initialData?.id) {
        // ✅ UPDATE
        await updateBatch(initialData.id, form);
      } else {
        // ✅ CREATE
        await createBatch(form);
      }

      onSuccess();
      onClose();
    } catch (err) {
      console.error("Batch save failed", err);
      alert("Batch save failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold text-slate-100 mb-4">
          Create Batch
        </h2>

        <div className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Batch name"
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />

          <select
            name="branchId"
            value={form.branchId}
            onChange={handleChange}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          >
            <option value="">Select branch</option>
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>

          <input
            name="courseId"
            value={form.courseId}
            onChange={handleChange}
            placeholder="Course ID"
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />

          <input
            name="trainerId"
            value={form.trainerId}
            onChange={handleChange}
            placeholder="Trainer ID"
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />

          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />

          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-md border border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 text-sm rounded-md bg-violet-600 text-white hover:bg-violet-500"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBatchModal;
