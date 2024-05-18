"use client";
import { getCurrentWeather } from "@/components/main/api";
import Third from "@/components/recommend/small/Third";
import Eighth from "@/components/recommend/small/Eighth";
import Seventh from "@/components/recommend/small/Seventh";
import Sixth from "@/components/recommend/small/Sixth";
import Fifth from "@/components/recommend/small/Fifth";
import Fourth from "@/components/recommend/small/Fourth";
import Second from "@/components/recommend/small/Second";
import First from "@/components/recommend/small/First";

import { getDate } from "@/utils/getDate";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { wordingRecommend } from "./../../utils/wordingByWeather";

export default function Recommend() {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["current"],
    queryFn: () => getCurrentWeather(getDate().split(".").join("")),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  const indexFn = (index: string) => {
    const newIndex = +index;
    if (newIndex >= 28) return <First />;
    else if (newIndex < 28 && newIndex >= 23) return <Second />;
    else if (newIndex < 23 && newIndex >= 20) return <Third />;
    else if (newIndex < 20 && newIndex >= 17) return <Fourth />;
    else if (newIndex < 17 && newIndex >= 12) return <Fifth />;
    else if (newIndex < 12 && newIndex >= 9) return <Sixth />;
    else if (newIndex < 9 && newIndex >= 4) return <Seventh />;
    else if (newIndex < 4) return <Eighth />;
    // switch (index) {
    //   case (newIndex>28):
    //     return <First />;
    //   case "second":
    //     return <Second />;
    //   case "third":
    //     return <Third />;
    //   case "fourth":
    //     return <Fourth />;
    //   case "fifth":
    //     return <Fifth />;
    //   case "sixth":
    //     return <Sixth />;
    //   case "seventh":
    //     return <Seventh />;
    //   case "eighth":
    //     return <Eighth />;
    //   default:
    //     break;
    //}
  };

  return (
    <div className="w-full">
      <div className="w-full p-6 bg-blue-500 text-white">
        <div>{getDate()}</div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">
              {wordingRecommend(data.data[2].fcstValue)}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-6xl font-bold">{data.data[2].fcstValue}</span>
            <span className="text-2xl">°C</span>
          </div>
        </div>
      </div>
      <div className="mt-6 mx-4">
        <div className="flex justify-between items-center">
          <span className="font-bold">필수 옷차림</span>
          <Link
            href="/recommend/getup"
            className="text-gray rounded-full py-1 px-2 text-xs"
          >
            필수 옷차림 더보기 &rarr;
          </Link>
        </div>
        <div className="flex items-centerborder-solid border-2 border-gray-100 rounded-xl shadow-md h-[200px] mt-2">
          {indexFn(data.data[2].fcstValue)}
        </div>
      </div>
      <div className="mt-6 mx-4">
        <div className="flex justify-between">
          <span className="font-bold">추천하는 조합</span>
          <Link href="/ootd">더보기 &rarr;</Link>
        </div>
        <div className="border-solid border-2 border-gray-400 h-[200px] mt-2">
          추천 옷자리 이미지 슬라이드
        </div>
      </div>
    </div>
  );
}
