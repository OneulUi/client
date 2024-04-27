import { IoIosArrowForward } from "react-icons/io";
export default function Weather() {
  return (
    <section className="flex border-2 rounded-2xl p-4 w-5/6 m-4 justify-between items-center relative">
      <div className="flex flex-col m-4 items-center">
        <span className="text-xl font-thin mb-2">현재날씨</span>
        <span className="text-[40px] font-bold">20</span>
      </div>
      <div className="flex mr-[70px]">
        <div className="flex flex-col items-center mr-4">
          <span className="border-none rounded-full p-4 bg-gray-200">40%</span>
          <span className="mt-2">습도</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="border-none rounded-full p-4 bg-gray-200">
            해쨍쨍
          </span>
          <span className="mt-2">날씨</span>
        </div>
      </div>

      <button className="flex absolute bottom-0 right-0 mb-2 mr-2 text-sm hover:text-red-400">
        수정하기
        <IoIosArrowForward className="m-[3px]" />
      </button>
    </section>
  );
}
