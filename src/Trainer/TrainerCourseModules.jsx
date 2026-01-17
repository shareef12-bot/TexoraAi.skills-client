// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Plus, Trash2, FileText, Video } from "lucide-react";

// const API = "http://localhost:9000";

// const authHeader = () => ({
//   Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
// });

// export default function TrainerCourseModules() {
//   const { courseId } = useParams();
//   const [modules, setModules] = useState([]);
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState(null);
//   const [type, setType] = useState("VIDEO");

//   useEffect(() => {
//     loadModules();
//   }, [courseId]);

//   const loadModules = async () => {
//     const res = await axios.get(`${API}/api/content/course/${courseId}`, {
//       headers: authHeader(),
//     });
//     setModules(res.data);
//   };

//   // ================= FILE UPLOAD =================
//   const uploadAsset = async () => {
//     if (!file || !title) return alert("Title & file required");

//     const formData = new FormData();
//     formData.append("file", file);

//     const uploadUrl =
//       type === "VIDEO" ? `${API}/api/video/upload` : `${API}/api/files/upload`;

//     const res = await axios.post(uploadUrl, formData, {
//       headers: {
//         ...authHeader(),
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     const fileUrl =
//       res.data.url ||
//       res.data.fileUrl ||
//       res.data.path ||
//       res.data.storedFileName || // 🔥 THIS is what video service returns
//       res.data.fileName; // 🔥 this is what file service returns

//     await axios.post(
//       `${API}/api/content`,
//       {
//         courseId,
//         title,
//         contentType: type,
//         url: fileUrl,
//         orderIndex: modules.length + 1,
//       },
//       { headers: authHeader() }
//     );

//     setTitle("");
//     setFile(null);
//     loadModules();
//   };

//   // ================= DELETE =================
//   const deleteModule = async (id) => {
//     if (!window.confirm("Delete this module?")) return;

//     await axios.delete(`${API}/api/content/${id}`, {
//       headers: authHeader(),
//     });

//     loadModules();
//   };

//   return (
//     <div className="p-8 min-h-screen bg-gray-900 text-white">
//       <h1 className="text-3xl font-bold mb-6">Course Modules</h1>

//       {/* ADD MODULE */}
//       <div className="bg-gray-800 p-6 rounded-xl mb-8">
//         <h2 className="text-xl mb-4">Add New Module</h2>

//         <input
//           className="w-full p-3 mb-3 bg-gray-700 rounded"
//           placeholder="Lesson title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <select
//           className="w-full p-3 mb-3 bg-gray-700 rounded"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//         >
//           <option value="VIDEO">Video</option>
//           <option value="PDF">PDF</option>
//         </select>

//         <input
//           type="file"
//           className="w-full mb-4"
//           onChange={(e) => setFile(e.target.files[0])}
//         />

//         <button
//           onClick={uploadAsset}
//           className="bg-indigo-600 px-6 py-3 rounded-xl flex gap-2"
//         >
//           <Plus size={18} /> Add Module
//         </button>
//       </div>

//       {/* MODULE LIST */}
//       <div className="space-y-4">
//         {modules.map((m) => (
//           <div
//             key={m.id}
//             className="bg-gray-800 p-4 rounded-xl flex justify-between items-center"
//           >
//             <div className="flex gap-3 items-center">
//               {m.contentType === "VIDEO" ? <Video /> : <FileText />}
//               <div>
//                 <p className="font-semibold">{m.title}</p>
//                 <p className="text-sm text-gray-400">{m.contentType}</p>
//               </div>
//             </div>

//             <button
//               onClick={() => deleteModule(m.id)}
//               className="bg-red-600 px-4 py-2 rounded-lg"
//             >
//               <Trash2 size={16} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Plus, Trash2, FileText, Video } from "lucide-react";

// const API = "http://localhost:9000";

// const authHeader = () => ({
//   Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
// });

// export default function TrainerCourseModules() {
//   const { courseId } = useParams();
//   const [modules, setModules] = useState([]);
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState(null);
//   const [type, setType] = useState("VIDEO");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     loadModules();
//   }, [courseId]);

//   const loadModules = async () => {
//     const res = await axios.get(`${API}/api/content/course/${courseId}`, {
//       headers: authHeader(),
//     });
//     setModules(res.data);
//   };

//   // ================= UPLOAD (FIXED) =================
//   const uploadAsset = async () => {
//     if (!file || !title) {
//       alert("Title & file required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("file", file);

//       // 1️⃣ Upload file to correct microservice
//       const uploadUrl =
//         type === "VIDEO"
//           ? `${API}/api/video/upload`
//           : `${API}/api/files/upload`;

//       const uploadRes = await axios.post(uploadUrl, formData, {
//         headers: {
//           ...authHeader(),
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       // 2️⃣ Extract filename correctly
//       let fileName;

//       if (type === "VIDEO") {
//         // Video service returns storedFileName
//         fileName = uploadRes.data.storedFileName;
//       } else {
//         // File service returns storedName
//         fileName = uploadRes.data.storedName;
//       }

//       if (!fileName) {
//         console.error("Upload response:", uploadRes.data);
//         alert("Upload failed – filename not returned");
//         return;
//       }

//       // 3️⃣ Save module in Content Service
//       await axios.post(
//         `${API}/api/content`,
//         {
//           courseId,
//           title,
//           contentType: type,
//           url: fileName, // 🔥 CRITICAL
//           orderIndex: modules.length + 1,
//         },
//         { headers: authHeader() }
//       );

//       setTitle("");
//       setFile(null);
//       loadModules();
//     } catch (err) {
//       console.error("Upload failed", err);
//       alert("Upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================= DELETE =================
//   const deleteModule = async (id) => {
//     if (!window.confirm("Delete this module?")) return;

//     await axios.delete(`${API}/api/content/${id}`, {
//       headers: authHeader(),
//     });

//     loadModules();
//   };

//   return (
//     <div className="p-8 min-h-screen bg-gray-900 text-white">
//       <h1 className="text-3xl font-bold mb-6">Course Modules</h1>

//       {/* ADD MODULE */}
//       <div className="bg-gray-800 p-6 rounded-xl mb-8">
//         <h2 className="text-xl mb-4">Add New Module</h2>

//         <input
//           className="w-full p-3 mb-3 bg-gray-700 rounded"
//           placeholder="Lesson title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <select
//           className="w-full p-3 mb-3 bg-gray-700 rounded"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//         >
//           <option value="VIDEO">Video</option>
//           <option value="PDF">PDF</option>
//         </select>

//         <input
//           type="file"
//           className="w-full mb-4"
//           onChange={(e) => setFile(e.target.files[0])}
//         />

//         <button
//           onClick={uploadAsset}
//           disabled={loading}
//           className="bg-indigo-600 px-6 py-3 rounded-xl flex gap-2"
//         >
//           <Plus size={18} />
//           {loading ? "Uploading..." : "Add Module"}
//         </button>
//       </div>

//       {/* MODULE LIST */}
//       <div className="space-y-4">
//         {modules.map((m) => (
//           <div
//             key={m.id}
//             className="bg-gray-800 p-4 rounded-xl flex justify-between items-center"
//           >
//             <div className="flex gap-3 items-center">
//               {m.contentType === "VIDEO" ? <Video /> : <FileText />}
//               <div>
//                 <p className="font-semibold">{m.title}</p>
//                 <p className="text-sm text-gray-400">{m.contentType}</p>
//                 <p className="text-xs text-gray-500">{m.url}</p>
//               </div>
//             </div>

//             <button
//               onClick={() => deleteModule(m.id)}
//               className="bg-red-600 px-4 py-2 rounded-lg"
//             >
//               <Trash2 size={16} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Plus, Trash2, FileText, Video } from "lucide-react";

// const API = "http://localhost:9000";

// const authHeader = () => ({
//   Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
// });

// export default function TrainerCourseModules() {
//   const { courseId } = useParams();

//   const [modules, setModules] = useState([]);
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState(null);
//   const [type, setType] = useState("VIDEO");
//   const [loading, setLoading] = useState(false);

//   // 🔥 video library
//   const [videoLibrary, setVideoLibrary] = useState([]);
//   const [useLibrary, setUseLibrary] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     loadModules();
//     loadVideoLibrary();
//   }, [courseId]);

//   const loadModules = async () => {
//     const res = await axios.get(`${API}/api/content/course/${courseId}`, {
//       headers: authHeader(),
//     });
//     setModules(res.data);
//   };

//   const loadVideoLibrary = async () => {
//     const res = await axios.get(`${API}/api/video`, {
//       headers: authHeader(),
//     });
//     setVideoLibrary(res.data);
//   };

//   // ================= ADD MODULE =================
//   const uploadAsset = async () => {
//     if (!title) {
//       alert("Title required");
//       return;
//     }

//     try {
//       setLoading(true);
//       let fileName = null;

//       // ================= VIDEO =================
//       if (type === "VIDEO") {
//         // ▶ OPTION 1: SELECT FROM LIBRARY
//         if (useLibrary) {
//           if (!selectedVideo || !selectedVideo.storedFileName) {
//             alert("Please select a valid video");
//             return;
//           }
//           fileName = selectedVideo.storedFileName; // ✅ FIX
//         }

//         // ▶ OPTION 2: UPLOAD NEW VIDEO
//         else {
//           if (!file) {
//             alert("Video file required");
//             return;
//           }

//           const formData = new FormData();
//           formData.append("file", file);

//           const uploadRes = await axios.post(
//             `${API}/api/video/upload`,
//             formData,
//             { headers: authHeader() }
//           );

//           if (!uploadRes.data?.storedFileName) {
//             alert("Video upload failed");
//             return;
//           }

//           fileName = uploadRes.data.storedFileName;
//         }
//       }

//       // ================= PDF =================
//       if (type === "PDF") {
//         if (!file) {
//           alert("PDF file required");
//           return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);

//         const uploadRes = await axios.post(
//           `${API}/api/files/upload`,
//           formData,
//           { headers: authHeader() }
//         );

//         if (!uploadRes.data?.storedFileName) {
//           alert("PDF upload failed");
//           return;
//         }

//         fileName = uploadRes.data.storedFileName;
//       }

//       // 🔒 FINAL CHECK
//       if (!fileName) {
//         alert("Internal error: filename missing");
//         return;
//       }

//       // ================= SAVE CONTENT =================
//       await axios.post(
//         `${API}/api/content`,
//         {
//           courseId,
//           title,
//           contentType: type,
//           url: fileName, // 🔥 ONLY storedFileName
//           orderIndex: modules.length + 1,
//         },
//         { headers: authHeader() }
//       );

//       // RESET
//       setTitle("");
//       setFile(null);
//       setSelectedVideo(null);
//       setUseLibrary(false);

//       loadModules();
//     } catch (err) {
//       console.error(err);
//       alert("Upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteModule = async (id) => {
//     if (!window.confirm("Delete this module?")) return;

//     await axios.delete(`${API}/api/content/${id}`, {
//       headers: authHeader(),
//     });

//     loadModules();
//   };

//   return (
//     <div className="p-8 min-h-screen bg-gray-900 text-white">
//       <h1 className="text-3xl font-bold mb-6">Course Modules</h1>

//       <div className="bg-gray-800 p-6 rounded-xl mb-8 space-y-4">
//         <input
//           className="w-full p-3 bg-gray-700 rounded"
//           placeholder="Lesson title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <select
//           className="w-full p-3 bg-gray-700 rounded"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//         >
//           <option value="VIDEO">Video</option>
//           <option value="PDF">PDF</option>
//         </select>

//         {type === "VIDEO" && (
//           <div className="flex gap-4">
//             <label>
//               <input
//                 type="radio"
//                 checked={!useLibrary}
//                 onChange={() => setUseLibrary(false)}
//               />{" "}
//               Upload New
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 checked={useLibrary}
//                 onChange={() => setUseLibrary(true)}
//               />{" "}
//               Select from Library
//             </label>
//           </div>
//         )}

//         {type === "VIDEO" && useLibrary && (
//           <select
//             className="w-full p-3 bg-gray-700 rounded"
//             onChange={(e) =>
//               setSelectedVideo(
//                 videoLibrary.find((v) => v.id === Number(e.target.value))
//               )
//             }
//           >
//             <option value="">-- Select Video --</option>
//             {videoLibrary.map((v) => (
//               <option key={v.id} value={v.id}>
//                 {v.originalFileName}
//               </option>
//             ))}
//           </select>
//         )}

//         {(!useLibrary || type === "PDF") && (
//           <input
//             type="file"
//             className="w-full"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         )}

//         <button
//           onClick={uploadAsset}
//           disabled={loading}
//           className="bg-indigo-600 px-6 py-3 rounded-xl flex gap-2"
//         >
//           <Plus size={18} />
//           {loading ? "Saving..." : "Add Module"}
//         </button>
//       </div>

//       <div className="space-y-4">
//         {modules.map((m) => (
//           <div
//             key={m.id}
//             className="bg-gray-800 p-4 rounded-xl flex justify-between items-center"
//           >
//             <div className="flex gap-3 items-center">
//               {m.contentType === "VIDEO" ? <Video /> : <FileText />}
//               <div>
//                 <p className="font-semibold">{m.title}</p>
//                 <p className="text-xs text-gray-400">{m.url}</p>
//               </div>
//             </div>

//             <button
//               onClick={() => deleteModule(m.id)}
//               className="bg-red-600 px-4 py-2 rounded-lg"
//             >
//               <Trash2 size={16} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Trash2, FileText, Video } from "lucide-react";

const API = "http://localhost:9000";

const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
});

export default function TrainerCourseModules() {
  const { courseId } = useParams();

  const [modules, setModules] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [type, setType] = useState("VIDEO");
  const [loading, setLoading] = useState(false);

  // 🔥 VIDEO LIBRARY (UNCHANGED)
  const [videoLibrary, setVideoLibrary] = useState([]);
  const [useLibrary, setUseLibrary] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🔥 PDF LIBRARY
  const [pdfLibrary, setPdfLibrary] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    loadModules();
    loadVideoLibrary();
    loadPdfLibrary();
  }, [courseId]);

  const loadModules = async () => {
    const res = await axios.get(`${API}/api/content/course/${courseId}`, {
      headers: authHeader(),
    });
    setModules(res.data);
  };

  const loadVideoLibrary = async () => {
    const res = await axios.get(`${API}/api/video`, {
      headers: authHeader(),
    });
    setVideoLibrary(res.data);
  };

  // ✅ FILE SERVICE RETURNS Page<FileResource>
  const loadPdfLibrary = async () => {
    const res = await axios.get(`${API}/api/files`, {
      headers: {
        ...authHeader(),
        "X-ROLE": JSON.parse(localStorage.getItem("lms_user"))?.role,
      },
    });

    setPdfLibrary(res.data?.content || []);
  };

  // ================= ADD MODULE =================
  const uploadAsset = async () => {
    if (!title) {
      alert("Title required");
      return;
    }

    try {
      setLoading(true);
      let fileName = null;

      // ================= VIDEO (UNCHANGED) =================
      if (type === "VIDEO") {
        if (useLibrary) {
          if (!selectedVideo?.storedFileName) {
            alert("Please select a valid video");
            return;
          }
          fileName = selectedVideo.storedFileName;
        } else {
          if (!file) {
            alert("Video file required");
            return;
          }

          const formData = new FormData();
          formData.append("file", file);

          const uploadRes = await axios.post(
            `${API}/api/video/upload`,
            formData,
            { headers: authHeader() }
          );

          if (!uploadRes.data?.storedFileName) {
            alert("Video upload failed");
            return;
          }

          fileName = uploadRes.data.storedFileName;
        }
      }

      // ================= PDF (FIXED) =================
      if (type === "PDF") {
        if (useLibrary) {
          if (!selectedPdf?.storedName) {
            alert("Please select a valid PDF");
            return;
          }
          fileName = selectedPdf.storedName;
        } else {
          if (!file) {
            alert("PDF file required");
            return;
          }

          const formData = new FormData();
          formData.append("file", file);

          const uploadRes = await axios.post(
            `${API}/api/files/upload`,
            formData,
            {
              headers: {
                ...authHeader(),
                "X-ROLE": JSON.parse(localStorage.getItem("lms_user"))?.role,
              },
            }
          );

          if (!uploadRes.data?.storedName) {
            alert("PDF upload failed");
            return;
          }

          fileName = uploadRes.data.storedName;
        }
      }

      if (!fileName) {
        alert("Internal error: filename missing");
        return;
      }

      // ================= SAVE CONTENT =================
      await axios.post(
        `${API}/api/content`,
        {
          courseId,
          title,
          contentType: type,
          url: fileName,
          orderIndex: modules.length + 1,
        },
        { headers: authHeader() }
      );

      // RESET
      setTitle("");
      setFile(null);
      setSelectedVideo(null);
      setSelectedPdf(null);
      setUseLibrary(false);

      loadModules();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const deleteModule = async (id) => {
    if (!window.confirm("Delete this module?")) return;

    await axios.delete(`${API}/api/content/${id}`, {
      headers: authHeader(),
    });

    loadModules();
  };

  return (
    <div className="p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Course Modules</h1>

      <div className="bg-gray-800 p-6 rounded-xl mb-8 space-y-4">
        <input
          className="w-full p-3 bg-gray-700 rounded"
          placeholder="Lesson title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="w-full p-3 bg-gray-700 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="VIDEO">Video</option>
          <option value="PDF">PDF</option>
        </select>

        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              checked={!useLibrary}
              onChange={() => setUseLibrary(false)}
            />{" "}
            Upload New
          </label>

          <label>
            <input
              type="radio"
              checked={useLibrary}
              onChange={() => setUseLibrary(true)}
            />{" "}
            Select from Library
          </label>
        </div>

        {type === "VIDEO" && useLibrary && (
          <select
            className="w-full p-3 bg-gray-700 rounded"
            onChange={(e) =>
              setSelectedVideo(
                videoLibrary.find((v) => v.id === Number(e.target.value))
              )
            }
          >
            <option value="">-- Select Video --</option>
            {videoLibrary.map((v) => (
              <option key={v.id} value={v.id}>
                {v.originalFileName}
              </option>
            ))}
          </select>
        )}

        {type === "PDF" && useLibrary && (
          <select
            className="w-full p-3 bg-gray-700 rounded"
            onChange={(e) =>
              setSelectedPdf(
                pdfLibrary.find((p) => p.id === Number(e.target.value))
              )
            }
          >
            <option value="">-- Select PDF --</option>
            {pdfLibrary.map((p) => (
              <option key={p.id} value={p.id}>
                {p.originalName}
              </option>
            ))}
          </select>
        )}

        {!useLibrary && (
          <input
            type="file"
            className="w-full"
            onChange={(e) => setFile(e.target.files[0])}
          />
        )}

        <button
          onClick={uploadAsset}
          disabled={loading}
          className="bg-indigo-600 px-6 py-3 rounded-xl flex gap-2"
        >
          <Plus size={18} />
          {loading ? "Saving..." : "Add Module"}
        </button>
      </div>

      <div className="space-y-4">
        {modules.map((m) => (
          <div
            key={m.id}
            className="bg-gray-800 p-4 rounded-xl flex justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              {m.contentType === "VIDEO" ? <Video /> : <FileText />}
              <div>
                <p className="font-semibold">{m.title}</p>
                <p className="text-xs text-gray-400">{m.url}</p>
              </div>
            </div>

            <button
              onClick={() => deleteModule(m.id)}
              className="bg-red-600 px-4 py-2 rounded-lg"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
