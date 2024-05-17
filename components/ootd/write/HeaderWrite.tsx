"use client";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
// import { uploadImageToServer } from "@/components/hook/uplodImg";
import axios from "axios";
interface HeaderProps {
  uploadFile: File | null;
  text: string;
  onClick: () => void;
}
export default function Header({ uploadFile, text, onClick }: HeaderProps) {
  // const handleClick = () => {
  //   if (uploadFile) {
  //     const ootdData = {
  //       // ootdId: 0,
  //       review: "string",
  //       temperature: "string",
  //       humidity: "string",
  //       satisfaction: "Y",
  //     };
  //     uploadImageToServer(uploadFile, ootdData);
  //   } else {
  //     console.log("파일값이 Null입니다.");
  //   }
  // };
  return (
    <section className="flex items-center justify-between p-6 w-full backdrop-blur-[1px]">
      <Link href="/ootd">
        <IoIosArrowBack />
      </Link>
      <span className="text-gray-600 text-[20px] font-thin">OOTD 업로드</span>

      <button onClick={onClick}>Post</button>
    </section>
  );
}
