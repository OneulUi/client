"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Weather2 from "@/components/ootd/write/Weather2";
import Header from "@/components/ootd/write/HeaderWrite";
import WriteOotd from "@/components/ootd/WriteOotd";
import defaultImage from "../../../assets/default.png";
import SatisfyOotd from "@/components/ootd/write/SatisfyOotd";
export default function OotdWrite() {
  const [uploadImgUrl, setUploadImgUrl] = useState<string>("");
  const [defaultImg, setDefaultImg] = useState(defaultImage);

  const onchangeImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const uploadFile = files[0];
      const reader = new FileReader();
      //이 부분 이미지 업로드
      reader.readAsDataURL(uploadFile);
      reader.onloadend = () => {
        if (reader.result) {
          setUploadImgUrl(reader.result.toString());
        }
      };
    } else {
      console.log("파일이 선택되지 않았습니다.");
    }
  };

  return (
    <main className="w-full flex flex-col items-center">
      <Header />
      <section className="m-4 flex flex-col items-center">
        {uploadImgUrl ? (
          <Image
            className="rounded-3xl mb-4"
            src={uploadImgUrl}
            alt="user-image"
            width={400}
            height={700}
          />
        ) : (
          <Image
            className="rounded-3xl mb-4"
            src={defaultImage}
            alt="default-image"
            width={400}
            height={700}
          />
        )}

        {defaultImage ? (
          <label className="block">
            <input
              type="file"
              accept="image/*"
              onChange={onchangeImageUpload}
              className="hidden"
            />
            <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer inline-block">
              Upload Image
            </div>
          </label>
        ) : null}
      </section>

      <WriteOotd />
      <Weather2 />
      <SatisfyOotd />
    </main>
  );
}
