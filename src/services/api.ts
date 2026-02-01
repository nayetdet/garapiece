import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://onepiece.fandom.com/api.php",
  timeout: 1000,
});

export default api;
