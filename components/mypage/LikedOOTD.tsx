import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function LikedOOTD() {
  return (
    <div className="mb-32">
      <div className="flex justify-between mt-7 mb-2 px-5">
        <span className="font-bold">좋아한 OOTD</span>
        <Link href="/mypage/likedootd">
          <FaChevronRight />
        </Link>
      </div>
      <div className="flex gap-2 items-center overflow-x-scroll pl-5 scrollbar-hide">
        <div className="w-36 h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0">
          <span className="text-xs absolute right-2 text-white">하트</span>
          <span className="text-xs absolute bottom-9 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-2 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <div className="w-36 h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0">
          <span className="text-xs absolute right-2 text-white">하트</span>
          <span className="text-xs absolute bottom-9 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-2 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <div className="w-36 h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0">
          <span className="text-xs absolute right-2 text-white">하트</span>
          <span className="text-xs absolute bottom-9 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-2 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <div className="w-36 h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0">
          <span className="text-xs absolute right-2 text-white">
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
