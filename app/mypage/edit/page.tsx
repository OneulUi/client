"use client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa6";
// import { getAllOotd } from "@/utils/test";
import { useQuery } from "@tanstack/react-query";
import { editInfo, getMyInfo } from "@/components/mypage/api";

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

  const { data, isPending, isError } = useQuery({
    queryKey: ["ootd"],
    queryFn: getMyInfo,
  });
  console.log(data);

  if (isPending) return <div>Loading...</div>;

  if (isError || !data || !data.data) {
    // alert("로그인이 필요합니다.");
    // window.location.href = "/signin";
    return <div>Error loading data</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountNum(e.target.value.length);
  };

  const handleClick = (str: string) => {
    setColor(str);
    localStorage.setItem("color", str);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    editInfo(data);
    window.location.href = "/mypage";
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
            src={data.data.picture}
            width={100}
            height={100}
            alt="Description of the image"
          />
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
          <label htmlFor="introduction" className="font-bold mt-4 mb-1">
            내 소개
          </label>
          <div className="relative">
            <textarea
              id="introduction"
              placeholder="설명하기"
              rows={6}
              maxLength={200}
              {...register("introduction", { onChange: handleChange })}
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
