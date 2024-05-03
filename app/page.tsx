"use client";
import Image from "next/image";
import Link from "next/link";
import bgImg from "../assets/bg.png";
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Image src={bgImg} width={500} height={500} alt="bgColor" />
      <div className="flex flex-col items-center justify-center ">
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
