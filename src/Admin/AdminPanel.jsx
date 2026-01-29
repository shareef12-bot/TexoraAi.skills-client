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
// import AdminBatches from "./AdminBatches";
// import EditProfile from "../pages/common/EditProfile";

// import AllCourses from "./AllCourses";
// import AllUsers from "./AllUsers";
// import Branches from "./Branches";
// import Categories from "./Categories";
// import CertificatesAdmin from "./CertificatesAdmin";
// // import Departments from "./Departments";
// import FeedbackAdmin from "./FeedbackAdmin";
// // import MyAiUsageAdmin from "./MyAiUsageAdmin";
// // import OrgAiUsage from "./OrgAiUsage";
// import OrgReports from "./OrgReports";
// import OrgSettings from "./OrgSettings";
// import StudentsAdmin from "./StudentsAdmin";
// import TrainersAdmin from "./TrainersAdmin";
// import UsageAnalytics from "./UsageAnalytics";
// import DepartmentList from "./DepartmentList";

// const AdminPanel = () => {
//   return (
//     <RoleGuard allowedRole="admin">
//       <DashboardLayout SidebarComponent={Sidebar} label="Admin panel">
//         <Routes>
//           {/* ✅ DEFAULT DASHBOARD */}
//           <Route index element={<AdminDashboard />} />

//           {/* ✅ ADMIN ROUTES */}
//           {/* <Route path="settings" element={<OrgSettings />} /> */}
//           {/* ================= ORGANISATION ================= */}
//           <Route path="settings" element={<OrgSettings />} />

//           <Route path="orgs" element={<OrgSettings />} />
//           <Route path="orgs/create" element={<OrgSettings />} />
//           <Route path="orgs/edit" element={<OrgSettings />} />
//           {/* <Route path="departments" element={<Departments />} /> */}
//           <Route path="branches" element={<Branches />} />
//           <Route path="batches" element={<AdminBatches />} />

//           <Route path="users" element={<AllUsers />} />
//           <Route path="students" element={<StudentsAdmin />} />
//           <Route path="trainers" element={<TrainersAdmin />} />
//           <Route path="courses" element={<AllCourses />} />
//           <Route path="categories" element={<Categories />} />
//           <Route path="certificates" element={<CertificatesAdmin />} />
//           <Route path="reports" element={<OrgReports />} />

//           {/* ✅ RESOURCES — SINGLE PAGE (UPLOAD + LIST) */}
//           <Route path="resources" element={<AdminResources />} />

//           <Route path="departmentlist" element={<DepartmentList />} />

//           <Route path="usage" element={<UsageAnalytics />} />
//           <Route path="feedback" element={<FeedbackAdmin />} />
//           {/* <Route path="ai-usage" element={<MyAiUsageAdmin />} /> */}
//           {/* <Route path="org-usage" element={<OrgAiUsage />} /> */}

//           {/* 🔍 SEARCH (ADMIN) */}
//           <Route path="search" element={<SearchPage />} />

//           <Route path="edit-profile" element={<EditProfile />} />

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
import { Outlet } from "react-router-dom";
import RoleGuard from "../components/RoleGuard";
import Sidebar from "../components/Sidebar";
import DashboardLayout from "../layouts/DashboardLayout";

const AdminPanel = () => {
  return (
    <RoleGuard allowedRole="admin">
      <DashboardLayout SidebarComponent={Sidebar} label="Admin panel">
        {/* ✅ Admin child routes render here */}
        <Outlet />
      </DashboardLayout>
    </RoleGuard>
  );
};

export default AdminPanel;
