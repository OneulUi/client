import { MdLocationSearching } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";

export default function WeatherByHour() {
  return (
    <div className="bg-white p-3 rounded-2xl mb-10">
      <div className="flex justify-between items-center mb-10">
        <div className="font-semibold text-xl">Today</div>
        <div className="flex items-center">
          서울특별시 강동구 성내1동
          <MdLocationSearching className="ml-1" />
        </div>
      </div>
      {/* 슬라이더 구현 + api에서 시간별 날씨 정보 가져오기*/}
      <div>
        <div className="flex  justify-center items-center gap-2">
          <div className="bg-blue-400 p-3 rounded-xl text-white">
            <div>12:00</div>
            <IoSunnyOutline className="w-10 h-10" />
            <div>30°C</div>
          </div>
          <div className="bg-blue-400 p-3 rounded-xl text-white">
            <div>12:00</div>
            <IoSunnyOutline className="w-10 h-10" />
            <div>30°C</div>
          </div>
          <div className="bg-blue-400 p-3 rounded-xl text-white">
            <div>12:00</div>
            <IoSunnyOutline className="w-10 h-10" />
            <div>30°C</div>
          </div>
          <div className="bg-blue-400 p-3 rounded-xl text-white">
            <div>12:00</div>
            <IoSunnyOutline className="w-10 h-10" />
            <div>30°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
