import Button from "@/components/button/Button";
import SurveyComponent from "@/components/survey/SurveyComponent";

export default function Survey() {
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
        <SurveyComponent text="평소에 추위를 많이 타는 편이다." />
        <SurveyComponent text="다른 사람과 비슷한 정도로 추위를 탄다." />
        <SurveyComponent text="추위를 별로 타지 않는 편이다." />
        <SurveyComponent text="더위를 타는 편이다." />
        <SurveyComponent text="다른 사람보다 더위를 많이 타는 편이다." />
        <SurveyComponent text="평소에 더위를 많이 타는편이다." />
        <Button text="다음" href="/location" />
      </section>
    </main>
  );
}
