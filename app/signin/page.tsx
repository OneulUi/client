"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "@/api/axios";
import axios from "axios";
export default function SignIn() {
  const router = useRouter();

  const handleButtonClick = async () => {
    // const response = await axios.get(
    //   "http://3.36.88.73:8080/oauth2/authorization/google?http://localhost:3000/signin/login/redirect"
    // );
    // console.log(response);
    router.push(
      "http://3.36.88.73:8080/oauth2/authorization/google?http://localhost:3000/login/redirect"
    );
  };

  const handleRedirect = () => {
    const url = new URL(window.location.href);
    const accessToken = url.searchParams.get("access_token");
    console.log(url);
    if (accessToken) {
      localStorage.setItem("ACCESS_TOKEN", accessToken);
      router.push("/");
    }
  };

  useEffect(() => {
    handleRedirect();
  }, []);

  return (
    <main className="">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="https://cdn.pixabay.com/photo/2024/02/28/14/01/woman-8602128_1280.png"
          className="w-[100vw] h-[100vh] "
          width={500}
          height={500}
          alt="girl"
          priority
        />

        <div className="absolute bottom-0 w-[500Px] 3xl:w-full h-1/3 bg-gradient-to-t from-gray-600"></div>
        <div className="absolute inset-x-0 bottom-20 flex justify-center">
          <button
            onClick={handleButtonClick}
            className="bottom-40 bg-gray-900 text-white w-[45vh] h-[7vh] flex items-center justify-center rounded-3xl transition-transform hover:scale-95"
          >
            구글 로그인
          </button>
        </div>
      </div>
    </main>
  );
}
