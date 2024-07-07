import Image from "next/image";

export default function Eighth() {
  return (
    <div className="ml-5 my-10">
      <div className="flex flex-col mb-3">
        <span className="text-gray-600 text-2xl ">4도 이하의</span>
        <span className="text-gray-600 text-2xl ">필수 옷차림은</span>
        <span className="font-bold text-3xl">패딩이에요!</span>
      </div>
      <div className="flex flex-col mb-3">
        <span className="text-gray-400 text-sm">매우 추운 온도이니</span>
        <span className="text-gray-400 text-sm">
          따뜻한 겨울 옷차림을 하세요!
        </span>
      </div>
      <div className="mb-20 flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            패딩
          </div>
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            두꺼운 코트
          </div>
        </div>
        <div className="flex gap-1">
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            히트텍/내복
          </div>
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            목도리,장갑
          </div>
        </div>
      </div>

      <div className="w-[200px] h-[200px]">
        <Image src="/assets/패딩.png" alt="옷" width={200} height={200} />
      </div>
    </div>
  );
}
