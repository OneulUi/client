"use client";
import Image from "next/image";
import sun from "@/assets/woman.png";
import { useEffect, useState } from "react";
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
      <section className="flex flex-col justify-between rounded-2xl p-4 w-5/6 mt-4 h-[400px] bg-[rgba(251,251,251)]">
        <div className="flex justify-between items-center h-1/5">
          <span className="font-thin">ID : {name}</span>
          <div className="flex items-center relative">
            <span className="text-[20px] mr-8 font-bold">
              17
              <span className="text-sm font-thin absolute top-1">{`\u00b0C`}</span>
            </span>
            <span className="text-[20px] mr-4 font-bold">
              39<span className="text-sm font-thin absolute top-1">%</span>
            </span>
          </div>
        </div>
        <span className="text-sm font-extralight p-1">
          {/* {new Date().toLocaleString()} */}
        </span>
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
