// import React, { useEffect, useState } from "react";
// import fileService from "../services/fileService";

// const FileList = () => {
//   const [files, setFiles] = useState([]);
//   const [preview, setPreview] = useState(null);
//   const role = localStorage.getItem("lms_role"); // ADMIN / TRAINER / STUDENT

//   useEffect(() => {
//     loadFiles();
//   }, []);

//   const loadFiles = async () => {
//     try {
//       const res = await fileService.getFiles(0, 50);
//       setFiles(res.data.content);
//     } catch (err) {
//       console.error("Failed to load files", err);
//     }
//   };

//   // ================= PREVIEW =================
//   const openPreview = async (file) => {
//     try {
//       const res = await fileService.downloadFileBlob(file.storedName);
//       const blob = new Blob([res.data], { type: file.contentType });
//       const url = URL.createObjectURL(blob);

//       setPreview({
//         url,
//         type: file.contentType,
//         name: file.originalName,
//       });
//     } catch (err) {
//       console.error("Preview failed", err);
//       alert("Preview failed");
//     }
//   };

//   const closePreview = () => {
//     if (preview?.url) URL.revokeObjectURL(preview.url);
//     setPreview(null);
//   };

//   // ================= DOWNLOAD (FIXED) =================
//   const downloadFile = async (file) => {
//     try {
//       const res = await fileService.downloadFileBlob(file.storedName);

//       const blob = new Blob([res.data], { type: file.contentType });
//       const url = URL.createObjectURL(blob);

//       const a = document.createElement("a");
//       a.href = url;
//       a.download = file.originalName;
//       document.body.appendChild(a);
//       a.click();

//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);
//     } catch (err) {
//       console.error("Download failed", err);
//       alert("Download failed");
//     }
//   };

//   // ================= DELETE =================
//   const deleteFile = async (id) => {
//     if (!window.confirm("Delete this file?")) return;

//     try {
//       await fileService.deleteFile(id, role);
//       setFiles((prev) => prev.filter((f) => f.id !== id));
//     } catch (err) {
//       console.error("Delete failed", err);
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-lg font-semibold text-slate-100">
//         Uploaded Documents
//       </h2>

//       {files.map((file) => (
//         <div
//           key={file.id}
//           className="rounded-xl bg-slate-900 border border-slate-700 p-4"
//         >
//           <p className="text-slate-100 font-medium">{file.originalName}</p>

//           <p className="text-xs text-slate-400 mt-1">
//             {Math.round(file.size / 1024)} KB ·{" "}
//             {new Date(file.uploadedAt).toLocaleString()}
//           </p>

//           <div className="mt-3 flex gap-3">
//             {/* PREVIEW */}
//             <button
//               onClick={() => openPreview(file)}
//               className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400"
//             >
//               Preview
//             </button>

//             {/* DOWNLOAD (JWT SAFE) */}
//             <button
//               onClick={() => downloadFile(file)}
//               className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500"
//             >
//               Download
//             </button>

//             {/* DELETE */}
//             {(role === "ADMIN" || role === "TRAINER") && (
//               <button
//                 onClick={() => deleteFile(file.id)}
//                 className="px-4 py-2 text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-500"
//               >
//                 Delete
//               </button>
//             )}
//           </div>
//         </div>
//       ))}

//       {/* ================= PREVIEW MODAL ================= */}
//       {preview && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-white dark:bg-slate-900 rounded-xl w-11/12 h-5/6 p-4">
//             <div className="flex justify-between mb-2">
//               <p className="font-semibold">{preview.name}</p>
//               <button onClick={closePreview} className="text-red-500">
//                 Close
//               </button>
//             </div>

//             {preview.type.includes("pdf") && (
//               <iframe
//                 src={preview.url}
//                 className="w-full h-full rounded-lg"
//                 title="PDF Preview"
//               />
//             )}

//             {preview.type.startsWith("image") && (
//               <img
//                 src={preview.url}
//                 alt="Preview"
//                 className="max-h-full mx-auto rounded-lg"
//               />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileList;

import React, { useEffect, useState } from "react";
import fileService from "../services/fileService";
import auth from "../auth"; // ✅ ADD (ONLY LOGIC FIX)

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState(null);

  // ✅ FIX: Read role from auth.js (NOT localStorage directly)
  const role = auth.getCurrentRole(); // admin | trainer | student

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    const res = await fileService.getFiles(0, 50);
    setFiles(res.data.content);
  };

  // ================= PREVIEW =================
  const openPreview = async (file) => {
    const res = await fileService.downloadFileBlob(file.storedName);
    const blob = new Blob([res.data], { type: file.contentType });
    const url = URL.createObjectURL(blob);

    setPreview({
      url,
      type: file.contentType,
      name: file.originalName,
    });
  };

  const closePreview = () => {
    if (preview?.url) URL.revokeObjectURL(preview.url);
    setPreview(null);
  };

  // ================= DOWNLOAD =================
  const downloadFile = async (file) => {
    const res = await fileService.downloadFileBlob(file.storedName);

    const blob = new Blob([res.data], { type: file.contentType });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = file.originalName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  // ================= DELETE =================
  const deleteFile = async (id) => {
    if (!window.confirm("Delete this file?")) return;

    // ✅ Backend expects ADMIN / TRAINER
    await fileService.deleteFile(id, role.toUpperCase());

    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-slate-100">
        Uploaded Documents
      </h2>

      {files.map((file) => (
        <div
          key={file.id}
          className="rounded-xl bg-slate-900 border border-slate-700 p-4"
        >
          <p className="text-slate-100 font-medium">{file.originalName}</p>

          <p className="text-xs text-slate-400 mt-1">
            {Math.round(file.size / 1024)} KB ·{" "}
            {new Date(file.uploadedAt).toLocaleString()}
          </p>

          <div className="mt-3 flex gap-3">
            {/* PREVIEW */}
            <button
              onClick={() => openPreview(file)}
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400"
            >
              Preview
            </button>

            {/* DOWNLOAD */}
            <button
              onClick={() => downloadFile(file)}
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500"
            >
              Download
            </button>

            {/* ✅ DELETE (Trainer / Admin only) */}
            {(role === "admin" || role === "trainer") && (
              <button
                onClick={() => deleteFile(file.id)}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-500"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ))}

      {/* PREVIEW MODAL */}
      {preview && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 rounded-xl w-11/12 h-5/6 p-4">
            <div className="flex justify-between mb-2">
              <p className="font-semibold">{preview.name}</p>
              <button onClick={closePreview} className="text-red-500">
                Close
              </button>
            </div>

            {preview.type.includes("pdf") && (
              <iframe src={preview.url} className="w-full h-full rounded-lg" />
            )}

            {preview.type.startsWith("image") && (
              <img
                src={preview.url}
                alt="Preview"
                className="max-h-full mx-auto rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileList;
