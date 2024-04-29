import { GoPencil } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
export default function OotdHeader() {
  return (
    <section className="flex p-6 w-full justify-between items-center relative">
      <div className="grid grid-cols-4 items-center relative">
        <span className="text-[40px] mr-8 font-bold">
          20
          <span className="text-sm absolute top-4">{`\u00b0C`}</span>
        </span>

        <span className="text-[40px] mr-4 font-bold">
          70<span className="text-sm absolute top-4">%</span>
        </span>
        <IoIosArrowDown className="text-[20px] cursor-pointer" />
      </div>
      <div className="flex">
        <GoPencil className="mr-4" size={22} />
      </div>
    </section>
  );
}
