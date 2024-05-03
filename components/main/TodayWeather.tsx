import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function TodayWeather() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        {/* 드롭다운 css 추가 필요 + api에서 해당 일자에 맞는 날씨 정보 가져오기*/}
        <form action="">
          <select
            name="date"
            className="border-none bg-inherit checked:text-blue-100"
          >
            <option value="today">2024.04.25</option>
            <option value="tomorrow">2024.04.26</option>
            <option value="twodays">2024.04.27</option>
          </select>
        </form>
      </div>

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
            <span className="ml-2">28°C</span>
          </div>
          <div className="flex items-center border-2 border-white border-solid px-2 rounded-full">
            <FaArrowDown className="text-blue-600" />
            <span className="ml-2">10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
