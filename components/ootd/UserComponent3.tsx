"use client";
import Image from "next/image";
import sun from "@/assets/woman.png";
import { useEffect, useState } from "react";
import { MdPerson } from "react-icons/md";
export default function UserComponent3() {
  const [name, setName] = useState<string | null>(null);
  const getId = () => {
    const name = localStorage.getItem("loginId");
    setName(name);
  };

  useEffect(() => {
    getId();
  }, []);
  return (
    <>
      {" "}
      <section className="flex flex-col justify-between rounded-2xl p-6 w-5/6 mt-4 h-[400px] bg-gray-100">
        <div className="flex justify-between items-center h-1/5">
          <span className="font-thin flex items-center">
            <p className="mr-2">
              <MdPerson />
            </p>
            <p>Rina</p>
          </span>
          <div className="flex items-center relative">
            <span className="text-[38px] mr-8 font-bold">
              17
              <span className="text-sm font-thin absolute top-1">{`\u00b0C`}</span>
            </span>
            <span className="border-r h-[25px] border-black absolute right-1/2 transform -translate-x-1/2"></span>

            <span className="text-[38px] ml-2 font-bold">
              39<span className="text-sm font-thin absolute top-1">%</span>
            </span>
          </div>
        </div>
        <span className="text-sm font-extralight p-1">DATE : 2024-5-18</span>
        <span className="p-1 text-green-900 font-middle mb-2">
          오늘 날씨 좋아요 ☀️
        </span>
        <div className="border rounded-3xl h-full overflow-hidden">
          <Image
            src={sun}
            className="w-full h-full  rounded-3xl"
            width={500}
            height={500}
            alt="girl"
            priority
          />
        </div>
      </section>
    </>
  );
}
