import { IoIosArrowForward } from "react-icons/io";
export default function Weather2() {
  return (
    <section className="grid grid-cols-2 gap-4 border-2 rounded-2xl p-4 w-5/6 m-4 items-center relative">
      <div className="flex flex-col m-4 items-center">
        <span className="text-xl font-thin mb-2">온도</span>
        <span className="text-[40px] font-bold">20</span>
      </div>
      <div className="flex flex-col m-4 items-center">
        <span className="text-xl font-thin mb-2">습도</span>
        <span className="text-[40px] font-bold">20</span>
      </div>
      {/* <button className="flex absolute bottom-0 right-0 mb-2 mr-2 text-sm hover:text-red-400">
        수정하기
        <IoIosArrowForward className="m-[3px]" />
      </button> */}
    </section>
  );
}
