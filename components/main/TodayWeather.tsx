"use client";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { getCurrentWeather } from "./api";
import { useQuery } from "@tanstack/react-query";
import { wording } from "@/utils/wordingByWeather";
import { ChangeEvent, useEffect, useState } from "react";
import { getDate, getTomorrow, getTwoDays } from "@/utils/getDate";

interface WeatherInfo {
  category: string;
  convertCategory: string;
  convertFcstValue: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: number;
}
interface ICurrentProps {
  data: Array<WeatherInfo>;
  message: string;
  status: string;
}
interface ChildProps {
  data: ICurrentProps;
  date: string;
  onSetDate: (newDate: string) => void;
}

export default function TodayWeather({ data, date, onSetDate }: ChildProps) {
  console.log(data, date); // 데이터 잘 가져옴
  const handleChange = () => {
    const newDate = "112";
    onSetDate(newDate);
  };
  // const { data, isPending, isError, refetch } = useQuery({
  //   queryKey: ["current"],
  //   queryFn: () => getCurrentWeather(date),
  // });

  // const [date, setDate] = useState(getDate().split(".").join(""));
  // const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setDate(e.target.value.split(".").join(""));
  //   console.log(date);
  // };

  // useEffect(() => {
  //   refetch();
  // }, [date, refetch]);

  //console.log(data);

  return (
    <div className="flex flex-col">
      <div>
        <div className="flex items-center mb-2">
          {/* 드롭다운 css 추가 필요 + api에서 해당 일자에 맞는 날씨 정보 가져오기*/}
          <select
            onChange={handleChange}
            name="date"
            className="border-none bg-inherit checked:text-blue-100"
          >
            <option value={getDate()}>{getDate()}</option>
            <option value={getTomorrow(getDate())}>
              {getTomorrow(getDate())}
            </option>
            <option value={getTwoDays(getDate())}>
              {getTwoDays(getDate())}
            </option>
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
            <div className="flex items-center mb-3 border-2 border-white border-solid px-2 rounded-full">
              <FaArrowUp className="text-red-600" />
              <span className="ml-2">
                {" "}
                {Math.round(data.data[1].fcstValue)}
                °C
              </span>
            </div>
            <div className="flex items-center border-2 border-white border-solid px-2 rounded-full">
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
    </div>
  );
}
