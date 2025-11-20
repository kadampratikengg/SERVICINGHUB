// client/src/api/client.js

const API_BASE = process.env.REACT_APP_API_BASE || "";

const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
};

const apiClient = {
  get: (path) =>
    fetch(API_BASE + path, {
      method: "GET",
      headers: getHeaders(),
    }),

  post: (path, body) =>
    fetch(API_BASE + path, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(body),
    }),

  put: (path, body) =>
    fetch(API_BASE + path, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(body),
    }),

  del: (path) =>
    fetch(API_BASE + path, {
      method: "DELETE",
      headers: getHeaders(),
    }),
};

export default apiClient;
