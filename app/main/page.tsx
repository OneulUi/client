import TodayWeather from "@/components/main/TodayWeather";
import WeatherByHour from "@/components/main/WeatherByHour";
import { getCurrentWeather, getHourWeather } from "@/components/main/api";
import { getDate } from "@/utils/getDate";
import { useQueries } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Main() {
  const date = getDate().split(".").join("");

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
