// import React, { useEffect, useState } from "react";
// import {
//   Link,
//   useNavigate,
//   useSearchParams,
//   useLocation,
// } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
// import auth from "../../auth";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [idToken, setidToken] = useState(null);
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const location = useLocation();

//   /* ========= ROLE DETECTION ========= */
//   const pathRole = location.pathname.split("/")[1] || "";
//   const queryRole = searchParams.get("role") || pathRole;
//   const role = ["student", "trainer", "admin", "business"].includes(queryRole)
//     ? queryRole
//     : "student";

//   /* ========= AUTO REDIRECT ========= */
//   useEffect(() => {
//     if (auth.isAuthenticated()) {
//       const userRole = auth.getCurrentRole();
//       navigate(`/${userRole}/dashboard`, { replace: true });
//     }
//   }, [navigate]);

//   /* ========= EMAIL LOGIN ========= */
//   const handleEmailSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const ok = await auth.login({ email, password });
//     if (!ok) {
//       setError("Invalid email or password");
//       return;
//     }

//     navigate(`/${role}/dashboard`, { replace: true });
//   };

//   const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       if (!credentialResponse?.credential) {
//         throw new Error("No Google credential received");
//       }

//       const googleToken = credentialResponse.credential; // ✅ DIRECT VALUE

//       //

//       const response = await auth.googleLogin({
//         idToken: googleToken, // ✅ CORRECT
//         role: role.toUpperCase(),
//       });

//       navigate(`/${role}/dashboard`, { replace: true });
//     } catch (err) {
//       console.error("Google login error:", err);
//       setError("Google login failed");
//     }
//   };

//   const handleGoogleError = () => {
//     setError("Google login failed");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900/80 to-slate-900 px-3 py-6">
//       <div className="w-full max-w-sm">
//         {/* ========= TEXORAAI.SKILLS BOX ========= */}
//         <div className="text-center mb-3 p-2 bg-gradient-to-r from-slate-800/90 to-emerald-900/90 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-xl shadow-emerald-500/20">
//           <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-xl">
//             TexoraAi.skills
//           </h1>
//           <p className="text-slate-300 text-xs mt-1 font-medium tracking-wide drop-shadow-md">
//             Learning & Skills Platform
//           </p>
//         </div>

//         <div className="bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-black/95 backdrop-blur-2xl border border-slate-700/60 rounded-xl p-4 shadow-2xl shadow-emerald-500/20">
//           <h2 className="text-lg font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent text-center mb-1 drop-shadow-lg">
//             {role.charAt(0).toUpperCase() + role.slice(1)} Login
//           </h2>
//           <p className="text-slate-400 text-xs text-center mb-3">
//             Enter credentials or continue with Google
//           </p>

//           {error && (
//             <p className="mb-2 text-xs text-red-400 bg-red-900/40 border border-red-800/60 px-2 py-1.5 rounded-md backdrop-blur-sm shadow-lg shadow-red-500/20">
//               {error}
//             </p>
//           )}

//           {/* ========= GOOGLE BUTTON ========= */}
//           <div className="mb-4">
//             <GoogleLogin
//               onSuccess={handleGoogleSuccess}
//               onError={handleGoogleError}
//               theme="filled_blue"
//               size="large"
//               text="signin_with"
//               shape="rectangular"
//               width="350"
//               useOneTap
//             />
//           </div>

//           <div className="relative my-3">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-slate-600/60 bg-gradient-to-r from-transparent via-slate-600/70 to-transparent" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="px-2 bg-gradient-to-r from-slate-900/95 to-black/95 backdrop-blur-sm text-slate-400 font-medium">
//                 or
//               </span>
//             </div>
//           </div>

//           {/* ========= EMAIL FORM ========= */}
//           <form onSubmit={handleEmailSubmit} className="space-y-2">
//             <div>
//               <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wide">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 className="w-full rounded-lg bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/70 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60 focus:border-emerald-500/70 transition-all duration-300 hover:border-slate-500/70 hover:shadow-md hover:shadow-emerald-500/20"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wide">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="w-full rounded-lg bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/70 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60 focus:border-emerald-500/70 transition-all duration-300 hover:border-slate-500/70 hover:shadow-md hover:shadow-emerald-500/20"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-800 text-sm font-bold text-white shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm border border-emerald-500/50"
//             >
//               Login to {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
//             </button>
//           </form>

//           <p className="mt-3 text-xs text-slate-400 text-center leading-tight">
//             Forgot your password?{" "}
//             <Link
//               to="/forgot-password"
//               className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline transition-colors duration-200"
//             >
//               Reset here
//             </Link>
//           </p>

//           <p className="mt-2 text-xs text-slate-400 text-center leading-tight">
//             Don't have an account?{" "}
//             <Link
//               to={`/signup?role=${role}`}
//               className="text-teal-400 hover:text-teal-300 font-medium hover:underline transition-colors duration-200"
//             >
//               Sign up
//             </Link>
//           </p>

//           <button
//             type="button"
//             onClick={() => (window.location.href = "/")}
//             className="mt-3 w-full py-1.5 rounded-md bg-gradient-to-r from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-slate-600/50 text-xs text-slate-400 hover:text-slate-300 hover:from-slate-700/80 hover:to-slate-800/80 font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg shadow-emerald-500/10"
//           >
//             ← Back to Homepage
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

// Color scheme
const colors = {
  primary: "from-blue-600 to-emerald-600",
  primarySolid: "bg-blue-600",
  accent: "from-yellow-400 to-orange-500",
  muted: "text-gray-600 dark:text-gray-400",
  surface: "bg-white dark:bg-black",
};

// Your Google Client ID
const GOOGLE_CLIENT_ID =
  "572421778240-akk3kkb4f60ukuv9pcfrpg2ielm09thk.apps.googleusercontent.com";

// TexoraAi.skills Login Page
const TexoraLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", { email, password });

    const userData = {
      email,
      name: email.split("@")[0], // Use email username as name
      method: "email",
    };

    // Store user data in sessionStorage
    sessionStorage.setItem("user", JSON.stringify(userData));

    // Navigate to home page
    navigate("/");
  };

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google Login Success:", decoded);

      const userData = {
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        method: "google",
        token: credentialResponse.credential,
      };

      // Store user data in sessionStorage for persistence
      sessionStorage.setItem("user", JSON.stringify(userData));

      // Navigate to home page
      navigate("/");
    } catch (error) {
      console.error("Error decoding Google token:", error);
    }
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-black shadow-sm border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div
              className={`w-8 h-8 bg-gradient-to-br ${colors.primary} rounded flex items-center justify-center shadow-md`}
            >
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              TexoraAi.skills
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button
              className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}
              onClick={() => navigate("/apply-admin")}
            >
              Apply to Admin
            </button>
            <button
              className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}
              onClick={() => navigate("/apply-business")}
            >
              Apply to Business
            </button>
            <button
              className={`${colors.muted} hover:text-gray-900 dark:hover:text-white font-medium transition-colors`}
              onClick={() => navigate("/apply-trainer")}
            >
              Apply to trainer
            </button>

            <button
              onClick={() => navigate("/apply-student")}
              className={`${colors.primarySolid} hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors`}
            >
              Apply to student
            </button>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Log in to your account
          </h2>

          <div className="bg-white dark:bg-black rounded-lg shadow-md border dark:border-gray-800 p-8">
            {/* Google Login Button */}
            <div className="mb-6">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
                theme="outline"
                size="large"
                width="100%"
                text="signin_with"
              />
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-black text-gray-500 dark:text-gray-400">
                  or use email
                </span>
              </div>
            </div>

            {/* Email/Password Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <button
                type="submit"
                className={`w-full ${colors.primarySolid} hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-md hover:shadow-lg`}
              >
                Log in
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have a TexoraAi.skills account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Login Component with Google OAuth Provider
export default function Login() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <TexoraLogin />
    </GoogleOAuthProvider>
  );
}
