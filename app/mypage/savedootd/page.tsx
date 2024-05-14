import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function Savedootd() {
  return (
    <div className="mb-20">
      <div className="mt-12 flex justify-between items-center px-3">
        <Link href="/mypage">
          <FaChevronLeft />
        </Link>
        <div>저장한 OOTD</div>
        <div className="w-4"></div>
      </div>
      <div className="mt-5 mb-3 px-3 text-xs">전체 8개</div>

      <div className="grid grid-cols-2 gap-[0.4rem] mb-10">
        <div className="relative h-60 w-48 bg-gray-500 p-2">
          <span className="text-xs absolute right-2 text-white">하트</span>
          <span className="text-xs absolute bottom-9 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-2 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <div className="relative h-60 w-48 bg-gray-500 p-2">
          <span className="text-xs absolute right-2 text-white">하트</span>
          <span className="text-xs absolute bottom-9 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-2 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <div className="relative h-60 w-48 bg-gray-500 p-2">
          <span className="text-xs absolute right-2 text-white">하트</span>
          <span className="text-xs absolute bottom-9 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-2 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <div className="relative h-60 w-48 bg-gray-500 p-2">
          <span className="text-xs absolute right-2 text-white">하트</span>
          <span className="text-xs absolute bottom-9 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-2 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-52 rounded-full border-2 border-solid border-gray-500 px-2 py-1 text-sm mb-10">
          다른 온도별 코디도 보러가기
        </div>
      </div>
    </div>
  );
}
