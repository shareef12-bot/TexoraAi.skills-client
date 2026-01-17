// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:9000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // ✅ JWT INTERCEPTOR (unchanged logic, safer token read)
// API.interceptors.request.use(
//   (config) => {
//     const token =
//       localStorage.getItem("token") ||
//       localStorage.getItem("accessToken") ||
//       localStorage.getItem("jwt");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // =====================
// // QUIZ APIs
// // =====================
// export const createQuiz = (quiz) => API.post("/quizzes", quiz);
// export const getQuizById = (id) => API.get(`/quizzes/${id}`);
// export const getAllQuizzes = () => API.get("/quizzes");
// export const deleteQuiz = (id) => API.delete(`/quizzes/${id}`);

// // =====================
// // QUESTION APIs
// // =====================
// export const addQuestion = (question) => API.post("/questions", question);

// // =====================
// // OPTION APIs
// // =====================
// export const addOption = (option) => API.post("/options", option);

// // =====================
// // ATTEMPT APIs
// // =====================
// export const submitQuizAttempt = (attempt) =>
//   API.post("/attempts/submit", attempt);

// export const getAttemptById = (id) => API.get(`/attempts/${id}`);

// export default {
//   createQuiz,
//   getQuizById,
//   getAllQuizzes,
//   deleteQuiz,
//   addQuestion,
//   addOption,
//   submitQuizAttempt,
//   getAttemptById,
// };

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:9000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // 🔐 JWT INTERCEPTOR (ONLY ADD lms_token)
// API.interceptors.request.use(
//   (config) => {
//     const token =
//       localStorage.getItem("lms_token") || // ✅ ADD THIS
//       localStorage.getItem("token") ||
//       localStorage.getItem("accessToken") ||
//       localStorage.getItem("jwt");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // =====================
// // QUIZ APIs
// // =====================
// export const createQuiz = (quiz) => API.post("/quizzes", quiz);
// export const getQuizById = (id) => API.get(`/quizzes/${id}`);
// export const getAllQuizzes = () => API.get("/quizzes");
// export const deleteQuiz = (id) => API.delete(`/quizzes/${id}`);

// // =====================
// // QUESTION APIs
// // =====================
// export const addQuestion = (question) => API.post("/questions", question);

// // =====================
// // OPTION APIs
// // =====================
// export const addOption = (option) => API.post("/options", option);

// // =====================
// // ATTEMPT APIs
// // =====================
// export const submitQuizAttempt = (attempt) =>
//   API.post("/attempts/submit", attempt);

// export const getAttemptById = (id) => API.get(`/attempts/${id}`);

// export default {
//   createQuiz,
//   getQuizById,
//   getAllQuizzes,
//   deleteQuiz,
//   addQuestion,
//   addOption,
//   submitQuizAttempt,
//   getAttemptById,
// };

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("lms_token") ||
    localStorage.getItem("token") ||
    localStorage.getItem("accessToken") ||
    localStorage.getItem("jwt");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// QUIZ
export const createQuiz = (quiz) => API.post("/quizzes", quiz);
export const getQuizById = (id) => API.get(`/quizzes/${id}`);
export const getAllQuizzes = () => API.get("/quizzes");
export const deleteQuiz = (id) => API.delete(`/quizzes/${id}`);

// QUESTION
export const addQuestion = (question) => API.post("/questions", question);

// OPTION
export const addOption = (option) => API.post("/options", option);

// ATTEMPT
export const submitQuizAttempt = (attempt) =>
  API.post("/attempts/submit", attempt);

export const getAttemptById = (id) => API.get(`/attempts/${id}`);

export const hasAttempted = (quizId) =>
  API.get(`/attempts/has-attempted/${quizId}`);

export const getMyQuizHistory = () => API.get("/attempts/my");

export default {
  createQuiz,
  getQuizById,
  getAllQuizzes,
  deleteQuiz,
  addQuestion,
  addOption,
  submitQuizAttempt,
  getAttemptById,
  hasAttempted,
  getMyQuizHistory,
};
