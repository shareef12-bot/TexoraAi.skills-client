// import React from "react";

// const CreateQuiz = () => {
//   return (
//     <div className="space-y-6">
//       <div>
//         <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
//           Assessments
//         </p>
//         <h1 className="text-2xl font-semibold text-slate-100">Create Quiz</h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Build quizzes to evaluate student understanding.
//         </p>
//       </div>

//       <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="Quiz title"
//           />
//           <input
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="Batch / Course"
//           />
//         </div>

//         <textarea
//           rows={3}
//           className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//           placeholder="Instructions for the quiz (optional)."
//         />

//         <div className="rounded-lg bg-slate-950 border border-slate-700 p-4 space-y-3">
//           <p className="text-sm font-semibold text-slate-100">
//             Question 1
//           </p>
//           <input
//             className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="Question text"
//           />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//             <input className="rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100" placeholder="Option A" />
//             <input className="rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100" placeholder="Option B" />
//             <input className="rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100" placeholder="Option C" />
//             <input className="rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100" placeholder="Option D" />
//           </div>
//           <input
//             className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//             placeholder="Correct answer (e.g. Option B)"
//           />
//         </div>

//         <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400">
//           Save quiz
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreateQuiz;

// import React, { useState, useEffect } from "react";
// import {
//   createQuiz,
//   addQuestion,
//   addOption,
// } from "../services/assessmentService";

// import auth from "../auth";

// const CreateQuiz = () => {
//   const [title, setTitle] = useState("");
//   const [batchId, setBatchId] = useState("");
//   const [instructions, setInstructions] = useState("");

//   const [questionText, setQuestionText] = useState("");
//   const [options, setOptions] = useState({
//     A: "",
//     B: "",
//     C: "",
//     D: "",
//   });
//   const [correctOption, setCorrectOption] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [role, setRole] = useState(null);

//   // ✅ READ AUTH USING YOUR auth.js
//   useEffect(() => {
//     if (!auth.isAuthenticated()) {
//       setRole(null);
//       return;
//     }

//     const currentRole = auth.getCurrentRole(); // trainer | admin | student
//     const token = localStorage.getItem("lms_token");

//     console.log("AUTH TOKEN:", token);
//     console.log("AUTH ROLE:", currentRole);

//     setRole(currentRole);
//   }, []);

//   const handleSaveQuiz = async () => {
//     // ✅ AUTH GUARD (matches your gateway rules)
//     if (role !== "trainer" && role !== "admin") {
//       alert("You are not authorized to create quizzes");
//       return;
//     }

//     if (
//       !title ||
//       !batchId ||
//       !questionText ||
//       !options.A ||
//       !options.B ||
//       !options.C ||
//       !options.D ||
//       !correctOption
//     ) {
//       alert("Please fill all required fields");
//       return;
//     }

//     try {
//       setLoading(true);

//       // 1️⃣ Create Quiz
//       const quizRes = await createQuiz({
//         title,
//         instructions,
//         batchId,
//       });

//       const quizId = quizRes.data.id;

//       // 2️⃣ Create Question
//       const questionRes = await addQuestion({
//         quizId,
//         text: questionText,
//       });

//       const questionId = questionRes.data.id;

//       // 3️⃣ Create Options
//       for (const key of ["A", "B", "C", "D"]) {
//         await addOption({
//           questionId,
//           text: options[key],
//           correct: key === correctOption,
//         });
//       }

//       alert("✅ Quiz created successfully");

//       // Reset form
//       setTitle("");
//       setBatchId("");
//       setInstructions("");
//       setQuestionText("");
//       setOptions({ A: "", B: "", C: "", D: "" });
//       setCorrectOption("");
//     } catch (err) {
//       console.error("CREATE QUIZ ERROR:", err);
//       alert("❌ Failed to create quiz");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Optional UI guard
//   if (role && role !== "trainer" && role !== "admin") {
//     return (
//       <div className="text-red-400">
//         You are not authorized to access this page.
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div>
//         <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
//           Assessments
//         </p>
//         <h1 className="text-2xl font-semibold text-slate-100">Create Quiz</h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Build quizzes to evaluate student understanding.
//         </p>
//       </div>

//       <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="Quiz title"
//           />
//           <input
//             value={batchId}
//             onChange={(e) => setBatchId(e.target.value)}
//             className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="Batch / Course ID"
//           />
//         </div>

//         <textarea
//           rows={3}
//           value={instructions}
//           onChange={(e) => setInstructions(e.target.value)}
//           className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//           placeholder="Instructions for the quiz (optional)."
//         />

//         <div className="rounded-lg bg-slate-950 border border-slate-700 p-4 space-y-3">
//           <p className="text-sm font-semibold text-slate-100">Question 1</p>

//           <input
//             value={questionText}
//             onChange={(e) => setQuestionText(e.target.value)}
//             className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
//             placeholder="Question text"
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//             {["A", "B", "C", "D"].map((key) => (
//               <input
//                 key={key}
//                 value={options[key]}
//                 onChange={(e) =>
//                   setOptions({ ...options, [key]: e.target.value })
//                 }
//                 className="rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//                 placeholder={`Option ${key}`}
//               />
//             ))}
//           </div>

//           <select
//             value={correctOption}
//             onChange={(e) => setCorrectOption(e.target.value)}
//             className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100"
//           >
//             <option value="">Select correct option</option>
//             <option value="A">Option A</option>
//             <option value="B">Option B</option>
//             <option value="C">Option C</option>
//             <option value="D">Option D</option>
//           </select>
//         </div>

//         <button
//           onClick={handleSaveQuiz}
//           disabled={loading}
//           className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 disabled:opacity-50"
//         >
//           {loading ? "Saving..." : "Save quiz"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreateQuiz;

import React, { useState, useEffect } from "react";
import {
  createQuiz,
  addQuestion,
  addOption,
} from "../services/assessmentService";
import auth from "../auth";

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [batchId, setBatchId] = useState("");
  const [instructions, setInstructions] = useState("");

  // 🔥 MULTIPLE QUESTIONS STATE (ADDED)
  const [questions, setQuestions] = useState([
    {
      text: "",
      options: { A: "", B: "", C: "", D: "" },
      correctOption: "",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (!auth.isAuthenticated()) return;
    setRole(auth.getCurrentRole());
  }, []);

  // 🔥 ADD NEW QUESTION (ADDED)
  const addNewQuestion = () => {
    setQuestions([
      ...questions,
      {
        text: "",
        options: { A: "", B: "", C: "", D: "" },
        correctOption: "",
      },
    ]);
  };

  const handleSaveQuiz = async () => {
    if (role !== "trainer" && role !== "admin") {
      alert("Not authorized");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ CREATE QUIZ (UNCHANGED)
      const quizRes = await createQuiz({
        title,
        batchId,
        instructions,
      });

      const quizId = quizRes.data.id;

      // 🔥 2️⃣ LOOP QUESTIONS (ADDED)
      for (const q of questions) {
        const qRes = await addQuestion({
          quizId,
          text: q.text,
        });

        const questionId = qRes.data.id;

        // 🔥 3️⃣ LOOP OPTIONS (ADDED)
        for (const key of ["A", "B", "C", "D"]) {
          await addOption({
            questionId,
            text: q.options[key],
            correct: key === q.correctOption,
          });
        }
      }

      alert("✅ Quiz with multiple questions created");

      // RESET
      setTitle("");
      setBatchId("");
      setInstructions("");
      setQuestions([
        {
          text: "",
          options: { A: "", B: "", C: "", D: "" },
          correctOption: "",
        },
      ]);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to create quiz");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-100">Create Quiz</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Quiz title"
        className="w-full p-2 bg-slate-900 text-white rounded"
      />

      <input
        value={batchId}
        onChange={(e) => setBatchId(e.target.value)}
        placeholder="Batch / Course ID"
        className="w-full p-2 bg-slate-900 text-white rounded"
      />

      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
        className="w-full p-2 bg-slate-900 text-white rounded"
      />

      {/* 🔥 QUESTIONS UI (EXTENDED, NOT CHANGED) */}
      {questions.map((q, index) => (
        <div key={index} className="border p-4 rounded bg-slate-950 space-y-3">
          <p className="text-white font-semibold">Question {index + 1}</p>

          <input
            value={q.text}
            onChange={(e) => {
              const updated = [...questions];
              updated[index].text = e.target.value;
              setQuestions(updated);
            }}
            placeholder="Question text"
            className="w-full p-2 bg-slate-900 text-white rounded"
          />

          {["A", "B", "C", "D"].map((key) => (
            <input
              key={key}
              value={q.options[key]}
              onChange={(e) => {
                const updated = [...questions];
                updated[index].options[key] = e.target.value;
                setQuestions(updated);
              }}
              placeholder={`Option ${key}`}
              className="w-full p-2 bg-slate-900 text-white rounded"
            />
          ))}

          <select
            value={q.correctOption}
            onChange={(e) => {
              const updated = [...questions];
              updated[index].correctOption = e.target.value;
              setQuestions(updated);
            }}
            className="w-full p-2 bg-slate-900 text-white rounded"
          >
            <option value="">Select correct option</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
            <option value="C">Option C</option>
            <option value="D">Option D</option>
          </select>
        </div>
      ))}

      {/* 🔥 ADD QUESTION BUTTON */}
      <button onClick={addNewQuestion} className="text-indigo-400 text-sm">
        ➕ Add another question
      </button>

      <button
        onClick={handleSaveQuiz}
        disabled={loading}
        className="px-4 py-2 bg-emerald-600 text-white rounded"
      >
        {loading ? "Saving..." : "Save Quiz"}
      </button>
    </div>
  );
};

export default CreateQuiz;
