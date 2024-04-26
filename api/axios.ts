import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
