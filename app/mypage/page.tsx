"use client";
import LikedOOTD from "@/components/mypage/LikedOOTD";
import MyProfile from "@/components/mypage/MyProfile";
import MyOOTD from "@/components/mypage/MyOOTD";
import SavedOOTD from "@/components/mypage/SavedOOTD";

export default function MyPage() {
  return (
    <div className="w-full">
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
