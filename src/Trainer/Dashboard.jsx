// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-2xl font-semibold text-slate-100">
//           Trainer Dashboard
//         </h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Manage your batches and track student progress.
//         </p>
//       </div>

//       {/* Top stats cards (clickable) */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <button
//           onClick={() => navigate("/trainer/batches")}
//           className="text-left rounded-xl bg-slate-900 border border-slate-700 p-4 hover:bg-slate-800 transition"
//         >
//           <p className="text-xs text-slate-400">Active Batches</p>
//           <p className="mt-2 text-3xl font-semibold text-white">0</p>
//         </button>

//         <button
//           onClick={() => navigate("/trainer/student-reports")}
//           className="text-left rounded-xl bg-emerald-900/70 border border-emerald-700 p-4 hover:bg-emerald-800 transition"
//         >
//           <p className="text-xs text-emerald-100/80">Total Students</p>
//           <p className="mt-2 text-3xl font-semibold text-white">0</p>
//         </button>

//         <button
//           onClick={() => navigate("/trainer/doubts-management")}
//           className="text-left rounded-xl bg-amber-900/80 border border-amber-700 p-4 hover:bg-amber-800 transition"
//         >
//           <p className="text-xs text-amber-100/80">Pending Doubts</p>
//           <p className="mt-2 text-3xl font-semibold text-white">0</p>
//         </button>

//         <button
//           onClick={() => navigate("/trainer/create-quiz")}
//           className="text-left rounded-xl bg-violet-900/80 border border-violet-700 p-4 hover:bg-violet-800 transition"
//         >
//           <p className="text-xs text-violet-100/80">Tests Created</p>
//           <p className="mt-2 text-3xl font-semibold text-white">0</p>
//         </button>
//       </div>

//       {/* Recent batches section */}
//       <section className="rounded-xl bg-slate-900 border border-slate-700 p-4 space-y-3">
//         <div className="flex items-center justify-between">
//           <h2 className="text-sm font-semibold text-white">Recent Batches</h2>
//           <button
//             onClick={() => navigate("/trainer/batches")}
//             className="text-xs text-indigo-300 hover:text-indigo-200"
//           >
//             View all
//           </button>
//         </div>

//         <div className="space-y-2">
//           <div className="flex items-center justify-between rounded-lg bg-slate-800 px-4 py-3">
//             <div>
//               <p className="text-sm font-medium text-slate-100">
//                 Full Stack Batch A
//               </p>
//               <p className="text-xs text-slate-400">25 Students</p>
//             </div>
//             <button
//               onClick={() => navigate("/trainer/batches")}
//               className="text-xs px-3 py-1 rounded-full bg-indigo-500 text-white hover:bg-indigo-400"
//             >
//               View Details
//             </button>
//           </div>

//           <div className="flex items-center justify-between rounded-lg bg-slate-800 px-4 py-3">
//             <div>
//               <p className="text-sm font-medium text-slate-100">
//                 React Evening Batch
//               </p>
//               <p className="text-xs text-slate-400">18 Students</p>
//             </div>
//             <button
//               onClick={() => navigate("/trainer/batches")}
//               className="text-xs px-3 py-1 rounded-full bg-indigo-500 text-white hover:bg-indigo-400"
//             >
//               View Details
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;







import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  BookOpen, 
  MessageCircleQuestion, 
  FileCheck,
  TrendingUp,
  Calendar,
  Award,
  Clock
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      label: "Active Batches",
      value: "0",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-500/10",
      borderColor: "border-blue-200 dark:border-blue-500/20",
      hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-500/20",
      textColor: "text-blue-600 dark:text-blue-400",
      route: "/trainer/batches"
    },
    {
      label: "Total Students",
      value: "0",
      icon: Users,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
      borderColor: "border-emerald-200 dark:border-emerald-500/20",
      hoverColor: "hover:bg-emerald-100 dark:hover:bg-emerald-500/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
      route: "/trainer/student-reports"
    },
    {
      label: "Pending Doubts",
      value: "0",
      icon: MessageCircleQuestion,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-500/10",
      borderColor: "border-amber-200 dark:border-amber-500/20",
      hoverColor: "hover:bg-amber-100 dark:hover:bg-amber-500/20",
      textColor: "text-amber-600 dark:text-amber-400",
      route: "/trainer/doubts-management"
    },
    {
      label: "Tests Created",
      value: "0",
      icon: FileCheck,
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-50 dark:bg-violet-500/10",
      borderColor: "border-violet-200 dark:border-violet-500/20",
      hoverColor: "hover:bg-violet-100 dark:hover:bg-violet-500/20",
      textColor: "text-violet-600 dark:text-violet-400",
      route: "/trainer/create-quiz"
    }
  ];

  const recentBatches = [
    {
      name: "Full Stack Batch A",
      students: 25,
      progress: 68,
      nextClass: "Today, 3:00 PM",
      status: "active"
    },
    {
      name: "React Evening Batch",
      students: 18,
      progress: 45,
      nextClass: "Tomorrow, 6:00 PM",
      status: "active"
    }
  ];

  const quickActions = [
    {
      label: "Create Quiz",
      icon: FileCheck,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-500/10",
      route: "/trainer/create-quiz"
    },
    {
      label: "Upload Content",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-500/10",
      route: "/trainer/upload-videos"
    },
    {
      label: "View Attendance",
      icon: Calendar,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-500/10",
      route: "/trainer/attendance"
    },
    {
      label: "Assessments",
      icon: Award,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-500/10",
      route: "/trainer/assessments"
    }
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 tracking-tight">
            Trainer Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
            Here's what's happening with your batches today
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 shadow-sm">
            <p className="text-xs text-gray-500 dark:text-slate-400">Current Month</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-slate-200">January 2026</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(stat.route)}
              className={`group relative overflow-hidden text-left rounded-2xl ${stat.bgColor} border ${stat.borderColor} p-6 ${stat.hoverColor} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-3 flex-1">
                  <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-600 dark:text-slate-400 uppercase tracking-wide">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                </div>
                <TrendingUp className={`w-4 h-4 ${stat.textColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 dark:from-white/0 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(action.route)}
              className={`group flex items-center gap-3 p-4 rounded-xl ${action.bgColor} border border-gray-200 dark:border-slate-700/50 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300 shadow-sm hover:shadow-md`}
            >
              <div className={`p-2 rounded-lg bg-gradient-to-br ${action.color} shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-slate-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Recent Batches */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Batches</h2>
              <p className="text-xs text-gray-600 dark:text-slate-400 mt-1">Your active training sessions</p>
            </div>
            <button
              onClick={() => navigate("/trainer/batches")}
              className="px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-lg transition-colors"
            >
              View All →
            </button>
          </div>

          <div className="space-y-4">
            {recentBatches.map((batch, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700/50 p-5 hover:bg-gray-100 dark:hover:bg-slate-900 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-slate-100 group-hover:text-gray-950 dark:group-hover:text-white transition-colors">
                        {batch.name}
                      </h3>
                      <span className="px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-500/20 rounded-full">
                        {batch.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-600 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {batch.students} Students
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {batch.nextClass}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/trainer/batches")}
                    className="px-4 py-2 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    View Details
                  </button>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-gray-600 dark:text-slate-400">Course Progress</span>
                    <span className="font-semibold text-gray-900 dark:text-slate-300">{batch.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${batch.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Summary */}
        <div className="rounded-2xl bg-white dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Activity Summary</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-500/10">
                  <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-slate-300">Videos Uploaded</p>
                  <p className="text-xs text-gray-500 dark:text-slate-500">This week</p>
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-slate-100">0</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-500/10">
                  <MessageCircleQuestion className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-slate-300">Doubts Resolved</p>
                  <p className="text-xs text-gray-500 dark:text-slate-500">This week</p>
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-slate-100">0</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-500/10">
                  <Award className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-slate-300">Tests Conducted</p>
                  <p className="text-xs text-gray-500 dark:text-slate-500">This month</p>
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-slate-100">0</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700/50">
            <button className="w-full py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
              View Full Report →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;