"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import bgImg from "@/assets/bg.png";
import oneului from "@/assets/oneului.png";
import { Suspense } from "react";
import { Axios } from "@/api/axios";
import axios from "axios";
export default function SignIn() {
  const router = useRouter();

  const handleButtonClick = async () => {
    router.push(
      "https://www.one-ul.com:8080/oauth2/authorization/google?redirect_uri=https://vercel-public-five.vercel.app/login/redirect"
    );
  };

  const handleMain = () => {
    localStorage.setItem("weather", "서울특별시 강남구");
    router.push("/main");
  };
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 아래의 div가 btn위까지 영역 잡아줌 */}
      <div className="relative w-full h-full">
        <Image
          src={bgImg}
          layout="fill"
          objectFit="cover"
          className="z-0"
          alt="Background Image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <Image
            src={oneului}
            width={240}
            height={170}
            alt="Logo"
            className="mb-8"
          />
          <div className="text-center mb-16">
            <span className="text-white text-[20px] font-thin block">
              오늘 날씨에 맞는 옷차림을 보고 싶은
            </span>
            <span className="text-white text-[20px] font-thin block">
              사람들을 위한 서비스, 오늘의
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 z-20 mb-20">
        <button
          onClick={handleMain}
          className="text-[17px] font-medium bg-[#6595FF] text-white w-[45vh] h-[7vh] flex items-center justify-center rounded-[50px] transition-transform hover:scale-95"
        >
          바로 시작하기
        </button>
        <button
          onClick={handleButtonClick}
          className="text-[17px] font-medium bg-[#ccc] text-black w-[45vh] h-[7vh] flex items-center justify-center rounded-[50px] transition-transform hover:scale-95"
        >
          구글 로그인
        </button>
      </div>
    </div>
  );
}
