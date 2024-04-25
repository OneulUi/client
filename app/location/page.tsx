"use client";
import Button from "@/components/button/Button";
import DaumPostcode from "react-daum-postcode";
import { Address } from "react-daum-postcode";
import { useState, useRef, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
export default function Location() {
  const [showDaumPostcode, setShowDaumPostcode] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = () => {
    setShowDaumPostcode(true);
  };
  const themeObj = {
    postcodeTextColor: "#FA7142",
    emphTextColor: "#333333",
  };

  const completeHandler = (data: Address) => {
    console.log(data);

    if (address === "") {
      setAddress(data.address);
    }
  };

  const reloadHandler = () => {
    window.location.reload();
    if (inputRef.current) {
      inputRef.current.focus();
    }
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
        <div className="flex items-center relative">
          <input
            className="border-2 p-4 w-full rounded-2xl"
            placeholder="사는 지역 검색하기"
            onFocus={handleInputFocus}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            readOnly={!address}
          />
          {address !== "" && (
            <IoCloseSharp
              className="absolute z-10 right-0 mr-6 cursor-pointer hover:text-red-400"
              onClick={() => {
                setAddress(""), reloadHandler();
              }}
            />
          )}
        </div>

        {showDaumPostcode && (
          <DaumPostcode onComplete={completeHandler} theme={themeObj} />
        )}

        <Button text="오늘의 시작하기" href="/location" />
      </section>
    </main>
  );
}
