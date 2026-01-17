// import React, { useEffect, useState } from "react";
// import videoService from "../services/videoService";

// const VideoList = () => {
//   const [videos, setVideos] = useState([]);
//   const [videoUrls, setVideoUrls] = useState({});

//   useEffect(() => {
//     videoService
//       .getAllVideos()
//       .then((res) => setVideos(res.data))
//       .catch(console.error);
//   }, []);

//   const loadVideo = async (video) => {
//     if (videoUrls[video.id]) return; // already loaded

//     try {
//       const res = await videoService.getVideoBlob(video.storedFileName);

//       const blobUrl = URL.createObjectURL(res.data);

//       setVideoUrls((prev) => ({
//         ...prev,
//         [video.id]: blobUrl,
//       }));
//     } catch (err) {
//       console.error("Failed to load video", err);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-lg font-semibold text-slate-100">Uploaded Videos</h2>

//       {videos.map((video) => (
//         <div
//           key={video.id}
//           className="rounded-xl bg-slate-900 border border-slate-700 p-4"
//         >
//           <p className="text-slate-100 font-medium">{video.originalFileName}</p>

//           <p className="text-xs text-slate-400 mt-1">
//             Uploaded on {new Date(video.uploadedAt).toLocaleString()}
//           </p>

//           {!videoUrls[video.id] ? (
//             <button
//               onClick={() => loadVideo(video)}
//               className="mt-3 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400"
//             >
//               ▶ Load & Play
//             </button>
//           ) : (
//             <video
//               className="mt-3 w-full rounded-lg"
//               controls
//               src={videoUrls[video.id]}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoList;

// import React, { useEffect, useState } from "react";
// import videoService from "../services/videoService";

// const VideoList = () => {
//   const [videos, setVideos] = useState([]);
//   const [videoUrls, setVideoUrls] = useState({});

//   useEffect(() => {
//     videoService
//       .getAllVideos()
//       .then((res) => setVideos(res.data))
//       .catch(console.error);
//   }, []);

//   const loadVideo = async (video) => {
//     if (videoUrls[video.id]) return;

//     try {
//       const res = await videoService.getVideoBlob(video.storedFileName);

//       const blobUrl = URL.createObjectURL(res.data);

//       setVideoUrls((prev) => ({
//         ...prev,
//         [video.id]: blobUrl,
//       }));
//     } catch (err) {
//       console.error("Failed to load video", err);
//     }
//   };

//   // ✅ DELETE LOGIC (ONLY ADDITION)
//   const deleteVideo = async (videoId) => {
//     if (!window.confirm("Are you sure you want to delete this video?")) {
//       return;
//     }

//     try {
//       await videoService.deleteVideo(videoId);

//       // Remove from UI
//       setVideos((prev) => prev.filter((v) => v.id !== videoId));
//     } catch (err) {
//       console.error("Failed to delete video", err);
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-lg font-semibold text-slate-100">Uploaded Videos</h2>

//       {videos.map((video) => (
//         <div
//           key={video.id}
//           className="rounded-xl bg-slate-900 border border-slate-700 p-4"
//         >
//           <p className="text-slate-100 font-medium">{video.originalFileName}</p>

//           <p className="text-xs text-slate-400 mt-1">
//             Uploaded on {new Date(video.uploadedAt).toLocaleString()}
//           </p>

//           {!videoUrls[video.id] ? (
//             <button
//               onClick={() => loadVideo(video)}
//               className="mt-3 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400"
//             >
//               ▶ Load & Play
//             </button>
//           ) : (
//             <video
//               className="mt-3 w-full rounded-lg"
//               controls
//               src={videoUrls[video.id]}
//             />
//           )}

//           {/* ✅ DELETE BUTTON (NO UI CHANGE STYLE) */}
//           <button
//             onClick={() => deleteVideo(video.id)}
//             className="mt-3 ml-3 px-4 py-2 text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-500"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoList;

// import React, { useEffect, useState } from "react";
// import videoService from "../services/videoService";

// const VideoList = () => {
//   const [videos, setVideos] = useState([]);
//   const [videoUrls, setVideoUrls] = useState({});

//   useEffect(() => {
//     videoService
//       .getAllVideos()
//       .then((res) => setVideos(res.data))
//       .catch(console.error);
//   }, []);

//   const loadVideo = async (video) => {
//     if (videoUrls[video.id]) return;

//     try {
//       const res = await videoService.getVideoBlob(video.storedFileName);
//       const blobUrl = URL.createObjectURL(res.data);

//       setVideoUrls((prev) => ({
//         ...prev,
//         [video.id]: blobUrl,
//       }));
//     } catch (err) {
//       console.error("Failed to load video", err);
//     }
//   };

//   const deleteVideo = async (videoId) => {
//     if (!window.confirm("Are you sure you want to delete this video?")) return;

//     try {
//       await videoService.deleteVideo(videoId);
//       setVideos((prev) => prev.filter((v) => v.id !== videoId));
//     } catch (err) {
//       console.error("Failed to delete video", err);
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-lg font-semibold text-slate-100">Uploaded Videos</h2>

//       {videos.map((video) => (
//         <div
//           key={video.id}
//           className="rounded-xl bg-slate-900 border border-slate-700 p-4"
//         >
//           <p className="text-slate-100 font-medium">{video.originalFileName}</p>

//           <p className="text-xs text-slate-400 mt-1">
//             Uploaded on {new Date(video.uploadedAt).toLocaleString()}
//           </p>

//           {!videoUrls[video.id] ? (
//             <button
//               onClick={() => loadVideo(video)}
//               className="mt-3 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400"
//             >
//               ▶ Load & Play
//             </button>
//           ) : (
//             <video
//               className="mt-3 w-full rounded-lg"
//               controls
//               controlsList="nodownload"
//               disablePictureInPicture
//               src={videoUrls[video.id]}
//             />
//           )}

//           <button
//             onClick={() => deleteVideo(video.id)}
//             className="mt-3 ml-3 px-4 py-2 text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-500"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoList;

// import React, { useEffect, useState } from "react";
// import videoService from "../services/videoService";

// const VideoList = ({ refreshKey }) => {
//   const [videos, setVideos] = useState([]);
//   const [videoUrls, setVideoUrls] = useState({});

//   // ✅ FETCH ONLY WHEN refreshKey CHANGES
//   useEffect(() => {
//     videoService
//       .getAllVideos()
//       .then((res) => {
//         setVideos(res.data); // ✅ REPLACE, NOT APPEND
//       })
//       .catch(console.error);

//     // ✅ CLEANUP BLOB URLS ON UNMOUNT
//     return () => {
//       Object.values(videoUrls).forEach((url) => {
//         URL.revokeObjectURL(url);
//       });
//     };
//   }, [refreshKey]);

//   const loadVideo = async (video) => {
//     if (videoUrls[video.id]) return;

//     try {
//       const res = await videoService.getVideoBlob(video.storedFileName);
//       const blobUrl = URL.createObjectURL(res.data);

//       setVideoUrls((prev) => ({
//         ...prev,
//         [video.id]: blobUrl,
//       }));
//     } catch (err) {
//       console.error("Failed to load video", err);
//     }
//   };

//   const deleteVideo = async (videoId) => {
//     if (!window.confirm("Are you sure you want to delete this video?")) return;

//     try {
//       await videoService.deleteVideo(videoId);

//       // ✅ REMOVE VIDEO
//       setVideos((prev) => prev.filter((v) => v.id !== videoId));

//       // ✅ CLEANUP BLOB URL
//       if (videoUrls[videoId]) {
//         URL.revokeObjectURL(videoUrls[videoId]);
//         setVideoUrls((prev) => {
//           const copy = { ...prev };
//           delete copy[videoId];
//           return copy;
//         });
//       }
//     } catch (err) {
//       console.error("Failed to delete video", err);
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-lg font-semibold text-slate-100">Uploaded Videos</h2>

//       {videos.map((video) => (
//         <div
//           key={video.id}
//           className="rounded-xl bg-slate-900 border border-slate-700 p-4"
//         >
//           <p className="text-slate-100 font-medium">{video.originalFileName}</p>

//           <p className="text-xs text-slate-400 mt-1">
//             Uploaded on {new Date(video.uploadedAt).toLocaleString()}
//           </p>

//           {!videoUrls[video.id] ? (
//             <button
//               onClick={() => loadVideo(video)}
//               className="mt-3 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400"
//             >
//               ▶ Load & Play
//             </button>
//           ) : (
//             <video
//               className="mt-3 w-full rounded-lg"
//               controls
//               controlsList="nodownload"
//               disablePictureInPicture
//               src={videoUrls[video.id]}
//             />
//           )}

//           <button
//             onClick={() => deleteVideo(video.id)}
//             className="mt-3 ml-3 px-4 py-2 text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-500"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoList;

// import React, { useEffect, useState } from "react";
// import videoService from "../services/videoService";

// const VideoList = ({ refreshKey }) => {
//   const [videos, setVideos] = useState([]);
//   const [videoUrls, setVideoUrls] = useState({});

//   // ✅ FETCH ONLY WHEN refreshKey CHANGES
//   useEffect(() => {
//     videoService
//       .getAllVideos()
//       .then((res) => {
//         setVideos(res.data); // ✅ REPLACE, NOT APPEND
//       })
//       .catch(console.error);

//     // ✅ CLEANUP BLOB URLS ON UNMOUNT
//     return () => {
//       Object.values(videoUrls).forEach((url) => {
//         URL.revokeObjectURL(url);
//       });
//     };
//   }, [refreshKey]);

//   const loadVideo = async (video) => {
//     if (videoUrls[video.id]) return;

//     try {
//       const res = await videoService.getVideoBlob(video.storedFileName);
//       const blobUrl = URL.createObjectURL(res.data);

//       setVideoUrls((prev) => ({
//         ...prev,
//         [video.id]: blobUrl,
//       }));
//     } catch (err) {
//       console.error("Failed to load video", err);
//     }
//   };

//   const deleteVideo = async (videoId) => {
//     if (!window.confirm("Are you sure you want to delete this video?")) return;

//     try {
//       await videoService.deleteVideo(videoId);

//       // ✅ REMOVE VIDEO
//       setVideos((prev) => prev.filter((v) => v.id !== videoId));

//       // ✅ CLEANUP BLOB URL
//       if (videoUrls[videoId]) {
//         URL.revokeObjectURL(videoUrls[videoId]);
//         setVideoUrls((prev) => {
//           const copy = { ...prev };
//           delete copy[videoId];
//           return copy;
//         });
//       }
//     } catch (err) {
//       console.error("Failed to delete video", err);
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-lg font-semibold text-slate-100">Uploaded Videos</h2>

//       {videos.map((video) => (
//         <div
//           key={video.id}
//           className="rounded-xl bg-slate-900 border border-slate-700 p-4"
//         >
//           <p className="text-slate-100 font-medium">{video.originalFileName}</p>

//           <p className="text-xs text-slate-400 mt-1">
//             Uploaded on {new Date(video.uploadedAt).toLocaleString()}
//           </p>

//           {!videoUrls[video.id] ? (
//             <button
//               onClick={() => loadVideo(video)}
//               className="mt-3 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400"
//             >
//               ▶ Load & Play
//             </button>
//           ) : (
//             <video
//               className="mt-3 w-full rounded-lg"
//               controls
//               controlsList="nodownload"
//               disablePictureInPicture
//               src={videoUrls[video.id]}
//             />
//           )}

//           <button
//             onClick={() => deleteVideo(video.id)}
//             className="mt-3 ml-3 px-4 py-2 text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-500"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoList;

import React, { useEffect, useState } from "react";
import videoService from "../services/videoService";

const VideoList = ({ refreshKey }) => {
  const [videos, setVideos] = useState([]);
  const [videoUrls, setVideoUrls] = useState({});

  useEffect(() => {
    videoService
      .getAllVideos()
      .then((res) => {
        setVideos(res.data); // ✅ REPLACE, NOT APPEND
      })
      .catch(console.error);

    return () => {
      Object.values(videoUrls).forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [refreshKey]);

  const loadVideo = async (video) => {
    if (videoUrls[video.id]) return;

    try {
      const res = await videoService.getVideoBlob(video.storedFileName);
      const blobUrl = URL.createObjectURL(res.data);

      setVideoUrls((prev) => ({
        ...prev,
        [video.id]: blobUrl,
      }));
    } catch (err) {
      console.error("Failed to load video", err);
    }
  };

  const deleteVideo = async (videoId) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    try {
      await videoService.deleteVideo(videoId);

      setVideos((prev) => prev.filter((v) => v.id !== videoId));

      if (videoUrls[videoId]) {
        URL.revokeObjectURL(videoUrls[videoId]);
        setVideoUrls((prev) => {
          const copy = { ...prev };
          delete copy[videoId];
          return copy;
        });
      }
    } catch (err) {
      console.error("Failed to delete video", err);
      alert("Delete failed");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-slate-100">Uploaded Videos</h2>

      {videos.map((video) => (
        <div
          key={video.id}
          className="rounded-xl bg-slate-900 border border-slate-700 p-4"
        >
          <p className="text-slate-100 font-medium">{video.originalFileName}</p>

          <p className="text-xs text-slate-400 mt-1">
            Uploaded on {new Date(video.uploadedAt).toLocaleString()}
          </p>

          {!videoUrls[video.id] ? (
            <button
              onClick={() => loadVideo(video)}
              className="mt-3 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-400"
            >
              ▶ Load & Play
            </button>
          ) : (
            <video
              className="mt-3 w-full rounded-lg"
              controls
              src={videoUrls[video.id]}
            />
          )}

          <button
            onClick={() => deleteVideo(video.id)}
            className="mt-3 ml-3 px-4 py-2 text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
