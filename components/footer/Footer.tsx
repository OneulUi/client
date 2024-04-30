import Link from "@/node_modules/next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 border-t-2 py-4 w-[500px] h-[10vh]">
      <div className="flex w-full items-center justify-around">
        <Link href="/main" className="flex flex-col items-center">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/rainy-weather.png"
            alt="rainy-weather"
          />
          오늘 날씨
        </Link>
        <Link href="/recommend" className="flex flex-col items-center">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/hanger.png"
            alt="hanger"
          />
          날씨 옷 추천
        </Link>
        <Link href="ootd" className="flex flex-col items-center">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/clothes.png"
            alt="clothes"
          />
          날씨 OOTD
        </Link>
        <Link href="mypage" className="flex flex-col items-center">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png"
            alt="person-male--v1"
          />
          마이페이지
        </Link>
      </div>
    </footer>
  );
}
