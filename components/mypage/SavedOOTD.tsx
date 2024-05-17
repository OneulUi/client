import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SavedOOTD() {
  return (
    <div className="px-5">
      <div className="flex justify-between mt-7 mb-2">
        <span className="font-bold">저장한 OOTD</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-full h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0">
          <span className="text-white absolute">User name</span>
          <span className="text-white absolute right-3">북마크</span>
          <span className="text-xs absolute left-3 bottom-3 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-3 right-6 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <div className="w-full h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0">
          <span className="text-white absolute">User name</span>
          <span className="text-white absolute right-3">북마크</span>
          <span className="text-xs absolute left-3 bottom-3 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-3 right-6 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <div className="w-full h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0">
          <span className="text-white absolute">User name</span>
          <span className="text-white absolute right-3">북마크</span>
          <span className="text-xs absolute left-3 bottom-3 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-3 right-6 text-white text-2xl">
            20
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
        <Link
          href="/mypage/savedootd"
          className="flex items-center border-solid border-gray-500 border-2 rounded-full py-1 px-2 text-sm"
        >
          Save OOTD 더보기 <MdKeyboardArrowRight />
        </Link>
      </div>
    </div>
  );
}
