"use client";
import React, { useState, useEffect } from "react";
import HeaderOotd from "@/components/ootd/HeaderOotd";
import Input from "@/components/input/Input";
import UserComponent from "@/components/ootd/UserComponent";
import UserComponent2 from "@/components/ootd/UserComponent2";
import { Axios } from "@/api/axios";
import UserComponent3 from "@/components/ootd/UserComponent3";

export default function Ootd() {
  const [ootdData, setOotdData] = useState<OotdData[]>([]);
  interface OotdData {
    ootdId: number;
    review: string;
    temperature: string;
    humidity: string;
    satisfaction: string;
    ootdImages: { ootdImageId: number; fileName: string }[];
    member: {
      memberId: number;
      email: string;
      name: string;
      introduction: string | null;
      survey: {
        surveyId: number;
        options: string;
        weights: number;
      };
    };
  }
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
      {/* <Input /> */}
      <section className=" w-full flex flex-col items-center">
        {ootdData.map((data) => (
          <UserComponent key={data.ootdId} data={data} />
        ))}
        <UserComponent3 />
        <UserComponent2 />
      </section>
    </main>
  );
}
