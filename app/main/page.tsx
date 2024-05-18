import TodayWeather from "@/components/main/TodayWeather";
import WeatherByHour from "@/components/main/WeatherByHour";
import { getCurrentWeather, getHourWeather } from "@/components/main/api";
import { getDate } from "@/utils/getDate";
import { useQueries } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//import { useState } from "react";

export default function Main() {
  //const [date, setDate] = useState(getDate().split(".").join(""));
  const date = getDate().split(".").join("");
  // const local = localStorage.getItem("weather");
  // const results = useQueries({
  //   queries: [
  //     {
  //       queryKey: ["current"],
  //       queryFn: () => getCurrentWeather(date),
  //     },
  //     {
  //       queryKey: ["hourly"],
  //       queryFn: getHourWeather,
  //     },
  //   ],
  // });
  // const handleDate = (newDate: string) => {
  //   setDate(newDate);
  // };

  // const currentData = results[0].data;
  // const hourlyData = {
  //   data: results[1].data,
  //   isPending: results[1].isPending,
  // };

  // console.log(results[0]);
  // console.log(currentData, hourlyData); // 데이터 잘 가져옴

  return (
    // 배경 색 온도에 맞게 구현 필요
    <div className="w-full h-[90vh] bg-gradient-to-tr from-blue-500 to-yellow-200 pt-8 px-6 flex flex-col justify-between">
      <div>
        <TodayWeather date={date} />
      </div>
      <WeatherByHour date={date} />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}
