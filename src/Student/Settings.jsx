// import React from "react";

// const Settings = () => {
//   return (
//     <div className="p-6 space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
//           Settings
//         </h1>
//         <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
//           Manage your account, preferences and privacy for this LMS.
//         </p>
//       </div>

//       {/* Sections */}
//       <div className="space-y-4">
//         {/* Profile */}
//         <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
//           <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
//             Profile
//           </h2>
//           <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
//             Name, email and basic information.
//           </p>
//         </section>

//         {/* Security */}
//         <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
//           <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
//             Security
//           </h2>
//           <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
//             Password and login settings.
//           </p>
//         </section>

//         {/* Notifications */}
//         <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
//           <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
//             Notifications
//           </h2>
//           <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
//             Email and in‑app alerts for classes, assignments and announcements.
//           </p>
//         </section>

//         {/* Appearance */}
//         <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
//           <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
//             Appearance
//           </h2>
//           <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
//             Theme preferences (light / dark) and sidebar layout.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Settings;







import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  User,
  Shield,
  Bell,
  Palette,
  Mail,
  Lock,
  ChevronRight,
  Moon,
  Sun,
  Monitor,
  Check,
  Trash2,
} from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Detect base path (student / trainer / admin / business)
  const getBasePath = () => {
    if (location.pathname.startsWith("/student")) return "/student";
    if (location.pathname.startsWith("/trainer")) return "/trainer";
    if (location.pathname.startsWith("/admin")) return "/admin";
    if (location.pathname.startsWith("/business")) return "/business";
    return "";
  };

  const basePath = getBasePath();

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [theme, setTheme] = useState("system");

  /* ================= THEME HANDLER ================= */
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  };

  /* ================= SMALL COMPONENTS ================= */
  const SettingCard = ({ icon: Icon, title, description, children, badge }) => (
    <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-6 hover:shadow-lg transition">
      <div className="flex gap-4">
        <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-gray-900 dark:text-slate-100">
              {title}
            </h2>
            {badge && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700">
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">
            {description}
          </p>
          {children && <div className="mt-4 space-y-2">{children}</div>}
        </div>
      </div>
    </div>
  );

  const ActionButton = ({ icon: Icon, label, onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-gray-500" />
        <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
          {label}
        </span>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-400" />
    </button>
  );

  const ToggleSwitch = ({ label, enabled, onChange }) => (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-700 dark:text-slate-300">
        {label}
      </span>
      <button
        onClick={() => onChange(!enabled)}
        className={`w-11 h-6 rounded-full transition ${
          enabled ? "bg-indigo-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`block w-4 h-4 bg-white rounded-full transform transition ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );

  const ThemeOption = ({ value, icon: Icon, label }) => (
    <button
      onClick={() => handleThemeChange(value)}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg border ${
        theme === value
          ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-950"
          : "border-gray-200 dark:border-slate-700"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="flex-1 text-left text-sm font-medium">{label}</span>
      {theme === value && <Check className="w-4 h-4 text-indigo-600" />}
    </button>
  );

  /* ================= RENDER ================= */
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
        Settings
      </h1>

      {/* PROFILE */}
      <SettingCard
        icon={User}
        title="Profile"
        description="Manage your account details"
      >
        <ActionButton
          icon={Mail}
          label="Update Email Address"
          onClick={() => navigate(`${basePath}/settings/update-email`)}
        />
        <ActionButton
          icon={User}
          label="Edit Profile"
          onClick={() => navigate(`${basePath}/edit-profile`)}
        />
      </SettingCard>

      {/* SECURITY */}
      <SettingCard
        icon={Shield}
        title="Security"
        description="Protect your account"
        badge="Important"
      >
        <ActionButton
          icon={Lock}
          label="Change Password"
          onClick={() => navigate("/reset-password")}
        />
        <ActionButton
          icon={Shield}
          label="Two-Factor Authentication"
          onClick={() => navigate(`${basePath}/settings/2fa`)}
        />
      </SettingCard>

      {/* NOTIFICATIONS */}
      <SettingCard
        icon={Bell}
        title="Notifications"
        description="Email & push alerts"
      >
        <ToggleSwitch
          label="Email Notifications"
          enabled={emailNotifications}
          onChange={setEmailNotifications}
        />
        <ToggleSwitch
          label="Push Notifications"
          enabled={pushNotifications}
          onChange={setPushNotifications}
        />
      </SettingCard>

      {/* APPEARANCE */}
      <SettingCard
        icon={Palette}
        title="Appearance"
        description="Theme preferences"
      >
        <ThemeOption value="light" icon={Sun} label="Light Mode" />
        <ThemeOption value="dark" icon={Moon} label="Dark Mode" />
        <ThemeOption value="system" icon={Monitor} label="System Default" />
      </SettingCard>

      {/* DANGER ZONE */}
      <div className="border-2 border-red-200 bg-red-50 p-6 rounded-xl">
        <div className="flex gap-3">
          <Trash2 className="text-red-600" />
          <div>
            <h3 className="font-semibold text-red-700">Danger Zone</h3>
            <button
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure? This action cannot be undone."
                  )
                ) {
                  navigate(`${basePath}/delete-account`);
                }
              }}
              className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
