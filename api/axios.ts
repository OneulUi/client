import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://ec2-3-36-88-73.ap-northeast-2.compute.amazonaws.com:8080",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
