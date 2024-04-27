import Header from "@/components/ootd/Header";
import UserComponent from "@/components/ootd/UserComponent";
import Weather from "@/components/ootd/Weather";
import { GoPencil } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
export default function Ootd() {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="flex items-center justify-between p-6 w-full backdrop-blur-[1px]">
        <span className="text-gray-700 text-[20px] font-bold">날씨 OOTD</span>
        <span className="flex">
          <GoPencil className="mr-4" size={22} />
          <IoIosSearch size={24} />
        </span>
      </section>
      <Weather />
      <UserComponent />
    </main>
  );
}
