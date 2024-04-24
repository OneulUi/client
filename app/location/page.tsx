"use client";
import Button from "@/components/button/Button";
import DaumPostcode from "react-daum-postcode";
import { Address } from "react-daum-postcode";
import { useState, useEffect } from "react";
export default function Location() {
  const [showDaumPostcode, setShowDaumPostcode] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const handleInputFocus = () => {
    setShowDaumPostcode(true);
  };
  const themeObj = {
    postcodeTextColor: "#FA7142",
    emphTextColor: "#333333",
  };

  const completeHandler = (data: Address) => {
    console.log(data);
    setAddress(data.address);
  };

  const reloadHandler = () => {
    window.location.reload();
  };

  return (
    <main className="flex flex-col w-full p-6 m-6">
      <section className="flex flex-col mb-4">
        <h2 className="text-center mb-4">사전 질문</h2>
        <span className="mb-4">2/2</span>
        <h1 className="text-2xl font-bold mb-2">사는 지역을 알려 주세요!</h1>
        <div className="font-light mb-4">
          해당 정보는 추후 추천 정보에 반영됩니다.
        </div>
      </section>
      <section className="flex flex-col mt-4">
        <input
          className="border-2 p-4 w-full rounded-2xl"
          placeholder="사는 지역 검색하기"
          onFocus={handleInputFocus}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {showDaumPostcode && (
          <DaumPostcode onComplete={completeHandler} theme={themeObj} />
        )}
        {address === "" && (
          <button
            className="text-right p-2 mt-2 font-extralight"
            onClick={reloadHandler}
          >
            주소 다시 검색하기
          </button>
        )}
        <Button text="오늘의 시작하기" href="/location" />
      </section>
    </main>
  );
}
