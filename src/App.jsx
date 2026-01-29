

import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import TwoFactorAuth from "./Student/TwoFactorAuth";
import UpdateEmail from "./Student/UpdateEmail";


import AdminPanel from "./Admin/AdminPanel";
import BusinessPanel from "./Business/BusinessPanel";
import StudentPanel from "./Student/StudentPanel";
import TrainerPanel from "./Trainer/TrainerPanel";

import CoursePreview from "./pages/CoursePreview";

import auth from "./auth";
import { GoogleOAuthProvider } from "@react-oauth/google";

import ApprovalPending from "./pages/Auth/ApprovalPending.jsx";
import VerifyEmail from "./pages/Auth/VerifyEmail.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import ResetPassword from "./pages/Auth/ResetPassword.jsx";

import Login from "./pages/Auth/Login.jsx";
import Signup from "./pages/Auth/Register.jsx";

import StudentApplicationForm from "./Student/StudentApplicationForm";
import StudentLogin from "./Student/StudentLogin";

import LMSHomepage from "./pages/Landing/LMSHomepage";
import ExploreFreeServices from "./pages/Landing/ExploreFreeServices";
import Watchnow from "./pages/Landing/Watchnow";

import ApplyBusiness from "./Business/ApplyBusiness.jsx";
import BusinessLogin from "./Business/BusinessLogin.jsx";

import AdminLogin from "./Admin/AdminLogin.jsx";
import ApplyAdmin from "./Admin/ApplyAdmin.jsx";
import ApplyTrainer from "./Trainer/ApplyTrainer.jsx";
import TrainerLogin from "./Trainer/TrainerLogin.jsx";

import SyllabusPage from "./pages/Landing/Syllabus.jsx";
import CourseDetail from "./pages/Landing/CourseDetailsPage";

/* ================= COMMON TOPBAR PAGES ================= */
import SearchPage from "./pages/SearchPage";
import NotificationsPage from "./pages/NotificationsPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/common/EditProfile";
import PendingStudents from "./Admin/PendingUsers.jsx";

/* ================= STUDENT PAGES ================= */
import DashboardPage from "./Student/DashboardPage.jsx";
import VideoLectures from "./Student/videolecctures.jsx";
import Documents from "./Student/Documents.jsx";
import Resources from "./Student/Resources.jsx";
import MyCourses from "./Student/MyCourses.jsx";
import StudentCourseView from "./Student/StudentCourseView";
import Assessments from "./Student/Assessments.jsx";
import AttemptQuiz from "./Student/AttemptQuiz.jsx";
import StudentEnroll from "./Student/StudentEnroll.jsx";
import MyQuizHistory from "./Student/MyQuizHistory";
import Attendance from "./Student/Attendance.jsx";
import Doubts from "./Student/Doubts.jsx";
import Certificates from "./Student/certificates.jsx";
import Overview from "./Student/overview.jsx";
import Settings from "./Student/Settings.jsx";

/* ================= TRAINER PAGES ================= */
import TrainerDashboard from "./Trainer/Dashboard";
import TrainerBatches from "./Trainer/Batches";
import TrainerAssessments from "./Trainer/Assessments";
import TrainerAttendance from "./Trainer/Attendance";
import BatchReports from "./Trainer/BatchReports";
import CreateAssignments from "./Trainer/CreateAssignments";
import CreateQuiz from "./Trainer/CreateQuiz";
import MyQuizzes from "./Trainer/MyQuizzes";
import DoubtsManagement from "./Trainer/DoubtsManagement";
import PerformanceAnalysis from "./Trainer/PerformanceAnalysis";
import StudentReports from "./Trainer/StudentReports";
import TrainerSettings from "./Trainer/TrainerSettings";
import UploadDocuments from "./Trainer/UploadDocuments";
import UploadVideos from "./Trainer/UploadVideos";
import VideoList from "./Trainer/VideoList";
import FileList from "./Trainer/FileList";
import TrainerCourseManagement from "./Trainer/TrainerCourseManagement";
import TrainerCourseModules from "./Trainer/TrainerCourseModules";

/* ================= ADMIN PAGES ================= */
import AdminDashboard from "./Admin/AdminDashboard";
import OrgSettings from "./Admin/OrgSettings";
import Branches from "./Admin/Branches";
import AdminBatches from "./Admin/AdminBatches";
import AllUsers from "./Admin/AllUsers";
import StudentsAdmin from "./Admin/StudentsAdmin";
import TrainersAdmin from "./Admin/TrainersAdmin";
import AllCourses from "./Admin/AllCourses";
import Categories from "./Admin/Categories";
import CertificatesAdmin from "./Admin/CertificatesAdmin";
import OrgReports from "./Admin/OrgReports";
import AdminResources from "./Admin/AdminResources";
import DepartmentList from "./Admin/DepartmentList";
import UsageAnalytics from "./Admin/UsageAnalytics";
import FeedbackAdmin from "./Admin/FeedbackAdmin";
import PendingUsers from "./Admin/PendingUsers.jsx";

/* ================= BUSINESS PAGES ================= */
import BusinessDashboard from "./Business/BusinessDashboard";

// Hiring Manager
import JobOpenings from "./Business/Hiring Manager/JobOpenings.jsx";
import Applications from "./Business/Hiring Manager/Applications.jsx";

// Lead Management
import AllLeads from "./Business/Lead Management/AllLeads.jsx";
import FollowUps from "./Business/Lead Management/FollowUps.jsx";

// Enrollments
import NewEnrollments from "./Business/Enrollments/NewEnrollments.jsx";
import Renewals from "./Business/Enrollments/Renewals.jsx";

// Financial
import Invoices from "./Business/Financial/Invoices.jsx";
import Payments from "./Business/Financial/Payments.jsx";

// Marketing
import Campaigns from "./Business/Marketing/Campaigns.jsx";
import Sources from "./Business/Marketing/Sources.jsx";

// Team Targets
import Targets from "./Business/Team Targets/Targets.jsx";
import Performance from "./Business/Team Targets/Performance.jsx";

// Settings
import BusinessSettings from "./Business/Settings.jsx";

/* ================= ROLE GUARD ================= */
import RoleGuard from "./components/RoleGuard";

/* ================= PROTECTED ROUTE ================= */
const ProtectedRoute = ({ children }) => {
  if (!auth.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

/* ================= APP ================= */
function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <GoogleOAuthProvider clientId="572421778240-akk3kkb4f60ukuv9pcfrpg2ielm09thk.apps.googleusercontent.com">
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route
          path="/"
          element={<LMSHomepage theme={theme} toggleTheme={toggleTheme} />}
        />

        <Route path="/explore-programs" element={<ExploreFreeServices />} />

        <Route
          path="/watch-demo"
          element={<Navigate to="/watch-demo/1" replace />}
        />
        <Route path="/watch-demo/:videoId" element={<Watchnow />} />

        <Route path="/course-details" element={<CourseDetail />} />
        <Route path="/course/:id" element={<CoursePreview />} />

        <Route path="/apply-student" element={<StudentApplicationForm />} />
        <Route path="/apply-admin" element={<ApplyAdmin />} />
        <Route path="/apply-trainer" element={<ApplyTrainer />} />
        <Route path="/apply-business" element={<ApplyBusiness />} />
        <Route path="pending-students" element={<PendingStudents />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/trainer/login" element={<TrainerLogin />} />
        <Route path="/business/login" element={<BusinessLogin />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/approval-pending" element={<ApprovalPending />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* ================= STUDENT ROUTES ================= */}
        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["STUDENT", "ADMIN"]}>
                <StudentPanel />
              </RoleGuard>
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />

          <Route path="videos" element={<VideoLectures />} />
          <Route path="documents" element={<Documents />} />
          <Route path="resources" element={<Resources />} />

          <Route path="courses" element={<MyCourses />} />
          <Route path="course/:id" element={<StudentCourseView />} />

          <Route path="assessments" element={<Assessments />} />
          <Route path="quiz/:quizId" element={<AttemptQuiz />} />
          <Route path="my-quizzes" element={<MyQuizHistory />} />

          <Route path="enroll" element={<StudentEnroll />} />

          <Route path="attendance" element={<Attendance />} />
          <Route path="doubts" element={<Doubts />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="overview" element={<Overview />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />

          <Route path="edit-profile" element={<EditProfile />} />
          {/* ================= STUDENT SETTINGS ROUTES ================= */}
<Route path="settings">
  <Route index element={<Settings />} />
  <Route path="2fa" element={<TwoFactorAuth />} />
  <Route path="update-email" element={<UpdateEmail />} />
</Route>

          <Route path="*" element={<Navigate to="." replace />} />
        </Route>

        {/* ================= TRAINER ROUTES ================= */}
        <Route
          path="/trainer"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["TRAINER", "ADMIN"]}>
                <TrainerPanel />
              </RoleGuard>
            </ProtectedRoute>
          }
        >
          <Route index element={<TrainerDashboard />} />

          <Route path="batches" element={<TrainerBatches />} />

          <Route
            path="upload-videos"
            element={
              <>
                <UploadVideos />
                <VideoList />
              </>
            }
          />

          <Route
            path="upload-docs"
            element={
              <>
                <UploadDocuments />
                <FileList />
              </>
            }
          />

          <Route path="create-quiz" element={<CreateQuiz />} />
          <Route path="my-quizzes" element={<MyQuizzes />} />

          <Route path="create-assignments" element={<CreateAssignments />} />

          <Route
            path="TrainerCourseManagement"
            element={<TrainerCourseManagement />}
          />

          <Route
            path="course/:courseId/modules"
            element={<TrainerCourseModules />}
          />

          <Route path="assessments" element={<TrainerAssessments />} />
          <Route path="attendance" element={<TrainerAttendance />} />

          <Route path="doubts-management" element={<DoubtsManagement />} />
          <Route path="student-reports" element={<StudentReports />} />
          <Route path="batch-reports" element={<BatchReports />} />
          <Route path="performance" element={<PerformanceAnalysis />} />

          <Route path="settings" element={<TrainerSettings />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="edit-profile" element={<EditProfile />} />

          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />

          <Route path="*" element={<Navigate to="." replace />} />
        </Route>

        {/* ================= ADMIN ROUTES ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["ADMIN"]}>
                <AdminPanel />
              </RoleGuard>
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />

          <Route path="settings" element={<OrgSettings />} />
          <Route path="orgs" element={<OrgSettings />} />
          <Route path="orgs/create" element={<OrgSettings />} />
          <Route path="orgs/edit" element={<OrgSettings />} />

          <Route path="branches" element={<Branches />} />
          <Route path="batches" element={<AdminBatches />} />

          <Route path="users" element={<AllUsers />} />
          <Route path="students" element={<StudentsAdmin />} />
          <Route path="trainers" element={<TrainersAdmin />} />

          <Route path="courses" element={<AllCourses />} />
          <Route path="categories" element={<Categories />} />
          <Route path="certificates" element={<CertificatesAdmin />} />

          <Route path="reports" element={<OrgReports />} />
          <Route path="resources" element={<AdminResources />} />

          <Route path="departmentlist" element={<DepartmentList />} />

          <Route path="usage" element={<UsageAnalytics />} />
          <Route path="feedback" element={<FeedbackAdmin />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="edit-profile" element={<EditProfile />} />

          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />

          <Route path="*" element={<Navigate to="." replace />} />
          <Route path="pending-users" element={<PendingUsers />} />
        </Route>

        {/* ================= BUSINESS ROUTES ================= */}
        <Route
          path="/business"
          element={
            <ProtectedRoute>
              <RoleGuard allowedRoles={["BUSINESS", "ADMIN"]}>
                <BusinessPanel />
              </RoleGuard>
            </ProtectedRoute>
          }
        >
          <Route index element={<BusinessDashboard />} />

          {/* Hiring Manager */}
          <Route path="jobs" element={<JobOpenings />} />
          <Route path="applications" element={<Applications />} />

          {/* Lead Management */}
          <Route path="leads" element={<AllLeads />} />
          <Route path="followups" element={<FollowUps />} />

          {/* Enrollments */}
          <Route path="enrollments" element={<NewEnrollments />} />
          <Route path="renewals" element={<Renewals />} />

          {/* Financial */}
          <Route path="invoices" element={<Invoices />} />
          <Route path="payments" element={<Payments />} />

          {/* Marketing */}
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="sources" element={<Sources />} />

          {/* Team Targets */}
          <Route path="targets" element={<Targets />} />
          <Route path="performance" element={<Performance />} />

          {/* Settings */}
          <Route path="settings" element={<BusinessSettings />} />

          {/* Top bar pages */}
          <Route path="search" element={<SearchPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="edit-profile" element={<EditProfile />} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="." replace />} />
        </Route>

        <Route
          path="/syllabus"
          element={<SyllabusPage theme={theme} toggleTheme={toggleTheme} />}
        />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
