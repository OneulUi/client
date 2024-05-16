"use client";
import { IoIosArrowForward } from "react-icons/io";
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
interface WeatherProp {
  temperature: number;
  humidity: number;
}
export default function Weather2({ temperature, humidity }: WeatherProp) {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    humidity: 0,
  });
  useEffect(() => {
    setWeatherData({ temperature, humidity });
  }, [temperature, humidity]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setWeatherData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { id, value } = e.target;

  //   setWeatherData((prevState) => ({
  //     ...prevState,
  //     [id]: value,
  //   }));
  // };

  // const handleInput = (e:InputEvent) => {
  //   const {id, value} = e.target;
  //   setWeatherData(prev) => ({
  //     ...prev, [id] : value
  //   })
  // }
  console.log(weatherData);
  return (
    <section className="w-full relative flex items-center justify-center">
      {" "}
      <h1 className="absolute top-8 left-12 font-bold">
        이 날 날씨는 어땠나요? (적어주세요!)
      </h1>
      <div className="flex w-5/6 mt-20">
        <div className="border-2 flex flex-col items-center p-3 w-full rounded-2xl mr-0.5">
          <label className="text-xl font-thin mb-2" htmlFor="temperature">
            온도
          </label>
          <input
            id="temperature"
            type="text"
            className="text-[40px] font-bold text-center w-full bg-transparent border-none focus:outline-none"
            placeholder="20"
            value={weatherData.temperature}
            onChange={handleInputChange}
          />
        </div>
        <div className="border-2 flex flex-col items-center p-3 w-full rounded-2xl ml-0.5">
          <label className="text-xl font-thin mb-2" htmlFor="humidity">
            습도
          </label>
          <input
            id="humidity"
            type="text"
            className="text-[40px] font-bold text-center w-full bg-transparent border-none focus:outline-none"
            placeholder="100"
            value={weatherData.humidity}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </section>
  );
}
