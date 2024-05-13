import TodayWeather from "@/components/main/TodayWeather";
import WeatherByHour from "@/components/main/WeatherByHour";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Main() {
  return (
    // 배경 색 온도에 맞게 구현 필요
    <div className="w-full h-[90vh] bg-gradient-to-tr from-blue-500 to-yellow-200 pt-8 px-10 flex flex-col justify-between">
      <div>
        <TodayWeather />
      </div>
      <WeatherByHour />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}
