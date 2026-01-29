// import { Navigate, useLocation } from "react-router-dom";
// import auth from "../auth";

// const RoleGuard = ({ children, allowedRoles = [] }) => {
//   const location = useLocation();

//   // ✅ 1) Token check
//   const isLoggedIn = auth.isAuthenticated();

//   if (!isLoggedIn) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // ✅ 2) Role from localStorage
//   const role = localStorage.getItem("role");

//   if (!role) {
//     // token exists but role missing → force login
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // ✅ 3) ADMIN can access everything (no restriction)
//   if (role === "ADMIN") {
//     return children;
//   }

//   // ✅ 4) If allowedRoles provided, check role
//   if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
//     // redirect to correct dashboard
//     if (role === "STUDENT") return <Navigate to="/student" replace />;
//     if (role === "TRAINER") return <Navigate to="/trainer" replace />;
//     if (role === "BUSINESS") return <Navigate to="/business" replace />;

//     return <Navigate to="/" replace />;
//   }

//   // ✅ allowed
//   return children;
// };

// export default RoleGuard;

import { Navigate, useLocation } from "react-router-dom";
import auth from "../auth";

const RoleGuard = ({ children, allowedRoles = [] }) => {
  const location = useLocation();

  // ✅ 1) Token check
  const isLoggedIn = auth.isAuthenticated();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ 2) Role from localStorage
  const role = localStorage.getItem("role");

  if (!role) {
    // token exists but role missing → force login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ 3) ADMIN can access everything (no restriction)
  if (role === "ADMIN") {
    return children;
  }

  // ✅ 4) If allowedRoles provided, check role
  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    // redirect to correct dashboard
    if (role === "STUDENT") return <Navigate to="/student" replace />;
    if (role === "TRAINER") return <Navigate to="/trainer" replace />;
    if (role === "BUSINESS") return <Navigate to="/business" replace />;

    return <Navigate to="/" replace />;
  }

  // ✅ allowed
  return children;
};

export default RoleGuard;
