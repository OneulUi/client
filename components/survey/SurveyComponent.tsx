"use client";
import { SurveyIdType, SurveyType } from "@/api/type";
import usePostUsersPre from "../hook/usePostUsersPre";
import { useRouter } from "next/navigation";
import useGetSurvey from "../hook/useGetSurvey";
export default function SurveyComponent({ surveyId, options }: SurveyIdType) {
  const { handleSubmit } = usePostUsersPre();
  const router = useRouter();
  const handleClick = () => {
    handleSubmit({ surveyId, options });
  };
  // const data = useGetSurvey();
  // const select = data.data?.data.data
  // console.log(data.data?.data.data);
  return (
    <div
      key={surveyId}
      onClick={() => {
        router.push("/location"), handleClick();
      }}
      className="border-2 p-6 m-4 text-center rounded-2xl w-5/6 transition-transform hover:bg-gray-200 hover:scale-105"
    >
      {options}
    </div>
  );
}
