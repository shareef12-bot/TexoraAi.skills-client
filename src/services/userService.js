// import axios from "axios";

// const API_GATEWAY = "http://localhost:9000";

// const userService = {
//   // =========================
//   // Admin: list users
//   // =========================
//   getUsers(page = 0, size = 20) {
//     return axios.get(`${API_GATEWAY}/api/users`, {
//       params: { page, size },
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//       },
//     });
//   },

//   // =========================
//   // Get user by ID
//   // =========================
//   getUserById(id) {
//     return axios.get(`${API_GATEWAY}/api/users/${id}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//       },
//     });
//   },

//   // =========================
//   // Create user profile (USER SERVICE)
//   // =========================
//   createUser(data) {
//     return axios.post(`${API_GATEWAY}/api/users`, data, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//       },
//     });
//   },

//   // =========================
//   // 🔓 PUBLIC AUTH REGISTER (NO TOKEN)
//   // =========================
//   createAuthUser(data) {
//     return axios.post(`${API_GATEWAY}/api/auth/register`, {
//       email: data.email,
//       password: data.password,
//       name: data.displayName,
//       role: data.roles?.replace("ROLE_", "") || "STUDENT",
//     });
//   },

//   // =========================
//   // ❌ DELETE USER (MISSING PART – ADDED)
//   // =========================
//   deleteUser(id) {
//     return axios.delete(`${API_GATEWAY}/api/users/${id}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//       },
//     });
//   },
// };

// export default userService;
import axios from "axios";

const API_GATEWAY = "http://localhost:9000";

const userService = {
  // =========================
  // Admin: list users
  // =========================
  getUsers(page = 0, size = 20) {
    return axios.get(`${API_GATEWAY}/api/users`, {
      params: { page, size },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
      },
    });
  },

  // =========================
  // Get user by ID
  // =========================
  getUserById(id) {
    return axios.get(`${API_GATEWAY}/api/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
      },
    });
  },

  // =========================
  // Update user
  // =========================
  updateUser(id, data) {
    return axios.put(`${API_GATEWAY}/api/users/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
      },
    });
  },

  // =========================
  // ✅ ADMIN CREATE USER (ONLY THIS IS USED)
  // =========================
  createUser(data) {
    return axios.post(`${API_GATEWAY}/api/users`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
      },
    });
  },

  // =========================
  // 🔓 PUBLIC AUTH REGISTER (SIGNUP ONLY – NOT USED BY ADMIN)
  // =========================
  createAuthUser(data) {
    return axios.post(`${API_GATEWAY}/api/auth/register`, {
      email: data.email,
      password: data.password,
      name: data.displayName,
      role: data.roles?.replace("ROLE_", "") || "STUDENT",
    });
  },

  // =========================
  // Delete user
  // =========================
  deleteUser(id) {
    return axios.delete(`${API_GATEWAY}/api/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
      },
    });
  },
};

export default userService;
