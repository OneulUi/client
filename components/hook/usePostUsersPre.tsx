"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Axios } from "../../api/axios";
import { SurveyType } from "@/api/type";
export default function usePostUsersPre() {
  const mutation = useMutation({
    mutationFn: async (data: SurveyType) => {
      //나중에 api수정
      return await Axios.post("/api", data);
    },
  });

  const handleSubmit = async (surveyData: SurveyType) => {
    console.log(surveyData);
    await mutation.mutate(surveyData);
  };

  return { handleSubmit, mutation };
}
