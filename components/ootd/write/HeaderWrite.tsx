"use client";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
// import { uploadImageToServer } from "@/components/hook/uplodImg";
import axios from "axios";
interface HeaderProps {
  onClick: () => void;
}
export default function Header({ onClick }: HeaderProps) {
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
