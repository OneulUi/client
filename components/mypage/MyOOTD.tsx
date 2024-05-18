"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { getMyOotd } from "./api";
import { myOotdState } from "./atom";
import { useRouter } from "next/navigation";

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
export default function MyOOTD() {
  const { data, isLoading } = useQuery({
    queryKey: ["myOotd"],
    queryFn: getMyOotd,
  });

  const [myOotd, setMyOotd] = useRecoilState(myOotdState);
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/ootd/${id}`);
  };

  useEffect(() => {
    if (data) {
      setMyOotd(data);
    }
  }, [data, setMyOotd]);

  //console.log(data);
  if (isLoading) <div>loading...</div>;
  return (
    <div className="h-48">
      <div className="flex justify-between mt-7 mb-2 px-5">
        <span className="font-bold">나의 OOTD</span>
        <Link href="/mypage/myootd">
          <FaChevronRight />
        </Link>
      </div>
      <div className="flex gap-2 items-center overflow-x-scroll pl-5 scrollbar-hide">
        {temp.map((ootd) => (
          <div
            key={ootd.ootdId}
            className="w-36 h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0"
            onClick={() => handleClick(ootd.ootdId)}
          >
            <span className="text-xs absolute right-2 text-white">
              2024.04.03
            </span>
            <span className="absolute bottom-2 text-white text-2xl">
              20
              <span className="text-xs absolute top-1">°C</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
