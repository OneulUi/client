"use client";
import React from "react";
import Image from "next/image";
import sun from "@/assets/woman.png";
export default function UserComponent({ data }: any) {
  return (
    <section className="flex flex-col justify-between rounded-2xl p-4 w-5/6 mt-4 h-[400px] bg-gray-100">
      <div className="flex justify-between items-center h-1/5">
        <span className="font-thin">ID: {data?.member.email}</span>
        <div className="flex items-center relative">
          <span className="text-[20px] mr-8 font-bold">
            {data?.temperature}
            <span className="text-sm font-thin absolute top-1">{`\u00b0C`}</span>
          </span>
          <span className="text-[20px] mr-4 font-bold">
            {data?.humidity}
            <span className="text-sm font-thin absolute top-1">%</span>
          </span>
        </div>
      </div>
      <span className="text-sm font-extralight p-1">
        {/* {new Date().toLocaleString()} */}
      </span>
      <span className="p-1 text-green-900 font-thin mb-2">{data.review}</span>
      <div className="border rounded-3xl h-full overflow-hidden">
        {/* 이미지 로딩 */}
        <Image
          src={`${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${data.ootdImages[0].fileName}`}
          className="w-full h-full  rounded-3xl"
          width={500}
          height={500}
          alt="girl"
          priority
        />
      </div>
    </section>
  );
}
// http://ec2-13-124-159-141.ap-northeast-2.compute.amazonaws.com:8080/ootds/images/3a5d42d-2a98-4246-a48c-cffebb7c7dd5_mongolian.png
// process.env.NEXT_PUBLIC_IP_API_KEY/ootds/images/
