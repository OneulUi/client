import Image from "next/image";
import sun from "@/assets/sun.png";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
export default function SearchComponent({ data }: any) {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsClick(!isClick);
  };
  return (
    <div className="relative border-2">
      <Image
        src={sun}
        className="w-full h-full object-cover"
        width={500}
        height={500}
        alt="girl"
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 text-white">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {data?.temperature}°C
          </h2>
          <p className="text-sm  text-gray-800">{data?.humidity}% </p>
        </div>
        {/* <div>
          <p className="text-lg  text-gray-800">{data?.review}</p>
          <p className="text-sm  text-gray-800">
            Satisfaction: {data?.satisfaction}
          </p>
        </div> */}
        <div onClick={handleOnClick}>
          {" "}
          {isClick ? (
            <FaHeart
              size={24}
              className="absolute right-2 bottom-2  text-red-500 cursor-pointer"
            />
          ) : (
            <CiHeart
              size={24}
              className="absolute right-2 bottom-2  text-gray-500 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}
