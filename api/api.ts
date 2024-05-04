import { Axios } from "./axios";

export const getSurvey = async (params: GetSurveyParams) => {
  const { baseDate, address } = params;
  return await Axios.get("weather/current", {
    params: { baseDate: baseDate, address: address },
  });
};

export interface GetSurveyParams {
  baseDate: string;
  address: string;
}

export const getWeatherCurrent = async ({
  params,
}: {
  params: GetSurveyParams;
}) => {
  //baseDate = params.baseData
  const { baseDate, address } = params;
  return await Axios.get("weather/current", {
    params: { baseDate, address },
  });
};
