// client/src/api/client.js
const API_BASE =
  process.env.REACT_APP_API_BASE || "http://localhost:5000/api";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const apiClient = {
  get: (path) =>
    fetch(API_BASE + path, {
      method: "GET",
      headers: { ...getAuthHeader() },
    }),

  post: (path, body) => {
    const isFormData = body instanceof FormData;

    return fetch(API_BASE + path, {
      method: "POST",
      headers: {
        ...getAuthHeader(),
        ...(!isFormData && { "Content-Type": "application/json" }),
      },
      body: isFormData ? body : JSON.stringify(body),
    });
  },

  put: (path, body) => {
    const isFormData = body instanceof FormData;

    return fetch(API_BASE + path, {
      method: "PUT",
      headers: {
        ...getAuthHeader(),
        ...(!isFormData && { "Content-Type": "application/json" }),
      },
      body: isFormData ? body : JSON.stringify(body),
    });
  },

  del: (path) =>
    fetch(API_BASE + path, {
      method: "DELETE",
      headers: { ...getAuthHeader() },
    }),
};

export default apiClient;
