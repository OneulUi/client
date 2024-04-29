"use client";
import { SurveyType } from "@/api/type";
import usePostUsersPre from "../\bhook/usePostUsersPre";
import Link from "next/link";

export default function SurveyComponent({ temp, text }: SurveyType) {
  const { handleSubmit, mutation } = usePostUsersPre();

  const handleClick = () => {
    handleSubmit({ temp, text });
  };

  return (
    <div
      onClick={handleClick}
      className="border-2 p-6 m-4 text-center rounded-2xl w-5/6 transition-transform hover:bg-gray-200 hover:scale-105"
    >
      <Link href="/location"> {text}</Link>
    </div>
  );
}
