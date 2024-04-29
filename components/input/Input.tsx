import { IoIosSearch } from "react-icons/io";
export default function Input() {
  return (
    <div className="w-full flex justify-center items-center relative">
      <input
        className="border-2 w-5/6 m-4 p-3 rounded-2xl text-sm"
        placeholder="궁금한 날씨를 검색해보세요"
      />
      <IoIosSearch
        size={24}
        className="absolute right-0 mr-[60px] text-gray-500"
      />
    </div>
  );
}
