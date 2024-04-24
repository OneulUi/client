import Button from "@/components/button/Button";
import DaumPostcode from "react-daum-postcode";
export default function Location() {
  return (
    <main className="flex flex-col w-full p-6 m-6">
      <section className="flex flex-col mb-4">
        <h2 className="text-center mb-4">사전 질문</h2>
        <span className="mb-4">2/2</span>
        <h1 className="text-2xl font-bold mb-2">사는 지역을 알려 주세요!</h1>
        <div className="font-light mb-4">
          해당 정보는 추후 추천 정보에 반영됩니다.
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-4">
        <input
          className="border-2 p-4 w-full rounded-2xl"
          placeholder="사는 지역 검색하기"
        />
        <Button text="오늘의 시작하기" href="/location" />
      </section>
    </main>
  );
}
