"use client";
import { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { CiFaceFrown } from "react-icons/ci";
import { useEffect } from "react";

interface SatisfyProp {
  handleSatisfactionClick: (value: string) => void;
}
export default function SatisfyOotd({ handleSatisfactionClick }: SatisfyProp) {
  return (
    <section className="w-full relative flex items-center justify-center mb-[130px]">
      {" "}
      <h1 className="absolute top-8 left-12 font-bold">
        이 날 OOTD는 만족했나요?
      </h1>
      <div className="flex w-5/6 mt-20 ">
        <div
          className="border-2 flex flex-col items-center p-3 w-full rounded-2xl mr-0.5  hover:bg-blue-50"
          onClick={() => handleSatisfactionClick("Y")}
        >
          <button className="flex items-center text-xl">
            <CiFaceSmile className="mr-2" size={26} />
            좋았어요!
          </button>
        </div>
        <div
          className="border-2 flex flex-col items-center p-3 w-full rounded-2xl ml-0.5  hover:bg-yellow-50 "
          onClick={() => handleSatisfactionClick("N")}
        >
          <button className="flex items-center text-xl">
            <CiFaceFrown className="mr-2" size={26} />
            별로였어요!
          </button>
        </div>
      </div>
    </section>
  );
}
