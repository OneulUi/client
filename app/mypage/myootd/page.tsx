import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function Myootd() {
  return (
    <div>
      <div className="mt-12 flex justify-between items-center px-3">
        <Link href="/mypage">
          <FaChevronLeft />
        </Link>
        <div>나의 OOTD</div>
        <div className="w-4"></div>
      </div>
      <div className="mt-5 mb-3 px-3 text-xs">전체 8개</div>
      <div className="grid grid-cols-3 gap-1 mb-10">
        <div className="relative h-40 w-32 bg-gray-500 p-2">
          <span className="absolute right-2 text-xs text-white">
            {" "}
            2024.04.02{" "}
          </span>
          <span className="absolute bottom-2 text-2xl text-white">
            20
            <span className="absolute top-1 text-xs">°C</span>
          </span>
        </div>
        <div className="relative h-40 w-32 bg-gray-500 p-2">
          <span className="absolute right-2 text-xs text-white">
            {" "}
            2024.04.02{" "}
          </span>
          <span className="absolute bottom-2 text-2xl text-white">
            20
            <span className="absolute top-1 text-xs">°C</span>
          </span>
        </div>
        <div className="relative h-40 w-32 bg-gray-500 p-2">
          <span className="absolute right-2 text-xs text-white">
            {" "}
            2024.04.02{" "}
          </span>
          <span className="absolute bottom-2 text-2xl text-white">
            20
            <span className="absolute top-1 text-xs">°C</span>
          </span>
        </div>
        <div className="relative h-40 w-32 bg-gray-500 p-2">
          <span className="absolute right-2 text-xs text-white">
            {" "}
            2024.04.02{" "}
          </span>
          <span className="absolute bottom-2 text-2xl text-white">
            20
            <span className="absolute top-1 text-xs">°C</span>
          </span>
        </div>
      </div>
    </div>
  );
}
