import Image from "next/image";

export default function Eighth() {
  return (
    <div className="flex w-full justify-around items-center">
      <div>
        <Image src="/assets/패딩.png" alt="옷" width={150} height={150} />
      </div>
      <div className="flex flex-col px-2">
        <span className="font-bold text-2xl">~4°C</span>
        <span className="font-semibold">따뜻한 겨울 옷차림을</span>
        <span className="font-semibold mb-3">하세요!</span>
        <div className="flex gap-1">
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            패딩
          </div>
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            두꺼운 코트
          </div>
        </div>
      </div>
    </div>
  );
}
