"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { getAllOotd } from "../mypage/api";

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

export default function Combination() {
  const { data } = useQuery({ queryKey: ["allOotd"], queryFn: getAllOotd });
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/ootd/${id}`);
  };
  const backgroundImageUrl = (image: string) =>
    `${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${image}`;

  const encodedFileName = (url: string) => encodeURIComponent(url);

  return (
    <div className="flex gap-2 items-center overflow-x-scroll scrollbar-hide mt-2">
      {temp.map((ootd) => (
        <div
          key={ootd.ootdId}
          className="w-36 h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0"
          style={{
            backgroundImage: `url('${backgroundImageUrl(
              encodedFileName(ootd.ootdImages[0].fileName)
            )}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => handleClick(ootd.ootdId)}
        >
          <span className="text-xs absolute right-2 text-white">
            <FaHeart className="text-red-500" size={20} />
          </span>
          <span className="text-xs absolute bottom-9 text-white">
            2024.04.02
          </span>
          <span className="absolute bottom-2 text-white text-2xl">
            {ootd.temperature}
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
      ))}
    </div>
  );
}
