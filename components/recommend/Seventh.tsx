import Image from "next/image";

export default function Seventh() {
  return (
    <div className="ml-5 my-10">
      <div className="flex flex-col mb-3">
        <span className="text-gray-600 text-2xl ">5~8도 사이의</span>
        <span className="text-gray-600 text-2xl ">필수 옷차림은</span>
        <span className="font-bold text-2xl">두꺼운 겉옷이에요!</span>
      </div>
      <div className="flex flex-col mb-3">
        <span className="text-gray-400 text-sm">추운 온도이니</span>
        <span className="text-gray-400 text-sm">따뜻한 옷차림을 하세요!</span>
      </div>
      <div className="mb-20 flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            코트
          </div>
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            가죽자켓
          </div>
        </div>
        <div className="flex">
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            니트+폴리스
          </div>
        </div>
      </div>

      <div className="w-[200px] h-[200px]">
        <Image src="/assets/두꺼운겉옷.png" alt="옷" width={200} height={200} />
      </div>
    </div>
  );
}
