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
    // const response = await axios.get(
    //   "http://3.36.88.73:8080/oauth2/authorization/google?http://localhost:3000/signin/login/redirect"
    // );
    // const response = await axios.get(
    //   "http://ec2-3-36-88-73.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google?http://localhost:3000/login/redirect"
    // );
    // console.log(response);
    router.push(
      "http://ec2-13-124-159-141.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google?redirect_uri=https:/vercel-public-five.vercel.app/login/redirect"
    );
  };

  const handleMain = () => {
    router.push("/main");
  };
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      <Image
        src={bgImg}
        width={500}
        height={undefined}
        className="absolute h-[100vh] top-0"
        alt="bgColor"
      />
      <Image
        src={oneului}
        width={500}
        height={undefined}
        className="absolute top-52 w-[240px] h-[170px] "
        alt="bgColor"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-white text-[20px] font-thin">
          오늘 날씨에 맞는 옷차림을 보고 싶은
        </span>
        <br />
        <span className="text-white text-[20px] font-thin">
          사람들을 위한 서비스, 오늘의
        </span>
      </div>

      {/* <div className="absolute bottom-0 w-[500Px] 3xl:w-full h-1/3 bg-gradient-to-t from-gray-600"></div> */}
      <div className="flex-col absolute inset-x-0 bottom-20 flex  items-center space-y-4">
        <button
          onClick={handleMain}
          className=" text-[17px] font-middle bottom-40 bg-[#6595FF] text-white w-[45vh] h-[7vh] flex items-center justify-center rounded-[50px] transition-transform hover:scale-95"
        >
          바로 시작하기
        </button>
        <button
          onClick={handleButtonClick}
          className=" text-[17px] font-middle bottom-40 bg-[#ccc] text-black w-[45vh] h-[7vh] flex items-center justify-center rounded-[50px] transition-transform hover:scale-95"
        >
          구글 로그인
        </button>
      </div>
    </div>
  );
}
