"use client";
import { GetSurveyParams, getSurvey, getWeatherCurrent } from "@/api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useGetWeather({ params }: { params: GetSurveyParams }) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["survey"],
    queryFn: () => getWeatherCurrent({ params }),
  });

  return { isLoading, isError, data };
}
