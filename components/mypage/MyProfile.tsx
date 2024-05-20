"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getMyInfo } from "./api";
import Link from "next/link";
import { BsPencilSquare } from "react-icons/bs";

export default function MyProfile() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["ootd"],
    queryFn: getMyInfo,
  });
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !data || !data.data) {
    alert("로그인이 필요합니다.");
    window.location.href = "/signin";
    return <div>Error loading data</div>;
  }
  return (
    <>
      <div
        className={`h-[15vh] bg-[${localStorage.getItem(
          "color"
        )}] w-full p-3 relative`}
      >
        <div className="w-10 h-10 absolute bottom-1 right-0">
          <div className="bg-white rounded-full w-7 h-7 p-2 flex items-center justify-center">
            <Link href="/mypage/edit">
              <BsPencilSquare />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative items-center">
        <Image
          className="absolute -top-10 rounded-full w-20 h-20"
          src={data.data.picture}
          width={100}
          height={100}
          alt="Image"
        />
        <span className="mt-10 text-xl">{data.data.name}</span>
        <span className="text-sm">{data.data.introduction}</span>
      </div>
    </>
  );
}
