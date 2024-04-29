import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
Link;

export default function HeaderSearch() {
  return (
    <section className="flex items-center justify-center p-6 w-full relative">
      <Link href="/ootd" className="absolute left-4">
        <IoIosArrowBack />
      </Link>
      <span className="text-gray-600 text-[20px] font-thin">텍스트 검색</span>
    </section>
  );
}
