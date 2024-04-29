"use client";
import { SurveyType } from "@/api/type";
import usePostUsersPre from "../hook/usePostUsersPre";
import { useRouter } from "next/navigation";

export default function SurveyComponent({ temp, text }: SurveyType) {
  const { handleSubmit } = usePostUsersPre();
  const router = useRouter();
  const handleClick = () => {
    handleSubmit({ temp, text });
  };

  return (
    <div
      onClick={() => {
        router.push("/location"), handleClick();
      }}
      className="border-2 p-6 m-4 text-center rounded-2xl w-5/6 transition-transform hover:bg-gray-200 hover:scale-105"
    >
      {text}
    </div>
  );
}
