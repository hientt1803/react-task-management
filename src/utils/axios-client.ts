import axios from "axios";
import queryString from "query-string";

// Get access token
// accessToken = sessionStorage.getItem("erpAccessToken");
const accessToken = localStorage.getItem("token");

/* Creating a new axios client with the baseURL, headers, and paramsSerializer. */
export const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
/* Intercepting the response and returning the data. */
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
