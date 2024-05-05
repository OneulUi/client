"use client";
import Button from "@/components/button/Button";
import SurveyComponent from "@/components/survey/SurveyComponent";
import { questions } from "../../components/dummy-data/dummy";
import Link from "next/link";
import { getWeather } from "@/api/api";
import useGetWeather from "@/components/hook/useGetWeather";
import { GetSurveyParams } from "@/api/api";
import useGetWeather2 from "@/components/hook/useGetWeather2";
import useGetSurvey from "@/components/hook/useGetSurvey";
import { getSurvey } from "@/api/api";
export default function Survey() {
  //survey는 원래 {isLoading,error,data}
  // const weather = useGetWeather2({
  //   address: "서울특별시/송파구",
  //   baseDate: "20240504",
  // });
  // const surveyParams: GetSurveyParams = {
  //   address: "서울특별시/송파구",
  //   baseDate: "20240504",
  // };
  // const weather2 = useGetWeather({ params: surveyParams });
  const survey = useGetSurvey();

  console.log(survey);
  return (
    <main className="flex flex-col w-full p-6 m-6">
      <section className="flex flex-col mb-4">
        <h2 className="text-center mb-4">사전 질문</h2>
        <span className="mb-4">1/2</span>
        <h1 className="text-2xl font-bold mb-2">
          평소에 얼마나 추위를 타시나요?
        </h1>
        <div className="font-light mb-4">
          해당 정보는 추후 추천 정보에 반영됩니다.
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-4">
        {questions.map((question, idx) => (
          <SurveyComponent
            key={idx}
            temp={question.temp}
            text={question.question}
          />
        ))}
      </section>
    </main>
  );
}
