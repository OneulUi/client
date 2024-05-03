import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function TodayWeather() {
  return (
    <div className="flex flex-col">
      <div className="mb-2">2024.04.25</div>
      <div className="flex justify-between items-center">
        <div>
          <div className="font-semibold text-3xl">오늘의 날씨는</div>
          <div className="flex items-center text-4xl mb-1">
            <div className="font-bold text-8xl">28</div>
            <div>°C</div>
          </div>
          <div>하늘이 맑은 날씨에요!</div>
        </div>
        <div>
          <div className="flex items-center mb-3 border-2 border-white border-solid px-2 rounded-full">
            <FaArrowUp className="text-red-600" />
            <span>28°C</span>
          </div>
          <div className="flex items-center border-2 border-white border-solid px-2 rounded-full">
            <FaArrowDown className="text-blue-600" /> <span>10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
