import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estatebackend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;