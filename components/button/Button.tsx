"use client";
import { ButtonText } from "@/api/type";
import Link from "next/link";

export default function Button({ text, href, value, onClick }: ButtonText) {
  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value?: string
  ) => {
    if (value === "") {
      e.preventDefault();
      alert(`빈칸을 입력해주세요`);
    } else return;
  };

  return (
    <div className="absolute inset-x-0 bottom-20 flex justify-center">
      <Link href={href}>
        <button
          onClick={(e) => {
            handleButtonClick(e, value);
            if (onClick) {
              onClick();
            }
          }}
          className="bottom-40 bg-gray-900 text-white w-[45vh] h-[7vh] flex items-center justify-center rounded-3xl transition-transform hover:scale-95"
        >
          {text}
        </button>
      </Link>
    </div>
  );
}
