// import React, { useEffect, useState } from "react";
// import { getAllQuizzes, deleteQuiz } from "../services/assessmentService";

// export default function MyQuizzes() {
//   const [quizzes, setQuizzes] = useState([]);

//   useEffect(() => {
//     loadQuizzes();
//   }, []);

//   const loadQuizzes = async () => {
//     const res = await getAllQuizzes();
//     setQuizzes(res.data);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this quiz?")) return;

//     try {
//       await deleteQuiz(id);
//       loadQuizzes(); // refresh list
//     } catch {
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div className="space-y-4">
//       <h1 className="text-2xl text-white">My Quizzes</h1>

//       {quizzes.map((q) => (
//         <div
//           key={q.id}
//           className="bg-slate-900 p-4 rounded flex justify-between items-center"
//         >
//           <span className="text-white">{q.title}</span>

//           <button
//             onClick={() => handleDelete(q.id)}
//             className="bg-red-600 px-3 py-1 text-white rounded"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { getAllQuizzes, deleteQuiz } from "../services/assessmentService";
import axios from "axios";

export default function MyQuizzes() {
  const [quizzes, setQuizzes] = useState([]);

  // 🔥 NEW STATES (ADDED)
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    loadQuizzes();
  }, []);

  const loadQuizzes = async () => {
    const res = await getAllQuizzes();
    setQuizzes(res.data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this quiz?")) return;

    try {
      await deleteQuiz(id);
      loadQuizzes(); // refresh list
    } catch {
      alert("Delete failed");
    }
  };

  // 🔥 NEW: LOAD ATTEMPTS FOR A QUIZ
  const loadAttempts = async (quizId) => {
    try {
      const token = localStorage.getItem("lms_token");

      const res = await axios.get(
        `http://localhost:9000/api/attempts/quiz/${quizId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAttempts(res.data);
      setSelectedQuiz(quizId);
    } catch (err) {
      alert("Failed to load attempts");
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl text-white">My Quizzes</h1>

      {quizzes.map((q) => (
        <div
          key={q.id}
          className="bg-slate-900 p-4 rounded flex justify-between items-center"
        >
          <span className="text-white">{q.title}</span>

          <div className="space-x-2">
            {/* 🔥 NEW BUTTON */}
            <button
              onClick={() => loadAttempts(q.id)}
              className="bg-indigo-600 px-3 py-1 text-white rounded"
            >
              View Attempts
            </button>

            {/* ❌ EXISTING DELETE — NOT TOUCHED */}
            <button
              onClick={() => handleDelete(q.id)}
              className="bg-red-600 px-3 py-1 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* 🔥 ATTEMPTS PANEL (NEW) */}
      {selectedQuiz && (
        <div className="mt-6 bg-slate-900 p-4 rounded">
          <h2 className="text-xl text-white mb-3">Quiz Attempts</h2>

          {attempts.length === 0 ? (
            <p className="text-slate-400">
              No one has attempted this quiz yet.
            </p>
          ) : (
            <table className="w-full text-white border">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Student</th>
                  <th className="p-2">Score</th>
                  <th className="p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((a) => (
                  <tr key={a.id} className="border-b">
                    <td className="p-2">{a.userEmail}</td>
                    <td className="p-2 text-center">{a.score}</td>
                    <td className="p-2 text-center">
                      {new Date(a.submittedAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
