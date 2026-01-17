import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Shield,
  Star,
  Users,
  Sparkles,
  TrendingUp,
  Mail,
  Phone,
  User,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Loader,
} from "lucide-react";

export default function Welcome() {
  const [screen, setScreen] = useState("onboarding"); // 'onboarding', 'enrollment', 'dashboard'
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [step, screen]);

  const steps = [
    {
      title: "Welcome to TexoraAi.skills! 🎉",
      description:
        "Industry experts se Product, Design & Growth skills sikho aur apna career next level pe le jao",
      icon: Users,
      bg: "from-blue-500 via-blue-600 to-emerald-500",
      features: ["Live Classes", "Expert Mentors", "Flexible Schedule"],
    },
    {
      title: "Live Mentorship + Projects",
      description:
        "1:1 sessions, real case studies aur hands-on projects se job ready ban jao",
      icon: Star,
      bg: "from-emerald-500 via-teal-500 to-cyan-500",
      features: ["1:1 Mentorship", "Real Projects", "Portfolio Building"],
    },
    {
      title: "Trusted by 50K+ Learners",
      description:
        "95% success rate | Top companies like Google, Amazon hire karte hain",
      icon: Shield,
      bg: "from-purple-500 via-pink-500 to-rose-500",
      features: ["50K+ Students", "95% Success", "Job Placement"],
    },
  ];

  const courses = [
    "Product Management",
    "UI/UX Design",
    "Growth Marketing",
    "Data Analytics",
    "Full Stack Development",
  ];

  const experienceLevels = [
    "Complete Beginner",
    "Some Experience (1-2 years)",
    "Intermediate (2-5 years)",
    "Advanced (5+ years)",
  ];

  const Icon = steps[step]?.icon;

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setScreen("enrollment");
    }
  };

  const handleSkip = () => {
    setScreen("enrollment");
  };

  const handleEnrollmentSubmit = () => {
    if (
      !enrollmentData.name ||
      !enrollmentData.email ||
      !enrollmentData.phone ||
      !enrollmentData.course ||
      !enrollmentData.experience
    ) {
      alert("Please fill all fields!");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setScreen("dashboard");
    }, 2000);
  };

  const handleInputChange = (field, value) => {
    setEnrollmentData((prev) => ({ ...prev, [field]: value }));
  };

  // Onboarding Screen
  if (screen === "onboarding") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div
          className={`max-w-md w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 p-8 text-center space-y-6 relative z-10 transition-all duration-500 ${
            isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <div className="space-y-3">
            <div className="flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === step
                      ? "w-8 bg-gradient-to-r " + steps[step].bg
                      : i < step
                      ? "w-2 bg-blue-500"
                      : "w-2 bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              Step {step + 1} of 3
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative inline-block">
              <div
                className={`w-20 h-20 mx-auto bg-gradient-to-br ${steps[step].bg} rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-6`}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                {steps[step].title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed px-2">
                {steps[step].description}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {steps[step].features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 bg-gradient-to-r ${steps[step].bg} bg-opacity-10 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 backdrop-blur-sm transform transition-all duration-300 hover:scale-105`}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={handleNext}
              className={`w-full bg-gradient-to-r ${steps[step].bg} text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95`}
            >
              <span>{step < 2 ? "Continue" : "Enroll Now"}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleSkip}
              className="w-full text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 py-2 transition-all duration-300 hover:scale-105 font-medium"
            >
              Skip for now →
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                4.9/5
              </span>
            </div>
            <div className="flex items-center gap-1 text-emerald-500">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                50K+
              </span>
            </div>
            <div className="flex items-center gap-1 text-blue-500">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                95%
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Enrollment Screen
  if (screen === "enrollment") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div
          className={`max-w-lg w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 p-8 relative z-10 transition-all duration-500 ${
            isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-2">
              Enroll Karo! 🚀
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Apni details share karo aur learning journey start karo
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                value={enrollmentData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Apna naam enter karo"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                value={enrollmentData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                type="tel"
                value={enrollmentData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Briefcase className="w-4 h-4" />
                Course Interest
              </label>
              <select
                value={enrollmentData.course}
                onChange={(e) => handleInputChange("course", e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Star className="w-4 h-4" />
                Experience Level
              </label>
              <select
                value={enrollmentData.experience}
                onChange={(e) =>
                  handleInputChange("experience", e.target.value)
                }
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
              >
                <option value="">Select experience level</option>
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleEnrollmentSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-500 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Enrolling...</span>
                </>
              ) : (
                <>
                  <span>Complete Enrollment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800 p-4">
      <div className="max-w-6xl mx-auto pt-8">
        {/* Success Message */}
        <div
          className={`bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 p-8 mb-6 transition-all duration-500 ${
            isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl mb-4 animate-bounce">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-2">
              Welcome, {enrollmentData.name}! 🎉
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Successfully enrolled in {enrollmentData.course}
            </p>
            <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Enrollment Complete!</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/50 dark:border-gray-700/50 p-6 hover:scale-105 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              My Courses
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Start learning from expert instructors
            </p>
            <div className="text-3xl font-bold text-blue-600">1</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Active Course
            </p>
          </div>

          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/50 dark:border-gray-700/50 p-6 hover:scale-105 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Mentorship
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Connect with industry experts
            </p>
            <div className="text-3xl font-bold text-emerald-600">0</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sessions Scheduled
            </p>
          </div>

          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/50 dark:border-gray-700/50 p-6 hover:scale-105 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Progress
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Track your learning journey
            </p>
            <div className="text-3xl font-bold text-purple-600">0%</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Course Completion
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/50 dark:border-gray-700/50 p-6 mt-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Next Steps 🚀
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">
                Complete your profile
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
              <span className="text-gray-700 dark:text-gray-300">
                Join your first class
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
              <span className="text-gray-700 dark:text-gray-300">
                Schedule a mentorship session
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
