import axios from "axios";

export async function getCurrentWeather() {
  const response = await axios.get(
    "http://13.124.159.141:8080/weather/current",
    {
      params: {
        baseDate: "20240510",
        address: "서울특별시 종로구",
      },
    }
  );
  return response.data;
}

export async function getHourWeather() {
  const response = await axios.get(
    "http://13.124.159.141:8080/weather/hourly",
    {
      params: {
        baseDate: "20240510",
        address: "서울특별시 종로구",
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
