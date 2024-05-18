"use client";
import { GoPencil } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
export default function OotdHeader() {
  const alertMessage = () => {
    alert("위치 변경은 준비중입니다!");
  };

  return (
    <section className="flex p-6 w-full justify-between items-center relative">
      <div className="grid grid-cols-4 items-center relative">
        <span className="text-[40px] mr-8 font-bold">
          20 <span className="text-sm absolute top-4">{`\u00b0C`}</span>
        </span>

        <span className="text-[40px] mr-4 font-bold">
          20<span className="text-sm absolute top-4">%</span>
        </span>

        <IoIosArrowDown
          className="text-[20px] cursor-pointer"
          onClick={alertMessage}
        />
      </div>
      <Link href="/ootd/write">
        <GoPencil className="mr-4" size={22} />
      </Link>
    </section>
  );
}
