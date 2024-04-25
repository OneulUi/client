import { SurveyType } from "@/api/type";

export default function SurveyComponent({ text }: SurveyType) {
  return (
    <div className="border-2 p-4 m-2 text-center rounded-2xl w-5/6 transition-transform hover:bg-gray-200 hover:scale-105">
      {text}
    </div>
  );
}
