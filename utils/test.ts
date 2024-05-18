import axios from "axios";

const getAccessToken = () => {
  console.log(localStorage.getItem("accessToken"));
  return localStorage.getItem("accessToken");
};

export async function getAllOotd() {
  const response = await axios.get("http://13.124.159.141:8080/ootds", {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
  console.log(response);
  return response.data;
}
