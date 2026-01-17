// import React, { useEffect, useState } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";

// import AdminPanel from "./Admin/AdminPanel";
// import BusinessPanel from "./Business/BusinessPanel";
// import StudentPanel from "./Student/StudentPanel";
// import TrainerPanel from "./Trainer/TrainerPanel";

// import auth from "./auth";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
// import Login from "./pages/Auth/Login.jsx";
// import Signup from "./pages/Auth/Register.jsx";
// import ResetPassword from "./pages/Auth/ResetPassword.jsx";

// import LMSHomepage from "./pages/Landing/LMSHomepage";
// import ExplorePrograms from "./pages/Landing/ExplorePrograms.jsx";
// import WatchDemo from "./pages/Landing/WatchDemo.jsx";
// import SyllabusPage from "./pages/Landing/Syllabus.jsx"; //  NEW IMPORT ADDED

// /* ================= PROTECTED ROUTE ================= */
// const ProtectedRoute = ({ children }) => {
//   if (!auth.isAuthenticated()) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };

// /* ================= APP ================= */
// function App() {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) setTheme(savedTheme);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", theme === "dark");
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () =>
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));

//   return (
//     <GoogleOAuthProvider clientId="572421778240-akk3kkb4f60ukuv9pcfrpg2ielm09thk.apps.googleusercontent.com">
//       <Routes>
//         {/* PUBLIC */}
//         <Route
//           path="/"
//           element={<LMSHomepage theme={theme} toggleTheme={toggleTheme} />}
//         />
//         <Route
//           path="/explore-programs"
//           element={<ExplorePrograms theme={theme} toggleTheme={toggleTheme} />}
//         />
//         <Route path="/watch-demo" element={<WatchDemo />} />

//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password" element={<ResetPassword />} />

//         {/* ROLE BASED */}
//         <Route
//           path="/student/*"
//           element={
//             <ProtectedRoute>
//               <StudentPanel />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/trainer/*"
//           element={
//             <ProtectedRoute>
//               <TrainerPanel />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/admin/*"
//           element={
//             <ProtectedRoute>
//               <AdminPanel />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/business/*"
//           element={
//             <ProtectedRoute>
//               <BusinessPanel />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/syllabus"
//           element={<SyllabusPage theme={theme} toggleTheme={toggleTheme} />}
//         />

//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AdminPanel from "./Admin/AdminPanel";
import BusinessPanel from "./Business/BusinessPanel";
import StudentPanel from "./Student/StudentPanel";
import TrainerPanel from "./Trainer/TrainerPanel";
//import Welcome from "./pages/Onboarding/Welcome.jsx";

import CoursePreview from "./pages/CoursePreview";

import auth from "./auth";
import { GoogleOAuthProvider } from "@react-oauth/google";

import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import Login from "./pages/Auth/Login.jsx";
import Signup from "./pages/Auth/Register.jsx";
import ResetPassword from "./pages/Auth/ResetPassword.jsx";

import LMSHomepage from "./pages/Landing/LMSHomepage";
import ExploreFreeServices from "./pages/Landing/ExploreFreeServices";

import Watchnow from "./pages/Landing/Watchnow";
import SyllabusPage from "./pages/Landing/Syllabus.jsx"; //  NEW IMPORT ADDED

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
        {/* PUBLIC */}
        <Route
          path="/"
          element={<LMSHomepage theme={theme} toggleTheme={toggleTheme} />}
        />
        {/* <Route
          path="/explore-programs"
          element={<ExplorePrograms theme={theme} toggleTheme={toggleTheme} />}
        /> */}
        <Route path="/explore-programs" element={<ExploreFreeServices />} />

        <Route path="/watch-demo" element={<Watchnow />} />

        <Route path="/course/:id" element={<CoursePreview />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* <Route
          path="/welcome"
          element={<Welcome theme={theme} toggleTheme={toggleTheme} />}
        /> */}

        {/* ROLE BASED */}
        <Route
          path="/student/*"
          element={
            <ProtectedRoute>
              <StudentPanel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trainer/*"
          element={
            <ProtectedRoute>
              <TrainerPanel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/*"
          element={
            <ProtectedRoute>
              <BusinessPanel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/syllabus"
          element={<SyllabusPage theme={theme} toggleTheme={toggleTheme} />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
