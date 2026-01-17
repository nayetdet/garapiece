import axios from "axios";

export const api = axios.create({
  baseURL: "https://onepiece.fandom.com/wiki",
  timeout: 10000,
});

export default api;
