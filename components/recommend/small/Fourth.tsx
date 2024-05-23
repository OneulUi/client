import Image from "next/image";

export default function Fourth() {
  return (
    <div className="flex w-full justify-around items-center">
      <div>
        <Image src="/assets/바람막이.png" alt="옷" width={150} height={150} />
      </div>
      <div className="flex flex-col px-2">
        <span className="font-bold text-2xl">17~19°C</span>
        <span className="font-semibold">가벼운 봄 옷차림을</span>
        <span className="font-semibold mb-3">하세요!</span>
        <div className="flex gap-1">
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            후드티
          </div>
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            바람막이
          </div>
        </div>
        <div className="flex mt-1">
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            슬랙스
          </div>
        </div>
      </div>
    </div>
  );
}
