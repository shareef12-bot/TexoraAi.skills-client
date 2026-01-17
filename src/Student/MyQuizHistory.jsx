// import React, { useEffect, useState } from "react";
// import { getMyAttempts } from "../services/assessmentService";

// export default function MyQuizHistory() {
//   const [attempts, setAttempts] = useState([]);

//   useEffect(() => {
//     loadHistory();
//   }, []);

//   const loadHistory = async () => {
//     const res = await API.get("/attempts/my");
//     setAttempts(res.data);
//   };

//   return (
//     <div className="space-y-4">
//       <h1 className="text-2xl text-white">My Quiz History</h1>

//       {attempts.map((a) => (
//         <div
//           key={a.id}
//           className="bg-slate-900 p-4 rounded flex justify-between text-white"
//         >
//           <div>
//             <p className="font-semibold">{a.quiz.title}</p>
//             <p className="text-sm text-gray-400">
//               {new Date(a.submittedAt).toLocaleString()}
//             </p>
//           </div>

//           <div className="text-right">
//             <p>Score: {a.score}</p>
//             <p>{((a.score / a.quiz.questions.length) * 100).toFixed(1)}%</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { getMyQuizHistory } from "../services/assessmentService";

// export default function MyQuizHistory() {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadHistory();
//   }, []);

//   const loadHistory = async () => {
//     try {
//       const res = await getMyQuizHistory();
//       setHistory(res.data);
//     } catch (err) {
//       console.error("Failed to load quiz history", err);
//       alert("Failed to load quiz history");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <p className="text-white">Loading...</p>;
//   }

//   return (
//     <div className="space-y-4">
//       <h1 className="text-2xl text-white">My Quiz History</h1>

//       {history.length === 0 && <p className="text-gray-400">No attempts yet</p>}

//       {history.map((a) => (
//         <div
//           key={a.id}
//           className="bg-slate-900 p-4 rounded flex justify-between items-center"
//         >
//           <div>
//             <p className="text-white font-semibold">{a.quiz.title}</p>
//             <p className="text-gray-400 text-sm">
//               {new Date(a.submittedAt).toLocaleString()}
//             </p>
//           </div>

//           <div className="text-right">
//             <p className="text-emerald-400 font-bold">Score: {a.score}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { getMyQuizHistory } from "../services/assessmentService";

export default function MyQuizHistory() {
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await getMyQuizHistory();
      setAttempts(res.data);
    } catch (err) {
      console.error("Failed to load quiz history", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-white mb-6">
        My Quiz History
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : attempts.length === 0 ? (
        <p className="text-gray-400">You have not attempted any quizzes yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-slate-900 rounded-lg overflow-hidden">
            <thead className="bg-slate-800 text-gray-300">
              <tr>
                <th className="px-4 py-3 text-left">Quiz Title</th>
                <th className="px-4 py-3 text-center">Score</th>
                <th className="px-4 py-3 text-center">Total</th>
                <th className="px-4 py-3 text-center">Percentage</th>
                <th className="px-4 py-3 text-center">Attempted On</th>
              </tr>
            </thead>

            <tbody>
              {attempts.map((a) => {
                const total = a.quiz?.questions?.length || 0;
                const percent =
                  total > 0 ? ((a.score * 100) / total).toFixed(1) : 0;

                return (
                  <tr
                    key={a.id}
                    className="border-t border-slate-800 hover:bg-slate-800 transition"
                  >
                    <td className="px-4 py-3 text-white">{a.quiz?.title}</td>

                    <td className="px-4 py-3 text-center text-white">
                      {a.score}
                    </td>

                    <td className="px-4 py-3 text-center text-gray-300">
                      {total}
                    </td>

                    <td
                      className={`px-4 py-3 text-center font-semibold ${
                        percent >= 50 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {percent}%
                    </td>

                    <td className="px-4 py-3 text-center text-gray-400">
                      {new Date(a.submittedAt).toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
