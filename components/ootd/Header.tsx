import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
export default function Header() {
  return (
    <section className="flex items-center justify-between p-6 w-full backdrop-blur-[1px]">
      <Link href="/ootd">
        <IoIosArrowBack />
      </Link>
      <span className="text-gray-600 text-[20px] font-thin">ootd 작성하기</span>
      <span>Post</span>
    </section>
  );
}
