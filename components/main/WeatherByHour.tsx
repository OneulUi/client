"use client";
import { MdLocationSearching } from "react-icons/md";
import Card from "./Card";
import { useRef, useState } from "react";
import { MouseEvent } from "react";

export default function WeatherByHour() {
  const scrollRef = useRef<HTMLDivElement>(null); // 타입 추가: HTMLDivElement
  const [isDrag, setIsDrag] = useState<boolean>(false); // 타입 추가: boolean
  const [startX, setStartX] = useState<number | undefined>(undefined); // 타입 추가: number 또는 undefined

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // 타입 추가
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

  return (
    <div className="bg-white p-3 rounded-2xl mb-10 ">
      <div className="flex justify-between items-center mb-10">
        <div className="font-semibold text-xl">Today</div>
        <div className="flex items-center">
          서울특별시 강동구 성내1동
          <MdLocationSearching className="ml-1" />
        </div>
      </div>
      {/* 슬라이더 구현 + api에서 시간별 날씨 정보 가져오기*/}
      <div>
        <div
          className="flex justify-center items-center gap-2 overflow-x-scroll scrollbar-hide pl-7"
          ref={scrollRef}
          //@ts-ignore
          onMouseDown={onDragStart}
          //@ts-ignore
          onMouseMove={isDrag ? onThrottleDragMove : null}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
        >
          {[...Array(12)].map((item, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
