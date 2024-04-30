import Link from "@/node_modules/next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 border-t-2 py-4 w-[500px] h-[10vh]">
      <div className="flex w-full items-center justify-around">
        <Link href="/main" className="flex flex-col items-center">
          <Image width="30" height="30" src="" alt="weather" />
          오늘 날씨
        </Link>
        <Link href="/recommend" className="flex flex-col items-center">
          <Image width="30" height="30" src="" alt="recommend" />
          날씨 옷 추천
        </Link>
        <Link href="ootd" className="flex flex-col items-center">
          <Image width="30" height="30" src="" alt="ootd" />
          날씨 OOTD
        </Link>
        <Link href="mypage" className="flex flex-col items-center">
          <Image width="30" height="30" src="" alt="my" />
          마이페이지
        </Link>
      </div>
    </footer>
  );
}
