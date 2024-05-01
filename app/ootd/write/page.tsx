"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Weather2 from "@/components/ootd/write/Weather2";
import Header from "@/components/ootd/write/HeaderWrite";
import WriteOotd from "@/components/ootd/WriteOotd";
import defaultImage from "../../../assets/default.png";
import SatisfyOotd from "@/components/ootd/write/SatisfyOotd";
import { uploadImageToServer } from "@/components/hook/uplodImg";
import { MdUploadFile } from "react-icons/md";
export default function OotdWrite() {
  const [uploadImgUrl, setUploadImgUrl] = useState<string>("");
  const [defaultImg, setDefaultImg] = useState(defaultImage);
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const onchangeImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setUploadFile(file);
      const reader = new FileReader();
      //이 부분 이미지 업로드
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        // 이미지를 처리하는 코드
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
      <Header uploadFile={uploadFile} />
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
