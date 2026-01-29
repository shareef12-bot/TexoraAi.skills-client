// import React from "react";

// const DashboardPage = () => {
//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
//           Student
//         </p>
//         <h1 className="text-2xl font-semibold text-slate-100">
//           Student Dashboard
//         </h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Quick overview of your learning progress and recent updates.
//         </p>
//       </div>

//       {/* Top stats cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
//           <p className="text-xs text-slate-400 uppercase">Active courses</p>
//           <p className="mt-2 text-3xl font-semibold text-white">4</p>
//         </div>
//         <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
//           <p className="text-xs text-slate-400 uppercase">Completed courses</p>
//           <p className="mt-2 text-3xl font-semibold text-white">2</p>
//         </div>
//         <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
//           <p className="text-xs text-slate-400 uppercase">Pending assessments</p>
//           <p className="mt-2 text-3xl font-semibold text-white">3</p>
//         </div>
//         <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
//           <p className="text-xs text-slate-400 uppercase">Attendance (%)</p>
//           <p className="mt-2 text-3xl font-semibold text-white">92%</p>
//         </div>
//       </div>

//       {/* Bottom cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Upcoming items */}
//         <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
//           <h2 className="text-sm font-semibold text-slate-100">
//             Upcoming items
//           </h2>
//           <p className="mt-1 text-xs text-slate-400">Next 7 days schedule.</p>
//           <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
//             <li>Live session: React State Management – Tomorrow, 7 PM</li>
//             <li>Quiz: JavaScript Basics – In 3 days</li>
//             <li>Project checkpoint submission – In 5 days</li>
//           </ul>
//         </div>

//         {/* Recent activity */}
//         <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">
//           <h2 className="text-sm font-semibold text-slate-100">
//             Recent activity
//           </h2>
//           <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
//             <li>Completed: React Hooks Deep Dive</li>
//             <li>New assignment added in Node.js Backend</li>
//             <li>Instructor replied to your doubt in UI/UX</li>
//             <li>New video uploaded in Database Architecture</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;



import React, { useState } from "react";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Percent,
  Calendar,
  Bell,
  TrendingUp,
  Award,
  Target,
  Activity,
  Play,
  FileText,
  Video,
  ChevronRight,
} from "lucide-react";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Stats data
  const stats = [
    {
      label: "Active Courses",
      value: "0",
      change: "+0 this month",
      icon: BookOpen,
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      label: "Completed Courses",
      value: "0",
      change: "+0 completed",
      icon: CheckCircle,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      label: "Pending Assessments",
      value: "0",
      change: "0 overdue",
      icon: Clock,
      gradient: "from-amber-500 to-orange-600",
    },
    {
      label: "Attendance",
      value: "0%",
      change: "0% target",
      icon: Percent,
      gradient: "from-sky-500 to-blue-600",
    },
  ];

  const courseProgress = [
    { name: "React Advanced", progress: 0, color: "bg-indigo-500" },
    { name: "Node.js Backend", progress: 0, color: "bg-emerald-500" },
    { name: "UI/UX Design", progress: 0, color: "bg-purple-500" },
    { name: "Database Architecture", progress: 0, color: "bg-blue-500" },
  ];

  const upcomingEvents = [
    { title: "Live session: React State Management", date: "Tomorrow, 7 PM", type: "live", icon: "🎥" },
    { title: "Quiz: JavaScript Basics", date: "In 3 days", type: "quiz", icon: "📝" },
    { title: "Project checkpoint submission", date: "In 5 days", type: "assignment", icon: "📋" },
    { title: "Mentor 1-on-1 Session", date: "In 6 days", type: "meeting", icon: "👨‍🏫" },
  ];

  const recentActivity = [
    { action: "Completed: React Hooks Deep Dive", time: "2 hours ago", icon: "✅" },
    { action: "New assignment added in Node.js Backend", time: "5 hours ago", icon: "📚" },
    { action: "Instructor replied to your doubt in UI/UX", time: "1 day ago", icon: "💬" },
    { action: "New video uploaded in Database Architecture", time: "2 days ago", icon: "🎬" },
  ];

  const achievements = [
    { title: "Quick Learner", desc: "Complete 5 courses", icon: "🚀", unlocked: false },
    { title: "Perfect Attendance", desc: "100% attendance for a month", icon: "🎯", unlocked: false },
    { title: "Top Performer", desc: "Score 90+ in 3 assessments", icon: "🏆", unlocked: false },
  ];

  // Courses Page Data
  const allCourses = [
    {
      id: 1,
      title: "React Advanced Concepts",
      instructor: "John Doe",
      progress: 0,
      totalLessons: 24,
      completedLessons: 0,
      duration: "12 weeks",
      image: "🎨",
      status: "In Progress",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: 2,
      title: "Node.js Backend Development",
      instructor: "Jane Smith",
      progress: 0,
      totalLessons: 30,
      completedLessons: 0,
      duration: "10 weeks",
      image: "💻",
      status: "In Progress",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Mike Johnson",
      progress: 0,
      totalLessons: 18,
      completedLessons: 0,
      duration: "8 weeks",
      image: "🎯",
      status: "In Progress",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      title: "Database Architecture & Design",
      instructor: "Sarah Williams",
      progress: 0,
      totalLessons: 20,
      completedLessons: 0,
      duration: "9 weeks",
      image: "🗄️",
      status: "In Progress",
      color: "from-blue-500 to-cyan-600",
    },
  ];

  // Progress Page Data
  const weeklyProgress = [
    { day: "Mon", hours: 0 },
    { day: "Tue", hours: 0 },
    { day: "Wed", hours: 0 },
    { day: "Thu", hours: 0 },
    { day: "Fri", hours: 0 },
    { day: "Sat", hours: 0 },
    { day: "Sun", hours: 0 },
  ];

  const skillProgress = [
    { skill: "React.js", level: 0, maxLevel: 100, color: "bg-blue-500" },
    { skill: "Node.js", level: 0, maxLevel: 100, color: "bg-green-500" },
    { skill: "UI/UX", level: 0, maxLevel: 100, color: "bg-purple-500" },
    { skill: "Database", level: 0, maxLevel: 100, color: "bg-orange-500" },
    { skill: "Problem Solving", level: 0, maxLevel: 100, color: "bg-pink-500" },
  ];

  const certificates = [
    { title: "React Fundamentals", date: "Not Earned", status: "locked", icon: "🎓" },
    { title: "Advanced JavaScript", date: "Not Earned", status: "locked", icon: "📜" },
    { title: "Full Stack Developer", date: "Not Earned", status: "locked", icon: "🏆" },
  ];

  // OVERVIEW PAGE
  const OverviewPage = () => (
    <div className="space-y-6">
      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-[1px] hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundImage: `linear-gradient(135deg, ${item.gradient})` }}
            >
              <div className="h-full rounded-2xl bg-white dark:bg-slate-900 p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                    {item.label}
                  </p>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  {item.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  {item.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Course Progress Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">
            Course Progress
          </h2>
        </div>
        <div className="space-y-4">
          {courseProgress.map((course) => (
            <div key={course.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-900 dark:text-slate-100">{course.name}</span>
                <span className="text-slate-600 dark:text-slate-400">{course.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`${course.color} h-2.5 rounded-full transition-all duration-500`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Upcoming Events */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">
              Upcoming
            </h2>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex gap-3">
                  <div className="text-2xl">{event.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                      {event.title}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      {event.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">
              Activity
            </h2>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                <div className="text-xl">{activity.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-900 dark:text-slate-100 truncate">
                    {activity.action}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">
              Achievements
            </h2>
          </div>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 transition-all ${
                  achievement.unlocked
                    ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                    : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {achievement.title}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {achievement.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // COURSES PAGE
  const CoursesPage = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">My Courses</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Track your enrolled courses and progress
          </p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all text-sm font-medium">
          Browse Courses
        </button>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allCourses.map((course) => (
          <div
            key={course.id}
            className="group bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Course Header with Gradient */}
            <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center text-6xl`}>
              {course.image}
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    by {course.instructor}
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                  {course.status}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 mb-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${course.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Course Stats */}
              <div className="flex items-center gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <Video className="w-4 h-4" />
                  <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all font-medium text-sm flex items-center justify-center gap-2 group-hover:bg-indigo-600 group-hover:text-white">
                Continue Learning
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // PROGRESS PAGE
  const ProgressPage = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Learning Progress</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Track your learning journey and achievements
        </p>
      </div>

      {/* Weekly Activity */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Weekly Activity</h3>
        </div>
        <div className="flex items-end justify-between gap-3 h-48">
          {weeklyProgress.map((day) => (
            <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-t-lg relative overflow-hidden" style={{ height: '100%' }}>
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-500 to-purple-500 transition-all duration-500"
                  style={{ height: `${(day.hours / 5) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{day.day}</span>
              <span className="text-xs text-slate-500 dark:text-slate-500">{day.hours}h</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Progress */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Skills Development</h3>
        </div>
        <div className="space-y-5">
          {skillProgress.map((skill) => (
            <div key={skill.skill}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{skill.skill}</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">{skill.level}/{skill.maxLevel}</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`${skill.color} h-3 rounded-full transition-all duration-500 relative`}
                  style={{ width: `${(skill.level / skill.maxLevel) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Certificates</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl border-2 transition-all ${
                cert.status === "earned"
                  ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
                  : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 opacity-60"
              }`}
            >
              <div className="text-4xl mb-3 text-center">{cert.icon}</div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 text-center mb-1">
                {cert.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white">
          <p className="text-sm opacity-90 mb-2">Total Learning Hours</p>
          <p className="text-4xl font-bold">0h</p>
          <p className="text-xs opacity-75 mt-2">This month</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
          <p className="text-sm opacity-90 mb-2">Assignments Completed</p>
          <p className="text-4xl font-bold">0</p>
          <p className="text-xs opacity-75 mt-2">Out of 0 total</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
          <p className="text-sm opacity-90 mb-2">Average Score</p>
          <p className="text-4xl font-bold">0%</p>
          <p className="text-xs opacity-75 mt-2">Across all courses</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* HEADER with Tab Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
              Student Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-slate-400">
              Quick overview of your learning progress and recent updates.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 bg-white dark:bg-slate-800 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "overview"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "courses"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => setActiveTab("progress")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "progress"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              Progress
            </button>
          </div>
        </div>

        {/* Render Active Page */}
        {activeTab === "overview" && <OverviewPage />}
        {activeTab === "courses" && <CoursesPage />}
        {activeTab === "progress" && <ProgressPage />}
      </div>
    </div>
  );
};

export default DashboardPage;