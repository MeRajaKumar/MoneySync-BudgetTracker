// axiosInstance.js
import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        // ensure headers object exists and set Authorization
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (err) {
      // optional: handle localStorage access error in some environments
      console.warn("Could not read token from localStorage", err);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // handle common errors globally
    if (error.response) {
      if (error.response.status === 401) {
        // redirect to login page
        window.location.href = "/login";
      } else if (error.response.status === 500) {
        console.error("Server error. Please try again later.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timeout. Please try again.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
