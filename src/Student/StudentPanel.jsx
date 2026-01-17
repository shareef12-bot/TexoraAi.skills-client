// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import DashboardLayout from "../layouts/DashboardLayout";
// import Sidebar from "../components/Sidebar";
// import RoleGuard from "../components/RoleGuard";

// // Dashboard
// import DashboardPage from "./DashboardPage.jsx";
// import VideoLectures from "./videolecctures.jsx";
// import Documents from "./Documents.jsx";
// import Resources from "./Resources.jsx";
// import MyCourses from "./MyCourses.jsx";
// import Assessments from "./Assessments.jsx";
// import Attendance from "./Attendance.jsx";
// import Doubts from "./Doubts.jsx";
// import Certificates from "./certificates.jsx";
// import AiUsage from "./AiUsage.jsx";
// import Overview from "./overview.jsx";
// import Settings from "./Settings.jsx";

// // top-bar pages
// import SearchPage from "../pages/SearchPage";
// import NotificationsPage from "../pages/NotificationsPage";
// import ProfilePage from "../pages/ProfilePage";

// const StudentPanel = () => {
//   return (
//     <RoleGuard allowedRole="student">
//       <DashboardLayout SidebarComponent={Sidebar} label="Student panel">
//         <Routes>
//           {/* Default dashboard */}
//           <Route path="/" element={<DashboardPage />} />

//           {/* Learning materials */}
//           <Route path="videos" element={<VideoLectures />} />
//           <Route path="documents" element={<Documents />} />
//           <Route path="resources" element={<Resources />} />

//           {/* My courses */}
//           <Route path="courses" element={<MyCourses />} />
//           <Route path="assessments" element={<Assessments />} />
//           <Route path="attendance" element={<Attendance />} />
//           <Route path="doubts" element={<Doubts />} />
//           <Route path="certificates" element={<Certificates />} />

//           {/* Extra */}
//           <Route path="ai-usage" element={<AiUsage />} />
//           <Route path="overview" element={<Overview />} />

//           {/* top-bar icons */}
//           <Route path="search" element={<SearchPage />} />
//           <Route path="notifications" element={<NotificationsPage />} />
//           <Route path="profile" element={<ProfilePage />} />

//           {/* Settings */}
//           <Route path="settings" element={<Settings />} />

//           {/* ✅ FIXED: Current panel pe rehne ke liye */}
//           <Route path="*" element={<Navigate to="." replace />} />
//         </Routes>
//       </DashboardLayout>
//     </RoleGuard>
//   );
// };

// export default StudentPanel;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../components/Sidebar";
import RoleGuard from "../components/RoleGuard";

// Dashboard
import DashboardPage from "./DashboardPage.jsx";
import VideoLectures from "./videolecctures.jsx";
import Documents from "./Documents.jsx";
import Resources from "./Resources.jsx";
import MyCourses from "./MyCourses.jsx";
import StudentCourseView from "./StudentCourseView";
import CoursePreview from "../pages/CoursePreview"; // adjust path if needed

import Assessments from "./Assessments.jsx";
import AttemptQuiz from "./AttemptQuiz.jsx";
import MyQuizHistory from "./MyQuizHistory";

import Attendance from "./Attendance.jsx";
import Doubts from "./Doubts.jsx";
import Certificates from "./certificates.jsx";
import AiUsage from "./AiUsage.jsx";
import Overview from "./overview.jsx";
import Settings from "./Settings.jsx";

// top-bar pages
import SearchPage from "../pages/SearchPage";
import NotificationsPage from "../pages/NotificationsPage";
import ProfilePage from "../pages/ProfilePage";

const StudentPanel = () => {
  return (
    <RoleGuard allowedRole="student">
      <DashboardLayout SidebarComponent={Sidebar} label="Student panel">
        <Routes>
          {/* ✅ DEFAULT DASHBOARD */}
          <Route index element={<DashboardPage />} />

          {/* Learning materials */}
          <Route path="videos" element={<VideoLectures />} />
          <Route path="documents" element={<Documents />} />
          <Route path="resources" element={<Resources />} />

          {/* My courses */}
          <Route path="courses" element={<MyCourses />} />
          <Route path="course/:id" element={<StudentCourseView />} />
          <Route path="assessments" element={<Assessments />} />
          <Route path="quiz/:quizId" element={<AttemptQuiz />} />
          <Route path="my-quizzes" element={<MyQuizHistory />} />

          <Route path="course/:id" element={<CoursePreview />} />

          <Route path="attendance" element={<Attendance />} />
          <Route path="doubts" element={<Doubts />} />
          <Route path="certificates" element={<Certificates />} />

          {/* Extra */}
          <Route path="ai-usage" element={<AiUsage />} />
          <Route path="overview" element={<Overview />} />

          {/* 🔍 SEARCH (STUDENT) */}
          <Route path="search" element={<SearchPage />} />

          {/* top-bar icons */}
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />

          {/* Settings */}
          <Route path="settings" element={<Settings />} />

          {/* ✅ FALLBACK */}
          <Route path="*" element={<Navigate to="." replace />} />
        </Routes>
      </DashboardLayout>
    </RoleGuard>
  );
};

export default StudentPanel;
