"use client";

import axios from "axios";
import { useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";

export default function Card() {
  //   useEffect(() => {
  //     async function weather() {
  //       const response = await axios.get(
  //         "http://3.36.88.73:8080/weather/hourly",
  //         {
  //           params: {
  //             baseDate: "20240508",
  //             address: "서울특별시 강서구",
  //           },
  //         }
  //       );
  //       console.log(response.data);
  //     }
  //     weather();
  //   }, []);

  return (
    <div className="bg-blue-400 p-3 rounded-xl text-white">
      <div>12:00</div>
      <IoSunnyOutline className="w-10 h-10" />
      <div>30°C</div>
    </div>
  );
}
