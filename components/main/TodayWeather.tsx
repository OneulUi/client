"use client";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { getCurrentWeather } from "./api";
import { useQuery } from "@tanstack/react-query";
import { wording } from "@/utils/wordingByWeather";
import { ChangeEvent, useEffect, useState } from "react";
import { getDate, getTomorrow, getTwoDays } from "@/utils/getDate";
import { getHourWeather } from "@/components/main/api";
import { FaChevronDown } from "react-icons/fa6";

interface ChildProps {
  date: string;
}

export default function TodayWeather({ date }: ChildProps) {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["current"],
    queryFn: () => getCurrentWeather(newDate),
  });

  const [newDate, setNewDate] = useState(date);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleChange = (e: any) => {
    setNewDate(e.target.value.split(".").join(""));
  };

  useEffect(() => {
    refetch();
  }, [newDate, refetch]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!!</div>;
  }

  console.log(data);

  return (
    <div className="flex flex-col">
      <div>
        <select
          onChange={handleChange}
          name="date"
          className="border-none bg-inherit checked:text-blue-100"
        >
          <option value={getDate()}>{getDate()}</option>
          <option value={getTomorrow(getDate())}>
            {getTomorrow(getDate())}
          </option>
          <option value={getTwoDays(getDate())}>{getTwoDays(getDate())}</option>
        </select>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="font-semibold text-3xl">오늘의 날씨는</div>
          <div className="flex items-center text-4xl mb-1">
            <div className="font-bold text-8xl">{data.data[2].fcstValue}</div>
            <div>°C</div>
          </div>
          <div>{wording(data.data[2].fcstValue)}</div>
        </div>
        <div>
          <div className="flex items-center h-8 mb-3 border border-white border-solid px-2 rounded-full bg-white bg-opacity-40">
            <FaArrowUp className="text-red-600" />
            <span className="ml-2">
              {" "}
              {Math.round(data.data[1].fcstValue)}
              °C
            </span>
          </div>
          <div className="flex items-center h-8 border border-white border-solid px-2 rounded-full bg-white bg-opacity-40">
            <FaArrowDown className="text-blue-600" />
            <span className="ml-2">
              {" "}
              {Math.round(data.data[0].fcstValue)}
              °C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
