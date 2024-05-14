import LikedOOTD from "@/components/mypage/LikedOOTD";
import MyProfile from "@/components/mypage/MyProfile";
import MyOOTD from "@/components/mypage/MyOOTD";
import SavedOOTD from "@/components/mypage/SavedOOTD";
import { BsPencilSquare } from "react-icons/bs";
import Link from "next/link";

export default function MyPage() {
  return (
    <div className="w-full">
      <div className="h-[15vh] bg-blue-500 w-full p-3 relative">
        <div className="w-10 h-10 absolute bottom-1 right-0">
          <div className="bg-white rounded-full w-7 h-7 p-2 flex items-center justify-center">
            <Link href="/mypage/edit">
              <BsPencilSquare />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <MyProfile />
        <MyOOTD />
        <div className="w-full h-1 bg-gray-200 mt-5"></div>
        <SavedOOTD />
        <div className="w-full h-1 bg-gray-200 mt-5"></div>
        <LikedOOTD />
      </div>
    </div>
  );
}
