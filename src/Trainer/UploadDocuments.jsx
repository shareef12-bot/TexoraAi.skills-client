// import React from "react";

// const UploadDocuments = () => {
//   return (
//     <div className="space-y-6">
//       <div>
//         <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
//           Trainer
//         </p>
//         <h1 className="text-2xl font-semibold text-slate-100">
//           Upload Documents
//         </h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Share notes, assignments and reference material with students.
//         </p>
//       </div>

//       <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
//         <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center">
//           <p className="text-sm text-slate-300">
//             Drag and drop documents here, or
//           </p>
//           <button className="mt-3 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400">
//             Browse files
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
//               Title
//             </label>
//             <input
//               className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//               placeholder="Week 1 Notes"
//             />
//           </div>
//           <div>
//             <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
//               Course / Batch
//             </label>
//             <input
//               className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//               placeholder="Full Stack Batch A"
//             />
//           </div>
//         </div>

//         <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">
//           Upload document
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UploadDocuments;

import React, { useState } from "react";
import fileService from "../services/fileService";

const UploadDocuments = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const role = localStorage.getItem("lms_role"); // ADMIN or TRAINER

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("❌ Please select a document");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await fileService.uploadFile(file, role);

      setMessage("✅ Document uploaded successfully");
      setFile(null);
    } catch (err) {
      console.error(err);
      setMessage("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
          Trainer
        </p>
        <h1 className="text-2xl font-semibold text-slate-100">
          Upload Documents
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Share notes, assignments and reference material with students.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
        <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center">
          <p className="text-sm text-slate-300">
            Drag and drop documents here, or
          </p>

          <label className="mt-3 inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 cursor-pointer">
            Browse files
            <input type="file" onChange={handleFileChange} hidden />
          </label>

          {file && (
            <p className="mt-2 text-xs text-emerald-400">
              Selected: {file.name}
            </p>
          )}
        </div>

        <button
          onClick={handleUpload}
          disabled={loading}
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload document"}
        </button>

        {message && <p className="text-sm text-slate-300 mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default UploadDocuments;
