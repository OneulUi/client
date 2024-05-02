import Link from "next/link";

export default function Recommend() {
  return (
    <div className="w-full">
      <div className="w-full p-6 bg-blue-200">
        <div>2024.02.25</div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <span>Windy</span>
            <span>Weather</span>
          </div>
          <div>8°C</div>
        </div>
      </div>
      <div className="mt-6 mx-4">
        <div className="flex justify-between items-center">
          <span className="font-bold">필수 옷차림</span>
          <Link
            href="/recommend/getup"
            className="bg-black text-white rounded-full py-1 px-2 text-xs"
          >
            다른 날씨 옷차림 보기 &rarr;
          </Link>
        </div>
        <div className="border-solid border-2 border-gray-400 h-[200px] mt-2">
          <span>옷차림 이미지</span>
        </div>
      </div>
      <div className="mt-6 mx-4">
        <span className="font-bold">추천 옷차림</span>
        <div className="border-solid border-2 border-gray-400 h-[200px] mt-2">
          추천 옷자리 이미지 슬라이드
        </div>
      </div>
    </div>
  );
}
