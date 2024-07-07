"use client";
import { GetSurveyParams, getWeather } from "@/api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useGetWeather2(params: GetSurveyParams) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["weather2"],
    queryFn: () => getWeather(params),
  });

  return { isLoading, isError, data };
}
