import { Axios } from "./axios";

export const getWeather = async (params: GetSurveyParams) => {
  const { baseDate, address } = params;
  return await Axios.get("weather/current", {
    params: { baseDate: baseDate, address: address },
  });
};

export interface GetSurveyParams {
  baseDate: string;
  address: string;
}
// export const getWeatherCurrent = async ({
//   params,
// }: {
//   params: GetSurveyParams;
// })
export const getWeatherCurrent = async ({
  params,
}: {
  params: GetSurveyParams;
}) => {
  //baseDate = params.baseData
  const baseDate = params;
  const address = params;
  return await Axios.get("weather/current", {
    params: { baseDate, address },
  });
};

export const getSurvey = async () => {
  const accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);
  if (!accessToken) {
    throw new Error("Token이 존재하지 않습니다.");
  }
  return await Axios.get("/member/survey", {
    headers: {
      Authorization: `${accessToken}`,
    },
  });
};
