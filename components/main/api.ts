import { getDate } from "@/utils/getDate";
import axios from "axios";

export async function getCurrentWeather(date: string) {
  const response = await axios.get(
    "https://www.one-ul.com:8080/weather/current",
    {
      params: {
        baseDate: date,
        address: localStorage.getItem("weather"),
      },
    }
  );
  return response.data;
}

export async function getHourWeather(date: string) {
  const response = await axios.get(
    "https://www.one-ul.com:8080/weather/hourly",
    {
      params: {
        baseDate: date,
        address: localStorage.getItem("weather"),
      },
    }
  );
  return response.data;
}

interface MyObject {
  [key: string]: any;
}

export function chunkArray<T extends MyObject>(
  array: T[],
  chunkSize: number
): T[][] {
  const chunkedArray: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

export function today() {
  let today = new Date();
  let tomorrow = new Date(today.setDate(today.getDate() + 1));
  let twodays = new Date(today.setDate(today.getDate() + 2));
}
