import TodayWeather from "@/components/main/TodayWeather";
import WeatherByHour from "@/components/main/WeatherByHour";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";

export default function Main() {
  return (
    // 배경 색 온도에 맞게 구현 필요
    <div className="w-full h-[90vh] bg-gradient-to-tr from-blue-500 to-yellow-200 pt-8 px-10 flex flex-col justify-between">
      <div>
        <div className="flex justify-between">
          <div></div>
          <Link
            href=""
            className="bg-white flex justify-between items-center rounded-full p-1 mb-3"
          >
            <IoSettingsOutline className="w-6 h-6" />
          </Link>
        </div>
        <TodayWeather />
      </div>
      <WeatherByHour />
    </div>
  );
}
