"use client";
import SearchComponent from "@/components/ootd/search/SearchComponent";
import HeaderSearch from "../../../components/ootd/search/HeaderSearch";
import Input from "@/components/input/Input";
import { useEffect, useState } from "react";
import { Axios } from "@/api/axios";

export default function OotdSearch() {
  const [ootdData, setOotdData] = useState<OotdData[]>([]);
  const [temperature, setTemperature] = useState<string>("");
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

  const handleTemperatureInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(e.target.value);
  };
  console.log(temperature);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("/ootds/temperature", {
          params: { temperature: 20 },
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
    <main className="w-full">
      <HeaderSearch />
      <Input
        handleTemperatureInput={handleTemperatureInput}
        temperatureValue={temperature}
      />
      <section className="grid grid-cols-3 gap-1">
        <SearchComponent data={ootdData} />
        <SearchComponent data={ootdData} /> <SearchComponent data={ootdData} />
        <SearchComponent data={ootdData} /> <SearchComponent data={ootdData} />
        <SearchComponent data={ootdData} /> <SearchComponent data={ootdData} />
      </section>
    </main>
  );
}
