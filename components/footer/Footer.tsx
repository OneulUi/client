"use client";

import Link from "@/node_modules/next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import image from "@/assets/sun.png";

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer className="fixed bottom-0 border-t-2 py-4 w-[500px] h-[10vh] text-sm bg-white">
      <div className="flex w-full items-center justify-around">
        <Link href="/main" className="flex flex-col items-center">
          <Image width="20" height="20" src={image} alt="weather" />
          {pathName === "/main" ? (
            <div className="text-blue-300">오늘 날씨</div>
          ) : (
            <div>오늘 날씨</div>
          )}
        </Link>
        <Link href="/recommend" className="flex flex-col items-center">
          <Image width="20" height="20" src={image} alt="recommend" />
          {pathName === "/recommend" ? (
            <div className="text-blue-300">날씨 옷 추천</div>
          ) : (
            <div>날씨 옷 추천</div>
          )}
        </Link>
        <Link href="/ootd" className="flex flex-col items-center">
          <Image width="20" height="20" src={image} alt="ootd" />
          {pathName === "/ootd" ? (
            <div className="text-blue-300">날씨 OOTD</div>
          ) : (
            <div>날씨 OOTD</div>
          )}
        </Link>
        <Link href="/mypage" className="flex flex-col items-center">
          <Image width="20" height="20" src={image} alt="my" />
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
