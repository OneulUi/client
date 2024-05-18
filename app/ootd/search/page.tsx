"use client";
import SearchComponent from "@/components/ootd/search/SearchComponent";
import HeaderSearch from "../../../components/ootd/search/HeaderSearch";
import Input from "@/components/input/Input";
import { useEffect, useState } from "react";
import { Axios } from "@/api/axios";
import ExampleSearch from "@/components/ootd/search/ExampleSearch";
import { OotdData } from "@/api/type";
import ExampleSearch2 from "@/components/ootd/search/ExampleSearch2";
export default function OotdSearch() {
  const [ootdData, setOotdData] = useState<OotdData[]>([]);
  const [temperature, setTemperature] = useState<string>("");

  const handleTemperatureInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(e.target.value);
  };

  const onSearchClick = () => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("/ootds/temperature", {
          params: { temperature },
        });
        setOotdData(res.data.data);
        console.log("data", res.data.data);
      } catch (error) {
        console.error("Error fetching ootd data:", error);
      }
    };

    fetchData();
  };
  console.log(temperature);

  return (
    <main className="w-full">
      <HeaderSearch />
      <Input
        handleTemperatureInput={handleTemperatureInput}
        temperatureValue={temperature}
        onSearchClick={onSearchClick}
      />
      <div className="flex justify-center text-gray-400 text-sm">
        해당 온도의 게시물이 없을 경우 랜덤 게시물이 표시됩니다.
      </div>
      <section className="grid grid-cols-3 gap-1">
        <ExampleSearch />
        <ExampleSearch2 />
        {ootdData.length > 1 ? (
          ootdData.map((data) => (
            <SearchComponent key={data.ootdId} data={data} />
          ))
        ) : (
          <SearchComponent data={ootdData[0]} />
        )}
      </section>
    </main>
  );
}
