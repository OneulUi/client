"use client";
import { IoIosArrowForward } from "react-icons/io";
export default function Weather2() {
  return (
    <section className="w-full relative flex items-center justify-center">
      {" "}
      <h1 className="absolute top-8 left-12 font-bold">
        이 날 날씨는 어땠나요?
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
          />
        </div>
      </div>
    </section>
  );
}
