// import React, { useEffect, useState, useRef } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import assessmentService from "../services/assessmentService";
// import auth from "../auth";

// const QUIZ_DURATION_SECONDS = 300; // ⏱️ 5 minutes

// const AttemptQuiz = () => {
//   const { quizId } = useParams();
//   const location = useLocation(); // ✅ FIX 1
//   const [quiz, setQuiz] = useState(null);
//   const [answers, setAnswers] = useState({});

//   const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION_SECONDS);
//   const [alreadyAttempted, setAlreadyAttempted] = useState(false);
//   const [error, setError] = useState("");

//   const timerRef = useRef(null);

//   // ================= FETCH QUIZ (FIXED) =================
//   useEffect(() => {
//     const loadQuiz = async () => {
//       try {
//         // 1️⃣ Ask backend if this user already attempted
//         const attemptRes = await assessmentService.hasAttempted(quizId);

//         if (attemptRes.data === true) {
//           setAlreadyAttempted(true);
//           setError(
//             "You already submitted this quiz. Try again after 24 hours."
//           );
//           return; // ⛔ STOP — do not load quiz
//         }

//         // 2️⃣ Load quiz only if allowed
//         const res = await assessmentService.getQuizById(quizId);
//         setQuiz(res.data);
//       } catch (err) {
//         setAlreadyAttempted(true);
//         setError("You already submitted this quiz. Try again after 24 hours.");
//       }
//     };

//     loadQuiz();
//   }, [quizId, location.key]); // ✅ FIX 2 (THIS LINE WAS THE MISSING BUG)

//   // ================= TIMER =================
//   useEffect(() => {
//     if (alreadyAttempted || !quiz) return;

//     timerRef.current = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timerRef.current);
//           autoSubmit();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timerRef.current);
//   }, [alreadyAttempted, quiz]);

//   // ================= AUTO SUBMIT =================
//   const autoSubmit = async () => {
//     if (alreadyAttempted || !quiz) return;

//     try {
//       const payload = {
//         quizId: quiz.id,
//         answers: Object.entries(answers).map(([qId, optId]) => ({
//           questionId: qId,
//           selectedOptionId: optId,
//         })),
//       };

//       const res = await assessmentService.submitQuizAttempt(payload);
//       alert(`⏱️ Time up! Score: ${res.data.percentage}%`);
//       setAlreadyAttempted(true);
//     } catch (err) {
//       setError("Auto submission failed");
//     }
//   };

//   // ================= MANUAL SUBMIT =================
//   const submitQuiz = async () => {
//     try {
//       const payload = {
//         quizId: quiz.id,
//         answers: Object.entries(answers).map(([qId, optId]) => ({
//           questionId: qId,
//           selectedOptionId: optId,
//         })),
//       };

//       const res = await assessmentService.submitQuizAttempt(payload);
//       alert(`Score: ${res.data.percentage}%`);
//       setAlreadyAttempted(true);
//       clearInterval(timerRef.current);
//     } catch (err) {
//       if (err.response?.status === 403) {
//         setAlreadyAttempted(true);
//         setError("You already submitted this quiz. Try again after 24 hours.");
//       } else {
//         setError("Failed to submit quiz");
//       }
//     }
//   };

//   // ⛔ BLOCKED VIEW
//   if (alreadyAttempted) {
//     return (
//       <div className="p-6 text-center text-red-400">
//         {error || "You already submitted this quiz. Try again after 24 hours."}
//       </div>
//     );
//   }

//   if (!quiz) return <p className="p-6 text-slate-300">Loading quiz...</p>;

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold text-slate-100">{quiz.title}</h1>

//       <p className="text-yellow-400 font-semibold">
//         Time left: {minutes}:{seconds.toString().padStart(2, "0")}
//       </p>

//       {error && <p className="text-red-500">{error}</p>}

//       {quiz.questions.map((q) => (
//         <div
//           key={q.id}
//           className="bg-white p-4 rounded-xl shadow text-gray-900"
//         >
//           <p className="font-semibold mb-2">{q.text}</p>

//           {q.options.map((opt) => (
//             <label key={opt.id} className="block mb-1 text-gray-800">
//               <input
//                 type="radio"
//                 name={`q-${q.id}`}
//                 className="mr-2"
//                 onChange={() => setAnswers({ ...answers, [q.id]: opt.id })}
//               />
//               {opt.text}
//             </label>
//           ))}
//         </div>
//       ))}

//       <button
//         onClick={submitQuiz}
//         className="px-4 py-2 bg-green-600 text-white rounded-xl"
//       >
//         Submit Quiz
//       </button>
//     </div>
//   );
// };

// export default AttemptQuiz;

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import assessmentService from "../services/assessmentService";

const QUIZ_DURATION_SECONDS = 300;

const AttemptQuiz = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});

  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION_SECONDS);
  const [alreadyAttempted, setAlreadyAttempted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // 🔥 THIS WAS MISSING

  const timerRef = useRef(null);

  // ================= LOAD QUIZ SAFELY =================
  useEffect(() => {
    const loadQuiz = async () => {
      try {
        setLoading(true);

        const attemptRes = await assessmentService.hasAttempted(quizId);

        if (attemptRes.data === true) {
          setAlreadyAttempted(true);
          setError(
            "You already submitted this quiz. Try again after 24 hours."
          );
          setLoading(false);
          return; // ⛔ STOP — do NOT load quiz
        }

        const res = await assessmentService.getQuizById(quizId);
        setQuiz(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Unable to load quiz");
        setLoading(false);
      }
    };

    loadQuiz();
  }, [quizId]);

  // ================= TIMER =================
  useEffect(() => {
    if (alreadyAttempted || !quiz) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          autoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [alreadyAttempted, quiz]);

  // ================= AUTO SUBMIT =================
  const autoSubmit = async () => {
    if (alreadyAttempted || !quiz) return;

    try {
      const payload = {
        quizId: quiz.id,
        answers: Object.entries(answers).map(([qId, optId]) => ({
          questionId: qId,
          selectedOptionId: optId,
        })),
      };

      const res = await assessmentService.submitQuizAttempt(payload);
      alert(`⏱️ Time up! Score: ${res.data.percentage}%`);
      setAlreadyAttempted(true);
    } catch {
      setError("Auto submission failed");
    }
  };

  // ================= MANUAL SUBMIT =================
  const submitQuiz = async () => {
    try {
      const payload = {
        quizId: quiz.id,
        answers: Object.entries(answers).map(([qId, optId]) => ({
          questionId: qId,
          selectedOptionId: optId,
        })),
      };

      const res = await assessmentService.submitQuizAttempt(payload);
      alert(`Score: ${res.data.percentage}%`);
      setAlreadyAttempted(true);
      clearInterval(timerRef.current);
    } catch (err) {
      if (err.response?.status === 403) {
        setError("You already submitted this quiz. Try again after 24 hours.");
        setAlreadyAttempted(true);
      } else {
        setError("Failed to submit quiz");
      }
    }
  };

  // 🔥 VERY IMPORTANT
  if (loading) {
    return <p className="p-6 text-slate-300">Loading...</p>;
  }

  if (alreadyAttempted) {
    return (
      <div className="p-6 text-center text-red-400">
        {error || "You already submitted this quiz. Try again after 24 hours."}
      </div>
    );
  }

  if (!quiz) return <p className="p-6 text-slate-300">Loading quiz...</p>;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-slate-100">{quiz.title}</h1>

      <p className="text-yellow-400 font-semibold">
        Time left: {minutes}:{seconds.toString().padStart(2, "0")}
      </p>

      {quiz.questions.map((q) => (
        <div
          key={q.id}
          className="bg-white p-4 rounded-xl shadow text-gray-900"
        >
          <p className="font-semibold mb-2">{q.text}</p>

          {q.options.map((opt) => (
            <label key={opt.id} className="block mb-1 text-gray-800">
              <input
                type="radio"
                name={`q-${q.id}`}
                className="mr-2"
                onChange={() => setAnswers({ ...answers, [q.id]: opt.id })}
              />
              {opt.text}
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={submitQuiz}
        className="px-4 py-2 bg-green-600 text-white rounded-xl"
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default AttemptQuiz;
