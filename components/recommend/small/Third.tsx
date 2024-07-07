import Image from "next/image";

export default function Third() {
  return (
    <div className="flex w-full justify-around items-center">
      <div>
        <Image src="/assets/얇은긴팔.png" alt="옷" width={150} height={150} />
      </div>
      <div className="flex flex-col px-2">
        <span className="font-bold text-2xl">20~22°C</span>
        <span className="font-semibold mb-3">가벼운 옷차림을 하세요!</span>
        <div className="flex gap-1">
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            셔츠
          </div>
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            7부바지
          </div>
        </div>
        <div className="flex mt-1">
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            면바지
          </div>
        </div>
      </div>
    </div>
  );
}
