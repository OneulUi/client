import Image from "next/image";

export default function Fifth() {
  return (
    <div className="flex w-full justify-around items-center">
      <div>
        <Image src="/assets/두꺼운상의.png" alt="옷" width={150} height={150} />
      </div>
      <div className="flex flex-col px-2">
        <span className="font-bold text-2xl">12~16°C</span>
        <span className="font-semibold mb-3">얇은 겉옷을 챙기세요!</span>
        <div className="flex gap-1">
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            기모후드티
          </div>
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            가디건
          </div>
        </div>
        <div className="flex mt-1">
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            니트/맨투맨
          </div>
        </div>
      </div>
    </div>
  );
}
