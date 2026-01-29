// src/pages/MyLearning.jsx
import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Play,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MyLearning() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("in-progress");

  const courses = {
    "in-progress": [
      {
        id: 1,
        title: "React Advanced Patterns",
        progress: 65,
        thumbnail:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
        instructor: "John Doe",
        totalLessons: 48,
        completedLessons: 31,
        lastAccessed: "2 hours ago",
      },
      {
        id: 2,
        title: "Node.js & Express Masterclass",
        progress: 42,
        thumbnail:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
        instructor: "Jane Smith",
        totalLessons: 36,
        completedLessons: 15,
        lastAccessed: "1 day ago",
      },
    ],
    completed: [
      {
        id: 3,
        title: "JavaScript Fundamentals",
        progress: 100,
        thumbnail:
          "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400",
        instructor: "Mike Johnson",
        totalLessons: 24,
        completedLessons: 24,
        completedDate: "Dec 15, 2024",
        certificate: true,
      },
    ],
    saved: [
      {
        id: 4,
        title: "TypeScript for Beginners",
        thumbnail:
          "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400",
        instructor: "Sarah Williams",
        totalLessons: 28,
        rating: 4.8,
        students: "12.5k",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Learning
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Track your progress and continue your learning journey
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  12
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Courses
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  8
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Completed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  48h
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learning Time
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  67%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Avg Progress
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab("in-progress")}
                className={`py-4 border-b-2 font-medium transition ${
                  activeTab === "in-progress"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`py-4 border-b-2 font-medium transition ${
                  activeTab === "completed"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setActiveTab("saved")}
                className={`py-4 border-b-2 font-medium transition ${
                  activeTab === "saved"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"
                }`}
              >
                Saved
              </button>
            </div>
          </div>

          {/* Course List */}
          <div className="p-6 space-y-4">
            {courses[activeTab].map((course) => (
              <div
                key={course.id}
                className="flex gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-32 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {course.instructor}
                  </p>

                  {activeTab === "in-progress" && (
                    <>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 transition-all"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {course.progress}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {course.completedLessons}/{course.totalLessons} lessons
                        • Last accessed {course.lastAccessed}
                      </p>
                    </>
                  )}

                  {activeTab === "completed" && (
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-emerald-600 dark:text-emerald-400">
                        ✓ Completed on {course.completedDate}
                      </span>
                      {course.certificate && (
                        <button className="text-blue-600 hover:underline">
                          View Certificate
                        </button>
                      )}
                    </div>
                  )}

                  {activeTab === "saved" && (
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>⭐ {course.rating}</span>
                      <span>• {course.students} students</span>
                      <span>• {course.totalLessons} lessons</span>
                    </div>
                  )}
                </div>

                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2 h-fit">
                  <Play className="w-4 h-4" />
                  {activeTab === "in-progress"
                    ? "Continue"
                    : activeTab === "completed"
                      ? "Review"
                      : "Start"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
