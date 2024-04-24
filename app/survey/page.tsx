import SurveyComponent from "@/components/survey/SurveyComponent";

export default function Survey() {
  return (
    <main className="flex flex-col w-full p-6 m-4 ">
      <section className="flex flex-col mb-4">
        <h2 className="text-center">사전 질문</h2>
        <span>1/2</span>
        <h1 className="text-2xl">평소에 얼마나 추위를 타시나요?</h1>
      </section>
      <section className="flex flex-col justify-center items-center">
        <SurveyComponent />
        <SurveyComponent />
        <SurveyComponent />
        <SurveyComponent />
        <SurveyComponent />
        <SurveyComponent />
      </section>
    </main>
  );
}
