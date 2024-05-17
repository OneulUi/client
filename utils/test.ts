import axios from "axios";

export async function getAllOotd() {
  const response = await axios.get("http://13.124.159.141:8080/ootds");
  console.log(response);
  return response.data;
}
