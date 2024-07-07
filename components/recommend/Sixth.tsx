import Image from "next/image";

export default function Sixth() {
  return (
    <div className="ml-5 my-10">
      <div className="flex flex-col mb-3">
        <span className="text-gray-600 text-2xl ">9~11도 사이의</span>
        <span className="text-gray-600 text-2xl ">필수 옷차림은</span>
        <span className="font-bold text-3xl">겉옷이에요!</span>
      </div>
      <div className="flex flex-col mb-3">
        <span className="text-gray-400 text-sm">쌀쌀한 온도이니</span>
        <span className="text-gray-400 text-sm">겉옷을 챙겨 주세요!</span>
      </div>
      <div className="mb-20 flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            트렌치코트
          </div>
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            야상
          </div>
        </div>
        <div className="flex">
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            자켓
          </div>
        </div>
      </div>

      <div className="w-[200px] h-[200px]">
        <Image src="/assets/겉옷.png" alt="옷" width={200} height={200} />
      </div>
    </div>
  );
}
