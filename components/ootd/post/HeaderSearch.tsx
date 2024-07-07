import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
export default function HeaderPost() {
  return (
    <section className="flex flex-col items-between justify-center p-6 w-full relative">
      <Link href="/ootd" className="absolute left-4">
        <IoIosArrowBack />
      </Link>

      <span className="flex justify-end">
        <FaRegHeart size={20} className="text-red-400 mr-4" />
        <CiBookmark size={20} />
      </span>
    </section>
  );
}
