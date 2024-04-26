"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Weather from "@/components/ootd/Weather";
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
    <>
      {uploadImgUrl && (
        <Image src={uploadImgUrl} alt="user-image" width={400} height={400} />
      )}
      <input type="file" accept="image/*" onChange={onchangeImageUpload} />

      <Weather />
    </>
  );
}
