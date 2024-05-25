import { IoCloudyOutline, IoSunnyOutline } from "react-icons/io5";
import { TiWeatherDownpour, TiWeatherPartlySunny } from "react-icons/ti";

//@ts-ignore
export default function Card({ time, value, weather, index, rainy }) {
  const getIcon = (weather: any, rainy: string) => {
    if (rainy !== "0") return <TiWeatherDownpour className="w-10 h-10" />;
    else {
      if (weather.fcstValue === "1")
        return <IoSunnyOutline className="w-10 h-10" />;
      else if (weather.fcstValue === "3")
        return <TiWeatherPartlySunny className="w-10 h-10" />;
      else return <IoCloudyOutline className="w-10 h-10" />;
    }
  };
  console.log(time, value, weather, index, rainy);
  return (
    <div
      className={
        index === 0
          ? "bg-blue-500 p-3 rounded-xl text-white flex flex-col justify-center items-center"
          : "bg-blue-100 p-3 rounded-xl text-gray-400 flex flex-col justify-center items-center"
      }
    >
      <div>
        {time.slice(0, 2)}:{time.slice(2, 4)}
      </div>
      {getIcon(weather, rainy)}
      <div>{value}°C</div>
    </div>
  );
}
