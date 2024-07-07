"use client";
import { useMutation } from "@tanstack/react-query";
import { Axios } from "../../api/axios";
import { SurveyIdType } from "@/api/type";
export default function usePostUsersPre() {
  const mutation = useMutation({
    mutationFn: async (data: SurveyIdType) => {
      //나중에 api수정
      return await Axios.post("/member/survey", data);
    },
  });

  const handleSubmit = async (surveyData: SurveyIdType) => {
    console.log(surveyData);
    await mutation.mutate(surveyData);
  };

  return { handleSubmit, mutation };
}
