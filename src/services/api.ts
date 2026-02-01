import axios, { AxiosInstance } from "axios";

export const origin: string = "https://onepiece.fandom.com";
export const api: AxiosInstance = axios.create({
    baseURL: new URL("/api.php", origin).toString(),
  timeout: 1000,
});

export default api;
