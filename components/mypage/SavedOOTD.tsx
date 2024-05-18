"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getSavedOotd } from "./api";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRecoilState } from "recoil";
import { savedOotdState } from "./atom";
import { useEffect } from "react";
import { FiBookmark } from "react-icons/fi";

const temp = [
  {
    ootdId: 0,
    review: "날씨가 좋아요",
    temperature: "20",
    humidity: "70도",
    satisfaction: "좋아",
    ootdImages: [
      {
        ootdImageId: 0,
        fileName: "string",
      },
    ],
    member: {
      memberId: 0,
      email: "string",
      name: "패션왕",
      introduction: "나는야 패션왕",
      survey: {
        surveyId: 0,
        options: "string",
        weights: 0,
      },
    },
  },
  {
    ootdId: 1,
    review: "날씨가 싫어요",
    temperature: "10",
    humidity: "10도",
    satisfaction: "옷은 좋아",
    ootdImages: [
      {
        ootdImageId: 0,
        fileName: "string",
      },
    ],
    member: {
      memberId: 1,
      email: "string",
      name: "패션고자",
      introduction: "나는야 패션고자",
      survey: {
        surveyId: 0,
        options: "string",
        weights: 0,
      },
    },
  },
  {
    ootdId: 3,
    review: "비와요",
    temperature: "5",
    humidity: "80도",
    satisfaction: "시러",
    ootdImages: [
      {
        ootdImageId: 0,
        fileName: "string",
      },
    ],
    member: {
      memberId: 0,
      email: "string",
      name: "패션피플",
      introduction: "패션에 살고 패션에 죽는다",
      survey: {
        surveyId: 0,
        options: "string",
        weights: 0,
      },
    },
  },
];

export default function SavedOOTD() {
  const { data, isLoading } = useQuery({
    queryKey: ["savedOotd"],
    queryFn: getSavedOotd,
  });

  const [savedOotd, setSavedOotd] = useRecoilState(savedOotdState);

  useEffect(() => {
    if (data) {
      setSavedOotd(data);
    }
  }, [data, setSavedOotd]);

  //console.log(data);
  if (isLoading) <div>loading...</div>;

  return (
    <div className="px-5">
      <div className="flex justify-between mt-7 mb-2">
        <span className="font-bold">저장한 OOTD</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        {temp.map((ootd) => (
          <div
            key={ootd.ootdId}
            className="w-full h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0"
          >
            <span className="text-white absolute">{ootd.member.name}</span>
            <span className="text-white absolute right-3">
              <FiBookmark className="text-white" size={30} />
            </span>
            <span className="text-xs absolute left-3 bottom-3 text-white">
              2024.04.02
            </span>
            <span className="absolute bottom-3 right-6 text-white text-2xl">
              20
              <span className="text-xs absolute top-1">°C</span>
            </span>
          </div>
        ))}

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
