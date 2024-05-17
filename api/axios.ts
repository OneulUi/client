import axios from "axios";

export const Axios = axios.create({
  baseURL:
    "http://ec2-13-124-159-141.ap-northeast-2.compute.amazonaws.com:8080",
  headers: { "Content-Type": "application/json" },
});

Axios.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    console.log(config);
    // 요청이 전달되기 전에 작업 수행
    if (accessToken) {
      config.headers["Authorization"] = `${accessToken}`;
    }
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);
