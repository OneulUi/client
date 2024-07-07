import Image from "next/image";

export default function Seventh() {
  return (
    <div className="flex w-full justify-around items-center">
      <div>
        <Image src="/assets/두꺼운겉옷.png" alt="옷" width={150} height={150} />
      </div>
      <div className="flex flex-col px-2">
        <span className="font-bold text-2xl">5~8°C</span>
        <span className="font-semibold">따뜻한 옷차림을</span>
        <span className="font-semibold mb-3">하세요!</span>
        <div className="flex gap-1">
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            코트
          </div>
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            가죽자켓
          </div>
        </div>
        <div className="flex mt-1">
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            니트+폴리스
          </div>
        </div>
      </div>
    </div>
  );
}
