"use client";
import { GetSurveyParams, getWeatherCurrent } from "@/api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useGetWeather({ params }: { params: GetSurveyParams }) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeatherCurrent({ params }),
  });

  return { isLoading, isError, data };
}
