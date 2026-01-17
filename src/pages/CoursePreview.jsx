// // import { useParams } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { FileText, PlayCircle } from "lucide-react";

// // const API = "http://localhost:9000";

// // export default function CoursePreview() {
// //   const { id } = useParams();
// //   const [course, setCourse] = useState(null);
// //   const [modules, setModules] = useState([]);

// //   useEffect(() => {
// //     axios.get(`${API}/api/courses/${id}`).then((res) => {
// //       setCourse(res.data);
// //     });

// //     axios.get(`${API}/api/content/course/${id}`).then((res) => {
// //       setModules(res.data);
// //     });
// //   }, [id]);

// //   if (!course) return <div className="p-10 text-white">Loading...</div>;

// //   return (
// //     <div className="min-h-screen bg-black text-white p-10">
// //       <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
// //       <p className="text-gray-400 mb-6">{course.description}</p>

// //       <h2 className="text-2xl mb-4">Course Content</h2>

// //       <div className="space-y-4">
// //         {modules.map((m) => (
// //           <div
// //             key={m.id}
// //             className="bg-gray-800 p-4 rounded-lg flex items-center gap-4"
// //           >
// //             {m.contentType === "VIDEO" ? (
// //               <PlayCircle className="text-indigo-400" />
// //             ) : (
// //               <FileText className="text-green-400" />
// //             )}

// //             <a
// //               href={`${API}${m.url}`}
// //               target="_blank"
// //               className="hover:underline"
// //             >
// //               {m.title}
// //             </a>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const API = "http://localhost:9000";

// const authHeader = () => ({
//   Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
// });

// const CoursePreview = () => {
//   const { id } = useParams();

//   const [course, setCourse] = useState(null);
//   const [contents, setContents] = useState([]);

//   useEffect(() => {
//     load();
//   }, []);

//   const load = async () => {
//     try {
//       const courseRes = await axios.get(`${API}/api/courses/${id}`, {
//         headers: authHeader(),
//       });

//       const contentRes = await axios.get(`${API}/api/content/course/${id}`, {
//         headers: authHeader(),
//       });

//       setCourse(courseRes.data);
//       setContents(contentRes.data);
//     } catch (err) {
//       console.error("Preview load failed", err);
//       alert("You are not authorized to view this course");
//     }
//   };

//   if (!course) return <div className="text-white p-10">Loading...</div>;

//   return (
//     <div className="p-10 text-white bg-gray-900 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
//       <p className="text-gray-400 mb-6">{course.description}</p>

//       <h2 className="text-xl mb-3">Modules</h2>

//       {contents.map((c) => (
//         <div key={c.id} className="bg-gray-800 p-4 rounded mb-3">
//           <div className="font-semibold">{c.title}</div>
//           <div className="text-sm text-gray-400">{c.contentType}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CoursePreview;

// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const API = "http://localhost:9000";

// const authHeader = () => ({
//   Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
// });

// export default function CoursePreview() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [course, setCourse] = useState(null);
//   const [contents, setContents] = useState([]);

//   useEffect(() => {
//     load();
//   }, []);

//   const load = async () => {
//     const courseRes = await axios.get(`${API}/api/courses/${id}`, {
//       headers: authHeader(),
//     });

//     const contentRes = await axios.get(`${API}/api/content/course/${id}`, {
//       headers: authHeader(),
//     });

//     setCourse(courseRes.data);
//     setContents(contentRes.data);
//   };

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-br from-[#0b1120] to-[#020617] text-white">
//       {/* 🔙 BACK TO TRAINER */}
//       <button
//         onClick={() => navigate("/trainer/TrainerCourseManagement")}
//         className="mb-6 flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
//       >
//         ← Back to Course Management
//       </button>

//       <h1 className="text-3xl font-bold">{course?.title}</h1>
//       <p className="text-gray-400 mt-2">{course?.description}</p>

//       <h2 className="mt-8 text-xl font-semibold">Modules</h2>

//       <div className="mt-4 space-y-4">
//         {contents.map((c) => (
//           <div key={c.id} className="bg-slate-800 p-4 rounded">
//             <div className="font-semibold">{c.title}</div>
//             <div className="text-sm text-cyan-400">{c.contentType}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const API = "http://localhost:9000";

// const authHeader = () => ({
//   Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
// });

// export default function CoursePreview() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("lms_user"));
//   const role = user?.role?.toUpperCase(); // TRAINER or STUDENT

//   const [course, setCourse] = useState(null);
//   const [contents, setContents] = useState([]);

//   useEffect(() => {
//     load();
//   }, []);

//   const load = async () => {
//     try {
//       // Course info (public)
//       const courseRes = await axios.get(`${API}/api/courses/${id}`);
//       setCourse(courseRes.data);

//       // Content (public for preview & student)
//       const contentRes = await axios.get(
//         `${API}/api/content/student/course/${id}`
//       );

//       setContents(contentRes.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const playVideo = (fileName) => {
//     window.open(`${API}/api/video/play/${fileName}`, "_blank");
//   };

//   const viewPdf = (fileName) => {
//     window.open(`${API}/api/file/view/${fileName}`, "_blank");
//   };

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-br from-[#0b1120] to-[#020617] text-white">
//       {/* 🔙 BACK */}
//       <button
//         onClick={() =>
//           role === "TRAINER"
//             ? navigate("/trainer/TrainerCourseManagement")
//             : navigate("/student/courses")
//         }
//         className="mb-6 flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
//       >
//         ← Back
//       </button>

//       <h1 className="text-3xl font-bold">{course?.title}</h1>
//       <p className="text-gray-400 mt-2">{course?.description}</p>

//       <h2 className="mt-8 text-xl font-semibold">Modules</h2>

//       <div className="mt-4 space-y-4">
//         {contents.map((c) => (
//           <div
//             key={c.id}
//             className="bg-slate-800 p-4 rounded flex justify-between items-center"
//           >
//             <div>
//               <div className="font-semibold">{c.title}</div>
//               <div className="text-sm text-cyan-400">{c.contentType}</div>
//             </div>

//             {/* STUDENT: Play / View */}
//             {role === "STUDENT" && (
//               <>
//                 {c.contentType === "VIDEO" && (
//                   <button
//                     onClick={() => playVideo(c.fileName)}
//                     className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
//                   >
//                     ▶ Play
//                   </button>
//                 )}

//                 {c.contentType === "PDF" && (
//                   <button
//                     onClick={() => viewPdf(c.fileName)}
//                     className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
//                   >
//                     📄 View
//                   </button>
//                 )}
//               </>
//             )}

//             {/* TRAINER: Preview only */}
//             {role === "TRAINER" && (
//               <span className="text-sm text-gray-400">Preview Mode</span>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const API = "http://localhost:9000";

// const authHeader = () => ({
//   Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
// });

// export default function CoursePreview() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("lms_user"));
//   const role = user?.role?.toUpperCase(); // TRAINER or STUDENT

//   const [course, setCourse] = useState(null);
//   const [contents, setContents] = useState([]);

//   useEffect(() => {
//     load();
//   }, []);

//   const load = async () => {
//     try {
//       // Course info (public)
//       const courseRes = await axios.get(`${API}/api/courses/${id}`);
//       setCourse(courseRes.data);

//       // Content (public for preview & student)
//       const contentRes = await axios.get(
//         `${API}/api/content/student/course/${id}`
//       );

//       setContents(contentRes.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const playVideo = (fileName) => {
//     window.open(`${API}/api/video/play/${fileName}`, "_blank");
//   };

//   const viewPdf = (fileName) => {
//     window.open(`${API}/api/file/view/${fileName}`, "_blank");
//   };

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-br from-[#0b1120] to-[#020617] text-white">
//       {/* 🔙 BACK */}
//       <button
//         onClick={() =>
//           role === "TRAINER"
//             ? navigate("/trainer/TrainerCourseManagement")
//             : navigate("/student/courses")
//         }
//         className="mb-6 flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
//       >
//         ← Back
//       </button>

//       <h1 className="text-3xl font-bold">{course?.title}</h1>
//       <p className="text-gray-400 mt-2">{course?.description}</p>

//       <h2 className="mt-8 text-xl font-semibold">Modules</h2>

//       <div className="mt-4 space-y-4">
//         {contents.map((c) => (
//           <div
//             key={c.id}
//             className="bg-slate-800 p-4 rounded flex justify-between items-center"
//           >
//             <div>
//               <div className="font-semibold">{c.title}</div>
//               <div className="text-sm text-cyan-400">{c.contentType}</div>
//             </div>

//             {/* STUDENT: Play / View */}
//             {role === "STUDENT" && (
//               <>
//                 {c.contentType === "VIDEO" && (
//                   <button
//                     onClick={() => playVideo(c.url)}
//                     className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
//                   >
//                     ▶ Play
//                   </button>
//                 )}

//                 {c.contentType === "PDF" && (
//                   <button
//                     onClick={() => viewPdf(c.url)}
//                     className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
//                   >
//                     📄 View
//                   </button>
//                 )}
//               </>
//             )}

//             {/* TRAINER: Preview only */}
//             {role === "TRAINER" && (
//               <span className="text-sm text-gray-400">Preview Mode</span>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const API = "http://localhost:9000";

// export default function CoursePreview() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("lms_user"));
//   const role = user?.role?.toUpperCase();

//   const [course, setCourse] = useState(null);
//   const [contents, setContents] = useState([]);

//   const [active, setActive] = useState(null);
//   const [mediaUrl, setMediaUrl] = useState(null);
//   const [mediaType, setMediaType] = useState(null);

//   const authHeader = () => ({
//     Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//   });

//   useEffect(() => {
//     load();

//     return () => {
//       if (mediaUrl && mediaType === "PDF") {
//         URL.revokeObjectURL(mediaUrl);
//       }
//     };
//     // eslint-disable-next-line
//   }, []);

//   const load = async () => {
//     try {
//       const courseRes = await axios.get(`${API}/api/courses/${id}`);
//       setCourse(courseRes.data);

//       const contentUrl =
//         role === "TRAINER"
//           ? `${API}/api/content/course/${id}`
//           : `${API}/api/content/student/course/${id}`;

//       const res = await axios.get(contentUrl, {
//         headers: role === "TRAINER" ? authHeader() : {},
//       });

//       // 🔥 ONLY VALID CONTENT
//       const valid = res.data.filter((c) => c.url && c.url !== "undefined");

//       setContents(valid);
//     } catch (err) {
//       console.error("Load failed", err);
//     }
//   };

//   // ================= VIDEO (FINAL, SAFE) =================
//   const playVideo = (e, c) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!c?.url) {
//       alert("Video file missing");
//       return;
//     }

//     // ❌ DO NOT revoke for video (streaming)
//     const streamUrl = `${API}/api/video/play/${c.url}`;

//     setMediaUrl(streamUrl);
//     setMediaType("VIDEO");
//     setActive(c);
//   };

//   // ================= PDF =================
//   const viewPdf = async (e, c) => {
//     e.preventDefault();
//     e.stopPropagation();

//     try {
//       if (!c?.url) {
//         alert("File missing");
//         return;
//       }

//       if (mediaUrl && mediaType === "PDF") {
//         URL.revokeObjectURL(mediaUrl);
//       }

//       const res = await axios.get(`${API}/api/files/view/${c.url}`, {
//         responseType: "blob",
//         headers: authHeader(),
//       });

//       const blobUrl = URL.createObjectURL(res.data);
//       setMediaUrl(blobUrl);
//       setMediaType("PDF");
//       setActive(c);
//     } catch (e) {
//       console.error("PDF failed", e);
//       alert("PDF cannot be opened");
//     }
//   };

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-br from-[#0b1120] to-[#020617] text-white">
//       <button
//         type="button"
//         onClick={() =>
//           role === "TRAINER"
//             ? navigate("/trainer/TrainerCourseManagement")
//             : navigate("/student/courses")
//         }
//         className="mb-4 text-cyan-400"
//       >
//         ← Back
//       </button>

//       <h1 className="text-3xl font-bold">{course?.title}</h1>

//       <div className="grid grid-cols-3 gap-6 mt-8">
//         {/* LEFT */}
//         <div className="space-y-3">
//           <h2 className="text-xl">Modules</h2>

//           {contents.map((c) => (
//             <div
//               key={c.id}
//               className={`p-4 rounded ${
//                 active?.id === c.id ? "bg-indigo-600" : "bg-slate-800"
//               }`}
//             >
//               <p className="font-semibold">{c.title}</p>
//               <p className="text-xs text-cyan-400">{c.contentType}</p>

//               {role === "STUDENT" && c.contentType === "VIDEO" && (
//                 <button
//                   type="button"
//                   onClick={(e) => playVideo(e, c)}
//                   className="mt-2 bg-blue-600 px-3 py-1 rounded"
//                 >
//                   ▶ Play
//                 </button>
//               )}

//               {role === "STUDENT" && c.contentType === "PDF" && (
//                 <button
//                   type="button"
//                   onClick={(e) => viewPdf(e, c)}
//                   className="mt-2 bg-green-600 px-3 py-1 rounded"
//                 >
//                   📄 View
//                 </button>
//               )}

//               {role === "TRAINER" && (
//                 <p className="text-xs text-gray-400 mt-2">Preview mode</p>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* RIGHT */}
//         <div className="col-span-2 bg-slate-900 rounded-xl p-6">
//           {!mediaUrl && (
//             <p className="text-gray-400 text-center mt-20">
//               Select a module to view
//             </p>
//           )}

//           {mediaType === "VIDEO" && mediaUrl && (
//             <video
//               src={mediaUrl}
//               controls
//               autoPlay
//               controlsList="nodownload"
//               disablePictureInPicture
//               className="w-full rounded-xl"
//             />
//           )}

//           {mediaType === "PDF" && mediaUrl && (
//             <iframe
//               src={mediaUrl}
//               className="w-full h-[600px] rounded-xl"
//               title="PDF"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API = "http://localhost:9000";

export default function CoursePreview() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("lms_user"));
  const role = user?.role?.toUpperCase();

  const [course, setCourse] = useState(null);
  const [contents, setContents] = useState([]);

  const [active, setActive] = useState(null);
  const [mediaUrl, setMediaUrl] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const authHeader = () => ({
    Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
  });

  useEffect(() => {
    load();

    return () => {
      if (mediaUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(mediaUrl);
      }
    };
    // eslint-disable-next-line
  }, []);

  const load = async () => {
    try {
      const courseRes = await axios.get(`${API}/api/courses/${id}`, {
        headers: authHeader(),
      });
      setCourse(courseRes.data);

      const contentUrl =
        role === "TRAINER"
          ? `${API}/api/content/course/${id}`
          : `${API}/api/content/student/course/${id}`;

      const res = await axios.get(contentUrl, {
        headers: authHeader(),
      });

      // ✅ FILTER INVALID ROWS
      const valid = res.data.filter(
        (c) => c.url && c.url !== "undefined" && c.url.trim() !== ""
      );

      setContents(valid);
    } catch (err) {
      console.error("Load failed", err);
    }
  };

  // ================= VIDEO (JWT SAFE) =================
  const playVideo = async (e, c) => {
    e.preventDefault();
    e.stopPropagation();

    if (!c?.url) {
      alert("Video file missing");
      return;
    }

    try {
      // cleanup previous blob
      if (mediaUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(mediaUrl);
      }

      const res = await axios.get(`${API}/api/video/play/${c.url}`, {
        responseType: "blob",
        headers: authHeader(), // 🔐 THIS FIXES STUDENT ISSUE
      });

      const blobUrl = URL.createObjectURL(res.data);
      setMediaUrl(blobUrl);
      setMediaType("VIDEO");
      setActive(c);
    } catch (err) {
      console.error("Video failed", err);
      alert("Video cannot be loaded");
    }
  };

  // ================= PDF =================
  const viewPdf = async (e, c) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (!c?.url) {
        alert("File missing");
        return;
      }

      if (mediaUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(mediaUrl);
      }

      const res = await axios.get(`${API}/api/files/view/${c.url}`, {
        responseType: "blob",
        headers: authHeader(),
      });

      const blobUrl = URL.createObjectURL(res.data);
      setMediaUrl(blobUrl);
      setMediaType("PDF");
      setActive(c);
    } catch (e) {
      console.error("PDF failed", e);
      alert("PDF cannot be opened");
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-[#0b1120] to-[#020617] text-white">
      <button
        type="button"
        onClick={() =>
          role === "TRAINER"
            ? navigate("/trainer/TrainerCourseManagement")
            : navigate("/student/courses")
        }
        className="mb-4 text-cyan-400"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold">{course?.title}</h1>

      <div className="grid grid-cols-3 gap-6 mt-8">
        {/* LEFT */}
        <div className="space-y-3">
          <h2 className="text-xl">Modules</h2>

          {contents.map((c) => (
            <div
              key={c.id}
              className={`p-4 rounded ${
                active?.id === c.id ? "bg-indigo-600" : "bg-slate-800"
              }`}
            >
              <p className="font-semibold">{c.title}</p>
              <p className="text-xs text-cyan-400">{c.contentType}</p>

              {role === "STUDENT" && c.contentType === "VIDEO" && (
                <button
                  type="button"
                  onClick={(e) => playVideo(e, c)}
                  className="mt-2 bg-blue-600 px-3 py-1 rounded"
                >
                  ▶ Play
                </button>
              )}

              {role === "STUDENT" && c.contentType === "PDF" && (
                <button
                  type="button"
                  onClick={(e) => viewPdf(e, c)}
                  className="mt-2 bg-green-600 px-3 py-1 rounded"
                >
                  📄 View
                </button>
              )}

              {role === "TRAINER" && (
                <p className="text-xs text-gray-400 mt-2">Preview mode</p>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="col-span-2 bg-slate-900 rounded-xl p-6">
          {!mediaUrl && (
            <p className="text-gray-400 text-center mt-20">
              Select a module to view
            </p>
          )}

          {mediaType === "VIDEO" && mediaUrl && (
            <video
              src={mediaUrl}
              controls
              autoPlay
              controlsList="nodownload"
              disablePictureInPicture
              className="w-full rounded-xl"
            />
          )}

          {mediaType === "PDF" && mediaUrl && (
            <iframe
              src={mediaUrl}
              className="w-full h-[600px] rounded-xl"
              title="PDF"
            />
          )}
        </div>
      </div>
    </div>
  );
}
