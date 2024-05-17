"use client";

import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import First from "@/components/recommend/First";
import Second from "@/components/recommend/Second";
import Link from "next/link";
import Third from "@/components/recommend/Third";
import Fourth from "@/components/recommend/Fourth";
import Fifth from "@/components/recommend/Fifth";
import Sixth from "@/components/recommend/Sixth";
import Seventh from "@/components/recommend/Seventh";
import Eighth from "@/components/recommend/Eighth";

export default function GetUp() {
  const data = [
    {
      id: 1,
      text: "28°C~",
      name: "first",
    },
    {
      id: 2,
      text: "23~27°C",
      name: "second",
    },
    {
      id: 3,
      text: "20~22°C",
      name: "third",
    },
    {
      id: 4,
      text: "17~19°C",
      name: "fourth",
    },
    {
      id: 5,
      text: "12~16°C",
      name: "fifth",
    },
    {
      id: 6,
      text: "9~11°C",
      name: "sixth",
    },
    {
      id: 7,
      text: "5~8°C",
      name: "seventh",
    },
    {
      id: 8,
      text: "~4°C",
      name: "eighth",
    },
  ];
  const [index, setIndex] = useState("first");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log((e.target as HTMLButtonElement).name);
    setIndex((e.target as HTMLButtonElement).name);
  };

  const indexFn = (index: string) => {
    switch (index) {
      case "first":
        return <First />;
      case "second":
        return <Second />;
      case "third":
        return <Third />;
      case "fourth":
        return <Fourth />;
      case "fifth":
        return <Fifth />;
      case "sixth":
        return <Sixth />;
      case "seventh":
        return <Seventh />;
      case "eighth":
        return <Eighth />;
      default:
        break;
    }
  };

  return (
    <div className="w-full">
      <header className="flex items-center justify-between mt-10 mb-10 px-5">
        <Link href="/recommend">
          <FaChevronLeft />
        </Link>
        <div>필수 옷차림 보기</div>
        <div></div>
      </header>
      <div className="flex">
        <div className="w-8/12">{indexFn(index)}</div>
        <div className="flex w-4/12 justify-end pr-5">
          <div className="flex flex-col justify-around h-[90%] mr-2">
            {data.map((e) => {
              return (
                <button
                  onClick={handleClick}
                  key={e.id}
                  name={e.name}
                  className={` ${
                    index === e.name
                      ? "border-solid border-blue-500 border bg-blue-500 text-white rounded-lg px-1 text-lg"
                      : "border-solid border-blue-300 border bg-blue-100 text-blue-500 rounded-lg px-1 text-xs"
                  }`}
                >
                  {e.text}
                </button>
              );
            })}
          </div>
          <svg
            className="w-4 h-[90%]"
            width="15"
            height="691"
            viewBox="0 0 15 691"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="14.099"
              height="690.081"
              rx="7.04948"
              fill="url(#paint0_linear_452_3700)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_452_3700"
                x1="7.04948"
                y1="0"
                x2="7.04948"
                y2="690.081"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF607F" />
                <stop offset="0.32" stopColor="#FFF06B" />
                <stop offset="0.665" stopColor="#6595FF" />
                <stop offset="1" stopColor="#9F64FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
