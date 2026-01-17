// import React, { useEffect, useState } from "react";
// import CreateBatchModal from "./CreateBatchModal";
// import { getAllBatches } from "../services/batchService";

// const AdminBatches = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [batches, setBatches] = useState([]);

//   const loadBatches = async () => {
//     try {
//       const res = await getAllBatches();
//       setBatches(res.data || []);
//     } catch (err) {
//       console.error("Failed to load batches", err);
//     }
//   };

//   useEffect(() => {
//     loadBatches();
//   }, []);

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-xl font-semibold text-slate-100">Batches</h1>
//           <p className="text-sm text-slate-400">
//             Create and manage batches across branches.
//           </p>
//         </div>

//         <button
//           onClick={() => setShowModal(true)}
//           className="px-4 py-2 rounded-md bg-violet-600 text-white text-sm hover:bg-violet-500"
//         >
//           + Create Batch
//         </button>
//       </div>

//       {/* Batch Table */}
//       <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
//         {batches.length === 0 ? (
//           <p className="text-sm text-slate-400">No batches created yet.</p>
//         ) : (
//           <table className="w-full text-sm text-slate-200">
//             <thead className="text-xs text-slate-400 border-b border-slate-800">
//               <tr>
//                 <th className="py-2 text-left">Name</th>
//                 <th className="py-2 text-left">Course</th>
//                 <th className="py-2 text-left">Trainer</th>
//                 <th className="py-2 text-left">Start</th>
//                 <th className="py-2 text-left">End</th>
//               </tr>
//             </thead>
//             <tbody>
//               {batches.map((b) => (
//                 <tr key={b.id} className="border-b border-slate-800">
//                   <td className="py-2">{b.name}</td>
//                   <td className="py-2">{b.courseName}</td>
//                   <td className="py-2">{b.trainerName}</td>
//                   <td className="py-2">{b.startDate}</td>
//                   <td className="py-2">{b.endDate}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <CreateBatchModal
//           onClose={() => setShowModal(false)}
//           onSuccess={loadBatches}
//         />
//       )}
//     </div>
//   );
// };

// export default AdminBatches;

import React, { useEffect, useState } from "react";
import CreateBatchModal from "./CreateBatchModal";
import {
  getAllBatches,
  deleteBatch, // ✅ ADDED
} from "../services/batchService";

const AdminBatches = () => {
  const [showModal, setShowModal] = useState(false);
  const [batches, setBatches] = useState([]);
  const [editBatch, setEditBatch] = useState(null); // ✅ ADDED

  const loadBatches = async () => {
    try {
      const res = await getAllBatches();
      setBatches(res.data || []);
    } catch (err) {
      console.error("Failed to load batches", err);
    }
  };

  useEffect(() => {
    loadBatches();
  }, []);

  // ✅ ADDED – DELETE HANDLER
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this batch?")) return;

    try {
      await deleteBatch(id);
      loadBatches();
    } catch (err) {
      console.error("Failed to delete batch", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-100">Batches</h1>
          <p className="text-sm text-slate-400">
            Create and manage batches across branches.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 rounded-md bg-violet-600 text-white text-sm hover:bg-violet-500"
        >
          + Create Batch
        </button>
      </div>

      {/* Batch Table */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
        {batches.length === 0 ? (
          <p className="text-sm text-slate-400">No batches created yet.</p>
        ) : (
          <table className="w-full text-sm text-slate-200">
            <thead className="text-xs text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-2 text-left">Name</th>
                <th className="py-2 text-left">Course</th>
                <th className="py-2 text-left">Trainer</th>
                <th className="py-2 text-left">Start</th>
                <th className="py-2 text-left">End</th>
                <th className="py-2 text-right">Actions</th> {/* ✅ ADDED */}
              </tr>
            </thead>
            <tbody>
              {batches.map((b) => (
                <tr key={b.id} className="border-b border-slate-800">
                  <td className="py-2">{b.name}</td>
                  <td className="py-2">{b.courseName}</td>
                  <td className="py-2">{b.trainerName}</td>
                  <td className="py-2">{b.startDate}</td>
                  <td className="py-2">{b.endDate}</td>

                  {/* ✅ ADDED – ACTION BUTTONS */}
                  <td className="py-2 text-right space-x-2">
                    <button
                      onClick={() => setEditBatch(b)}
                      className="px-3 py-1 text-xs rounded-md border border-slate-700 hover:bg-slate-800"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(b.id)}
                      className="px-3 py-1 text-xs rounded-md border border-red-700 text-red-400 hover:bg-red-900/30"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* CREATE MODAL */}
      {showModal && (
        <CreateBatchModal
          onClose={() => setShowModal(false)}
          onSuccess={loadBatches}
        />
      )}

      {/* EDIT MODAL */}
      {editBatch && (
        <CreateBatchModal
          isEdit={true}
          initialData={editBatch}
          onClose={() => setEditBatch(null)}
          onSuccess={() => {
            setEditBatch(null);
            loadBatches();
          }}
        />
      )}
    </div>
  );
};

export default AdminBatches;
