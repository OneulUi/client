import { Axios } from "./axios";

export const getSurvey = async () => {
  return await Axios.get("/member/survey");
};
