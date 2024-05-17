"use client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa6";
import { getAllOotd } from "@/utils/test";
import { useQuery } from "@tanstack/react-query";

// const colorObj: { [key: string]: string } = {
//   blue: "#6595ff",
//   pink: "#ff607f",
//   yellow: "#fff06b",
//   purple: "#9f64ff",
//   black: "#000000",
// };

export default function Edit() {
  const [countNum, setCountNum] = useState(0);
  const [color, setColor] = useState("#6595ff");
  const { register, handleSubmit } = useForm();

  const { data } = useQuery({ queryKey: ["ootd"], queryFn: getAllOotd });
  console.log(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountNum(e.target.value.length);
  };

  const handleClick = (str: string) => {
    setColor(str);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    // 내 정보에 이름, 소개, 배경색 업데이트하는 로직
  };

  return (
    <div className="w-full">
      <div className="mt-12 flex justify-between items-center px-3">
        <Link href="/mypage">
          <FaChevronLeft />
        </Link>
        <div>프로필 수정하기</div>
        <div className="w-4"></div>
      </div>
      <div
        className={`h-[15vh] bg-[${color}] w-full p-3 relative mt-3 min-h-40`}
      ></div>
      <div className="flex flex-col relative items-center">
        <div className="absolute -top-20 flex flex-col items-center">
          <Image
            className="rounded-full w-36 h-36 border-white border-solid border-2"
            src="data:image/jpeg;base64,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"
            width={100}
            height={100}
            alt="Description of the image"
          />
          <button className="-mt-4 marker:border-white border-solid border-2 shadow-md rounded-full w-12 bg-white px-2 font-semibold">
            Edit
          </button>
        </div>
      </div>
      <div className="p-3 mt-24">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="font-bold mb-1">
            이름
          </label>
          <input
            id="name"
            type="text"
            placeholder="10자 이내"
            maxLength={10}
            {...register("name")}
            className="text-sm p-2 border-solid border border-blue-300 rounded-xl placeholder:text-gray focus:border-blue-500 outline-none"
          />
          <label htmlFor="introduce" className="font-bold mt-4 mb-1">
            내 소개
          </label>
          <div className="relative">
            <textarea
              id="introduce"
              placeholder="설명하기"
              rows={6}
              maxLength={200}
              {...register("introduce", { onChange: handleChange })}
              className="text-sm w-full px-2 pt-2 border-solid border border-blue-300 rounded-xl placeholder:text-gray  focus:border-blue-500 outline-none"
            ></textarea>
            <p className="absolute bottom-3 right-3 text-sm">{countNum}/200</p>
          </div>

          <label className="font-bold mt-4 mb-1">배경 컬러 수정하기</label>
          <div className="flex gap-2">
            <div
              className="w-14 h-14 bg-[#000000] rounded-lg flex items-center justify-center"
              onClick={() => handleClick("#000000")}
            >
              {color === "#000000" ? (
                <FaCheck className="text-white" size={30} />
              ) : null}
            </div>
            <div
              className="w-14 h-14 bg-[#6595ff] rounded-lg flex items-center justify-center"
              onClick={() => handleClick("#6595ff")}
            >
              {color === "#6595ff" ? (
                <FaCheck className="text-white" size={30} />
              ) : null}
            </div>
            <div
              className="w-14 h-14 bg-[#ff607f] rounded-lg flex items-center justify-center"
              onClick={() => handleClick("#ff607f")}
            >
              {color === "#ff607f" ? (
                <FaCheck className="text-white" size={30} />
              ) : null}
            </div>
            <div
              className="w-14 h-14 bg-[#fff06b] rounded-lg flex items-center justify-center"
              onClick={() => handleClick("#fff06b")}
            >
              {color === "#fff06b" ? (
                <FaCheck className="text-white" size={30} />
              ) : null}
            </div>
            <div
              className="w-14 h-14 bg-[#9f64ff] rounded-lg flex items-center justify-center"
              onClick={() => handleClick("#9f64ff")}
            >
              {color === "#9f64ff" ? (
                <FaCheck className="text-white" size={30} />
              ) : null}
            </div>
          </div>
          <input
            type="submit"
            value="수정하기"
            className="w-full mt-3 bg-blue-500 text-white rounded-full py-3 text-sm hover:cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
