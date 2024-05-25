"use client";
import { MdLocationSearching } from "react-icons/md";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";
import { MouseEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { chunkArray, getHourWeather } from "./api";
import { Address } from "react-daum-postcode";
import DaumPostcode from "react-daum-postcode";
import getCurrentTime from "@/utils/getCurrentTime";
import downHour from "@/utils/downHour";
import { getFullRegion } from "@/utils/region";
interface ChildProps {
  date: string;
}

export default function WeatherByHour({ date }: ChildProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [startX, setStartX] = useState<number | undefined>(undefined);
  const [showDaumPostcode, setShowDaumPostcode] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["hourly"],
    queryFn: () => getHourWeather(date),
  });
  useEffect(() => {
    refetch();
  }, [address, refetch]);

  // if (isError) return <div>Error</div>;
  console.log("d:", data);
  if (isPending) return <div>Loading...</div>;

  if (isError || !data || !data.data) {
    return <div>Error loading data</div>;
  }

  const newData = chunkArray(data.data, 4);
  // console.log(newData);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + (scrollRef.current ? scrollRef.current.scrollLeft : 0)); // scrollRef.current가 null이 될 수 있으므로 체크
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: MouseEvent<HTMLDivElement>) => {
    // MouseEvent 타입을 명시하고 제네릭으로 HTMLDivElement 추가
    if (isDrag && scrollRef.current) {
      // scrollRef.current가 null인지 확인
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      if (scrollLeft === 0) {
        setStartX(e.pageX); // startX를 설정할 때의 타입 호환성을 해결하기 위해 undefined를 허용하지 않음
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft); // startX를 설정할 때의 타입 호환성을 해결하기 위해 undefined를 허용하지 않음
      }

      scrollRef.current.scrollLeft = startX! - e.pageX; // startX가 undefined일 수 있으므로 '!'를 사용하여 강제 변환
    }
  };

  const throttle = <F extends (...args: any[]) => any>(func: F, ms: number) => {
    let throttled = false;
    return (...args: Parameters<F>) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 1;
  const onThrottleDragMove = throttle(onDragMove, delay);

  // 주소 변경

  const completeHandler = (data: Address) => {
    console.log(data);

    const query = data.query;
    const parts = query.split(" ");
    const filteredPart = parts.slice(0, 2).join(" ");
    const temp1 = getFullRegion(data.sido);
    const temp2 = data.sigungu;
    const ans = temp1 + " " + temp2;
    // setAddress(filteredPart);
    // console.log(filteredPart);
    setAddress(ans);
    console.log(ans);
    localStorage.setItem("weather", ans);
    setShowDaumPostcode(false);
  };

  const handleClick = () => {
    setShowDaumPostcode(true);
  };

  const handleClose = () => {
    setShowDaumPostcode(false);
  };

  return (
    <div className="bg-white p-4 rounded-2xl mb-10 shadow-xl">
      <div className="flex justify-between items-center mb-10">
        <div className="font-semibold text-xl">Today</div>
        <div
          className="flex items-center hover:cursor-pointer"
          onClick={handleClick}
        >
          {address ? address : localStorage.getItem("weather")}
          <MdLocationSearching className="ml-1" />
        </div>
      </div>
      {showDaumPostcode && (
        <div
          onClick={handleClose}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="bg-white p-4 rounded-lg">
            <DaumPostcode onComplete={completeHandler} />
          </div>
        </div>
      )}
      <div>
        <div
          className="flex items-center gap-2 overflow-x-scroll scrollbar-hide"
          ref={scrollRef}
          //@ts-ignore
          onMouseDown={onDragStart}
          //@ts-ignore
          onMouseMove={isDrag ? onThrottleDragMove : null}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
        >
          {newData
            .filter((e) => e[0].fcstTime >= downHour(getCurrentTime()))
            .map((item, index) => (
              <Card
                key={index}
                //@ts-ignore
                index={index}
                time={item[0].fcstTime}
                value={item[0].fcstValue}
                weather={item[1].fcstValue}
                rainy={item[2].fcstValue}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
