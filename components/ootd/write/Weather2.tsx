"use client";
import { IoIosArrowForward } from "react-icons/io";
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
interface WeatherProp {
  handleTemperatureChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleHumidityChange(e: React.ChangeEvent<HTMLInputElement>): void;
  temperature: string;
  humidity: string;
}
export default function Weather2({
  temperature,
  humidity,
  handleTemperatureChange,
  handleHumidityChange,
}: WeatherProp) {
  return (
    <section className="w-full relative flex items-center justify-center">
      <h1 className="absolute top-8 left-12 font-bold">
        이 날 날씨는 어땠나요? (적어주세요!)
      </h1>
      <div className="flex w-5/6 mt-20">
        <div className="border-2 flex flex-col items-center p-3 w-full rounded-2xl mr-0.5">
          <label className="text-xl font-thin mb-2" htmlFor="temperature">
            온도
          </label>
          <input
            id="temperature"
            type="text"
            className="text-[40px] font-bold text-center w-full bg-transparent border-none focus:outline-none"
            placeholder="20"
            value={temperature}
            onChange={handleTemperatureChange}
          />
        </div>
        <div className="border-2 flex flex-col items-center p-3 w-full rounded-2xl ml-0.5">
          <label className="text-xl font-thin mb-2" htmlFor="humidity">
            습도
          </label>
          <input
            id="humidity"
            type="text"
            className="text-[40px] font-bold text-center w-full bg-transparent border-none focus:outline-none"
            placeholder="100"
            value={humidity}
            onChange={handleHumidityChange}
          />
        </div>
      </div>
    </section>
  );
}
