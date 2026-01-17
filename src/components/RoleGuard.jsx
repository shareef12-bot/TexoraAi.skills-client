// import { Navigate, useLocation } from "react-router-dom";
// import auth from "../auth";

// const RoleGuard = ({ children }) => {
//   const location = useLocation();
//   const currentRole = auth.getCurrentRole();      // "admin" / "student" / "trainer" / "business"

//   // URL se target role nikaalo:  /student/*  → "student"
//   const targetRole = location.pathname.split("/")[1] || "";

//   // Admin ko full access
//   if (currentRole === "admin") {
//     return children;
//   }

//   // Non-admin sirf apna dashboard access karega
//   if (!auth.canAccess(targetRole)) {
//     return <Navigate to={`/${currentRole}`} replace />;
//   }

//   return children;
// };

// export default RoleGuard;

import { Navigate, useLocation } from "react-router-dom";
import auth from "../auth";

const RoleGuard = ({ children }) => {
  const location = useLocation();

  // 🔐 Current role from token / storage
  const currentRoleRaw = auth.getCurrentRole(); // e.g. "ADMIN" / "admin"
  const currentRole = currentRoleRaw?.toLowerCase(); // ✅ normalize

  // 🌐 Target role from URL: /admin/* → "admin"
  const targetRole = location.pathname.split("/")[1]?.toLowerCase() || "";

  // 🟢 ADMIN has full access
  if (currentRole === "admin") {
    return children;
  }

  // 🔒 Non-admin users: allow only their own section
  if (currentRole !== targetRole) {
    return <Navigate to={`/${currentRole}`} replace />;
  }

  return children;
};

export default RoleGuard;
