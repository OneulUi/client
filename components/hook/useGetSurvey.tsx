import { useQuery } from "@tanstack/react-query";
import { getSurvey } from "@/api/api";
export default function useGetSurvey() {
  const { data } = useQuery({
    queryKey: ["survey"],
    queryFn: getSurvey,
  });

  return { data };
}
