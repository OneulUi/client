"use client";
import Button from "@/components/button/Button";
import SurveyComponent from "@/components/survey/SurveyComponent";
import { questions } from "../../components/dummy-data/dummy";
import useGetSurvey from "@/components/hook/useGetSurvey";
import Link from "next/link";
import { getSurvey } from "@/api/api";
export default function Survey() {
  const survey = useGetSurvey();
  console.log(survey.data);
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
