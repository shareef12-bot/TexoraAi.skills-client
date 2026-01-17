// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const API = "http://localhost:9000";

// const authHeader = () => ({
//   Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
// });

// export default function StudentCourseView() {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [contents, setContents] = useState([]);

//   useEffect(() => {
//     load();
//   }, []);

//   const load = async () => {
//     const c = await axios.get(`${API}/api/courses/${id}`, {
//       headers: authHeader(),
//     });
//     const con = await axios.get(`${API}/api/content/course/${id}`, {
//       headers: authHeader(),
//     });

//     setCourse(c.data);
//     setContents(con.data);
//   };

//   return (
//     <div className="p-8 min-h-screen bg-slate-950 text-white">
//       <h1 className="text-3xl font-bold">{course?.title}</h1>
//       <p className="text-slate-400 mt-2">{course?.description}</p>

//       <h2 className="mt-8 text-xl font-semibold">Course Content</h2>

//       <div className="mt-4 space-y-4">
//         {contents.map((c) => (
//           <div
//             key={c.id}
//             className="bg-slate-800 p-4 rounded-lg flex justify-between"
//           >
//             <div>
//               <div className="font-semibold">{c.title}</div>
//               <div className="text-sm text-cyan-400">{c.contentType}</div>
//             </div>

//             {c.contentType === "VIDEO" && (
//               <a
//                 href={`http://localhost:9000/api/video/play/${c.fileName}`}
//                 target="_blank"
//                 className="text-blue-400 hover:underline"
//               >
//                 Play
//               </a>
//             )}

//             {c.contentType === "PDF" && (
//               <a
//                 href={`http://localhost:9000/api/files/${c.fileName}`}
//                 target="_blank"
//                 className="text-green-400 hover:underline"
//               >
//                 Open
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const API = "http://localhost:9000";

// const authHeader = () => ({
//   Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
// });

// export default function StudentCourseView() {
//   const { id } = useParams();

//   const [course, setCourse] = useState(null);
//   const [contents, setContents] = useState([]);

//   const [active, setActive] = useState(null);
//   const [mediaUrl, setMediaUrl] = useState(null);
//   const [mediaType, setMediaType] = useState(null);

//   useEffect(() => {
//     load();

//     return () => {
//       if (mediaType === "PDF" && mediaUrl) {
//         URL.revokeObjectURL(mediaUrl);
//       }
//     };
//   }, []);

//   const load = async () => {
//     const c = await axios.get(`${API}/api/courses/${id}`, {
//       headers: authHeader(),
//     });

//     const con = await axios.get(`${API}/api/content/student/course/${id}`, {
//       headers: authHeader(),
//     });

//     // 🔒 safety filter
//     const valid = con.data.filter((c) => c.url && c.url !== "undefined");

//     setCourse(c.data);
//     setContents(valid);
//   };

//   // ================= VIDEO =================
//   const playVideo = (c) => {
//     if (!c?.url) {
//       alert("Video missing");
//       return;
//     }

//     const streamUrl = `${API}/api/video/play/${encodeURIComponent(c.url)}`;

//     setMediaUrl(streamUrl);
//     setMediaType("VIDEO");
//     setActive(c);
//   };

//   // ================= PDF =================
//   const openPdf = async (c) => {
//     if (!c?.url) {
//       alert("File missing");
//       return;
//     }

//     if (mediaType === "PDF" && mediaUrl) {
//       URL.revokeObjectURL(mediaUrl);
//     }

//     const res = await axios.get(
//       `${API}/api/files/view/${encodeURIComponent(c.url)}`,
//       {
//         responseType: "blob",
//         headers: authHeader(),
//       }
//     );

//     const blobUrl = URL.createObjectURL(res.data);

//     setMediaUrl(blobUrl);
//     setMediaType("PDF");
//     setActive(c);
//   };

//   return (
//     <div className="p-8 min-h-screen bg-slate-950 text-white">
//       <h1 className="text-3xl font-bold">{course?.title}</h1>
//       <p className="text-slate-400 mt-2">{course?.description}</p>

//       <div className="grid grid-cols-3 gap-6 mt-8">
//         {/* LEFT */}
//         <div className="space-y-3">
//           <h2 className="text-xl font-semibold">Course Content</h2>

//           {contents.map((c) => (
//             <div
//               key={c.id}
//               className={`p-4 rounded-lg ${
//                 active?.id === c.id ? "bg-indigo-600" : "bg-slate-800"
//               }`}
//             >
//               <div className="font-semibold">{c.title}</div>
//               <div className="text-sm text-cyan-400">{c.contentType}</div>

//               {c.contentType === "VIDEO" && (
//                 <button
//                   onClick={() => playVideo(c)}
//                   className="mt-2 bg-blue-600 px-3 py-1 rounded"
//                 >
//                   ▶ Play
//                 </button>
//               )}

//               {c.contentType === "PDF" && (
//                 <button
//                   onClick={() => openPdf(c)}
//                   className="mt-2 bg-green-600 px-3 py-1 rounded"
//                 >
//                   📄 View
//                 </button>
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

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:9000";

const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
});

export default function StudentCourseView() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [contents, setContents] = useState([]);

  const [active, setActive] = useState(null);
  const [mediaUrl, setMediaUrl] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  useEffect(() => {
    load();

    return () => {
      if (mediaType === "PDF" && mediaUrl) {
        URL.revokeObjectURL(mediaUrl);
      }
    };
  }, []);

  const load = async () => {
    const c = await axios.get(`${API}/api/courses/${id}`, {
      headers: authHeader(),
    });

    const con = await axios.get(`${API}/api/content/student/course/${id}`, {
      headers: authHeader(),
    });

    // safety filter
    const valid = con.data.filter((c) => c.url && c.url !== "undefined");

    setCourse(c.data);
    setContents(valid);
  };

  // ================= VIDEO (UNCHANGED) =================
  const playVideo = (c) => {
    if (!c?.url) {
      alert("Video missing");
      return;
    }

    const streamUrl = `${API}/api/video/play/${encodeURIComponent(c.url)}`;

    setMediaUrl(streamUrl);
    setMediaType("VIDEO");
    setActive(c);
  };

  // ================= PDF (FIXED) =================
  const openPdf = async (c) => {
    if (!c?.url) {
      alert("File missing");
      return;
    }

    if (mediaType === "PDF" && mediaUrl) {
      URL.revokeObjectURL(mediaUrl);
    }

    const res = await axios.get(
      `${API}/api/files/download/${encodeURIComponent(c.url)}`,
      {
        responseType: "blob",
        headers: authHeader(),
      }
    );

    const blobUrl = URL.createObjectURL(
      new Blob([res.data], { type: "application/pdf" })
    );

    setMediaUrl(blobUrl);
    setMediaType("PDF");
    setActive(c);
  };

  return (
    <div className="p-8 min-h-screen bg-slate-950 text-white">
      <h1 className="text-3xl font-bold">{course?.title}</h1>
      <p className="text-slate-400 mt-2">{course?.description}</p>

      <div className="grid grid-cols-3 gap-6 mt-8">
        {/* LEFT */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Course Content</h2>

          {contents.map((c) => (
            <div
              key={c.id}
              className={`p-4 rounded-lg ${
                active?.id === c.id ? "bg-indigo-600" : "bg-slate-800"
              }`}
            >
              <div className="font-semibold">{c.title}</div>
              <div className="text-sm text-cyan-400">{c.contentType}</div>

              {c.contentType === "VIDEO" && (
                <button
                  onClick={() => playVideo(c)}
                  className="mt-2 bg-blue-600 px-3 py-1 rounded"
                >
                  ▶ Play
                </button>
              )}

              {c.contentType === "PDF" && (
                <button
                  onClick={() => openPdf(c)}
                  className="mt-2 bg-green-600 px-3 py-1 rounded"
                >
                  📄 View
                </button>
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
