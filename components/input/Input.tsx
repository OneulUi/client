"use client";
import { IoIosSearch } from "react-icons/io";
import { ChangeEvent, useState } from "react";

interface TemperatureInputProp {
  handleTemperatureInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  temperatureValue: string | undefined;
}

export default function Input({
  handleTemperatureInput,
  temperatureValue,
}: TemperatureInputProp) {
  const [temperature, setTemperature] = useState("");

  return (
    <div className="w-full flex justify-center items-center relative">
      <input
        className="border-2 w-5/6 m-4 p-3 rounded-2xl text-sm"
        placeholder="몇 도의 날씨가 궁금하신가요? 숫자로 입력해주세요!"
        value={temperatureValue}
        onChange={handleTemperatureInput}
        type="text"
        // onFocus={handleFocus}
      />
      <IoIosSearch
        size={24}
        className="absolute right-0 mr-[60px] text-gray-500"
      />
    </div>
  );
}
