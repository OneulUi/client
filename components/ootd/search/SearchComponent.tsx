import Image from "next/image";
import sun from "@/assets/student.jpg";
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
      {data ? (
        <Image
          loader={() =>
            `${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${data?.ootdImages[0].fileName}`
          }
          src={`${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${data?.ootdImages[0].fileName}`}
          className="w-full h-[170px] object-cover"
          width={500}
          height={500}
          alt="girl"
          priority
        />
      ) : (
        <Image
          src={sun}
          className="w-full h-[170px] object-cover"
          width={500}
          height={500}
          alt="sun"
          priority
        />
      )}

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 text-white">
        <div className="absolute bottom-2 left-2">
          <h2 className="text-xl font-extrabold text-gray-200">
            {data ? `${data.temperature}°C` : `18°C`}
          </h2>
          <p className="text-md font-bold text-gray-200">
            {data ? `${data.humidity}%` : `27%`}{" "}
          </p>
        </div>
        <div onClick={handleOnClick}>
          {isClick ? (
            <FaHeart
              size={24}
              className="absolute right-2 top-2  text-red-500 cursor-pointer"
            />
          ) : (
            <CiHeart
              size={24}
              className="absolute right-2 top-2  text-gray-500 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}
