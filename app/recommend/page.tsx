"use client";
import First from "@/components/recommend/small/First";
import { getDate } from "@/utils/getDate";
import Link from "next/link";

export default function Recommend() {
  console.log(localStorage.getItem("weather"));
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude; // 위도
    const longitude = position.coords.longitude; // 경도

    // 가져온 위도와 경도를 로컬 스토리지에 저장
    localStorage.setItem("latitude", "" + latitude);
    localStorage.setItem("longitude", "" + longitude);
  });

  return (
    <div className="w-full">
      <div className="w-full p-6 bg-blue-200">
        <div>{getDate()}</div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <span>맑은 날씨</span>
          </div>
          <div>8°C</div>
        </div>
      </div>
      <div className="mt-6 mx-4">
        <div className="flex justify-between items-center">
          <span className="font-bold">필수 옷차림</span>
          <Link
            href="/recommend/getup"
            className="text-gray rounded-full py-1 px-2 text-xs"
          >
            필수 옷차림 더보기 &rarr;
          </Link>
        </div>
        <div className="border-solid border-2 border-gray-100 rounded-xl shadow-md h-[200px] mt-2">
          <First />
        </div>
      </div>
      <div className="mt-6 mx-4">
        <div className="flex justify-between">
          <span className="font-bold">추천하는 조합</span>
          <Link href="/ootd">더보기 &rarr;</Link>
        </div>
        <div className="border-solid border-2 border-gray-400 h-[200px] mt-2">
          추천 옷자리 이미지 슬라이드
        </div>
      </div>
    </div>
  );
}
