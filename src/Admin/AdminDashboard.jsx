

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const stats = [
//   {
//     label: "Total Users",
//     value: "0",
//     color: "bg-sky-900",
//     iconBg: "bg-sky-500",
//     icon: "👤",
//   },
//   {
//     label: "Active Courses",
//     value: "0",
//     color: "bg-emerald-900",
//     iconBg: "bg-emerald-500",
//     icon: "📚",
//   },
//   {
//     label: "Pending Approvals",
//     value: "0",
//     color: "bg-amber-900",
//     iconBg: "bg-amber-500",
//     icon: "⏳",
//   },
//   {
//     label: "Revenue (MTD)",
//     value: "$0K",
//     color: "bg-violet-900",
//     iconBg: "bg-violet-500",
//     icon: "💰",
//   },
// ];

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-2">
//         <div>
//           <p className="text-xs font-semibold text-indigo-500 tracking-wide uppercase">
//             Admin
//           </p>
//           <h2 className="text-2xl font-semibold mt-1 text-slate-100">
//             Admin Dashboard
//           </h2>
//           <p className="text-sm text-slate-400">
//             Manage users, courses and overall platform performance.
//           </p>
//         </div>
//       </div>

//       {/* ✅ NEW: Switch Panels Buttons */}
//       <div className="flex flex-wrap gap-3">
//         <button
//           onClick={() => navigate("/admin")}
//           className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium"
//         >
//           Admin Panel
//         </button>

//         <button
//           onClick={() => navigate("/student")}
//           className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium"
//         >
//           Student Panel
//         </button>

//         <button
//           onClick={() => navigate("/trainer")}
//           className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium"
//         >
//           Trainer Panel
//         </button>

//         <button
//           onClick={() => navigate("/business")}
//           className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium"
//         >
//           Business Panel
//         </button>
//       </div>

//       {/* Stats */}
//       <div className="grid gap-4 md:grid-cols-4">
//         {stats.map((item) => (
//           <div
//             key={item.label}
//             className={`rounded-2xl p-4 flex flex-col justify-between shadow-sm ${item.color}`}
//           >
//             <div className="flex items-center justify-between mb-3">
//               <p className="text-xs font-medium text-slate-100">{item.label}</p>
//               <div
//                 className={`w-9 h-9 rounded-full ${item.iconBg} flex items-center justify-center text-white`}
//               >
//                 <span className="text-lg">{item.icon}</span>
//               </div>
//             </div>
//             <p className="text-2xl font-semibold text-slate-50">{item.value}</p>
//             <p className="mt-1 text-xs text-emerald-400">↑ 0%</p>
//           </div>
//         ))}
//       </div>

//       {/* Completion / engagement */}
//       <div className="grid gap-4 md:grid-cols-2">
//         <div className="rounded-2xl p-4 bg-slate-900/80 border border-slate-800">
//           <p className="text-xs font-medium text-slate-300">Completion rate</p>
//           <p className="mt-3 text-2xl font-semibold text-slate-50">0%</p>
//           <p className="mt-1 text-xs text-emerald-400">↑ 0%</p>
//         </div>
//         <div className="rounded-2xl p-4 bg-slate-900/80 border border-slate-800">
//           <p className="text-xs font-medium text-slate-300">Engagement score</p>
//           <p className="mt-3 text-2xl font-semibold text-slate-50">0%</p>
//           <p className="mt-1 text-xs text-emerald-400">↑ 0%</p>
//         </div>
//       </div>

//       {/* Key reports */}
//       <section className="bg-slate-900/80 rounded-2xl border border-slate-800 p-5">
//         <div className="flex items-center justify-between mb-3">
//           <div>
//             <h3 className="font-semibold text-slate-50">Key reports</h3>
//             <p className="text-xs text-slate-400">
//               High-level summary of platform performance.
//             </p>
//           </div>
//           <button className="text-xs text-violet-400 hover:text-violet-300 font-medium">
//             View detailed reports
//           </button>
//         </div>

//         <div className="rounded-xl border border-slate-800 px-4 py-6 text-sm text-slate-400">
//           Report widgets will come here (user growth, revenue trends, course
//           performance).
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminDashboard;




import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  BookOpen,
  Clock,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Target,
  Activity,
  UserCheck,
  GraduationCap,
  BarChart3,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      label: "Total Users",
      value: "0",
      change: "+0%",
      trend: "up",
      icon: Users,
      color: "from-sky-500 to-sky-600",
      bgColor: "bg-sky-50 dark:bg-sky-500/10",
      borderColor: "border-sky-200 dark:border-sky-500/20",
      hoverColor: "hover:bg-sky-100 dark:hover:bg-sky-500/20",
      textColor: "text-sky-600 dark:text-sky-400",
    },
    {
      label: "Active Courses",
      value: "0",
      change: "+0%",
      trend: "up",
      icon: BookOpen,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
      borderColor: "border-emerald-200 dark:border-emerald-500/20",
      hoverColor: "hover:bg-emerald-100 dark:hover:bg-emerald-500/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      label: "Pending Approvals",
      value: "0",
      change: "0%",
      trend: "neutral",
      icon: Clock,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-500/10",
      borderColor: "border-amber-200 dark:border-amber-500/20",
      hoverColor: "hover:bg-amber-100 dark:hover:bg-amber-500/20",
      textColor: "text-amber-600 dark:text-amber-400",
    },
    {
      label: "Revenue (MTD)",
      value: "$0K",
      change: "+0%",
      trend: "up",
      icon: DollarSign,
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-50 dark:bg-violet-500/10",
      borderColor: "border-violet-200 dark:border-violet-500/20",
      hoverColor: "hover:bg-violet-100 dark:hover:bg-violet-500/20",
      textColor: "text-violet-600 dark:text-violet-400",
    },
  ];

  const quickActions = [
    {
      label: "Admin Panel",
      route: "/admin",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      label: "Student Panel",
      route: "/student",
      color: "from-sky-500 to-sky-600",
      bgColor: "bg-sky-600 hover:bg-sky-700",
    },
    {
      label: "Trainer Panel",
      route: "/trainer",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-600 hover:bg-emerald-700",
    },
    {
      label: "Business Panel",
      route: "/business",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-600 hover:bg-amber-700",
    },
  ];

  const performanceMetrics = [
    {
      label: "Completion Rate",
      value: "0%",
      change: "+0%",
      trend: "up",
      icon: Target,
      color: "text-emerald-600 dark:text-emerald-400",
    },
    {
      label: "Engagement Score",
      value: "0%",
      change: "+0%",
      trend: "up",
      icon: Activity,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      label: "Active Students",
      value: "0",
      change: "+0%",
      trend: "up",
      icon: UserCheck,
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      label: "Courses Completed",
      value: "0",
      change: "+0%",
      trend: "up",
      icon: GraduationCap,
      color: "text-orange-600 dark:text-orange-400",
    },
  ];

  const recentActivity = [
    {
      title: "New user registration",
      description: "No recent activity",
      time: "--",
      icon: Users,
      color: "bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      title: "Course enrollment",
      description: "No recent activity",
      time: "--",
      icon: BookOpen,
      color:
        "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Pending approval",
      description: "No pending items",
      time: "--",
      icon: Clock,
      color:
        "bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
            Admin Portal
          </p>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 tracking-tight mt-1">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
            Manage users, courses and overall platform performance
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 shadow-sm">
            <p className="text-xs text-gray-500 dark:text-slate-400">
              Current Month
            </p>
            <p className="text-sm font-semibold text-gray-900 dark:text-slate-200">
              January 2026
            </p>
          </div>
        </div>
      </div>

      {/* Quick Panel Navigation */}
      <div className="flex flex-wrap gap-3">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={() => navigate(action.route)}
            className={`px-5 py-2.5 rounded-xl ${action.bgColor} text-white text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
          >
            {action.label}
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;

          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${stat.bgColor} border ${stat.borderColor} p-6 ${stat.hoverColor} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div
                  className={`flex items-center gap-1 text-xs font-medium ${
                    stat.trend === "up"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-gray-500 dark:text-slate-400"
                  }`}
                >
                  <TrendIcon className="w-3.5 h-3.5" />
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-slate-400 uppercase tracking-wide">
                  {stat.label}
                </p>
                <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 dark:from-white/0 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          );
        })}
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="rounded-xl bg-white dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50 p-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className={`w-5 h-5 ${metric.color}`} />
                <span
                  className={`text-xs font-medium ${
                    metric.trend === "up"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-gray-500 dark:text-slate-400"
                  }`}
                >
                  {metric.change}
                </span>
              </div>
              <p className="text-xs font-medium text-gray-600 dark:text-slate-400">
                {metric.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Key Reports - Takes 2 columns */}
        <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Key Reports
              </h2>
              <p className="text-xs text-gray-600 dark:text-slate-400 mt-1">
                High-level summary of platform performance
              </p>
            </div>
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-lg transition-colors">
              View Details
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Placeholder Report Cards */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-500/5 dark:to-indigo-500/5 border border-blue-200 dark:border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-500/10">
                  <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-600 dark:text-slate-400">
                    User Growth
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    0%
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-slate-400">
                Monthly growth rate
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-500/5 dark:to-green-500/5 border border-emerald-200 dark:border-emerald-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-500/10">
                  <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-600 dark:text-slate-400">
                    Revenue Trend
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    $0K
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-slate-400">
                This month vs last month
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-500/5 dark:to-violet-500/5 border border-purple-200 dark:border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-500/10">
                  <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-600 dark:text-slate-400">
                    Course Performance
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    0%
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-slate-400">
                Average completion rate
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-500/5 dark:to-amber-500/5 border border-orange-200 dark:border-orange-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-500/10">
                  <Calendar className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-600 dark:text-slate-400">
                    Active Sessions
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    0
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-slate-400">
                Currently ongoing classes
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity - Takes 1 column */}
        <div className="rounded-2xl bg-white dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700/50 hover:border-gray-300 dark:hover:border-slate-600 transition-colors"
                >
                  <div className={`p-2 rounded-lg ${activity.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-slate-100">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-slate-400 mt-1">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-slate-500 mt-2">
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700/50">
            <button className="w-full py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
              View All Activity →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;