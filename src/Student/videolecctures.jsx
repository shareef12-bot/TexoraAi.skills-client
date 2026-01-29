
// import React, { useEffect, useState } from "react";
// import { PlayCircle, Clock } from "lucide-react";
// import videoService from "../services/videoService";

// const VideoLectures = () => {
//   const [selectedTag, setSelectedTag] = useState("All");
//   const [videos, setVideos] = useState([]);
//   const [videoUrls, setVideoUrls] = useState({});
//   const [playingId, setPlayingId] = useState(null);

//   useEffect(() => {
//     videoService
//       .getAllVideos()
//       .then((res) => setVideos(res.data))
//       .catch(console.error);
//   }, []);

//   const getTagFromName = (name) => {
//     const lower = name.toLowerCase();
//     if (lower.includes("react")) return "React";
//     if (lower.includes("node") || lower.includes("backend")) return "Backend";
//     if (lower.includes("design") || lower.includes("figma")) return "Design";
//     return "Other";
//   };

//   const tags = ["All", "React", "Backend", "Design", "Other"];

//   const filtered =
//     selectedTag === "All"
//       ? videos
//       : videos.filter(
//           (v) => getTagFromName(v.originalFileName) === selectedTag
//         );

//   const playVideo = async (video) => {
//     if (!videoUrls[video.id]) {
//       try {
//         const res = await videoService.getVideoBlob(video.storedFileName);
//         const blobUrl = URL.createObjectURL(res.data);

//         setVideoUrls((prev) => ({
//           ...prev,
//           [video.id]: blobUrl,
//         }));
//       } catch (err) {
//         console.error("Failed to play video", err);
//         alert("Unable to play video");
//         return;
//       }
//     }

//     setPlayingId(video.id);
//   };

//   return (
//     <div className="p-6 space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
//           Video Lectures
//         </h1>
//         <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
//           Watch your course recordings and live session replays.
//         </p>
//       </div>

//       {/* Tag filters */}
//       <div className="flex flex-wrap gap-2">
//         {tags.map((tag) => (
//           <button
//             key={tag}
//             onClick={() => setSelectedTag(tag)}
//             className={
//               "px-3 py-1.5 rounded-full text-xs font-medium border transition " +
//               (selectedTag === tag
//                 ? "bg-indigo-600 text-white border-indigo-600"
//                 : "bg-transparent text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800")
//             }
//           >
//             {tag}
//           </button>
//         ))}
//       </div>

//       {/* Videos list */}
//       <div className="space-y-3">
//         {filtered.map((v) => (
//           <div
//             key={v.id}
//             className="px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
//           >
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-9 h-9 rounded-full bg-indigo-600/10 flex items-center justify-center">
//                   <PlayCircle className="w-5 h-5 text-indigo-500" />
//                 </div>

//                 <div>
//                   <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
//                     {v.originalFileName}
//                   </p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">
//                     <Clock className="inline w-3 h-3 mr-1" />
//                     {Math.round(v.size / 1024 / 1024)} MB ·{" "}
//                     {getTagFromName(v.originalFileName)}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => playVideo(v)}
//                 className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
//               >
//                 Play
//               </button>
//             </div>

//             {playingId === v.id && videoUrls[v.id] && (
//               <video
//                 className="mt-4 w-full rounded-lg"
//                 controls
//                 controlsList="nodownload"
//                 disablePictureInPicture
//                 src={videoUrls[v.id]}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoLectures;




import React, { useEffect, useState } from "react";
import { Play, Clock, Video } from "lucide-react";
import videoService from "../services/videoService";

const VideoLectures = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [videos, setVideos] = useState([]);
  const [videoUrls, setVideoUrls] = useState({});
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    videoService
      .getAllVideos()
      .then((res) => setVideos(res.data))
      .catch(console.error);
  }, []);

  const getTagFromName = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes("react")) return "React";
    if (lower.includes("node") || lower.includes("backend")) return "Backend";
    if (lower.includes("design") || lower.includes("figma")) return "Design";
    return "Other";
  };

  const tags = ["All", "React", "Backend", "Design", "Other"];

  const filtered =
    selectedTag === "All"
      ? videos
      : videos.filter(
          (v) => getTagFromName(v.originalFileName) === selectedTag
        );

  const playVideo = async (video) => {
    if (!videoUrls[video.id]) {
      try {
        const res = await videoService.getVideoBlob(video.storedFileName);
        const blobUrl = URL.createObjectURL(res.data);
        setVideoUrls((prev) => ({ ...prev, [video.id]: blobUrl }));
      } catch {
        alert("Unable to play video");
        return;
      }
    }
    setPlayingId(video.id);
  };

  return (
    <div className="p-6 space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Video Lectures
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Watch recorded lectures & live session replays
        </p>
      </div>

      {/* TAG FILTERS */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={
              "px-4 py-1.5 rounded-full text-xs font-semibold transition " +
              (selectedTag === tag
                ? "bg-indigo-600 text-white shadow"
                : "bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700")
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {/* VIDEO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((v) => (
          <div
            key={v.id}
            className="group relative rounded-2xl overflow-hidden
                       bg-white dark:bg-slate-900
                       border border-slate-200 dark:border-slate-800
                       shadow hover:shadow-xl transition"
          >
            {/* THUMBNAIL */}
            <div className="relative h-44 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <Video className="w-12 h-12 text-white/50" />

              {/* Hover Play */}
              <button
                onClick={() => playVideo(v)}
                className="absolute inset-0 flex items-center justify-center
                           bg-black/40 opacity-0 group-hover:opacity-100 transition"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <Play className="w-6 h-6 text-indigo-600" />
                </div>
              </button>
            </div>

            {/* INFO */}
            <div className="p-4 space-y-1">
              <p className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-2">
                {v.originalFileName}
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {Math.round(v.size / 1024 / 1024)} MB ·{" "}
                {getTagFromName(v.originalFileName)}
              </p>
            </div>

            {/* VIDEO PLAYER */}
            {playingId === v.id && videoUrls[v.id] && (
              <div className="p-4 pt-0">
                <video
                  className="w-full rounded-lg"
                  controls
                  controlsList="nodownload"
                  disablePictureInPicture
                  src={videoUrls[v.id]}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLectures;
