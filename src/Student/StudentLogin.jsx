// import React, { useState } from "react";
// import { Moon, Sun, Mail, Lock, ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import authService from "../services/authService";

// export default function StudentLogin() {
//   const navigate = useNavigate();
//   const [darkMode, setDarkMode] = useState(true);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const colors = {
//     primary: "from-blue-600 to-emerald-600",
//     primarySolid: "bg-blue-600",
//     muted: "text-gray-600 dark:text-gray-400",
//     surface: "bg-white dark:bg-black",
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Please enter a valid email";

//     if (!formData.password) newErrors.password = "Password is required";
//     else if (formData.password.length < 8)
//       newErrors.password = "Password must be at least 8 characters";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const redirectByRole = (role) => {
//     const r = (role || "").toUpperCase();

//     if (r === "STUDENT") navigate("/student", { replace: true });
//     else if (r === "ADMIN") navigate("/admin", { replace: true });
//     else if (r === "TRAINER") navigate("/trainer", { replace: true });
//     else if (r === "BUSINESS") navigate("/business", { replace: true });
//     else navigate("/", { replace: true });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       setLoading(true);

//       const res = await authService.login(formData.email, formData.password);

//       const token = res?.data?.token;
//       const role = res?.data?.role;

//       if (!token) {
//         alert("❌ Token not received from backend");
//         return;
//       }

//       // ✅ Save token + role (important for RoleGuard)
//       authService.saveToken(token);
//       localStorage.setItem("lms_role", (role || "").toLowerCase());

//       alert("✅ Login success!");

//       // ✅ Correct redirect
//       redirectByRole(role);
//     } catch (err) {
//       console.log("Login error:", err);

//       const msg =
//         err?.response?.data?.message ||
//         err?.response?.data?.error ||
//         "❌ Invalid email or password";

//       alert(msg);

//       // if email not verified
//       if (msg.toLowerCase().includes("verify")) {
//         navigate(`/verify-email?email=${encodeURIComponent(formData.email)}`);
//         return;
//       }

//       // if not approved
//       if (msg.toLowerCase().includes("not approved")) {
//         navigate(
//           `/approval-pending?email=${encodeURIComponent(formData.email)}`,
//         );
//         return;
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors">
//         <header className="border-b border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/60 backdrop-blur">
//           <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//             <h1
//               className={`text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
//             >
//               TexoraAI.skills
//             </h1>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-yellow-500"
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </div>
//         </header>

//         <div className="max-w-md mx-auto px-6 py-16">
//           <div
//             className={`${colors.surface} border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-xl`}
//           >
//             <h2 className="text-2xl font-bold text-black dark:text-white text-center">
//               Student Login
//             </h2>
//             <p className={`text-center text-sm mt-2 mb-8 ${colors.muted}`}>
//               Login to access your dashboard
//             </p>

//             <form onSubmit={handleLogin}>
//               <div className="mb-4">
//                 <label className={`block text-sm mb-2 ${colors.muted}`}>
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                     size={18}
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white focus:border-blue-500 focus:outline-none"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//                 )}
//               </div>

//               <div className="mb-6">
//                 <label className={`block text-sm mb-2 ${colors.muted}`}>
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Lock
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                     size={18}
//                   />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-12 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white focus:border-blue-500 focus:outline-none"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   >
//                     {showPassword ? "🙈" : "👁️"}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-xs mt-1">{errors.password}</p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full py-3 rounded-lg bg-gradient-to-r ${colors.primary} text-white font-semibold hover:opacity-90 disabled:opacity-60`}
//               >
//                 {loading ? "Logging in..." : "Login to Dashboard"}
//               </button>
//             </form>

//             <div className="text-center mt-4 space-y-2">
//               <button
//                 onClick={() => navigate("/forgot-password")}
//                 className="text-sm text-blue-500 hover:underline"
//               >
//                 Forgot password?
//               </button>

//               <button
//                 onClick={() => navigate("/")}
//                 className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white mx-auto"
//               >
//                 <ArrowLeft size={16} />
//                 Back to Home
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Moon, Sun, Mail, Lock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

export default function StudentLogin() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const colors = {
    primary: "from-blue-600 to-emerald-600",
    primarySolid: "bg-blue-600",
    muted: "text-gray-600 dark:text-gray-400",
    surface: "bg-white dark:bg-black",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const redirectByRole = (role) => {
    const r = (role || "").toUpperCase();

    if (r === "STUDENT") navigate("/student", { replace: true });
    else if (r === "ADMIN") navigate("/admin", { replace: true });
    else if (r === "TRAINER") navigate("/trainer", { replace: true });
    else if (r === "BUSINESS") navigate("/business", { replace: true });
    else navigate("/", { replace: true });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await authService.login(formData.email, formData.password);

      const token = res?.data?.token;
      const role = res?.data?.role; // STUDENT / ADMIN / TRAINER / BUSINESS

      if (!token) {
        alert("❌ Token not received from backend");
        return;
      }

      // ✅ Save token
      authService.saveToken(token);

      // ✅ IMPORTANT FIX: Save role in SAME key used by RoleGuard/Sidebar
      localStorage.setItem("role", (role || "").toUpperCase());

      alert("✅ Login success!");

      // ✅ Correct redirect
      redirectByRole(role);
    } catch (err) {
      console.log("Login error:", err);

      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "❌ Invalid email or password";

      alert(msg);

      // if email not verified
      if (msg.toLowerCase().includes("verify")) {
        navigate(`/verify-email?email=${encodeURIComponent(formData.email)}`);
        return;
      }

      // if not approved
      if (msg.toLowerCase().includes("not approved")) {
        navigate(
          `/approval-pending?email=${encodeURIComponent(formData.email)}`,
        );
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors">
        <header className="border-b border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/60 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1
              className={`text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
            >
              TexoraAI.skills
            </h1>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-yellow-500"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>

        <div className="max-w-md mx-auto px-6 py-16">
          <div
            className={`${colors.surface} border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-xl`}
          >
            <h2 className="text-2xl font-bold text-black dark:text-white text-center">
              Student Login
            </h2>
            <p className={`text-center text-sm mt-2 mb-8 ${colors.muted}`}>
              Login to access your dashboard
            </p>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className={`block text-sm mb-2 ${colors.muted}`}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label className={`block text-sm mb-2 ${colors.muted}`}>
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white focus:border-blue-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg bg-gradient-to-r ${colors.primary} text-white font-semibold hover:opacity-90 disabled:opacity-60`}
              >
                {loading ? "Logging in..." : "Login to Dashboard"}
              </button>
            </form>

            <div className="text-center mt-4 space-y-2">
              <button
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </button>

              <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white mx-auto"
              >
                <ArrowLeft size={16} />
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
