import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import auth from "../../auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [idToken, setidToken] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  /* ========= ROLE DETECTION ========= */
  const pathRole = location.pathname.split("/")[1] || "";
  const queryRole = searchParams.get("role") || pathRole;
  const role = ["student", "trainer", "admin", "business"].includes(queryRole)
    ? queryRole
    : "student";

  /* ========= AUTO REDIRECT ========= */
  useEffect(() => {
    if (auth.isAuthenticated()) {
      const userRole = auth.getCurrentRole();
      navigate(`/${userRole}/dashboard`, { replace: true });
    }
  }, [navigate]);

  /* ========= EMAIL LOGIN ========= */
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const ok = await auth.login({ email, password });
    if (!ok) {
      setError("Invalid email or password");
      return;
    }

    navigate(`/${role}/dashboard`, { replace: true });
  };

  /* ========= GOOGLE LOGIN ========= */
  /* ========= GOOGLE LOGIN ========= */

  //

  //   try {
  //     if (!credentialResponse?.credential) {
  //       throw new Error("No Google credential received");
  //     }

  //     console.log("Google ", credentialResponse.credential);
  //     setidToken(credentialResponse.credential);
  //     const response = await auth.googleLogin({
  //       idToken,
  //       role: role.toUpperCase(),
  //     });

  //     // ✅ Axios response check
  //     if (!response || response.status !== 200) {
  //       throw new Error("Google login API failed");
  //     }

  //     navigate(`/${role}/dashboard`, { replace: true });
  //   } catch (err) {
  //     console.error("Google login error:", err);
  //     setError("Google login failed");
  //   }
  // };
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      if (!credentialResponse?.credential) {
        throw new Error("No Google credential received");
      }

      const googleToken = credentialResponse.credential; // ✅ DIRECT VALUE

      //

      const response = await auth.googleLogin({
        idToken: googleToken, // ✅ CORRECT
        role: role.toUpperCase(),
      });

      navigate(`/${role}/dashboard`, { replace: true });
    } catch (err) {
      console.error("Google login error:", err);
      setError("Google login failed");
    }
  };

  const handleGoogleError = () => {
    setError("Google login failed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900/80 to-slate-900 px-3 py-6">
      <div className="w-full max-w-sm">
        {/* ========= TEXORAAI.SKILLS BOX ========= */}
        <div className="text-center mb-3 p-2 bg-gradient-to-r from-slate-800/90 to-emerald-900/90 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-xl shadow-emerald-500/20">
          <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-xl">
            TexoraAi.skills
          </h1>
          <p className="text-slate-300 text-xs mt-1 font-medium tracking-wide drop-shadow-md">
            Learning & Skills Platform
          </p>
        </div>

        <div className="bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-black/95 backdrop-blur-2xl border border-slate-700/60 rounded-xl p-4 shadow-2xl shadow-emerald-500/20">
          <h2 className="text-lg font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent text-center mb-1 drop-shadow-lg">
            {role.charAt(0).toUpperCase() + role.slice(1)} Login
          </h2>
          <p className="text-slate-400 text-xs text-center mb-3">
            Enter credentials or continue with Google
          </p>

          {error && (
            <p className="mb-2 text-xs text-red-400 bg-red-900/40 border border-red-800/60 px-2 py-1.5 rounded-md backdrop-blur-sm shadow-lg shadow-red-500/20">
              {error}
            </p>
          )}

          {/* ========= GOOGLE BUTTON ========= */}
          <div className="mb-4">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="filled_blue"
              size="large"
              text="signin_with"
              shape="rectangular"
              width="350"
              useOneTap
            />
          </div>

          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-600/60 bg-gradient-to-r from-transparent via-slate-600/70 to-transparent" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-gradient-to-r from-slate-900/95 to-black/95 backdrop-blur-sm text-slate-400 font-medium">
                or
              </span>
            </div>
          </div>

          {/* ========= EMAIL FORM ========= */}
          <form onSubmit={handleEmailSubmit} className="space-y-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded-lg bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/70 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60 focus:border-emerald-500/70 transition-all duration-300 hover:border-slate-500/70 hover:shadow-md hover:shadow-emerald-500/20"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wide">
                Password
              </label>
              <input
                type="password"
                className="w-full rounded-lg bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/70 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60 focus:border-emerald-500/70 transition-all duration-300 hover:border-slate-500/70 hover:shadow-md hover:shadow-emerald-500/20"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-800 text-sm font-bold text-white shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm border border-emerald-500/50"
            >
              Login to {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
            </button>
          </form>

          <p className="mt-3 text-xs text-slate-400 text-center leading-tight">
            Forgot your password?{" "}
            <Link
              to="/forgot-password"
              className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline transition-colors duration-200"
            >
              Reset here
            </Link>
          </p>

          <p className="mt-2 text-xs text-slate-400 text-center leading-tight">
            Don't have an account?{" "}
            <Link
              to={`/signup?role=${role}`}
              className="text-teal-400 hover:text-teal-300 font-medium hover:underline transition-colors duration-200"
            >
              Sign up
            </Link>
          </p>

          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className="mt-3 w-full py-1.5 rounded-md bg-gradient-to-r from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-slate-600/50 text-xs text-slate-400 hover:text-slate-300 hover:from-slate-700/80 hover:to-slate-800/80 font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg shadow-emerald-500/10"
          >
            ← Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
