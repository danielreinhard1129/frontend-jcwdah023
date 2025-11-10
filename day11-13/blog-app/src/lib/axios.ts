import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://betterkiss-us.backendless.app",
});
