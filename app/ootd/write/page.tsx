"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Weather2 from "@/components/ootd/write/Weather2";
import Header from "@/components/ootd/write/HeaderWrite";
import WriteOotd from "@/components/ootd/WriteOotd";
import defaultImage from "../../../assets/default.png";
import SatisfyOotd from "@/components/ootd/write/SatisfyOotd";
// import { uploadImageToServer } from "@/components/hook/uplodImg";
import { MdUploadFile } from "react-icons/md";
import axios from "axios";
import { Axios } from "@/api/axios";
import { useRouter } from "next/navigation";
export default function OotdWrite() {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [satisfaction, setSatisfaction] = useState("Y");
  const [uploadImgUrl, setUploadImgUrl] = useState<string>("");
  // const [defaultImg, setDefaultImg] = useState(defaultImage);
  const [uploadFile, setUploadFile] = useState<Blob | string>("");
  const [review, setReview] = useState<string>("");
  const router = useRouter();
  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(e.target.value);
  };

  const handleHumidityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHumidity(e.target.value);
  };

  const handleSatisfactionClick = (value: string) => {
    setSatisfaction(value);
  };
  const uploadImageToServer = async () => {
    const data = {
      ootd: {
        review,
        temperature,
        humidity,
        satisfaction,
      },
    };
    const formData = new FormData();
    formData.append("image", uploadFile);
    formData.append(
      "ootd",
      new Blob([JSON.stringify(data.ootd)], { type: "application/json" })
    );
    router.push("/ootd/post");
    const accessToken = localStorage.getItem("accessToken");
    console.log(formData);
    return await Axios.post("/ootds", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${accessToken}`,
      },
    });
  };
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
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };
  console.log(uploadFile);

  // const postHandler = async () => {
  //   const data = {
  //     image: uploadImgUrl,
  //     ootd: {
  //       review,
  //       temperature,
  //       humidity,
  //       satisfaction,
  //     },
  //   };
  //   ootd.image = uploadImgUrl;
  //   ootd.ootd.review = review;
  //   ootd.ootd.temperature = temperature;
  //   ootd.ootd.humidity = humidity;
  //   ootd.ootd.satisfaction = satisfaction;
  //   console.log(ootd);
  //   try {
  //     await uploadImageToServer(uploadImgUrl, data);
  //     console.log("이미지 업로드 성공!");
  //   } catch (error) {
  //     console.error("이미지 업로드 실패:", error);
  //   }
  // };
  return (
    <main className="w-full flex flex-col items-center">
      <Header onClick={uploadImageToServer} />
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

      <section className="w-full flex flex-col items-center relative">
        <h1 className="absolute left-12 mb-4 font-semibold">
          OOTD 후기를 작성해주세요
        </h1>
        <textarea
          value={review}
          onChange={handleChange}
          placeholder="글 작성하기"
          className="mt-12 font-thin border-2 rounded-2xl p-4 w-5/6 h-[160px] bg-gray-200 "
        />
      </section>
      <Weather2
        temperature={temperature}
        handleTemperatureChange={handleTemperatureChange}
        handleHumidityChange={handleHumidityChange}
        humidity={humidity}
      />
      <SatisfyOotd handleSatisfactionClick={handleSatisfactionClick} />
    </main>
  );
}
