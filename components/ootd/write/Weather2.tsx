import { IoIosArrowForward } from "react-icons/io";
export default function Weather2() {
  return (
    <section className="w-full relative flex items-center justify-center">
      {" "}
      <h1 className="absolute top-8 left-12 font-bold">
        이 날 날씨는 어땠나요?
      </h1>
      <div className="flex w-5/6 mt-20">
        <div className="border-2 flex flex-col items-center p-3 w-full rounded-2xl mr-0.5">
          <span className="text-xl font-thin mb-2">온도</span>
          <span className="text-[40px] font-bold">20</span>
        </div>
        <div className="border-2 flex flex-col items-center p-3 w-full rounded-2xl ml-0.5">
          <span className="text-xl font-thin mb-2">습도</span>
          <span className="text-[40px] font-bold">20</span>
        </div>
        {/* <button className="flex absolute bottom-0 right-0 mb-2 mr-2 text-sm hover:text-red-400">
        수정하기
        <IoIosArrowForward className="m-[3px]" />
      </button> */}
      </div>
    </section>
  );
}
