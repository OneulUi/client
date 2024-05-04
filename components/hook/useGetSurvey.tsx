"use client";
import { GetSurveyParams, getSurvey } from "@/api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useGetSurvey(params: GetSurveyParams) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["survey"],
    queryFn: () => getSurvey(params),
  });

  return { isLoading, isError, data };
}
