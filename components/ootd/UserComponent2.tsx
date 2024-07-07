"use client";
import Image from "next/image";
import sun from "@/assets/ootdGirl.jpeg";
import { useEffect, useState } from "react";
import { MdPerson } from "react-icons/md";
export default function UserComponent2() {
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
            <p>Summer</p>
          </span>
          <div className="flex items-center relative">
            <span className="text-[38px] mr-8 font-bold">
              28
              <span className="text-sm font-thin absolute top-0 left-10">{`\u00b0C`}</span>
            </span>
            <span className="border-r h-[25px] border-black absolute right-1/2 transform -translate-x-1/2"></span>

            <span className="text-[38px] font-bold">
              48<span className="text-sm font-thin absolute top-1">%</span>
            </span>
          </div>
        </div>

        <span className="text-sm font-extralight p-1">2024-5-18</span>
        <span className="p-1 text-blue-900 mb-2 font-middle">
          날씨 좋아서 소풍나왔어요! 🙋🏼‍♀️
        </span>
        <div className="border rounded-3xl h-full overflow-hidden">
          <Image
            src="https://cdn.pixabay.com/photo/2022/03/15/15/19/child-7070573_1280.jpg"
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
