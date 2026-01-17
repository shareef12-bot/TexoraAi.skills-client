// import React from "react";

// const UploadVideos = () => {
//   return (
//     <div className="space-y-6">
//       <div>
//         <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
//           Trainer
//         </p>
//         <h1 className="text-2xl font-semibold text-slate-100">Upload Videos</h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Upload lecture videos for your batches.
//         </p>
//       </div>

//       <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
//         <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center">
//           <p className="text-sm text-slate-300">
//             Drag and drop video files here, or
//           </p>
//           <button className="mt-3 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400">
//             Browse files
//           </button>
//         </div>

//         <div>
//           <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
//             Title
//           </label>
//           <input
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="React State Management - Lecture 1"
//           />
//         </div>

//         <div>
//           <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
//             Description
//           </label>
//           <textarea
//             rows={3}
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="Short description about this lecture."
//           />
//         </div>

//         <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">
//           Upload video
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UploadVideos;

// import React, { useState } from "react";
// import videoService from "../services/videoService"; // adjust path if needed
// import VideoList from "./VideoList";

// const UploadVideos = () => {
//   const [file, setFile] = useState(null);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setMessage("❌ Please select a video file");
//       return;
//     }

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await videoService.uploadVideo(file);

//       console.log("Uploaded video:", res.data);
//       setMessage("✅ Video uploaded successfully");

//       // reset
//       setFile(null);
//       setTitle("");
//       setDescription("");
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
//           Trainer
//         </p>
//         <h1 className="text-2xl font-semibold text-slate-100">Upload Videos</h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Upload lecture videos for your batches.
//         </p>
//       </div>

//       <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
//         {/* File Upload */}
//         <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center">
//           <p className="text-sm text-slate-300">
//             Drag and drop video files here, or
//           </p>

//           <label className="mt-3 inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 cursor-pointer">
//             Browse files
//             <input
//               type="file"
//               accept="video/*"
//               onChange={handleFileChange}
//               hidden
//             />
//           </label>

//           {file && (
//             <p className="mt-2 text-xs text-emerald-400">
//               Selected: {file.name}
//             </p>
//           )}
//         </div>

//         {/* Title */}
//         <div>
//           <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
//             Title
//           </label>
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="React State Management - Lecture 1"
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
//             Description
//           </label>
//           <textarea
//             rows={3}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="Short description about this lecture."
//           />
//         </div>

//         {/* Upload Button */}
//         <button
//           onClick={handleUpload}
//           disabled={loading}
//           className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 disabled:opacity-50"
//         >
//           {loading ? "Uploading..." : "Upload video"}
//         </button>

//         {/* Status Message */}
//         {message && <p className="text-sm text-slate-300 mt-2">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default UploadVideos;

// import React, { useState } from "react";
// import videoService from "../services/videoService";
// import VideoList from "./VideoList";

// const UploadVideos = () => {
//   const [file, setFile] = useState(null);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setMessage("❌ Please select a video file");
//       return;
//     }

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await videoService.uploadVideo(file);

//       console.log("Uploaded video:", res.data);
//       setMessage("✅ Video uploaded successfully");

//       setFile(null);
//       setTitle("");
//       setDescription("");
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
//           Trainer
//         </p>
//         <h1 className="text-2xl font-semibold text-slate-100">Upload Videos</h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Upload lecture videos for your batches.
//         </p>
//       </div>

//       <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
//         <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center">
//           <p className="text-sm text-slate-300">
//             Drag and drop video files here, or
//           </p>

//           <label className="mt-3 inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 cursor-pointer">
//             Browse files
//             <input
//               type="file"
//               accept="video/*"
//               onChange={handleFileChange}
//               hidden
//             />
//           </label>

//           {file && (
//             <p className="mt-2 text-xs text-emerald-400">
//               Selected: {file.name}
//             </p>
//           )}
//         </div>

//         <div>
//           <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
//             Title
//           </label>
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="React State Management - Lecture 1"
//           />
//         </div>

//         <div>
//           <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
//             Description
//           </label>
//           <textarea
//             rows={3}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="Short description about this lecture."
//           />
//         </div>

//         <button
//           onClick={handleUpload}
//           disabled={loading}
//           className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 disabled:opacity-50"
//         >
//           {loading ? "Uploading..." : "Upload video"}
//         </button>

//         {message && <p className="text-sm text-slate-300 mt-2">{message}</p>}
//       </div>

//       {/* ✅ ONLY ADDITION — VIEWING SECTION */}
//       <VideoList />
//     </div>
//   );
// };

// export default UploadVideos;

// import React, { useState } from "react";
// import videoService from "../services/videoService";
// import VideoList from "./VideoList";

// const UploadVideos = () => {
//   const [file, setFile] = useState(null);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // ✅ ADD THIS (logic only)
//   const [refreshKey, setRefreshKey] = useState(0);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setMessage("❌ Please select a video file");
//       return;
//     }

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await videoService.uploadVideo(file);
//       console.log("Uploaded video:", res.data);

//       setMessage("✅ Video uploaded successfully");

//       // ✅ TRIGGER VIDEO LIST REFRESH
//       setRefreshKey((prev) => prev + 1);

//       setFile(null);
//       setTitle("");
//       setDescription("");
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
//           Trainer
//         </p>
//         <h1 className="text-2xl font-semibold text-slate-100">Upload Videos</h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Upload lecture videos for your batches.
//         </p>
//       </div>

//       {/* ✅ UPLOAD CARD — UNCHANGED */}
//       <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
//         <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center">
//           <p className="text-sm text-slate-300">
//             Drag and drop video files here, or
//           </p>

//           <label className="mt-3 inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 cursor-pointer">
//             Browse files
//             <input
//               type="file"
//               accept="video/*"
//               onChange={handleFileChange}
//               hidden
//             />
//           </label>

//           {file && (
//             <p className="mt-2 text-xs text-emerald-400">
//               Selected: {file.name}
//             </p>
//           )}
//         </div>

//         <div>
//           <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
//             Title
//           </label>
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="React State Management - Lecture 1"
//           />
//         </div>

//         <div>
//           <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
//             Description
//           </label>
//           <textarea
//             rows={3}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="Short description about this lecture."
//           />
//         </div>

//         <button
//           onClick={handleUpload}
//           disabled={loading}
//           className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 disabled:opacity-50"
//         >
//           {loading ? "Uploading..." : "Upload video"}
//         </button>

//         {message && <p className="text-sm text-slate-300 mt-2">{message}</p>}
//       </div>

//       {/* ✅ VIDEO LIST — SAME UI, JUST REFRESHED */}
//       <VideoList refreshKey={refreshKey} />
//     </div>
//   );
// };

// export default UploadVideos;

import React, { useState } from "react";
import videoService from "../services/videoService";
import VideoList from "./VideoList";

const UploadVideos = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ KEY FIX
  const [refreshKey, setRefreshKey] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("❌ Please select a video file");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await videoService.uploadVideo(file);
      console.log("Uploaded video:", res.data);

      setMessage("✅ Video uploaded successfully");

      // ✅ TRIGGER LIST REFRESH (NO DUPLICATE)
      setRefreshKey((prev) => prev + 1);

      setFile(null);
      setTitle("");
      setDescription("");
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
        <h1 className="text-2xl font-semibold text-slate-100">Upload Videos</h1>
        <p className="mt-1 text-sm text-slate-400">
          Upload lecture videos for your batches.
        </p>
      </div>

      {/* ✅ UPLOAD UI — UNCHANGED */}
      <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
        <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center">
          <p className="text-sm text-slate-300">
            Drag and drop video files here, or
          </p>

          <label className="mt-3 inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 cursor-pointer">
            Browse files
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              hidden
            />
          </label>

          {file && (
            <p className="mt-2 text-xs text-emerald-400">
              Selected: {file.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            placeholder="React State Management - Lecture 1"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
            Description
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            placeholder="Short description about this lecture."
          />
        </div>

        <button
          onClick={handleUpload}
          disabled={loading}
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload video"}
        </button>

        {message && <p className="text-sm text-slate-300 mt-2">{message}</p>}
      </div>

      {/* ✅ VIDEO LIST — SAME PAGE, NO DUPLICATES */}
      <VideoList refreshKey={refreshKey} />
    </div>
  );
};

export default UploadVideos;
