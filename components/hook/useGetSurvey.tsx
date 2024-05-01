"use client";
import { getSurvey } from "@/api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useGetSurvey() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["survey"],
    queryFn: getSurvey,
  });

  return { isLoading, isError, data };
}
