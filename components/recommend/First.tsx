import Image from "next/image";

export default function First() {
  return (
    <div className="ml-5 my-10">
      <div className="flex flex-col mb-3">
        <span className="text-gray-600 text-2xl ">28도 이상의</span>
        <span className="text-gray-600 text-2xl ">필수 옷차림은</span>
        <span className="font-bold text-3xl">얇은 반팔이에요!</span>
      </div>
      <div className="flex flex-col mb-3">
        <span className="text-gray-400 text-sm">매우 더운 온도이니</span>
        <span className="text-gray-400 text-sm">
          얇고 가벼운 여름 옷차림을 하세요!
        </span>
      </div>
      <div className="flex gap-1 mb-20">
        <div className="text-blue-500 border rounded-full border-blue-500 border-solid px-2">
          민소매
        </div>
        <div className="text-blue-500 border rounded-full border-blue-500 border-solid px-2">
          숏팬츠
        </div>
      </div>
      <div className="w-[200px] h-[200px]">
        <Image src="/assets/민소매.png" alt="옷" width={200} height={200} />
      </div>
    </div>
  );
}
