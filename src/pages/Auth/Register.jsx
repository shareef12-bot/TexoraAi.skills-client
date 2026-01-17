
import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import auth from "../../auth";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const role = searchParams.get("role") || "student";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("❌ Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      setError("❌ Password must be at least 6 characters");
      return;
    }

    const signupSuccess = auth.signup({
      name: form.name,
      email: form.email,
      password: form.password,
      role
    });

    if (!signupSuccess) {
      setError("❌ Email already exists! Please use different email.");
      return;
    }

    const loginSuccess = auth.login({
      email: form.email,
      password: form.password,
      role
    });
    
    if (!loginSuccess) {
      setError("❌ Signup successful but login failed. Please login manually.");
      return;
    }

    setSuccess("✅ Account created successfully! Redirecting...");
    setTimeout(() => {
      navigate(`/${role}/dashboard`);
    }, 1500);
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
            {role.charAt(0).toUpperCase() + role.slice(1)} Signup
          </h2>
          <p className="text-slate-400 text-xs text-center mb-3">
            Create your {role} account to get started.
          </p>

          {error && (
            <p className="mb-2 text-xs text-red-400 bg-red-900/40 border border-red-800/60 px-2 py-1.5 rounded-md backdrop-blur-sm shadow-lg shadow-red-500/20">
              {error}
            </p>
          )}
          
          {success && (
            <p className="mb-3 text-xs text-emerald-400 bg-emerald-900/40 border border-emerald-800/60 px-2 py-1.5 rounded-md backdrop-blur-sm shadow-lg shadow-emerald-500/20">
              {success}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wide">Full Name</label>
              <input
                name="name"
                type="text"
                className="w-full rounded-lg bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/70 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60 focus:border-emerald-500/70 transition-all duration-300 hover:border-slate-500/70 hover:shadow-md hover:shadow-emerald-500/20"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wide">Email</label>
              <input
                name="email"
                type="email"
                className="w-full rounded-lg bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/70 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60 focus:border-emerald-500/70 transition-all duration-300 hover:border-slate-500/70 hover:shadow-md hover:shadow-emerald-500/20"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wide">Password</label>
              <input
                name="password"
                type="password"
                className="w-full rounded-lg bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/70 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60 focus:border-emerald-500/70 transition-all duration-300 hover:border-slate-500/70 hover:shadow-md hover:shadow-emerald-500/20"
                value={form.password}
                onChange={handleChange}
                required
                minLength="6"
                placeholder="At least 6 characters"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wide">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                className="w-full rounded-lg bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/70 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/60 focus:border-emerald-500/70 transition-all duration-300 hover:border-slate-500/70 hover:shadow-md hover:shadow-emerald-500/20"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              disabled={!form.name || !form.email || !form.password || form.password !== form.confirmPassword}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed text-sm font-bold text-white shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm border border-emerald-500/50"
            >
              Create {role.charAt(0).toUpperCase() + role.slice(1)} Account
            </button>
          </form>

          <p className="mt-3 text-xs text-slate-400 text-center leading-tight">
            Already have an account?{" "}
            <Link to={`/login?role=${role}`} className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline transition-colors duration-200">
              Sign in
            </Link>
          </p>

          <button
            type="button"
            onClick={() => window.location.href = "/"}
            className="mt-3 w-full py-1.5 rounded-md bg-gradient-to-r from-slate-800/70 to-slate-900/70 backdrop-blur-sm border border-slate-600/50 text-xs text-slate-400 hover:text-slate-300 hover:from-slate-700/80 hover:to-slate-800/80 font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg shadow-emerald-500/10"
          >
            ← Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
