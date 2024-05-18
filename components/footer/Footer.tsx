"use client";

import Link from "@/node_modules/next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import image from "@/assets/sun.png";
import { TiWeatherSunny } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { BiAlignMiddle } from "react-icons/bi";
import { RiHeart2Line } from "react-icons/ri";
export default function Footer() {
  const pathName = usePathname();
  return (
    <footer className="fixed bottom-0 border-t-2 py-4 w-[500px] h-[8vh] text-sm bg-white">
      <div className="flex w-full items-center justify-around">
        <Link href="/main" className="flex flex-col items-center">
          <TiWeatherSunny size={27} className="text-gray-600" />
          {pathName === "/main" ? (
            <div className="text-blue-300">오늘 날씨</div>
          ) : (
            <div>오늘 날씨</div>
          )}
        </Link>
        <Link href="/recommend" className="flex flex-col items-center">
          <BiAlignMiddle size={27} className="text-gray-600" />
          {pathName === "/recommend" ? (
            <div className="text-blue-300">날씨 옷 추천</div>
          ) : (
            <div>날씨 옷 추천</div>
          )}
        </Link>
        <Link href="/ootd" className="flex flex-col items-center">
          <IoPersonOutline size={27} className="text-gray-600" />
          {pathName === "/ootd" ? (
            <div className="text-blue-300">날씨 OOTD</div>
          ) : (
            <div>날씨 OOTD</div>
          )}
        </Link>
        <Link href="/mypage" className="flex flex-col items-center">
          <RiHeart2Line size={27} className="text-gray-600" />
          {pathName === "/mypage" ? (
            <div className="text-blue-300">마이페이지</div>
          ) : (
            <div>마이페이지</div>
          )}
        </Link>
      </div>
    </footer>
  );
}
