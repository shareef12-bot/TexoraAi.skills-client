// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import RoleGuard from "../components/RoleGuard";
// import Sidebar from "../components/Sidebar";
// import DashboardLayout from "../layouts/DashboardLayout";

// import NotificationsPage from "../pages/NotificationsPage";
// import ProfilePage from "../pages/ProfilePage";
// import SearchPage from "../pages/SearchPage";
// import AdminDashboard from "./AdminDashboard";
// import AllCourses from "./AllCourses";
// import AllUsers from "./AllUsers";
// import Branches from "./Branches";
// import Categories from "./Categories";
// import CertificatesAdmin from "./CertificatesAdmin";
// import Departments from "./Departments";
// import FeedbackAdmin from "./FeedbackAdmin";
// import MyAiUsageAdmin from "./MyAiUsageAdmin";
// import OrgAiUsage from "./OrgAiUsage";
// import OrgReports from "./OrgReports";
// import OrgSettings from "./OrgSettings";
// import ResourceUploadAdmin from "./ResourceUploadAdmin";
// import StudentsAdmin from "./StudentsAdmin";
// import TrainersAdmin from "./TrainersAdmin";
// import UsageAnalytics from "./UsageAnalytics";

// const AdminPanel = () => {
//   return (
//     <RoleGuard allowedRole="admin">
//       <DashboardLayout SidebarComponent={Sidebar} label="Admin panel">
//         <Routes>
//           <Route path="/" element={<AdminDashboard />} />
//           <Route path="settings" element={<OrgSettings />} />
//           <Route path="departments" element={<Departments />} />
//           <Route path="branches" element={<Branches />} />
//           <Route path="users" element={<AllUsers />} />
//           <Route path="students" element={<StudentsAdmin />} />
//           <Route path="trainers" element={<TrainersAdmin />} />
//           <Route path="courses" element={<AllCourses />} />
//           <Route path="categories" element={<Categories />} />
//           <Route path="certificates" element={<CertificatesAdmin />} />
//           <Route path="reports" element={<OrgReports />} />
//           <Route path="resources/upload" element={<ResourceUploadAdmin />} />
//           <Route path="usage" element={<UsageAnalytics />} />
//           <Route path="feedback" element={<FeedbackAdmin />} />
//           <Route path="ai-usage" element={<MyAiUsageAdmin />} />
//           <Route path="org-usage" element={<OrgAiUsage />} />
//           <Route path="search" element={<SearchPage />} />
//           <Route path="notifications" element={<NotificationsPage />} />
//           <Route path="profile" element={<ProfilePage />} />
//           <Route path="*" element={<Navigate to="." replace />} />
//         </Routes>
//       </DashboardLayout>
//     </RoleGuard>
//   );
// };

// export default AdminPanel;

// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import RoleGuard from "../components/RoleGuard";
// import Sidebar from "../components/Sidebar";
// import DashboardLayout from "../layouts/DashboardLayout";

// import NotificationsPage from "../pages/NotificationsPage";
// import ProfilePage from "../pages/ProfilePage";
// import SearchPage from "../pages/SearchPage";

// import AdminDashboard from "./AdminDashboard";
// import AdminResources from "./AdminResources";

// import AllCourses from "./AllCourses";
// import AllUsers from "./AllUsers";
// import Branches from "./Branches";
// import Categories from "./Categories";
// import CertificatesAdmin from "./CertificatesAdmin";
// import Departments from "./Departments";
// import FeedbackAdmin from "./FeedbackAdmin";
// import MyAiUsageAdmin from "./MyAiUsageAdmin";
// import OrgAiUsage from "./OrgAiUsage";
// import OrgReports from "./OrgReports";
// import OrgSettings from "./OrgSettings";
// import ResourceUploadAdmin from "./ResourceUploadAdmin";
// import StudentsAdmin from "./StudentsAdmin";
// import TrainersAdmin from "./TrainersAdmin";
// import UsageAnalytics from "./UsageAnalytics";

// const AdminPanel = () => {
//   return (
//     <RoleGuard allowedRole="admin">
//       <DashboardLayout SidebarComponent={Sidebar} label="Admin panel">
//         <Routes>
//           {/* ✅ DEFAULT DASHBOARD */}
//           <Route index element={<AdminDashboard />} />

//           {/* ✅ ADMIN ROUTES */}
//           <Route path="settings" element={<OrgSettings />} />
//           <Route path="departments" element={<Departments />} />
//           <Route path="branches" element={<Branches />} />
//           <Route path="users" element={<AllUsers />} />
//           <Route path="students" element={<StudentsAdmin />} />
//           <Route path="trainers" element={<TrainersAdmin />} />
//           <Route path="courses" element={<AllCourses />} />
//           <Route path="categories" element={<Categories />} />
//           <Route path="certificates" element={<CertificatesAdmin />} />
//           <Route path="reports" element={<OrgReports />} />
//           <Route path="resources/upload" element={<ResourceUploadAdmin />} />
//           <Route path="resources" element={<AdminResources />} />

//           <Route path="usage" element={<UsageAnalytics />} />
//           <Route path="feedback" element={<FeedbackAdmin />} />
//           <Route path="ai-usage" element={<MyAiUsageAdmin />} />
//           <Route path="org-usage" element={<OrgAiUsage />} />

//           {/* 🔍 SEARCH (ADMIN) */}
//           <Route path="search" element={<SearchPage />} />

//           {/* ✅ COMMON */}
//           <Route path="notifications" element={<NotificationsPage />} />
//           <Route path="profile" element={<ProfilePage />} />

//           {/* ✅ FALLBACK */}
//           <Route path="*" element={<Navigate to="." replace />} />
//         </Routes>
//       </DashboardLayout>
//     </RoleGuard>
//   );
// };

// export default AdminPanel;

// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import RoleGuard from "../components/RoleGuard";
// import Sidebar from "../components/Sidebar";
// import DashboardLayout from "../layouts/DashboardLayout";

// import NotificationsPage from "../pages/NotificationsPage";
// import ProfilePage from "../pages/ProfilePage";
// import SearchPage from "../pages/SearchPage";

// import AdminDashboard from "./AdminDashboard";
// import AdminResources from "./AdminResources";
// import ResourceUploadAdmin from "./ResourceUploadAdmin";

// import AllCourses from "./AllCourses";
// import AllUsers from "./AllUsers";
// import Branches from "./Branches";
// import Categories from "./Categories";
// import CertificatesAdmin from "./CertificatesAdmin";
// import Departments from "./Departments";
// import FeedbackAdmin from "./FeedbackAdmin";
// import MyAiUsageAdmin from "./MyAiUsageAdmin";
// import OrgAiUsage from "./OrgAiUsage";
// import OrgReports from "./OrgReports";
// import OrgSettings from "./OrgSettings";
// import StudentsAdmin from "./StudentsAdmin";
// import TrainersAdmin from "./TrainersAdmin";
// import UsageAnalytics from "./UsageAnalytics";

// const AdminPanel = () => {
//   return (
//     <RoleGuard allowedRole="admin">
//       <DashboardLayout SidebarComponent={Sidebar} label="Admin panel">
//         <Routes>
//           {/* ✅ DEFAULT DASHBOARD */}
//           <Route index element={<AdminDashboard />} />

//           {/* ✅ ADMIN ROUTES */}
//           <Route path="settings" element={<OrgSettings />} />
//           <Route path="departments" element={<Departments />} />
//           <Route path="branches" element={<Branches />} />
//           <Route path="users" element={<AllUsers />} />
//           <Route path="students" element={<StudentsAdmin />} />
//           <Route path="trainers" element={<TrainersAdmin />} />
//           <Route path="courses" element={<AllCourses />} />
//           <Route path="categories" element={<Categories />} />
//           <Route path="certificates" element={<CertificatesAdmin />} />
//           <Route path="reports" element={<OrgReports />} />

//           {/* ✅ RESOURCES (FIXED) */}
//           <Route path="resources">
//             {/* DEFAULT → list */}
//             <Route index element={<AdminResources />} />

//             {/* upload */}
//             <Route path="upload" element={<ResourceUploadAdmin />} />
//           </Route>

//           <Route path="usage" element={<UsageAnalytics />} />
//           <Route path="feedback" element={<FeedbackAdmin />} />
//           <Route path="ai-usage" element={<MyAiUsageAdmin />} />
//           <Route path="org-usage" element={<OrgAiUsage />} />

//           {/* 🔍 SEARCH (ADMIN) */}
//           <Route path="search" element={<SearchPage />} />

//           {/* ✅ COMMON */}
//           <Route path="notifications" element={<NotificationsPage />} />
//           <Route path="profile" element={<ProfilePage />} />

//           {/* ✅ FALLBACK */}
//           <Route path="*" element={<Navigate to="." replace />} />
//         </Routes>
//       </DashboardLayout>
//     </RoleGuard>
//   );
// };

// export default AdminPanel;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RoleGuard from "../components/RoleGuard";
import Sidebar from "../components/Sidebar";
import DashboardLayout from "../layouts/DashboardLayout";

import NotificationsPage from "../pages/NotificationsPage";
import ProfilePage from "../pages/ProfilePage";
import SearchPage from "../pages/SearchPage";

import AdminDashboard from "./AdminDashboard";
import AdminResources from "./AdminResources";
import AdminBatches from "./AdminBatches";

import AllCourses from "./AllCourses";
import AllUsers from "./AllUsers";
import Branches from "./Branches";
import Categories from "./Categories";
import CertificatesAdmin from "./CertificatesAdmin";
import Departments from "./Departments";
import FeedbackAdmin from "./FeedbackAdmin";
import MyAiUsageAdmin from "./MyAiUsageAdmin";
import OrgAiUsage from "./OrgAiUsage";
import OrgReports from "./OrgReports";
import OrgSettings from "./OrgSettings";
import StudentsAdmin from "./StudentsAdmin";
import TrainersAdmin from "./TrainersAdmin";
import UsageAnalytics from "./UsageAnalytics";

const AdminPanel = () => {
  return (
    <RoleGuard allowedRole="admin">
      <DashboardLayout SidebarComponent={Sidebar} label="Admin panel">
        <Routes>
          {/* ✅ DEFAULT DASHBOARD */}
          <Route index element={<AdminDashboard />} />

          {/* ✅ ADMIN ROUTES */}
          <Route path="settings" element={<OrgSettings />} />
          <Route path="departments" element={<Departments />} />
          <Route path="branches" element={<Branches />} />
          <Route path="batches" element={<AdminBatches />} />

          <Route path="users" element={<AllUsers />} />
          <Route path="students" element={<StudentsAdmin />} />
          <Route path="trainers" element={<TrainersAdmin />} />
          <Route path="courses" element={<AllCourses />} />
          <Route path="categories" element={<Categories />} />
          <Route path="certificates" element={<CertificatesAdmin />} />
          <Route path="reports" element={<OrgReports />} />

          {/* ✅ RESOURCES — SINGLE PAGE (UPLOAD + LIST) */}
          <Route path="resources" element={<AdminResources />} />

          <Route path="usage" element={<UsageAnalytics />} />
          <Route path="feedback" element={<FeedbackAdmin />} />
          <Route path="ai-usage" element={<MyAiUsageAdmin />} />
          <Route path="org-usage" element={<OrgAiUsage />} />

          {/* 🔍 SEARCH (ADMIN) */}
          <Route path="search" element={<SearchPage />} />

          {/* ✅ COMMON */}
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />

          {/* ✅ FALLBACK */}
          <Route path="*" element={<Navigate to="." replace />} />
        </Routes>
      </DashboardLayout>
    </RoleGuard>
  );
};

export default AdminPanel;
