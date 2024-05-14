import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function Likedootd() {
  return (
    <div>
      <div className="mt-12 flex justify-between items-center px-3">
        <Link href="/mypage">
          <FaChevronLeft />
        </Link>
        <div>좋아한 OOTD</div>
        <div className="w-4"></div>
      </div>
      <div className="mt-5 mb-3 px-3 text-xs">전체 8개</div>
      <div className="grid grid-cols-3 gap-1 mb-10">
        <div className="relative h-40 w-32 bg-gray-500 p-2">
          <span className="text-xs absolute right-2 text-white">하트</span>
          <span className="text-xs absolute bottom-9 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-2 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <div className="relative h-40 w-32 bg-gray-500 p-2">
          <span className="text-xs absolute right-2 text-white">하트</span>
          <span className="text-xs absolute bottom-9 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-2 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <div className="relative h-40 w-32 bg-gray-500 p-2">
          <span className="text-xs absolute right-2 text-white">하트</span>
          <span className="text-xs absolute bottom-9 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-2 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <div className="relative h-40 w-32 bg-gray-500 p-2">
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
    </div>
  );
}
