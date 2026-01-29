// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import RoleGuard from "../components/RoleGuard";
// import Sidebar from "../components/Sidebar";
// import DashboardLayout from "../layouts/DashboardLayout";

// import Assessments from "./Assessments";
// import Attendance from "./Attendance";
// import Batches from "./Batches";
// import BatchReports from "./BatchReports";
// import CreateAssignments from "./CreateAssignments";
// import CreateQuiz from "./CreateQuiz";
// import MyQuizzes from "./MyQuizzes";

// import Dashboard from "./Dashboard";
// import DoubtsManagement from "./DoubtsManagement";
// import PerformanceAnalysis from "./PerformanceAnalysis";
// import StudentReports from "./StudentReports";
// // import TrainerAiUsage from "./TrainerAiUsage";
// import TrainerSettings from "./TrainerSettings";
// import UploadDocuments from "./UploadDocuments";
// import UploadVideos from "./UploadVideos";

// import EditProfile from "../pages/common/EditProfile";

// import VideoList from "./VideoList"; // ✅
// import FileList from "./FileList"; // ✅
// import TrainerCourseManagement from "./TrainerCourseManagement";
// import TrainerCourseModules from "./TrainerCourseModules";

// import NotificationsPage from "../pages/NotificationsPage";
// import ProfilePage from "../pages/ProfilePage";
// import SearchPage from "../pages/SearchPage";

// const TrainerPanel = () => {
//   return (
//     <RoleGuard allowedRole="trainer">
//       <DashboardLayout SidebarComponent={Sidebar} label="Trainer panel">
//         <Routes>
//           {/* ✅ DEFAULT DASHBOARD */}
//           <Route index element={<Dashboard />} />

//           {/* Trainer features */}
//           <Route path="batches" element={<Batches />} />

//           {/* 🎥 VIDEOS (UPLOAD + LIST) */}
//           <Route
//             path="upload-videos"
//             element={
//               <>
//                 <UploadVideos />
//                 <VideoList />
//               </>
//             }
//           />

//           {/* 📄 DOCUMENTS (UPLOAD + LIST + PREVIEW + DOWNLOAD + DELETE) */}
//           <Route
//             path="upload-docs"
//             element={
//               <>
//                 <UploadDocuments />
//                 <FileList />
//               </>
//             }
//           />

//           <Route path="create-quiz" element={<CreateQuiz />} />
//           <Route path="my-quizzes" element={<MyQuizzes />} />

//           <Route path="create-assignments" element={<CreateAssignments />} />
//           <Route
//             path="TrainerCourseManagement"
//             element={<TrainerCourseManagement />}
//           />

//           <Route
//             path="course/:courseId/modules"
//             element={<TrainerCourseModules />}
//           />

//           <Route path="assessments" element={<Assessments />} />
//           <Route path="attendance" element={<Attendance />} />
//           <Route path="doubts-management" element={<DoubtsManagement />} />
//           <Route path="student-reports" element={<StudentReports />} />
//           <Route path="batch-reports" element={<BatchReports />} />
//           <Route path="performance" element={<PerformanceAnalysis />} />
//           {/* <Route path="ai-usage" element={<TrainerAiUsage />} /> */}
//           <Route path="settings" element={<TrainerSettings />} />

//           {/* 🔍 SEARCH */}
//           <Route path="search" element={<SearchPage />} />
//           <Route path="edit-profile" element={<EditProfile />} />

//           {/* top-bar */}
//           <Route path="notifications" element={<NotificationsPage />} />
//           <Route path="profile" element={<ProfilePage />} />

//           {/* ✅ FALLBACK */}
//           <Route path="*" element={<Navigate to="." replace />} />
//         </Routes>
//       </DashboardLayout>
//     </RoleGuard>
//   );
// };

// export default TrainerPanel;

import React from "react";
import { Outlet } from "react-router-dom";
import RoleGuard from "../components/RoleGuard";
import Sidebar from "../components/Sidebar";
import DashboardLayout from "../layouts/DashboardLayout";

const TrainerPanel = () => {
  return (
    <RoleGuard allowedRole="trainer">
      <DashboardLayout SidebarComponent={Sidebar} label="Trainer panel">
        {/* ✅ Trainer child pages render here */}
        <Outlet />
      </DashboardLayout>
    </RoleGuard>
  );
};

export default TrainerPanel;
