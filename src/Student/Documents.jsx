// // import React from "react";

// // const Documents = () => {
// //   const docs = [
// //     { name: "Syllabus.pdf", size: "1.2 MB", type: "PDF" },
// //     { name: "Notes_Week_1.docx", size: "450 KB", type: "DOCX" },
// //     { name: "Assignment_Guide.pdf", size: "900 KB", type: "PDF" }
// //   ];

// //   return (
// //     <div className="p-6 space-y-4">
// //       <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
// //         Documents
// //       </h1>
// //       <p className="text-sm text-slate-600 dark:text-slate-300">
// //         All study materials, notes and guides shared by your trainers.
// //       </p>

// //       <div className="mt-4 space-y-2">
// //         {docs.map((d) => (
// //           <div
// //             key={d.name}
// //             className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
// //           >
// //             <div>
// //               <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
// //                 {d.name}
// //               </p>
// //               <p className="text-xs text-slate-500 dark:text-slate-400">
// //                 {d.type} · {d.size}
// //               </p>
// //             </div>
// //             <button className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
// //               Download
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Documents;

// import React, { useEffect, useState } from "react";
// import fileService from "../services/fileService";

// const Documents = () => {
//   const [docs, setDocs] = useState([]);

//   useEffect(() => {
//     fileService
//       .getFiles(0, 50)
//       .then((res) => setDocs(res.data.content))
//       .catch(console.error);
//   }, []);

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
//         Documents
//       </h1>

//       <p className="text-sm text-slate-600 dark:text-slate-300">
//         All study materials, notes and guides shared by your trainers.
//       </p>

//       <div className="mt-4 space-y-2">
//         {docs.map((d) => (
//           <div
//             key={d.id}
//             className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
//           >
//             <div>
//               <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
//                 {d.originalName}
//               </p>
//               <p className="text-xs text-slate-500 dark:text-slate-400">
//                 {d.contentType} · {Math.round(d.size / 1024)} KB
//               </p>
//             </div>

//             <a
//               href={fileService.downloadFile(d.storedName)}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
//             >
//               Download
//             </a>
//           </div>
//         ))}

//         {docs.length === 0 && (
//           <p className="text-sm text-slate-500">No documents available yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Documents;

// import React, { useEffect, useState } from "react";
// import fileService from "../services/fileService";

// const Documents = () => {
//   const [docs, setDocs] = useState([]);

//   useEffect(() => {
//     fileService
//       .getFiles(0, 50)
//       .then((res) => setDocs(res.data.content))
//       .catch(console.error);
//   }, []);

//   // ✅ SECURE DOWNLOAD (JWT + Blob)
//   const handleDownload = async (file) => {
//     try {
//       const res = await fileService.downloadFileBlob(file.storedName);

//       const blob = new Blob([res.data]);
//       const url = window.URL.createObjectURL(blob);

//       const a = document.createElement("a");
//       a.href = url;
//       a.download = file.originalName;
//       document.body.appendChild(a);
//       a.click();

//       document.body.removeChild(a);
//       window.URL.revokeObjectURL(url);
//     } catch (err) {
//       console.error("Download failed", err);
//       alert("Download failed");
//     }
//   };

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
//         Documents
//       </h1>

//       <p className="text-sm text-slate-600 dark:text-slate-300">
//         All study materials, notes and guides shared by your trainers.
//       </p>

//       <div className="mt-4 space-y-2">
//         {docs.map((d) => (
//           <div
//             key={d.id}
//             className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
//           >
//             <div>
//               <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
//                 {d.originalName}
//               </p>
//               <p className="text-xs text-slate-500 dark:text-slate-400">
//                 {d.contentType} · {Math.round(d.size / 1024)} KB
//               </p>
//             </div>

//             <button
//               onClick={() => handleDownload(d)}
//               className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
//             >
//               Download
//             </button>
//           </div>
//         ))}

//         {docs.length === 0 && (
//           <p className="text-sm text-slate-500">No documents available yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Documents;

// import React, { useEffect, useState } from "react";
// import fileService from "../services/fileService";

// const Documents = () => {
//   const [docs, setDocs] = useState([]);
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     fileService
//       .getFiles(0, 50)
//       .then((res) => setDocs(res.data.content))
//       .catch(console.error);
//   }, []);

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
//     } catch {
//       alert("Preview failed");
//     }
//   };

//   const closePreview = () => {
//     if (preview?.url) URL.revokeObjectURL(preview.url);
//     setPreview(null);
//   };

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
//         Documents
//       </h1>

//       <p className="text-sm text-slate-600 dark:text-slate-300">
//         All study materials, notes and guides shared by your trainers.
//       </p>

//       <div className="mt-4 space-y-2">
//         {docs.map((d) => (
//           <div
//             key={d.id}
//             className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
//           >
//             <div>
//               <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
//                 {d.originalName}
//               </p>
//               <p className="text-xs text-slate-500 dark:text-slate-400">
//                 {d.contentType} · {Math.round(d.size / 1024)} KB
//               </p>
//             </div>

//             <div className="flex gap-2">
//               {/* PREVIEW */}
//               <button
//                 onClick={() => openPreview(d)}
//                 className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
//               >
//                 Preview
//               </button>

//               {/* DOWNLOAD */}
//               <a
//                 href={fileService.downloadFile(d.storedName)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500"
//               >
//                 Download
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* PREVIEW MODAL */}
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
//               <iframe src={preview.url} className="w-full h-full rounded-lg" />
//             )}

//             {preview.type.startsWith("image") && (
//               <img
//                 src={preview.url}
//                 alt="Preview"
//                 className="max-h-full mx-auto rounded-lg"
//               />
//             )}

//             {!preview.type.includes("pdf") &&
//               !preview.type.startsWith("image") && (
//                 <p className="text-center text-slate-500 mt-10">
//                   Preview not supported for this file type.
//                 </p>
//               )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Documents;

import React, { useEffect, useState } from "react";
import fileService from "../services/fileService";

const Documents = () => {
  const [docs, setDocs] = useState([]);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fileService
      .getFiles(0, 50)
      .then((res) => setDocs(res.data.content))
      .catch(console.error);
  }, []);

  // ================= PREVIEW =================
  const openPreview = async (file) => {
    try {
      const res = await fileService.downloadFileBlob(file.storedName);
      const blob = new Blob([res.data], { type: file.contentType });
      const url = URL.createObjectURL(blob);

      setPreview({
        url,
        type: file.contentType,
        name: file.originalName,
      });
    } catch (err) {
      console.error("Preview failed", err);
      alert("Preview failed");
    }
  };

  const closePreview = () => {
    if (preview?.url) URL.revokeObjectURL(preview.url);
    setPreview(null);
  };

  // ================= DOWNLOAD (FIXED) =================
  const downloadFile = async (file) => {
    try {
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
    } catch (err) {
      console.error("Download failed", err);
      alert("Download failed");
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
        Documents
      </h1>

      <p className="text-sm text-slate-600 dark:text-slate-300">
        All study materials, notes and guides shared by your trainers.
      </p>

      <div className="mt-4 space-y-2">
        {docs.map((d) => (
          <div
            key={d.id}
            className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
          >
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                {d.originalName}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {d.contentType} · {Math.round(d.size / 1024)} KB
              </p>
            </div>

            <div className="flex gap-2">
              {/* PREVIEW */}
              <button
                onClick={() => openPreview(d)}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Preview
              </button>

              {/* DOWNLOAD */}
              <button
                onClick={() => downloadFile(d)}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500"
              >
                Download
              </button>
            </div>
          </div>
        ))}

        {docs.length === 0 && (
          <p className="text-sm text-slate-500">No documents available yet.</p>
        )}
      </div>

      {/* ================= PREVIEW MODAL ================= */}
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
              <iframe
                src={preview.url}
                className="w-full h-full rounded-lg"
                title="PDF Preview"
              />
            )}

            {preview.type.startsWith("image") && (
              <img
                src={preview.url}
                alt="Preview"
                className="max-h-full mx-auto rounded-lg"
              />
            )}

            {!preview.type.includes("pdf") &&
              !preview.type.startsWith("image") && (
                <p className="text-center text-slate-500 mt-10">
                  Preview not supported for this file type.
                </p>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;
