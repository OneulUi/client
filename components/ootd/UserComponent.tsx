"use client";
import React from "react";
import Image from "next/image";
import { MdPerson } from "react-icons/md";
import sun from "@/assets/woman.png";

export default function UserComponent({ data, onClick }: any) {
  return (
    <section
      onClick={() => onClick(data.ootdId)}
      className="flex flex-col justify-between rounded-2xl p-5 w-5/6 mt-4 h-[500px] bg-gray-100 shadow-xl"
    >
      <div className="flex justify-between items-center h-1/5 mb-4">
        <span className="font-light flex items-center">
          <Image
            loader={() => data?.member.picture}
            width={40}
            height={40}
            src={data?.member.picture}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
          <p>{data?.member.email?.split("@")[0]}</p>
        </span>

        <div className="flex items-center relative">
          <span className="text-[38px] font-bold mr-3">
            {data?.temperature}
            <span className="text-sm font-light absolute top-0 left-10">{`\u00b0C`}</span>
          </span>
          <span className="border-r h-6 border-black absolute left-1/2 transform -translate-x-1/2"></span>
          <span className="text-[38px] font-bold ml-8">
            {data?.humidity}
            <span className="text-sm font-light absolute top-1">%</span>
          </span>
        </div>
      </div>

      <span className="text-sm font-light mb-2">
        작성일자 : {data?.issueDate}
      </span>
      <span className="text-base text-gray-900 font-medium mb-4">
        {data.review}
      </span>

      <div className="border rounded-3xl h-full overflow-hidden">
        <Image
          loader={() =>
            `${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${data.ootdImages[0].fileName}`
          }
          src={`${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${data.ootdImages[0].fileName}`}
          className="w-full h-full object-cover rounded-3xl"
          width={500}
          height={500}
          alt="girl"
          priority
        />
      </div>
    </section>
  );
}
