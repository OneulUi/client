"use client";
import Image from "next/image";
import Link from "next/link";
import bgImg from "../assets/bg.png";
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Image
        src={bgImg}
        width={500}
        height={undefined}
        className="h-[100vh]"
        alt="bgColor"
      />
      <div className="flex flex-col items-center justify-center w-full">
        <Image
          src="https://cdn.pixabay.com/photo/2024/02/28/14/01/woman-8602128_1280.png"
          className="absolute top-24 w-[290px] h-[45vh] border-2 border-white rounded-2xl rotate-12"
          width={500}
          height={500}
          alt="girl"
          priority
        />
        <Image
          src="https://cdn.pixabay.com/photo/2024/02/28/14/01/woman-8602128_1280.png"
          className="absolute top-24 w-[290px] h-[45vh] border-2 border-white rounded-2xl -rotate-12"
          width={500}
          height={500}
          alt="girl"
          priority
        />
        <div className="relative w-full">
          <div className="w-full absolute left-[30px] bottom-[200px] flex flex-col items-left">
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

        <div className="absolute inset-x-0 bottom-20 flex justify-center">
          <Link href="/signin">
            <button className="bg-gray-900 text-white w-[45vh] h-[6vh] flex items-center justify-center rounded-3xl transition-transform hover:scale-95">
              오늘의 시작하기
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
