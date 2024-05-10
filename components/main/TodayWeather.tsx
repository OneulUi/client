"use client";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { getCurrentWeather } from "./api";
import { useQuery } from "@tanstack/react-query";

// 온도에 따른 옷차림 워딩 로직
const wording = (value: number) => {
  if (value >= 28) return "무더운 한여름 온도입니다.";
  else if (value < 28 && value >= 23) return "더운 여름 온도입니다.";
  else if (value < 23 && value >= 20) return "더운 초여름 온도입니다.";
  else if (value < 20 && value >= 17) return "따뜻한 봄 온도입니다.";
  else if (value < 17 && value >= 12) return "청량한 간절기 온도입니다.";
  else if (value < 12 && value >= 9) return "서늘한 가을 온도입니다.";
  else if (value < 9 && value >= 5) return "쌀쌀한 늦가을 온도입니다.";
  else if (value < 5) return "기온이 낮은 겨울 온도입니다.";
};

export default function TodayWeather() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["current"],
    queryFn: getCurrentWeather,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  
  //console.log(data);

  return (
    <div className="flex flex-col">
      <div>
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
