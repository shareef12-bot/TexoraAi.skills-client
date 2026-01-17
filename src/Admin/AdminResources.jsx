// // // import React from "react";
// // // import AdminVideoList from "./AdminVideoList";
// // // import AdminFileList from "./AdminFileList";

// // // const AdminResources = () => {
// // //   return (
// // //     <div className="space-y-10 p-6">
// // //       <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
// // //         Resources
// // //       </h1>

// // //       {/* 🎥 VIDEOS */}
// // //       <AdminVideoList />

// // //       {/* 📄 FILES */}
// // //       <AdminFileList />
// // //     </div>
// // //   );
// // // };

// // // export default AdminResources;

// // import React from "react";
// // import AdminVideoList from "./AdminVideoList";
// // import AdminFileList from "./AdminFileList";

// // const AdminResources = () => {
// //   return (
// //     <div className="space-y-8 p-6">
// //       <AdminVideoList />
// //       <AdminFileList />
// //     </div>
// //   );
// // };

// // export default AdminResources;

// import React, { useEffect, useState } from "react";
// import videoService from "../services/videoService";
// import fileService from "../services/fileService";

// const AdminResources = () => {
//   const [videos, setVideos] = useState([]);
//   const [files, setFiles] = useState([]);

//   useEffect(() => {
//     loadResources();
//   }, []);

//   const loadResources = async () => {
//     try {
//       const [videoRes, fileRes] = await Promise.all([
//         videoService.getAllVideos(),
//         fileService.getFiles(0, 100),
//       ]);

//       setVideos(videoRes.data || []);
//       setFiles(fileRes.data.content || []);
//     } catch (err) {
//       console.error("Failed to load resources", err);
//     }
//   };

//   return (
//     <div className="space-y-8">
//       {/* VIDEOS */}
//       <div>
//         <h2 className="text-xl font-semibold text-slate-100 mb-4">Videos</h2>

//         {videos.length === 0 && (
//           <p className="text-slate-400 text-sm">No videos uploaded</p>
//         )}

//         {videos.map((v) => (
//           <div
//             key={v.id}
//             className="rounded-xl bg-slate-900 border border-slate-700 p-4 mb-4"
//           >
//             <p className="text-slate-100 font-medium">{v.originalFileName}</p>
//             <video
//               controls
//               className="mt-3 w-full rounded-lg"
//               src={videoService.getVideoStreamUrl(v.storedFileName)}
//             />
//           </div>
//         ))}
//       </div>

//       {/* DOCUMENTS & IMAGES */}
//       <div>
//         <h2 className="text-xl font-semibold text-slate-100 mb-4">
//           Documents & Images
//         </h2>

//         {files.length === 0 && (
//           <p className="text-slate-400 text-sm">No files uploaded</p>
//         )}

//         {files.map((f) => (
//           <div
//             key={f.id}
//             className="rounded-xl bg-slate-900 border border-slate-700 p-4 mb-3"
//           >
//             <p className="text-slate-100 font-medium">{f.originalName}</p>
//             <p className="text-xs text-slate-400">
//               {f.contentType} · {Math.round(f.size / 1024)} KB
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminResources;

import React from "react";
import ResourceUploadAdmin from "./ResourceUploadAdmin";
import AdminVideoList from "./AdminVideoList";
import AdminFileList from "./AdminFileList";

const AdminResources = () => {
  return (
    <div className="space-y-10 p-6">
      {/* 🔼 UPLOAD SECTION (TOP) */}
      <ResourceUploadAdmin />

      {/* 🎥 VIDEOS */}
      <AdminVideoList />

      {/* 📄 DOCUMENTS & IMAGES */}
      <AdminFileList />
    </div>
  );
};

export default AdminResources;
