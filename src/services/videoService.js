// import axios from "axios";

// const API_GATEWAY = "http://localhost:9000";

// const videoService = {
//   uploadVideo(file) {
//     const formData = new FormData();
//     formData.append("file", file);

//     return axios.post(`${API_GATEWAY}/api/video/upload`, formData, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//         "Content-Type": "multipart/form-data",
//       },
//     });
//   },

//   getVideoStreamUrl(fileName) {
//     return `${API_GATEWAY}/api/video/play/${fileName}`;
//   },

//   getVideoById(id) {
//     return axios.get(`${API_GATEWAY}/api/video/${id}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//       },
//     });
//   },

//   getAllVideos() {
//     return axios.get(`${API_GATEWAY}/api/video`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//       },
//     });
//   },

//   // ✅ JWT-protected video fetch (OPTION 2)
//   getVideoBlob(fileName) {
//     return axios.get(`${API_GATEWAY}/api/video/play/${fileName}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//       },
//       responseType: "blob",
//     });
//   },

//   deleteVideo(id) {
//     return axios.delete(`${API_GATEWAY}/api/video/${id}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
//       },
//     });
//   },
// };

// export default videoService;

import axios from "axios";

const API_GATEWAY = "http://localhost:9000";

const getAuthHeaders = () => {
  const token = localStorage.getItem("lms_token");

  // ✅ If token not present, don't send Authorization header
  if (!token) return {};

  return {
    Authorization: `Bearer ${token}`,
  };
};

const videoService = {
  uploadVideo(file) {
    const formData = new FormData();
    formData.append("file", file);

    return axios.post(`${API_GATEWAY}/api/video/upload`, formData, {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "multipart/form-data",
      },
    });
  },

  getVideoStreamUrl(fileName) {
    return `${API_GATEWAY}/api/video/play/${fileName}`;
  },

  getVideoById(id) {
    return axios.get(`${API_GATEWAY}/api/video/${id}`, {
      headers: {
        ...getAuthHeaders(),
      },
    });
  },

  getAllVideos() {
    return axios.get(`${API_GATEWAY}/api/video`, {
      headers: {
        ...getAuthHeaders(),
      },
    });
  },

  // ✅ JWT-protected video fetch (OPTION 2)
  getVideoBlob(fileName) {
    return axios.get(`${API_GATEWAY}/api/video/play/${fileName}`, {
      headers: {
        ...getAuthHeaders(),
      },
      responseType: "blob",
    });
  },

  deleteVideo(id) {
    return axios.delete(`${API_GATEWAY}/api/video/${id}`, {
      headers: {
        ...getAuthHeaders(),
      },
    });
  },
};

export default videoService;
