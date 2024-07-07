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
  const [selectedOotd, setSelectedOotd] = useState<OotdData | null>(null);
  const router = useRouter();
  const handleRouter = () => {
    router.push("/ootd/search");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("/ootds", {
          params: { temperature: 20, humidity: 20 },
        });
        setOotdData(res.data.data);

        console.log(res.data.data);
      } catch (error) {
        console.error("Error fetching ootd data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOotdClick = async (ootdId: string) => {
    try {
      const res = await Axios.get(`/ootds/${ootdId}`);
      setSelectedOotd(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error("Error fetching detailed ootd data:", error);
    }
    router.push(`/ootd/${ootdId}`);
  };
  return (
    <main className="w-full flex flex-col items-center">
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
          className="absolute right-0 mr-[60px] text-gray-500 cursor-pointer hover:text-blue-300"
        />
      </div>
      <section className=" w-full flex flex-col items-center bg-gradient-to-tr from-pink-300 to-blue-200  pb-[120px]">
        {ootdData.length > 1 ? (
          ootdData.map((data) => (
            <UserComponent
              key={data.ootdId}
              data={data}
              onClick={handleOotdClick}
            />
          ))
        ) : ootdData.length === 1 ? (
          <UserComponent
            key={ootdData[0].ootdId}
            data={ootdData[0]}
            onClick={handleOotdClick}
          />
        ) : (
          <div>해당 날씨의 데이터가 없습니다.</div>
        )}
        <UserComponent3 />
        <UserComponent2 />
      </section>
    </main>
  );
}
