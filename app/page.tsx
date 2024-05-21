"use client";
import Image from "next/image";
import Link from "next/link";
import bgImg from "../assets/bg.png";
import landingpicture from "@/assets/landingpicture.png";
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center relative">
      <Image
        src={bgImg}
        width={500}
        height={500}
        objectFit="cover"
        alt="bgColor"
      />

      <div className="absolute top-20 flex flex-col items-center justify-center w-full ">
        <div className="relative flex justify-center items-center w-[300px] h-[400px]">
          <Image
            src={landingpicture}
            layout="fill"
            objectFit="cover"
            alt="Girl"
            className="rounded-2xl rotate-12"
            priority
          />
          <Image
            src={landingpicture}
            layout="fill"
            objectFit="cover"
            alt="Girl"
            className="rounded-2xl -rotate-12"
            priority
          />
        </div>
        <div className="w-full flex flex-col items-center mt-16">
          <div className="font-extrabold text-[30px] mt-2">
            <h1>오늘의 날씨에 맞는</h1>
            <h1>옷차림을 보고 싶다면?</h1>
          </div>
          <div className="font-thin text-[15px] mt-2">
            <h2>오늘의를 통해 온도별 옷차림을 확인하여</h2>
            <h2>날씨에 맞는 옷을 입고 외출해 보세요!</h2>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <Link href="/signin">
          <button className="bg-gray-900 text-white w-[45vh] h-[6vh] flex items-center justify-center rounded-3xl transition-transform hover:scale-95">
            오늘의 시작하기
          </button>
        </Link>
      </div>
    </main>
  );
}
