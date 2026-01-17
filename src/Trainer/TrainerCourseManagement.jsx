// import React, { useState, useEffect } from "react";
// import {
//   Plus,
//   Edit2,
//   Trash2,
//   Eye,
//   Search,
//   BookOpen,
//   Users,
//   Clock,
//   Star,
// } from "lucide-react";
// import axios from "axios";

// const API = "http://localhost:9000";

// const TrainerCourseManagement = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const authHeader = () => ({
//     Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//   });

//   // ================= LOAD COURSES =================
//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const res = await axios.get(`${API}/api/courses/my`, {
//         headers: authHeader(),
//       });
//       setCourses(res.data);
//     } catch (err) {
//       console.error("Failed to load courses", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================= CREATE COURSE =================
//   const createCourse = async () => {
//     const title = prompt("Enter course title");
//     const category = prompt("Enter category");
//     const description = prompt("Enter description");

//     if (!title || !category) return;

//     try {
//       await axios.post(
//         `${API}/api/courses`,
//         { title, category, description },
//         { headers: authHeader() }
//       );

//       fetchCourses();
//     } catch (err) {
//       alert("Failed to create course");
//     }
//   };

//   // ================= DELETE COURSE =================
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this course?")) return;

//     try {
//       await axios.delete(`${API}/api/courses/${id}`, {
//         headers: authHeader(),
//       });

//       setCourses((prev) => prev.filter((c) => c.id !== id));
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   const categories = ["All", "Product", "Design", "Growth & Marketing"];

//   const filteredCourses = courses.filter((course) => {
//     const matchesSearch =
//       course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       course.ownerEmail.toLowerCase().includes(searchQuery.toLowerCase());

//     const matchesCategory =
//       selectedCategory === "All" || course.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="p-6 min-h-screen bg-gray-900 text-white space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-3xl font-bold mb-1">Course Management</h1>
//           <p className="text-gray-400">Manage all your courses and batches</p>
//         </div>
//         <button
//           onClick={createCourse}
//           className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700
//           text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl hover:shadow-2xl transition-all"
//         >
//           <Plus size={20} />
//           New Course
//         </button>
//       </div>

//       {/* Search & Filters */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="lg:col-span-2">
//           <div className="relative bg-gray-800 rounded-xl p-3">
//             <Search
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//               size={20}
//             />
//             <input
//               type="text"
//               placeholder="Search courses or instructors..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-12 pr-4 py-2 bg-transparent text-white border-none outline-none placeholder-gray-400 text-lg"
//             />
//           </div>
//         </div>

//         <div className="flex gap-2 overflow-x-auto pb-2">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all flex-shrink-0 ${
//                 selectedCategory === category
//                   ? "bg-indigo-600 text-white shadow-lg"
//                   : "bg-gray-800 text-gray-400 hover:bg-gray-700"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Course Cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCourses.map((course) => (
//           <div
//             key={course.id}
//             className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/50 hover:bg-gray-700/50 transition-all group"
//           >
//             <div className="flex justify-between items-start mb-4">
//               <span className="bg-green-600/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-full text-xs">
//                 Published
//               </span>
//               <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">
//                 {course.category}
//               </span>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-xl font-bold text-white mb-3">
//                 {course.title}
//               </h3>
//               <p className="text-gray-400 mb-4">{course.ownerEmail}</p>

//               <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
//                 <div className="flex items-center gap-2">
//                   <BookOpen size={16} />8 weeks
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Users size={16} />
//                   --
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Star size={18} className="text-yellow-400 fill-yellow-400" />
//                 <span className="font-semibold text-white">4.8</span>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-3">
//               <button className="bg-indigo-600 py-3 rounded-xl flex justify-center gap-2">
//                 <Edit2 size={18} /> Edit
//               </button>
//               <button className="bg-purple-600 py-3 rounded-xl flex justify-center gap-2">
//                 <BookOpen size={18} /> Modules
//               </button>
//               <button className="bg-gray-700 col-span-2 py-2 rounded-lg flex justify-center gap-2">
//                 <Eye size={16} /> Preview
//               </button>
//               <button
//                 onClick={() => handleDelete(course.id)}
//                 className="bg-red-600 col-span-2 py-2 rounded-lg flex justify-center gap-2"
//               >
//                 <Trash2 size={16} /> Delete Course
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrainerCourseManagement;

// import React, { useState, useEffect } from "react";
// import {
//   Plus,
//   Edit2,
//   Trash2,
//   Eye,
//   Search,
//   BookOpen,
//   Users,
//   Clock,
//   Star,
// } from "lucide-react";
// import axios from "axios";

// const API = "http://localhost:9000";

// const TrainerCourseManagement = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // 🔥 NEW STATE for Edit
//   const [editingCourse, setEditingCourse] = useState(null);
//   const [editForm, setEditForm] = useState({
//     title: "",
//     category: "",
//     description: "",
//   });

//   const authHeader = () => ({
//     Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//   });

//   // ================= LOAD COURSES =================
//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const res = await axios.get(`${API}/api/courses/my`, {
//         headers: authHeader(),
//       });
//       setCourses(res.data);
//     } catch (err) {
//       console.error("Failed to load courses", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================= CREATE COURSE =================
//   const createCourse = async () => {
//     const title = prompt("Enter course title");
//     const category = prompt("Enter category");
//     const description = prompt("Enter description");

//     if (!title || !category) return;

//     try {
//       await axios.post(
//         `${API}/api/courses`,
//         { title, category, description },
//         { headers: authHeader() }
//       );

//       fetchCourses();
//     } catch (err) {
//       alert("Failed to create course");
//     }
//   };

//   // ================= DELETE COURSE =================
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this course?")) return;

//     try {
//       await axios.delete(`${API}/api/courses/${id}`, {
//         headers: authHeader(),
//       });

//       setCourses((prev) => prev.filter((c) => c.id !== id));
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   // ================= EDIT COURSE =================
//   const openEdit = (course) => {
//     setEditingCourse(course);
//     setEditForm({
//       title: course.title,
//       category: course.category,
//       description: course.description || "",
//     });
//   };

//   const saveEdit = async () => {
//     try {
//       await axios.put(`${API}/api/courses/${editingCourse.id}`, editForm, {
//         headers: authHeader(),
//       });
//       setEditingCourse(null);
//       fetchCourses();
//     } catch (err) {
//       alert("Update failed");
//     }
//   };

//   // ================= PREVIEW =================
//   const previewCourse = (id) => {
//     window.open(`/course/${id}`, "_blank");
//   };

//   const categories = ["All", "Product", "Design", "Growth & Marketing"];

//   const filteredCourses = courses.filter((course) => {
//     const matchesSearch =
//       course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       course.ownerEmail.toLowerCase().includes(searchQuery.toLowerCase());

//     const matchesCategory =
//       selectedCategory === "All" || course.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="p-6 min-h-screen bg-gray-900 text-white space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-3xl font-bold mb-1">Course Management</h1>
//           <p className="text-gray-400">Manage all your courses and batches</p>
//         </div>
//         <button
//           onClick={createCourse}
//           className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700
//           text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl hover:shadow-2xl transition-all"
//         >
//           <Plus size={20} />
//           New Course
//         </button>
//       </div>

//       {/* Search & Filters */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="lg:col-span-2">
//           <div className="relative bg-gray-800 rounded-xl p-3">
//             <Search
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//               size={20}
//             />
//             <input
//               type="text"
//               placeholder="Search courses or instructors..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-12 pr-4 py-2 bg-transparent text-white border-none outline-none placeholder-gray-400 text-lg"
//             />
//           </div>
//         </div>

//         <div className="flex gap-2 overflow-x-auto pb-2">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all flex-shrink-0 ${
//                 selectedCategory === category
//                   ? "bg-indigo-600 text-white shadow-lg"
//                   : "bg-gray-800 text-gray-400 hover:bg-gray-700"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Course Cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCourses.map((course) => (
//           <div
//             key={course.id}
//             className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/50 hover:bg-gray-700/50 transition-all group"
//           >
//             <div className="flex justify-between items-start mb-4">
//               <span className="bg-green-600/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-full text-xs">
//                 Published
//               </span>
//               <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">
//                 {course.category}
//               </span>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-xl font-bold text-white mb-3">
//                 {course.title}
//               </h3>
//               <p className="text-gray-400 mb-4">{course.ownerEmail}</p>

//               <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
//                 <div className="flex items-center gap-2">
//                   <BookOpen size={16} />8 weeks
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Users size={16} />
//                   --
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Star size={18} className="text-yellow-400 fill-yellow-400" />
//                 <span className="font-semibold text-white">4.8</span>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-3">
//               <button
//                 onClick={() => openEdit(course)}
//                 className="bg-indigo-600 py-3 rounded-xl flex justify-center gap-2"
//               >
//                 <Edit2 size={18} /> Edit
//               </button>

//               <button className="bg-purple-600 py-3 rounded-xl flex justify-center gap-2">
//                 <BookOpen size={18} /> Modules
//               </button>

//               <button
//                 onClick={() => previewCourse(course.id)}
//                 className="bg-gray-700 col-span-2 py-2 rounded-lg flex justify-center gap-2"
//               >
//                 <Eye size={16} /> Preview
//               </button>

//               <button
//                 onClick={() => handleDelete(course.id)}
//                 className="bg-red-600 col-span-2 py-2 rounded-lg flex justify-center gap-2"
//               >
//                 <Trash2 size={16} /> Delete Course
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* EDIT MODAL */}
//       {editingCourse && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-gray-900 p-6 rounded-xl w-full max-w-lg">
//             <h2 className="text-xl font-bold mb-4">Edit Course</h2>

//             <input
//               className="w-full p-3 mb-3 bg-gray-800 rounded"
//               placeholder="Title"
//               value={editForm.title}
//               onChange={(e) =>
//                 setEditForm({ ...editForm, title: e.target.value })
//               }
//             />

//             <input
//               className="w-full p-3 mb-3 bg-gray-800 rounded"
//               placeholder="Category"
//               value={editForm.category}
//               onChange={(e) =>
//                 setEditForm({ ...editForm, category: e.target.value })
//               }
//             />

//             <textarea
//               className="w-full p-3 mb-3 bg-gray-800 rounded"
//               placeholder="Description"
//               value={editForm.description}
//               onChange={(e) =>
//                 setEditForm({ ...editForm, description: e.target.value })
//               }
//             />

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setEditingCourse(null)}
//                 className="px-4 py-2 bg-gray-700 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={saveEdit}
//                 className="px-4 py-2 bg-indigo-600 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrainerCourseManagement;

import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  Search,
  BookOpen,
  Users,
  Clock,
  Star,
} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ ADDED

const API = "http://localhost:9000";

const TrainerCourseManagement = () => {
  const navigate = useNavigate(); // ✅ ADDED

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingCourse, setEditingCourse] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    category: "",
    description: "",
  });

  const authHeader = () => ({
    Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(`${API}/api/courses/my`, {
        headers: authHeader(),
      });
      setCourses(res.data);
    } catch (err) {
      console.error("Failed to load courses", err);
    } finally {
      setLoading(false);
    }
  };

  const createCourse = async () => {
    const title = prompt("Enter course title");
    const category = prompt("Enter category");
    const description = prompt("Enter description");

    if (!title || !category) return;

    try {
      await axios.post(
        `${API}/api/courses`,
        { title, category, description },
        { headers: authHeader() }
      );
      fetchCourses();
    } catch (err) {
      alert("Failed to create course");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    try {
      await axios.delete(`${API}/api/courses/${id}`, {
        headers: authHeader(),
      });
      setCourses((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  const openEdit = (course) => {
    setEditingCourse(course);
    setEditForm({
      title: course.title,
      category: course.category,
      description: course.description || "",
    });
  };

  const saveEdit = async () => {
    try {
      await axios.put(`${API}/api/courses/${editingCourse.id}`, editForm, {
        headers: authHeader(),
      });
      setEditingCourse(null);
      fetchCourses();
    } catch (err) {
      alert("Update failed");
    }
  };

  const previewCourse = (id) => {
    window.open(`/course/${id}`, "_blank");
  };

  const categories = ["All", "Product", "Design", "Growth & Marketing"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.ownerEmail.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-1">Course Management</h1>
          <p className="text-gray-400">Manage all your courses and batches</p>
        </div>
        <button
          onClick={createCourse}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
          text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl hover:shadow-2xl transition-all"
        >
          <Plus size={20} />
          New Course
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="relative bg-gray-800 rounded-xl p-3">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search courses or instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2 bg-transparent text-white border-none outline-none placeholder-gray-400 text-lg"
            />
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/50 hover:bg-gray-700/50 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="bg-green-600/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-full text-xs">
                Published
              </span>
              <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">
                {course.category}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {course.title}
              </h3>
              <p className="text-gray-400 mb-4">{course.ownerEmail}</p>

              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} />8 weeks
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  --
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                <span className="font-semibold text-white">4.8</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => openEdit(course)}
                className="bg-indigo-600 py-3 rounded-xl flex justify-center gap-2"
              >
                <Edit2 size={18} /> Edit
              </button>

              {/* ✅ ONLY THIS BUTTON CHANGED */}
              <button
                onClick={() => navigate(`/trainer/course/${course.id}/modules`)}
                className="bg-purple-600 py-3 rounded-xl flex justify-center gap-2"
              >
                <BookOpen size={18} /> Modules
              </button>

              <button
                onClick={() => previewCourse(course.id)}
                className="bg-gray-700 col-span-2 py-2 rounded-lg flex justify-center gap-2"
              >
                <Eye size={16} /> Preview
              </button>

              <button
                onClick={() => handleDelete(course.id)}
                className="bg-red-600 col-span-2 py-2 rounded-lg flex justify-center gap-2"
              >
                <Trash2 size={16} /> Delete Course
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingCourse && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Edit Course</h2>

            <input
              className="w-full p-3 mb-3 bg-gray-800 rounded"
              placeholder="Title"
              value={editForm.title}
              onChange={(e) =>
                setEditForm({ ...editForm, title: e.target.value })
              }
            />

            <input
              className="w-full p-3 mb-3 bg-gray-800 rounded"
              placeholder="Category"
              value={editForm.category}
              onChange={(e) =>
                setEditForm({ ...editForm, category: e.target.value })
              }
            />

            <textarea
              className="w-full p-3 mb-3 bg-gray-800 rounded"
              placeholder="Description"
              value={editForm.description}
              onChange={(e) =>
                setEditForm({ ...editForm, description: e.target.value })
              }
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingCourse(null)}
                className="px-4 py-2 bg-gray-700 rounded"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                className="px-4 py-2 bg-indigo-600 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainerCourseManagement;
