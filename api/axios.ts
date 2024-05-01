import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://3.36.88.73:8080",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
