import { IoSunnyOutline } from "react-icons/io5";

//@ts-ignore
export default function Card({ time, value, weather, index }) {
  return (
    <div
      className={
        index === 0
          ? "bg-blue-400 p-3 rounded-xl text-white"
          : "bg-blue-200 p-3 rounded-xl text-white"
      }
    >
      <div>
        {time.slice(0, 2)}:{time.slice(2, 4)}
      </div>
      {/* weather에 따라 ICON */}
      <IoSunnyOutline className="w-10 h-10" />
      <div>{value}°C</div>
    </div>
  );
}
