"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Weather2 from "@/components/ootd/Weather2";
import Header from "@/components/ootd/write/HeaderWrite";
import WriteOotd from "@/components/ootd/WriteOotd";
export default function OotdWrite() {
  const [uploadImgUrl, setUploadImgUrl] = useState("");

  const onchangeImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const uploadFile = files[0];
      const reader = new FileReader();
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
      <section className="m-4 flex flex-col">
        {uploadImgUrl && (
          <Image
            className="rounded-3xl mb-4"
            src={uploadImgUrl}
            alt="user-image"
            width={400}
            height={700}
          />
        )}
        <input type="file" accept="image/*" onChange={onchangeImageUpload} />
      </section>

      <WriteOotd />

      <Weather2 />
    </main>
  );
}
