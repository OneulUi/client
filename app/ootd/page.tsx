"use client";
import React, { useState, useEffect } from "react";
import HeaderOotd from "@/components/ootd/HeaderOotd";
import Input from "@/components/input/Input";
import UserComponent from "@/components/ootd/UserComponent";
import UserComponent2 from "@/components/ootd/UserComponent2";
import { Axios } from "@/api/axios";
import UserComponent3 from "@/components/ootd/UserComponent3";
import { OotdData } from "@/api/type";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/navigation";
export default function Ootd() {
  const [ootdData, setOotdData] = useState<OotdData[]>([]);
  const router = useRouter();
  const handleRouter = () => {
    router.push("/ootd/search");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("/ootds/weather", {
          params: { temperature: 20, humidity: 20 },
        });
        setOotdData(res.data.data);
        console.log(res.data.data[0].ootdImages[0].fileName);
      } catch (error) {
        console.error("Error fetching ootd data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="w-full flex flex-col items-center ">
      <HeaderOotd />
      <div className="w-full flex justify-center items-center relative">
        <input
          className="border-2 w-5/6 m-4 p-3 rounded-2xl text-sm focus:outline-none"
          placeholder="온도별 옷차림을 검색해보세요!"
          type="text"
          onFocus={handleRouter}
        />
        <IoIosSearch
          size={24}
          className="absolute right-0 mr-[60px] text-gray-500 cursor-pointer hover:text-blue-500"
        />
      </div>
      <section className=" w-full flex flex-col items-center bg-gradient-to-tr from-pink-500 to-blue-200 ">
        <UserComponent3 />
        <UserComponent2 />
        {ootdData.length > 1 ? (
          ootdData.map((data) => (
            <UserComponent key={data.ootdId} data={data} />
          ))
        ) : (
          <UserComponent2 />
        )}
      </section>
    </main>
  );
}
